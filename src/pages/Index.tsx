import { useState, useEffect, useMemo } from 'react';
import { supabase, type TherapyLog } from '@/lib/supabase';
import Slideshow from '@/components/slides/Slideshow';
import TitleSlide from '@/components/slides/TitleSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import ValuePropSlide from '@/components/slides/ValuePropSlide';
import MarketSlide from '@/components/slides/MarketSlide';
import BusinessModelSlide from '@/components/slides/BusinessModelSlide';
import CompetitionSlide from '@/components/slides/CompetitionSlide';
import FutureSlide from '@/components/slides/FutureSlide';
import TeamSlide from '@/components/slides/TeamSlide';
import LiveDemoSlide from '@/components/slides/LiveDemoSlide';
import ConclusionSlide from '@/components/slides/ConclusionSlide';
import LiveTranscript from '@/components/LiveTranscript';
import TripwireMeters from '@/components/TripwireMeters';
import JsonTerminal from '@/components/JsonTerminal';
import SimulateButton from '@/components/SimulateButton';

type View = 'slideshow' | 'observer';

function parseInitialState(): { view: View; sessionId: string | null } {
  const params = new URLSearchParams(window.location.search);
  const viewParam = params.get('view');
  const sessionId = params.get('session_id')?.trim() || null;

  if (viewParam === 'observer' || sessionId) {
    return { view: 'observer', sessionId };
  }

  return { view: 'slideshow', sessionId };
}

export default function Index() {
  const initialState = useMemo(() => parseInitialState(), []);
  const [view, setView] = useState<View>(initialState.view);
  const [sessionId] = useState<string | null>(initialState.sessionId);
  const [logs, setLogs] = useState<TherapyLog[]>([]);

  useEffect(() => {
    let cancelled = false;

    let query = supabase
      .from('therapy_logs')
      .select('*')
      .order('created_at', { ascending: true });

    if (sessionId) {
      query = query.eq('session_id', sessionId);
    }

    query.then(({ data }) => {
      if (!cancelled && data) {
        setLogs(data as TherapyLog[]);
      }
    });

    const channel = supabase.channel(
      sessionId ? `therapy_logs_realtime_${sessionId}` : 'therapy_logs_realtime_all'
    );

    const eventFilter = sessionId
      ? {
          event: 'INSERT' as const,
          schema: 'public',
          table: 'therapy_logs',
          filter: `session_id=eq.${sessionId}`,
        }
      : {
          event: 'INSERT' as const,
          schema: 'public',
          table: 'therapy_logs',
        };

    channel
      .on('postgres_changes', eventFilter, (payload) => {
        setLogs((prev) => {
          const next = payload.new as TherapyLog;
          if (prev.some((log) => log.id === next.id)) {
            return prev;
          }
          return [...prev, next];
        });
      })
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const transcriptLogs = useMemo(() => {
    return logs.filter((log) => {
      const eventType = log.ai_analysis?.event_type;
      if (!eventType) return true;
      return eventType === 'turn_final';
    });
  }, [logs]);

  const analysisLogs = useMemo(() => {
    return logs.filter((log) => {
      const eventType = log.ai_analysis?.event_type;
      if (!eventType) return true;
      return eventType === 'analysis_tick' || eventType === 'turn_final';
    });
  }, [logs]);

  const latestAnalysisLog = useMemo(() => {
    return (
      [...analysisLogs]
        .reverse()
        .find((log) => {
          const analysis = log.ai_analysis;
          return (
            typeof analysis?.confidence_score === 'number' ||
            typeof analysis?.detected_tripwire === 'string'
          );
        }) ?? null
    );
  }, [analysisLogs]);

  if (view === 'observer') {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setView('slideshow')}
              className="font-mono text-[10px] px-2 py-1 rounded bg-zinc-800 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700 transition-colors mr-3"
            >
              ← Slaytlar
            </button>
            <h1 className="font-sans text-lg font-semibold tracking-tight">
              Umay Canlı Süreç Gözlemcisi
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest">
                Sistem Aktif
              </span>
            </div>
            {sessionId && (
              <span className="font-mono text-[10px] text-zinc-400 truncate">
                oturum: {sessionId}
              </span>
            )}
          </div>
          <SimulateButton sessionId={sessionId} />
        </header>

        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
          <section className="p-6 overflow-hidden flex flex-col border-r border-zinc-800/50">
            <LiveTranscript logs={transcriptLogs} />
          </section>
          <section className="p-6 overflow-hidden flex flex-col gap-6">
            <TripwireMeters latestLog={latestAnalysisLog} />
            <div className="flex-1 min-h-0">
              <JsonTerminal logs={analysisLogs} />
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
      <ValuePropSlide />
      <MarketSlide />
      <BusinessModelSlide />
      <CompetitionSlide />
      <FutureSlide />
      <TeamSlide />
      <LiveDemoSlide onLaunchDemo={() => setView('observer')} />
      <ConclusionSlide />
    </Slideshow>
  );
}
