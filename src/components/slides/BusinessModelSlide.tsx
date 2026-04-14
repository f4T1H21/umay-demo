import SlideLayout from './SlideLayout';

const channels = [
  {
    title: 'B2C Abonelik',
    desc: 'Çiftler için aylık 30$\'lık premium paket (Tam erişim + Kişiselleştirilmiş analiz).',
    price: '30$/ay',
    icon: '👥',
  },
  {
    title: 'Akademik Veri Servisi',
    desc: 'Klinik araştırmalar için anonimleştirilmiş, yapılandırılmış ilişkisel veri seti sağlama.',
    price: 'B2B',
    icon: '🎓',
  },
  {
    title: 'Klinik Test Platformu',
    desc: 'Yeni psikoterapi metodolojilerinin gerçek dünya senaryolarında test edilmesi için akademisyenlere "sandbox" ortamı sağlama.',
    price: 'B2B',
    icon: '🧪',
  },
];

export default function BusinessModelSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] to-[hsl(220,15%,10%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-accent))] font-semibold mb-3">İş Modeli</p>
          <h2 className="font-sans text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight">
            Gelir Kanalları
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {channels.map(({ title, desc, price, icon }, i) => (
            <div
              key={title}
              className={`animate-slide-in-delay-${i + 1} p-6 rounded-xl bg-[hsl(var(--slide-card))] border border-[hsl(var(--border))] flex flex-col`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{icon}</span>
                <span className="text-[14px] font-bold px-3 py-1 rounded-full bg-[hsl(var(--slide-primary)/0.15)] text-[hsl(var(--slide-primary))]">{price}</span>
              </div>
              <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-2">{title}</p>
              <p className="text-[16px] text-[hsl(var(--slide-muted))] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
