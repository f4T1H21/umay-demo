

## Umay Live Process Observer Dashboard

### Step 1: Create manual Supabase client
Create `src/lib/supabase.ts` with `createClient` pointing at the external Supabase project (URL and anon key provided). Do NOT use the built-in Lovable Cloud client.

### Step 2: Create the database table
Run a migration to create `therapy_logs` with columns: `id` (uuid PK), `session_id` (text), `speaker` (text), `raw_transcript` (text), `ai_analysis` (jsonb), `created_at` (timestamptz). Enable realtime via `ALTER PUBLICATION`. Add RLS policies allowing authenticated users to read/insert — and also allow anon access since this is a hackathon demo with no auth.

### Step 3: Build dashboard components

**Files to create:**
- `src/components/LiveTranscript.tsx` — scrollable transcript feed, color-coded by speaker (white/gray-blue/amber), auto-scroll
- `src/components/TripwireMeters.tsx` — 4 animated progress bars (Loop, Missed Drop, Escalation, Stonewall) with red glow on "interrupt"
- `src/components/JsonTerminal.tsx` — character-by-character typing animation of `chain_of_thought_scratchpad`, auto-scroll
- `src/components/SimulateButton.tsx` — inserts dummy data cycling through speakers/tripwires

**Update `src/pages/Index.tsx`:**
- Full-viewport CSS grid: header + left column (transcript) + right column (telemetry)
- Ultra-dark `bg-zinc-950` theme, `font-mono` for data, `font-sans` for headers
- Header with "Umay Live Process Observer", pulsing green dot, "System Online"
- Supabase realtime subscription on `therapy_logs` INSERT events → append to state
- Wire up all child components

### Technical details
- Realtime subscription via `supabase.channel('therapy_logs').on('postgres_changes', ...)` 
- Typing animation uses `setInterval` stepping through scratchpad characters
- Progress bars use Tailwind transitions + conditional red glow (`shadow-red-500/50`)
- Auto-scroll via `useEffect` + `scrollIntoView` on refs
- Mock data cycles through 4 tripwires and 3 speakers with realistic text

