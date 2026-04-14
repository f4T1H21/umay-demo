import { supabase } from '@/lib/supabase';
import { useState } from 'react';

const SPEAKERS = ['Partner A', 'Partner B', 'System'] as const;
const TRIPWIRES = ['Loop', 'Missed Drop', 'Escalation', 'Stonewall'] as const;
const DECISIONS = ['observe', 'observe', 'observe', 'interrupt'] as const;

const TRANSCRIPTS = [
  "I feel like we keep going in circles about this.",
  "You never listen to what I'm actually saying.",
  "I just shut down when you raise your voice.",
  "Can we take a step back and breathe for a moment?",
  "It's always my fault, isn't it?",
  "I don't even know why I bother anymore.",
  "That's not what I meant and you know it.",
  "I need you to hear me right now.",
];

const SCRATCHPADS = [
  "Detecting repetitive framing pattern. Partner A has used 'always/never' language 3x in last 2 minutes. Confidence rising. Monitoring for escalation threshold.",
  "Emotional drop detected — Partner B's affect shifted from engaged to withdrawn. Checking stonewall indicators. Heart rate proxy suggests disengagement.",
  "Escalation vector identified. Volume proxy increased 40%. Cross-referencing with historical session data. Action threshold approaching.",
  "Loop pattern confirmed. Both partners recycling the same argument structure from T-4 minutes. Intervention may be warranted to break cycle.",
];

let callIndex = 0;

export default function SimulateButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const i = callIndex++ % 4;
    const speaker = SPEAKERS[i % SPEAKERS.length];
    const tripwire = TRIPWIRES[i];
    const decision = DECISIONS[i];
    const confidence = decision === 'interrupt' ? 0.85 + Math.random() * 0.15 : 0.3 + Math.random() * 0.5;

    await supabase.from('therapy_logs').insert({
      session_id: 'demo-session-001',
      speaker,
      raw_transcript: TRANSCRIPTS[Math.floor(Math.random() * TRANSCRIPTS.length)],
      ai_analysis: {
        confidence_score: parseFloat(confidence.toFixed(2)),
        detected_tripwire: tripwire,
        action_decision: decision,
        chain_of_thought_scratchpad: SCRATCHPADS[i],
      },
    });

    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="font-mono text-[10px] px-2 py-1 rounded bg-zinc-800 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700 transition-colors disabled:opacity-40"
    >
      {loading ? '...' : '⚡ Simulate'}
    </button>
  );
}
