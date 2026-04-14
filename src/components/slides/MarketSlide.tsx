import SlideLayout from './SlideLayout';

const items = [
  {
    title: 'Pazar Büyüklüğü',
    desc: 'Küresel online terapi pazarı 2026 itibarıyla 12 Milyar $ hacme ulaşırken, "çift odaklı" dijital çözümler hala çok bakir.',
    stat: '$12B',
  },
  {
    title: 'Dijitalleşme Fırsatı',
    desc: 'Mevcut uygulamalar (Lasting, Wysa vb.) bireysel odaklı veya statik içerik sunuyor. Gerçek zamanlı diyadik (çift taraflı) etkileşimde devasa bir boşluk var.',
    stat: 'Boşluk',
  },
  {
    title: 'Oyuncu Değerlemeleri',
    desc: 'Talkspace ve BetterHelp gibi platformların milyar dolarlık değerlemeleri, bu alandaki dijital dönüşüm iştahını kanıtlıyor.',
    stat: '$1B+',
  },
];

export default function MarketSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] to-[hsl(210,20%,10%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-primary))] font-semibold mb-3">Pazar Analizi</p>
          <h2 className="font-sans text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight">
            Dijital Sağlıkta Yeni Sınır: İlişki Terapisi
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {items.map(({ title, desc, stat }, i) => (
            <div
              key={title}
              className={`animate-slide-in-delay-${i + 1} p-6 rounded-xl bg-[hsl(var(--slide-card))] border border-[hsl(var(--border))] flex flex-col`}
            >
              <p className="text-[32px] font-bold text-[hsl(var(--slide-accent))] mb-3">{stat}</p>
              <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-2">{title}</p>
              <p className="text-[16px] text-[hsl(var(--slide-muted))] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
