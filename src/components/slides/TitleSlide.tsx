import SlideLayout from "./SlideLayout";

export default function TitleSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] via-[hsl(220,15%,10%)] to-[hsl(210,30%,10%)] flex items-center justify-center">
      <div className="relative z-10 text-center px-16 max-w-5xl">
        <div className="animate-slide-in">
          <h1 className="font-sans text-[40px] font-bold leading-tight text-[hsl(var(--slide-text))]">
            Bağ Kur, Veriyle İyileş
          </h1>
          <p className="text-[24px] font-semibold text-[hsl(var(--slide-primary))] mt-2">
            Yapay Zeka Destekli Diyadik Müdahale Sistemleri
          </p>
        </div>
        <div className="animate-slide-in-delay-1">
          <div className="w-20 h-[2px] bg-[hsl(var(--slide-accent))] mx-auto my-8" />
        </div>
        <div className="animate-slide-in-delay-2">
          <p className="text-[18px] text-[hsl(var(--slide-muted))] leading-relaxed max-w-3xl mx-auto">
            Uzun süreli ilişkilerde erişilebilir, bilimsel ve veri odaklı dijital terapi mimarisi.
          </p>
        </div>
        <div className="animate-slide-in-delay-3 mt-12">
          <p className="text-sm font-semibold tracking-[0.15em] text-[hsl(var(--slide-accent))] uppercase">
            Umay
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
