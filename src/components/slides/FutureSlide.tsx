import SlideLayout from './SlideLayout';

const roadmap = [
  {
    title: 'Method Orchestrator',
    desc: 'İlişki durumuna göre otomatik terapi rotası tasarlayan sistemin yayına alınması.',
    icon: '🧭',
  },
  {
    title: 'Giyilebilir Cihaz Entegrasyonu',
    desc: 'Apple Watch/Oura verileriyle stres ve HRV takibi yaparak, "taşma" (flooding) anlarını tartışma büyümeden tespit etme.',
    icon: '⌚',
  },
  {
    title: 'Partner Dijital İkizi',
    desc: 'Veritabanındaki bilgilere dayanarak, partnerin yokluğunda onunla prova yapmayı veya ona nasıl yaklaşılması gerektiğini danışmayı sağlayan simülasyon modeli.',
    icon: '🪞',
  },
];

export default function FutureSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] to-[hsl(220,15%,10%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-accent))] font-semibold mb-3">Roadmap</p>
          <h2 className="font-sans text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight">
            Gelecek 6 Ay
          </h2>
        </div>

        <div className="space-y-5">
          {roadmap.map(({ title, desc, icon }, i) => (
            <div
              key={title}
              className={`animate-slide-in-delay-${i + 1} flex items-start gap-5 p-5 rounded-xl bg-[hsl(var(--slide-card))] border border-[hsl(var(--border))]`}
            >
              <span className="text-2xl mt-0.5">{icon}</span>
              <div>
                <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-1">{title}</p>
                <p className="text-[16px] text-[hsl(var(--slide-muted))] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
