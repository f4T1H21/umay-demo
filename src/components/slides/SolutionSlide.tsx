import SlideLayout from './SlideLayout';

export default function SolutionSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(142,20%,6%)] to-[hsl(30,15%,6%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-4">
          <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-sage))] mb-4">The Solution</p>
          <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight mb-3">
            The Digital Guardian
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
            Umay is a clinically-grounded <span className="text-[hsl(var(--slide-amber))] font-medium">Digital State Machine</span> — 
            an uncompromising digital referee that physically locks microphones and enforces clinical boundaries.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="animate-slide-in-delay-1 p-6 rounded-xl bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))]">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-sage)/0.15)] flex items-center justify-center mb-4">
              <span className="text-xl">🛡️</span>
            </div>
            <h3 className="text-[hsl(var(--slide-cream))] font-semibold mb-2">Not a Chatbot</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              Umay doesn't give advice. It physically intervenes — controlling who speaks and when.
            </p>
          </div>

          <div className="animate-slide-in-delay-2 p-6 rounded-xl bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))]">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-amber)/0.15)] flex items-center justify-center mb-4">
              <span className="text-xl">🎙️</span>
            </div>
            <h3 className="text-[hsl(var(--slide-cream))] font-semibold mb-2">Push-To-Talk</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              A strict PTT interface physically locks microphones, enforcing turn-taking at the hardware level.
            </p>
          </div>

          <div className="animate-slide-in-delay-3 p-6 rounded-xl bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))]">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-sage)/0.15)] flex items-center justify-center mb-4">
              <span className="text-xl">🌿</span>
            </div>
            <h3 className="text-[hsl(var(--slide-cream))] font-semibold mb-2">Clinically Grounded</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              Built on Imago Relationship Therapy — the gold standard for structured, empathic dialogue.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
