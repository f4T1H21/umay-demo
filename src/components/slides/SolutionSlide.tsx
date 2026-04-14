import SlideLayout from "./SlideLayout";

const items = [
  {
    title: "Bilimsel Temel",
    desc: "Bir Chatbot değil; EFT (Duygu Odaklı Terapi), Gottman Metodu ve Imago gibi kanıta dayalı yöntemleri algoritmik çerçeveye oturtan bir mimari.",
    icon: "🔬",
  },
  {
    title: "Dinamik Metodoloji",
    desc: "İlişki dinamiğine göre ihtiyacı tespit eden ve o an en uygun terapi biçimini (Çatışma anında Imago, derinleşme anında EFT) uygulayan Method Orchestrator.",
    icon: "🎯",
  },
  {
    title: "Proaktif Takip",
    desc: "Sadece kullanıcı geldiğinde değil, push notification'lar ile duygusal check-in'ler yapan ve partner bilgilerini proaktif hatırlatan bir refakatçi.",
    icon: "🔔",
  },
];

export default function SolutionSlide() {
  return (
    <SlideLayout className="bg-gradient-to-br from-[hsl(220,20%,6%)] to-[hsl(210,20%,10%)] flex items-center">
      <div className="w-full px-16 py-12">
        <div className="animate-slide-in mb-10">
          <p className="text-sm tracking-[0.2em] uppercase text-[hsl(var(--slide-primary))] font-semibold mb-3">
            Çözüm
          </p>
          <h2 className="font-sans text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight">
            Klinik Uzmanlık Dijital Arayüzle Buluşuyor
          </h2>
        </div>

        <div className="space-y-5">
          {items.map(({ title, desc, icon }, i) => (
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
