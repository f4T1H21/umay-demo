import SlideLayout from './SlideLayout';

export default function SolutionSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(142,20%,6%)] to-[hsl(30,15%,6%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-4">
          <p className="text-sm tracking-[0.3em] uppercase text-[hsl(var(--slide-sage))] mb-4">Çözüm</p>
          <h2 className="font-display text-5xl font-bold text-[hsl(var(--slide-cream))] leading-tight mb-3">
            Dijital Koruyucu
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
            Umay, klinik temelli bir <span className="text-[hsl(var(--slide-amber))] font-medium">Dijital Durum Makinesi</span>'dir — 
            mikrofonları fiziksel olarak kilitleyen ve klinik sınırları uygulayan ödünsüz bir dijital hakem.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="animate-slide-in-delay-1 p-6 rounded-xl bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))]">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-sage)/0.15)] flex items-center justify-center mb-4">
              <span className="text-xl">🛡️</span>
            </div>
            <h3 className="text-[hsl(var(--slide-cream))] font-semibold mb-2">Sohbet Botu Değil</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              Umay tavsiye vermez. Fiziksel olarak müdahale eder — kimin konuşacağını ve ne zaman konuşacağını kontrol eder.
            </p>
          </div>

          <div className="animate-slide-in-delay-2 p-6 rounded-xl bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))]">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-amber)/0.15)] flex items-center justify-center mb-4">
              <span className="text-xl">🎙️</span>
            </div>
            <h3 className="text-[hsl(var(--slide-cream))] font-semibold mb-2">Bas-Konuş Sistemi</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              Sıkı bir bas-konuş arayüzü, mikrofonları donanım seviyesinde kilitleyerek sırayla konuşmayı zorunlu kılar.
            </p>
          </div>

          <div className="animate-slide-in-delay-3 p-6 rounded-xl bg-[hsl(var(--slide-warm))] border border-[hsl(var(--border))]">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--slide-sage)/0.15)] flex items-center justify-center mb-4">
              <span className="text-xl">🌿</span>
            </div>
            <h3 className="text-[hsl(var(--slide-cream))] font-semibold mb-2">Klinik Temelli</h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              Yapılandırılmış ve empatik diyalog için altın standart olan Imago İlişki Terapisi üzerine inşa edilmiştir.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
