import SlideLayout from './SlideLayout';

export default function ProblemSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(30,20%,4%)] to-[hsl(30,15%,8%)] flex">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center px-16 py-12">
        <div className="animate-slide-in">
          <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-amber))] mb-4">The Problem</p>
          <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight mb-8">
            The Biology<br />of Conflict
          </h2>
        </div>

        <div className="space-y-6 max-w-lg">
          <div className="animate-slide-in-delay-1">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[hsl(var(--slide-sage)/0.15)] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[hsl(var(--slide-sage))] text-sm">⚡</span>
              </div>
              <div>
                <p className="text-[hsl(var(--slide-cream))] font-medium mb-1">Fight-or-Flight Hijack</p>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  When couples argue, their autonomic nervous systems trigger a fight-or-flight response. 
                  We interrupt, escalate, and stop listening.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-delay-2">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[hsl(var(--slide-amber)/0.15)] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[hsl(var(--slide-amber))] text-sm">🤖</span>
              </div>
              <div>
                <p className="text-[hsl(var(--slide-cream))] font-medium mb-1">The AI Gap</p>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  Standard AI chatbots fail at couples therapy because they are passive text boxes. 
                  They give advice, but they don't stop the yelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right visual */}
      <div className="w-[40%] flex items-center justify-center relative">
        <div className="animate-slide-in-delay-3">
          {/* Heartbeat / stress visualization */}
          <svg viewBox="0 0 300 300" className="w-64 h-64 opacity-20">
            <circle cx="150" cy="150" r="120" stroke="hsl(0,60%,50%)" fill="none" strokeWidth="0.5" opacity="0.3" />
            <circle cx="150" cy="150" r="90" stroke="hsl(0,60%,50%)" fill="none" strokeWidth="0.5" opacity="0.5" />
            <circle cx="150" cy="150" r="60" stroke="hsl(0,60%,50%)" fill="none" strokeWidth="1" opacity="0.7" />
            {/* Heartbeat line */}
            <polyline
              points="30,150 100,150 120,100 140,200 160,80 180,150 270,150"
              stroke="hsl(0,70%,55%)"
              fill="none"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute bottom-16 right-16 animate-slide-in-delay-4">
          <p className="text-xs text-[hsl(var(--muted-foreground))] italic max-w-48">
            "Relationships don't fail due to a lack of love — they fail due to human biology."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
