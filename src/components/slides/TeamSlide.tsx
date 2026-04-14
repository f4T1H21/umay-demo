import SlideLayout from './SlideLayout';

const team = [
  {
    name: 'Ahmet Ekiz',
    role: 'AI Mimari & Geliştirme',
    icon: '👨‍💻',
  },
  {
    name: 'Şefik Efe Altınoluk',
    role: 'Ürün Tasarımı & Strateji',
    icon: '🎨',
  },
  {
    name: 'Sabancı Üniversitesi',
    role: 'Akademik Partner — Psikoloji Laboratuvarı',
    icon: '🏛️',
  },
  {
    name: 'Prof. Dr. Nebi Sümer',
    role: 'Danışman — İlişki ve Bağlanma Psikolojisi Uzmanı',
    icon: '📚',
  },
];

export default function TeamSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] to-[hsl(210,20%,10%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-primary))] font-semibold mb-3">Ekip</p>
          <h2 className="font-sans text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight">
            Arkamızdaki Güç
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {team.map(({ name, role, icon }, i) => (
            <div
              key={name}
              className={`animate-slide-in-delay-${Math.min(i + 1, 4)} flex items-center gap-5 p-6 rounded-xl bg-[hsl(var(--slide-card))] border border-[hsl(var(--border))]`}
            >
              <span className="text-4xl">{icon}</span>
              <div>
                <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))]">{name}</p>
                <p className="text-[16px] text-[hsl(var(--slide-muted))]">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
