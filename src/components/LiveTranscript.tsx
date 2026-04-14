import { useEffect, useRef } from 'react';
import type { TherapyLog } from '@/lib/supabase';

interface Props {
  logs: TherapyLog[];
}

const speakerStyles: Record<string, string> = {
  'Partner A': 'text-white',
  'Partner B': 'text-blue-300',
  'System': 'text-amber-400',
};

export default function LiveTranscript({ logs }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="font-sans text-sm uppercase tracking-widest text-zinc-500 mb-3">
        Live Transcript
      </h2>
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
        {logs.length === 0 && (
          <p className="text-zinc-600 font-mono text-sm italic">Waiting for data…</p>
        )}
        {logs.map((log) => (
          <div key={log.id} className="font-mono text-sm leading-relaxed">
            <span className={`font-bold ${speakerStyles[log.speaker] ?? 'text-zinc-400'}`}>
              [{log.speaker}]
            </span>{' '}
            <span className="text-zinc-300">{log.raw_transcript}</span>
          </div>
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
}
