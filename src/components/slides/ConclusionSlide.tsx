import SlideLayout from "./SlideLayout";

export default function ConclusionSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] via-[hsl(220,15%,10%)] to-[hsl(210,20%,10%)] flex items-center justify-center">
      <div className="text-center max-w-3xl px-16">
        <div className="animate-slide-in">
          <h2 className="font-sans text-[40px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-6">
            Sorular ve Teşekkürler
          </h2>
        </div>

        <div className="animate-slide-in-delay-1">
          <div className="w-20 h-[2px] bg-[hsl(var(--slide-accent))] mx-auto my-8" />
        </div>

        <div className="animate-slide-in-delay-2">
          <p className="text-[24px] text-[hsl(var(--slide-muted))] leading-relaxed mb-8">U may heal together.</p>
          <p className="text-[18px] font-bold text-[hsl(var(--slide-primary))]">Umay</p>
        </div>
      </div>
    </SlideLayout>
  );
}
