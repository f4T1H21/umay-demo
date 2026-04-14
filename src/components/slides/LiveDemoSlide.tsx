import SlideLayout from './SlideLayout';

interface Props {
  onLaunchDemo: () => void;
}

export default function LiveDemoSlide({ onLaunchDemo }: Props) {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] via-[hsl(210,20%,10%)] to-[hsl(220,20%,6%)] flex items-center justify-center">
      <div className="text-center max-w-3xl px-16">
        <div className="animate-slide-in">
          <p className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-primary))] font-semibold mb-4">Demo</p>
          <h2 className="font-sans text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-4">
            Canlı Uygulama Demosu
          </h2>
          <p className="text-[18px] text-[hsl(var(--slide-muted))] mb-3">
            Imago ve Freestyle Terapi Seansları
          </p>
          <p className="text-[16px] text-[hsl(var(--slide-muted))] mb-10">
            Live Session: Ahmet ve Ayşe'nin simüle edilmiş diyaloğu üzerinden sistemin tepkisi.
          </p>
        </div>

        <div className="animate-slide-in-delay-2">
          <button
            onClick={onLaunchDemo}
            className="px-10 py-4 rounded-xl bg-[hsl(var(--slide-primary))] text-white font-semibold text-[18px]
              hover:shadow-[0_0_30px_hsl(210,100%,55%,0.4)] transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white/60" />
              </span>
              Canlı Gözlemciyi Başlat
            </span>
          </button>
        </div>
      </div>
    </SlideLayout>
  );
}
