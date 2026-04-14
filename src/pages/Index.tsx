import { useEffect, useState } from 'react';
import { supabase, type TherapyLog } from '@/lib/supabase';
import LiveTranscript from '@/components/LiveTranscript';
import TripwireMeters from '@/components/TripwireMeters';
import JsonTerminal from '@/components/JsonTerminal';
import SimulateButton from '@/components/SimulateButton';

export default function Index() {
  const [logs, setLogs] = useState<TherapyLog[]>([]);

  useEffect(() => {
    // Fetch existing logs
    supabase
      .from('therapy_logs')
      .select('*')
      .order('created_at', { ascending: true })
      .then(({ data }) => {
        if (data) setLogs(data as TherapyLog[]);
      });

    // Subscribe to new inserts
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

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50">
        <div className="flex items-center gap-3">
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

      {/* Main Grid */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
        {/* Left — Transcript */}
        <section className="p-6 overflow-hidden flex flex-col border-r border-zinc-800/50">
          <LiveTranscript logs={logs} />
        </section>

        {/* Right — Telemetry */}
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
