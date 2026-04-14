import { useState, useEffect } from 'react';
import { supabase, type TherapyLog } from '@/lib/supabase';
import Slideshow from '@/components/slides/Slideshow';
import TitleSlide from '@/components/slides/TitleSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import HowItWorksSlide from '@/components/slides/HowItWorksSlide';
import AdvancedModeSlide from '@/components/slides/AdvancedModeSlide';
import ArchitectureSlide from '@/components/slides/ArchitectureSlide';
import FutureSlide from '@/components/slides/FutureSlide';
import LiveDemoSlide from '@/components/slides/LiveDemoSlide';
import ConclusionSlide from '@/components/slides/ConclusionSlide';
import LiveTranscript from '@/components/LiveTranscript';
import TripwireMeters from '@/components/TripwireMeters';
import JsonTerminal from '@/components/JsonTerminal';
import SimulateButton from '@/components/SimulateButton';

type View = 'slideshow' | 'observer';

export default function Index() {
  const [view, setView] = useState<View>('slideshow');
  const [logs, setLogs] = useState<TherapyLog[]>([]);

  useEffect(() => {
    supabase
      .from('therapy_logs')
      .select('*')
      .order('created_at', { ascending: true })
      .then(({ data }) => {
        if (data) setLogs(data as TherapyLog[]);
      });

    const channel = supabase
      .channel('therapy_logs_realtime')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'therapy_logs' },
        (payload) => {
          setLogs((prev) => [...prev, payload.new as TherapyLog]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const latestLog = logs.length > 0 ? logs[logs.length - 1] : null;

  if (view === 'observer') {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setView('slideshow')}
              className="font-mono text-[10px] px-2 py-1 rounded bg-zinc-800 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700 transition-colors mr-3"
            >
              ← Slides
            </button>
            <h1 className="font-sans text-lg font-semibold tracking-tight">
              Umay Live Process Observer
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest">
                System Online
              </span>
            </div>
          </div>
          <SimulateButton />
        </header>

        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
          <section className="p-6 overflow-hidden flex flex-col border-r border-zinc-800/50">
            <LiveTranscript logs={logs} />
          </section>
          <section className="p-6 overflow-hidden flex flex-col gap-6">
            <TripwireMeters latestLog={latestLog} />
            <div className="flex-1 min-h-0">
              <JsonTerminal logs={logs} />
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <Slideshow onExitPresentation={() => {}}>
      <TitleSlide />
      <ProblemSlide />
      <SolutionSlide />
      <HowItWorksSlide />
      <AdvancedModeSlide />
      <ArchitectureSlide />
      <FutureSlide />
      <LiveDemoSlide onLaunchDemo={() => setView('observer')} />
      <ConclusionSlide />
    </Slideshow>
  );
}
