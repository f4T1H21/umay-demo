import SlideLayout from './SlideLayout';

export default function ArchitectureSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(30,20%,4%)] to-[hsl(30,15%,8%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-amber))] mb-4">Architecture</p>
          <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight">
            Zero-Latency Interventions
          </h2>
        </div>

        <div className="animate-slide-in-delay-1 grid grid-cols-4 gap-4">
          {[
            {
              layer: 'Frontend',
              tech: 'React / Tailwind',
              desc: 'Split-screen PTT interface with real-time state indicators',
              color: 'var(--slide-sage)',
            },
            {
              layer: 'Audio Pipeline',
              tech: 'Web Audio API + Fal.ai',
              desc: 'Decibel monitoring via Web Audio API, WebSocket streaming to Fal.ai for real-time STT',
              color: 'var(--slide-amber)',
            },
            {
              layer: 'Backend',
              tech: 'Supabase + OpenAI',
              desc: 'Realtime Database & Edge Functions running LLM evaluations, pushing state changes in <50ms',
              color: 'var(--slide-sage)',
            },
            {
              layer: 'Safety Layer',
              tech: 'Local Regex',
              desc: 'Zero-latency toxic word detection runs client-side — no network round-trip for 3-Strike Protocol',
              color: 'var(--slide-amber)',
            },
          ].map(({ layer, tech, desc, color }, i) => (
            <div key={layer} className={`animate-slide-in-delay-${i + 1} p-5 rounded-xl bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))] flex flex-col`}>
              <div className="w-full h-1 rounded-full mb-4" style={{ backgroundColor: `hsl(${color})` }} />
              <p className="text-xs tracking-widest uppercase text-[hsl(var(--muted-foreground))] mb-1">{layer}</p>
              <p className="text-[hsl(var(--slide-cream))] font-semibold mb-3 text-sm">{tech}</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mt-auto">{desc}</p>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="animate-slide-in-delay-3 mt-10 flex items-center justify-center gap-3 text-xs font-mono text-[hsl(var(--muted-foreground))]">
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-sage)/0.1)] text-[hsl(var(--slide-sage))]">Mic Input</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-amber)/0.1)] text-[hsl(var(--slide-amber))]">Web Audio</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-sage)/0.1)] text-[hsl(var(--slide-sage))]">STT (Fal.ai)</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-amber)/0.1)] text-[hsl(var(--slide-amber))]">LLM Judge</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-sage)/0.1)] text-[hsl(var(--slide-sage))]">State Push &lt;50ms</span>
        </div>
      </div>
    </SlideLayout>
  );
}
