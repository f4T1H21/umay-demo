import SlideLayout from './SlideLayout';

export default function ArchitectureSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(30,20%,4%)] to-[hsl(30,15%,8%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-amber))] mb-4">Mimari</p>
          <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight">
            Sıfır Gecikme Müdahaleler
          </h2>
        </div>

        <div className="animate-slide-in-delay-1 grid grid-cols-4 gap-4">
          {[
            {
              layer: 'Ön Yüz',
              tech: 'React / Tailwind',
              desc: 'Gerçek zamanlı durum göstergeleriyle bölünmüş ekran bas-konuş arayüzü',
              color: 'var(--slide-sage)',
            },
            {
              layer: 'Ses Hattı',
              tech: 'Web Audio API + Fal.ai',
              desc: 'Web Audio ile desibel izleme, WebSocket ile gerçek zamanlı konuşma-metin dönüşümü',
              color: 'var(--slide-amber)',
            },
            {
              layer: 'Arka Uç',
              tech: 'Supabase + OpenAI',
              desc: 'Gerçek zamanlı veritabanı ve Edge fonksiyonları, <50ms altında durum değişikliği',
              color: 'var(--slide-sage)',
            },
            {
              layer: 'Güvenlik Katmanı',
              tech: 'Yerel Regex',
              desc: 'Sıfır gecikmeli toksik kelime tespiti istemci tarafında çalışır — ağ gecikmesi yok',
              color: 'var(--slide-amber)',
            },
          ].map(({ layer, tech, desc, color }, i) => (
            <div key={layer} className={`animate-slide-in-delay-${i + 1} p-5 rounded-xl bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))] flex flex-col`}>
              <div className="w-full h-1 rounded-full mb-4" style={{ backgroundColor: `hsl(${color})` }} />
              <p className="text-xs tracking-widest uppercase text-[hsl(var(--muted-foreground))] mb-1">{layer}</p>
              <p className="text-[hsl(var(--slide-cream))] font-semibold mb-3 text-sm">{tech}</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed mt-auto">{desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-slide-in-delay-3 mt-10 flex items-center justify-center gap-3 text-xs font-mono text-[hsl(var(--muted-foreground))]">
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-sage)/0.1)] text-[hsl(var(--slide-sage))]">Mikrofon</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-amber)/0.1)] text-[hsl(var(--slide-amber))]">Web Audio</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-sage)/0.1)] text-[hsl(var(--slide-sage))]">STT (Fal.ai)</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-amber)/0.1)] text-[hsl(var(--slide-amber))]">LLM Hakem</span>
          <span>→</span>
          <span className="px-3 py-1.5 rounded bg-[hsl(var(--slide-sage)/0.1)] text-[hsl(var(--slide-sage))]">Durum &lt;50ms</span>
        </div>
      </div>
    </SlideLayout>
  );
}
