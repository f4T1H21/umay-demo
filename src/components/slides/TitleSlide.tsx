import SlideLayout from './SlideLayout';

export default function TitleSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(30,20%,4%)] via-[hsl(30,15%,8%)] to-[hsl(142,20%,8%)] flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-10">
        <svg viewBox="0 0 400 800" className="w-full h-full">
          <path d="M200 800 C200 600 100 500 100 350 C100 200 200 100 200 0" 
                stroke="hsl(142,25%,45%)" fill="none" strokeWidth="1" />
          <path d="M200 800 C200 600 300 500 300 350 C300 200 200 100 200 0" 
                stroke="hsl(35,50%,55%)" fill="none" strokeWidth="1" />
          {/* Branches */}
          <path d="M150 400 C120 380 80 370 60 350" stroke="hsl(142,25%,45%)" fill="none" strokeWidth="0.5" opacity="0.6" />
          <path d="M250 350 C280 330 320 320 340 300" stroke="hsl(142,25%,45%)" fill="none" strokeWidth="0.5" opacity="0.6" />
          <path d="M140 300 C110 280 70 270 50 250" stroke="hsl(35,50%,55%)" fill="none" strokeWidth="0.5" opacity="0.4" />
          <path d="M260 250 C290 230 330 220 350 200" stroke="hsl(35,50%,55%)" fill="none" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-16 max-w-4xl">
        <div className="animate-slide-in">
          <h1 className="font-display text-8xl font-bold tracking-tight text-[hsl(var(--slide-cream))]">
            Umay
          </h1>
        </div>
        <div className="animate-slide-in-delay-1">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--slide-sage))] to-transparent mx-auto my-8" />
        </div>
        <div className="animate-slide-in-delay-2">
          <p className="text-2xl font-light tracking-[0.2em] uppercase text-[hsl(var(--slide-amber))]">
            Protect your connection
          </p>
        </div>
        <div className="animate-slide-in-delay-3 mt-16">
          <p className="text-sm tracking-widest text-[hsl(var(--muted-foreground))] uppercase">
            Named after the Turkic goddess of compassion & protection
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
