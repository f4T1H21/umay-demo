import SlideLayout from './SlideLayout';

const rows = [
  { feature: 'Maliyet', traditional: 'Çok Yüksek', standard: 'Orta', ours: 'Düşük' },
  { feature: 'Erişim', traditional: 'Randevulu', standard: 'Statik İçerik', ours: '7/24 Canlı / Proaktif' },
  { feature: 'Veri Analizi', traditional: 'Terapistin Notları', standard: 'Yok', ours: 'Kümülatif / Derin Analiz' },
  { feature: 'Metot Çeşitliliği', traditional: 'Tekil', standard: 'Sınırlı', ours: 'Dinamik Orchestrator' },
];

export default function CompetitionSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] to-[hsl(210,20%,10%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-primary))] font-semibold mb-3">Rekabet</p>
          <h2 className="font-sans text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight">
            Rekabet Analizi
          </h2>
        </div>

        <div className="animate-slide-in-delay-1 overflow-hidden rounded-xl border border-[hsl(var(--border))]">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[hsl(var(--slide-card))]">
                <th className="p-4 text-[16px] font-semibold text-[hsl(var(--slide-muted))]">Özellik</th>
                <th className="p-4 text-[16px] font-semibold text-[hsl(var(--slide-muted))]">Geleneksel Terapi</th>
                <th className="p-4 text-[16px] font-semibold text-[hsl(var(--slide-muted))]">Standart Uygulamalar</th>
                <th className="p-4 text-[16px] font-bold text-[hsl(var(--slide-primary))]">Bizim Çözümümüz</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, traditional, standard, ours }, i) => (
                <tr key={feature} className={i % 2 === 0 ? 'bg-[hsl(220,15%,8%)]' : 'bg-[hsl(var(--slide-card))]'}>
                  <td className="p-4 text-[16px] font-semibold text-[hsl(var(--slide-text))]">{feature}</td>
                  <td className="p-4 text-[16px] text-[hsl(var(--slide-muted))]">{traditional}</td>
                  <td className="p-4 text-[16px] text-[hsl(var(--slide-muted))]">{standard}</td>
                  <td className="p-4 text-[16px] font-semibold text-[hsl(var(--slide-accent))]">{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideLayout>
  );
}
