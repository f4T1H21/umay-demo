import { useEffect, useRef, useState } from 'react';
import type { TherapyLog } from '@/lib/supabase';

interface Props {
  logs: TherapyLog[];
}

export default function JsonTerminal({ logs }: Props) {
  const [displayedText, setDisplayedText] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  const queueRef = useRef<string[]>([]);
  const typingRef = useRef(false);

  // Queue new scratchpads
  useEffect(() => {
    if (logs.length === 0) return;
    const latest = logs[logs.length - 1];
    const text = latest.ai_analysis?.chain_of_thought_scratchpad;
    if (text) {
      queueRef.current.push(`\n> [${new Date(latest.created_at).toLocaleTimeString()}]\n${text}\n`);
      processQueue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logs.length]);

  const processQueue = () => {
    if (typingRef.current || queueRef.current.length === 0) return;
    typingRef.current = true;
    const text = queueRef.current.shift()!;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        typingRef.current = false;
        processQueue();
      }
    }, 12);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedText]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="font-sans text-sm uppercase tracking-widest text-zinc-500 mb-3">
        AI Chain-of-Thought
      </h2>
      <div className="flex-1 overflow-y-auto bg-black/60 rounded-lg p-4 font-mono text-xs text-emerald-400 leading-relaxed whitespace-pre-wrap">
        {displayedText || <span className="text-zinc-600 italic">Awaiting AI reasoning…</span>}
        <span className="animate-pulse">▊</span>
        <div ref={endRef} />
      </div>
    </div>
  );
}
