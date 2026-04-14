import {
  TRIPWIRE_IDS,
  type TherapyLog,
  type TripwireId,
} from '@/lib/supabase';

const TRIPWIRE_LABELS: Record<TripwireId, string> = {
  the_loop: 'Loop',
  the_missed_drop: 'Missed Drop',
  the_escalation: 'Escalation',
  the_stonewall: 'Stonewall',
};

const LEGACY_TO_CANONICAL: Record<string, TripwireId> = {
  Loop: 'the_loop',
  'Missed Drop': 'the_missed_drop',
  Escalation: 'the_escalation',
  Stonewall: 'the_stonewall',
};

function normalizeTripwire(value: unknown): TripwireId | null {
  if (typeof value !== 'string') return null;
  if (TRIPWIRE_IDS.includes(value as TripwireId)) return value as TripwireId;
  return LEGACY_TO_CANONICAL[value] ?? null;
}

interface Props {
  latestLog: TherapyLog | null;
}

export default function TripwireMeters({ latestLog }: Props) {
  const analysis = latestLog?.ai_analysis;
  const activeTripwire = normalizeTripwire(analysis?.detected_tripwire);
  const confidence = analysis?.confidence_score ?? 0;
  const isInterrupt = analysis?.action_decision === 'interrupt';

  return (
    <div className="space-y-3">
      <h2 className="font-sans text-sm uppercase tracking-widest text-zinc-500 mb-3">
        Tripwire Meters
      </h2>
      {TRIPWIRE_IDS.map((tripwireId) => {
        const label = TRIPWIRE_LABELS[tripwireId];
        const isActive = activeTripwire === tripwireId;
        const value = isActive ? confidence * 100 : 0;
        const danger = isActive && isInterrupt;

        return (
          <div key={tripwireId} className="space-y-1">
            <div className="flex justify-between font-mono text-xs">
              <span className={danger ? 'text-red-400' : 'text-zinc-400'}>{label}</span>
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
