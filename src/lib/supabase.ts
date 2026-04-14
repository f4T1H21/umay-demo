import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cemreqtmlhonwrgysnng.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlbXJlcXRtbGhvbndyZ3lzbm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNDQ0NzUsImV4cCI6MjA5MTcyMDQ3NX0.ymoomT_SaA1eQ-voDa54eiKASxVsMpnN24dvShwii24';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface TherapyLog {
  id: string;
  session_id: string;
  speaker: string;
  raw_transcript: string;
  ai_analysis: {
    confidence_score: number;
    detected_tripwire: string;
    action_decision: string;
    chain_of_thought_scratchpad: string;
  };
  created_at: string;
}
