import type { TherapyLog } from '@/lib/supabase';

const TRIPWIRES = ['Loop', 'Missed Drop', 'Escalation', 'Stonewall'] as const;

interface Props {
  latestLog: TherapyLog | null;
}

export default function TripwireMeters({ latestLog }: Props) {
  const analysis = latestLog?.ai_analysis;
  const activeTripwire = analysis?.detected_tripwire ?? '';
  const confidence = analysis?.confidence_score ?? 0;
  const isInterrupt = analysis?.action_decision === 'interrupt';

  return (
    <div className="space-y-3">
      <h2 className="font-sans text-sm uppercase tracking-widest text-zinc-500 mb-3">
        Tripwire Meters
      </h2>
      {TRIPWIRES.map((tw) => {
        const isActive = activeTripwire === tw;
        const value = isActive ? confidence * 100 : 0;
        const danger = isActive && isInterrupt;

        return (
          <div key={tw} className="space-y-1">
            <div className="flex justify-between font-mono text-xs">
              <span className={danger ? 'text-red-400' : 'text-zinc-400'}>{tw}</span>
              <span className={danger ? 'text-red-400' : 'text-zinc-500'}>
                {isActive ? `${Math.round(value)}%` : '—'}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  danger
                    ? 'bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]'
                    : 'bg-emerald-500/80'
                }`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
