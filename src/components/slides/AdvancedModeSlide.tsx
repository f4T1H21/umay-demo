import SlideLayout from './SlideLayout';

export default function AdvancedModeSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(30,20%,4%)] via-[hsl(142,15%,6%)] to-[hsl(30,15%,6%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-4">
          <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-sage))] mb-4">İleri Mod</p>
          <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight mb-3">
            Açık Arabuluculuk ve Tetikleyiciler
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl">
            Çiftler geliştikçe destek azalır. Umay açık mikrofona geçer ve sessiz bir 
            <span className="text-[hsl(var(--slide-amber))] font-medium"> Süreç Gözlemcisi</span> olarak çalışır — 
            yalnızca metrikler <span className="font-mono text-[hsl(var(--slide-sage))]">0.85</span> eşiğini aştığında müdahale eder.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="animate-slide-in-delay-1 space-y-4">
            <h3 className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-amber))] font-medium">4 Tetikleyici</h3>
            {[
              { name: 'Döngü', desc: 'Aynı noktanın 3+ kez tekrarlanması', icon: '🔄' },
              { name: 'Kaçırılan Sinyal', desc: 'Duygusal çağrının görmezden gelinmesi', icon: '💧' },
              { name: 'Tırmanma', desc: 'Ses yükselmesi veya toksik ifadeler', icon: '📈' },
              { name: 'Duvar Örme', desc: 'Duygusal geri çekilme veya suskunluk', icon: '🧱' },
            ].map(({ name, desc, icon }) => (
              <div key={name} className="flex items-start gap-4 p-4 rounded-lg bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))]">
                <span className="text-lg mt-0.5">{icon}</span>
                <div>
                  <p className="text-[hsl(var(--slide-cream))] font-semibold text-sm">{name}</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-slide-in-delay-2 flex items-center justify-center">
            <div className="relative w-72 h-72">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                <circle cx="150" cy="150" r="130" stroke="hsl(142,25%,45%)" fill="none" strokeWidth="0.5" opacity="0.15" />
                <circle cx="150" cy="150" r="100" stroke="hsl(142,25%,45%)" fill="none" strokeWidth="0.5" opacity="0.25" />
                <circle cx="150" cy="150" r="70" stroke="hsl(142,25%,45%)" fill="none" strokeWidth="1" opacity="0.35" />
                <circle cx="150" cy="150" r="40" stroke="hsl(35,50%,55%)" fill="hsl(35,50%,55%)" fillOpacity="0.05" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="150" cy="150" r="8" fill="hsl(142,25%,45%)" opacity="0.8" />
                <circle cx="150" cy="150" r="3" fill="hsl(40,30%,90%)" />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <p className="text-[10px] tracking-widest uppercase text-[hsl(var(--muted-foreground))]">
                  %95 sessiz · 0.85'te müdahale
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
