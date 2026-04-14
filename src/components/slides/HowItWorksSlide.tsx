import SlideLayout from './SlideLayout';

export default function HowItWorksSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(30,20%,4%)] to-[hsl(30,15%,8%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-amber))] mb-4">The MVP</p>
          <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight">
            Imago Mode
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="animate-slide-in-delay-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--slide-sage))] flex items-center justify-center text-[hsl(30,20%,4%)] font-bold text-sm">1</div>
              <h3 className="text-[hsl(var(--slide-cream))] font-semibold text-lg">The Mic-Lock</h3>
            </div>
            <div className="ml-[52px]">
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                A 50/50 split-screen UI forces strict turn-taking. Partner B <span className="text-[hsl(var(--slide-amber))]">cannot speak</span> until Partner A finishes.
              </p>
              {/* Mini UI mockup */}
              <div className="flex rounded-lg overflow-hidden border border-[hsl(var(--border))]">
                <div className="flex-1 bg-[hsl(var(--slide-sage)/0.1)] p-3 flex flex-col items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--slide-sage)/0.3)]" />
                  <span className="text-[10px] text-[hsl(var(--slide-sage))]">SPEAKING</span>
                </div>
                <div className="w-px bg-[hsl(var(--border))]" />
                <div className="flex-1 bg-[hsl(var(--slide-warm))] p-3 flex flex-col items-center gap-2 opacity-40">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--muted-foreground)/0.2)]" />
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))]">LOCKED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="animate-slide-in-delay-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--slide-amber))] flex items-center justify-center text-[hsl(30,20%,4%)] font-bold text-sm">2</div>
              <h3 className="text-[hsl(var(--slide-cream))] font-semibold text-lg">The Imago Triad</h3>
            </div>
            <div className="ml-[52px]">
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                Partner B must pass three LLM-graded checkpoints before making their counter-argument.
              </p>
              <div className="space-y-2">
                {['Mirroring', 'Validation', 'Empathy'].map((step, i) => (
                  <div key={step} className="flex items-center gap-2 text-xs">
                    <div className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono
                      ${i < 2 ? 'bg-[hsl(var(--slide-sage)/0.2)] text-[hsl(var(--slide-sage))]' : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]'}`}>
                      {i < 2 ? '✓' : (i + 1)}
                    </div>
                    <span className={i < 2 ? 'text-[hsl(var(--slide-cream))]' : 'text-[hsl(var(--muted-foreground))]'}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="animate-slide-in-delay-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[hsl(0,60%,50%)] flex items-center justify-center text-white font-bold text-sm">3</div>
              <h3 className="text-[hsl(var(--slide-cream))] font-semibold text-lg">3-Strike Protocol</h3>
            </div>
            <div className="ml-[52px]">
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                Zero-latency local regex catches toxic words instantly — warning, then cutting the mic.
              </p>
              <div className="space-y-2">
                {[
                  { label: 'Strike 1', desc: 'Warning flash', color: 'hsl(35,50%,55%)' },
                  { label: 'Strike 2', desc: 'Mute 5 seconds', color: 'hsl(25,60%,50%)' },
                  { label: 'Strike 3', desc: 'Mic cut', color: 'hsl(0,60%,50%)' },
                ].map(({ label, desc, color }) => (
                  <div key={label} className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                    <span className="text-[hsl(var(--slide-cream))] font-medium">{label}</span>
                    <span className="text-[hsl(var(--muted-foreground))]">— {desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
