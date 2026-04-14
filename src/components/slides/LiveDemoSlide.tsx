import SlideLayout from './SlideLayout';

interface Props {
  onLaunchDemo: () => void;
}

export default function LiveDemoSlide({ onLaunchDemo }: Props) {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(30,20%,4%)] via-[hsl(142,15%,6%)] to-[hsl(30,20%,4%)] flex items-center justify-center">
      <div className="text-center max-w-2xl px-16">
        <div className="animate-slide-in">
          <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-sage))] mb-6">Live Demonstration</p>
          <h2 className="font-display text-6xl font-bold text-[hsl(var(--slide-cream))] leading-tight mb-6">
            Process Observer
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mb-12 leading-relaxed">
            Watch Umay's AI brain in real time — detecting tripwires, analyzing transcripts, 
            and making intervention decisions as the conversation unfolds.
          </p>
        </div>

        <div className="animate-slide-in-delay-2">
          <button
            onClick={onLaunchDemo}
            className="group relative px-10 py-4 rounded-xl bg-[hsl(var(--slide-sage))] text-[hsl(30,20%,4%)] font-semibold text-lg 
              hover:shadow-[0_0_30px_hsl(142,25%,45%,0.4)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(30,20%,4%)] opacity-40" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[hsl(30,20%,4%,0.6)]" />
              </span>
              Launch Live Observer
            </span>
          </button>
        </div>

        <div className="animate-slide-in-delay-3 mt-8">
          <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono tracking-wider">
            SUPABASE REALTIME · LLM-AS-A-JUDGE · ZERO-LATENCY
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
