import SlideLayout from './SlideLayout';

export default function ConclusionSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(30,20%,4%)] via-[hsl(30,15%,8%)] to-[hsl(142,15%,6%)] flex items-center justify-center">
      <div className="text-center max-w-3xl px-16">
        <div className="animate-slide-in">
          <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight mb-6">
            Conflict is natural.<br />
            <span className="text-[hsl(var(--slide-amber))]">Destruction is a choice.</span>
          </h2>
        </div>

        <div className="animate-slide-in-delay-1">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--slide-sage))] to-transparent mx-auto my-8" />
        </div>

        <div className="animate-slide-in-delay-2">
          <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed mb-12">
            Umay is the AI safe space that protects the core of compassion.
          </p>
        </div>

        <div className="animate-slide-in-delay-3">
          <h1 className="font-display text-7xl font-bold text-[hsl(var(--slide-cream))] mb-4">
            Umay
          </h1>
          <p className="text-lg tracking-[0.15em] text-[hsl(var(--slide-sage))]">
            Protect your connection.
          </p>
        </div>

        <div className="animate-slide-in-delay-4 mt-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[hsl(var(--muted-foreground))]">
            Thank you · Q&A
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
