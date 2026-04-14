import SlideLayout from "./SlideLayout";

const items = [
  {
    title: "Uygun Fiyat",
    desc: "Aylık 30$ abonelik ile profesyonel düzeyde rehberlik.",
    highlight: "30$/ay",
    icon: "✅",
  },
  {
    title: "7/24 Erişilebilirlik",
    desc: "Kriz anında, evde veya yolda; ihtiyaç duyulan her an mobil erişilebilirlik.",
    highlight: "7/24",
    icon: "📱",
  },
  {
    title: "Kümülatif İlişki Belleği",
    desc: "Davranış biçimlerini, kök sorunları ve gelişim grafiğini yıllar boyu saklayan, geçmişe referans vererek bugünü analiz eden akıllı veri deposu.",
    highlight: "Yıllar boyu",
    icon: "♾️",
  },
];

export default function ValuePropSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] to-[hsl(220,15%,10%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-accent))] font-semibold mb-3">
            Değer Önerisi
          </p>
          <h2 className="font-sans text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight">Neden Biz?</h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {items.map(({ title, desc, highlight, icon }, i) => (
            <div
              key={title}
              className={`animate-slide-in-delay-${i + 1} p-6 rounded-xl bg-[hsl(var(--slide-card))] border border-[hsl(var(--border))] flex flex-col`}
            >
              <span className="text-3xl mb-4">{icon}</span>
              <p className="text-[14px] font-bold text-[hsl(var(--slide-primary))] mb-1">{highlight}</p>
              <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-2">{title}</p>
              <p className="text-[16px] text-[hsl(var(--slide-muted))] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
