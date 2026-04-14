import SlideLayout from './SlideLayout';

export default function FutureSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(142,15%,5%)] via-[hsl(30,15%,6%)] to-[hsl(30,20%,4%)] flex items-center">
      <div className="w-full px-16 py-12 flex gap-12">
        {/* Sol içerik */}
        <div className="flex-1">
          <div className="animate-slide-in mb-8">
            <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-sage))] mb-4">Gelecek</p>
            <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight">
              Sevgi<br />Algoritması
            </h2>
          </div>

          <div className="animate-slide-in-delay-1 mb-8">
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed max-w-md">
              Doom-scrolling için değil, 
              <span className="text-[hsl(var(--slide-amber))] font-medium"> insan bağlantısı</span> için 
              optimize edilmiş bir algoritma inşa ediyoruz.
            </p>
          </div>

          <div className="animate-slide-in-delay-2 space-y-4">
            {[
              { label: 'Hayat Ağacı Zaman Çizelgesi', desc: 'İlişki sağlığını zaman içinde takip eder' },
              { label: 'Pekiştirmeli Öğrenme', desc: 'Çiftleri en uygun terapi yöntemine yönlendirir' },
              { label: 'Uyarlanabilir Çerçeveler', desc: 'Gottman · EFT · BDT — her çiftin dinamiğine göre eşleştirilir' },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--slide-sage))] mt-2 flex-shrink-0" />
                <div>
                  <p className="text-[hsl(var(--slide-cream))] font-medium text-sm">{label}</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ — Ağaç görseli */}
        <div className="w-[35%] flex items-center justify-center animate-slide-in-delay-3">
          <svg viewBox="0 0 200 400" className="h-80 opacity-30">
            <path d="M100 400 C100 350 95 300 100 250" stroke="hsl(35,40%,45%)" fill="none" strokeWidth="3" />
            <path d="M100 280 C80 260 50 250 30 240" stroke="hsl(142,25%,45%)" fill="none" strokeWidth="2" />
            <path d="M100 280 C120 260 150 250 170 240" stroke="hsl(142,25%,45%)" fill="none" strokeWidth="2" />
            <path d="M100 240 C75 220 45 210 25 195" stroke="hsl(142,25%,50%)" fill="none" strokeWidth="1.5" />
            <path d="M100 240 C125 220 155 210 175 195" stroke="hsl(142,25%,50%)" fill="none" strokeWidth="1.5" />
            <path d="M100 200 C85 180 60 170 40 155" stroke="hsl(142,30%,55%)" fill="none" strokeWidth="1" />
            <path d="M100 200 C115 180 140 170 160 155" stroke="hsl(142,30%,55%)" fill="none" strokeWidth="1" />
            <circle cx="30" cy="235" r="20" fill="hsl(142,25%,35%)" opacity="0.3" />
            <circle cx="170" cy="235" r="20" fill="hsl(142,25%,35%)" opacity="0.3" />
            <circle cx="25" cy="190" r="15" fill="hsl(142,25%,40%)" opacity="0.25" />
            <circle cx="175" cy="190" r="15" fill="hsl(142,25%,40%)" opacity="0.25" />
            <circle cx="40" cy="150" r="18" fill="hsl(142,30%,45%)" opacity="0.2" />
            <circle cx="160" cy="150" r="18" fill="hsl(142,30%,45%)" opacity="0.2" />
            <circle cx="100" cy="130" r="25" fill="hsl(142,25%,40%)" opacity="0.25" />
            <path d="M100 400 C85 410 60 415 40 420" stroke="hsl(35,30%,35%)" fill="none" strokeWidth="1" opacity="0.5" />
            <path d="M100 400 C115 410 140 415 160 420" stroke="hsl(35,30%,35%)" fill="none" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
      </div>
    </SlideLayout>
  );
}
