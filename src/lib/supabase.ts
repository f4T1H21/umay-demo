import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cemreqtmlhonwrgysnng.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlbXJlcXRtbGhvbndyZ3lzbm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNDQ0NzUsImV4cCI6MjA5MTcyMDQ3NX0.ymoomT_SaA1eQ-voDa54eiKASxVsMpnN24dvShwii24';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const TRIPWIRE_IDS = [
  'the_loop',
  'the_missed_drop',
  'the_escalation',
  'the_stonewall',
] as const;

export type TripwireId = (typeof TRIPWIRE_IDS)[number];

export type TherapyEventType = 'analysis_tick' | 'turn_final';

export interface TherapyLog {
  id: string;
  session_id: string;
  speaker: string;
  raw_transcript: string;
  ai_analysis: {
    event_type?: TherapyEventType;
    chunk_index?: number | null;
    confidence_score?: number;
    detected_tripwire?: TripwireId | null | string;
    action_decision?: 'interrupt' | 'null' | string;
    reasoning_summary?: string;
    chain_of_thought_scratchpad?: string;
    state_key?: string;
    technique_id?: string;
    processed_at?: string;
  };
  created_at: string;
}
