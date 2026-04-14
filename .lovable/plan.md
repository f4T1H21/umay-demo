

## Plan: Tema Güncellemesi & İçerik Yeniden Yapılandırma

Mevcut 9 slayt → 11 slayta genişletilecek. Tema, okunabilirliğe odaklı olarak yeniden tasarlanacak. Cormorant Garamond (serif) kaldırılıp, tüm fontlar Inter/Roboto sans-serif ile değiştirilecek.

### Tema Değişiklikleri

**`src/index.css`:**
- Google Fonts: Cormorant Garamond kaldır, sadece Inter kalsın (veya Roboto ekle)
- `.slide-content h1, h2` kuralından serif font kaldır — tüm slide içeriği `Inter` sans-serif
- Font boyutları: Başlıklar 32-40px aralığı, alt başlıklar 24px, body text 18-20px
- Arka plan kontrastını artır: daha açık metin renkleri, daha belirgin vurgular

**`src/components/slides/SlideLayout.tsx`:**
- Değişiklik yok, wrapper olarak kalacak

### Slayt İçerik Değişiklikleri (11 slayt)

**1. `TitleSlide.tsx` — Kapak (yeniden yaz)**
- Başlık: "Bağ Kur, Veriyle İyileş: Yapay Zeka Destekli Diyadik Müdahale Sistemleri"
- Tagline: "Uzun süreli ilişkilerde erişilebilir, bilimsel ve veri odaklı dijital terapi mimarisi."
- SVG ağaç kalsın ama daha subtle

**2. `ProblemSlide.tsx` — Problem (yeniden yaz)**
- Başlık: "Ulaşılamaz İlişki Terapisi"
- 3 madde: Maliyet Bariyeri, Erişim Kısıtı, Hafıza Kaybı
- Açıklamalarla birlikte

**3. `SolutionSlide.tsx` — Çözüm I (yeniden yaz)**
- Başlık: "Klinik Uzmanlık Dijital Arayüzle Buluşuyor"
- 3 madde: Bilimsel Temel, Dinamik Metodoloji, Proaktif Takip

**4. Yeni: `ValuePropSlide.tsx` — Çözüm II / Değer Önerisi**
- Başlık: "Neden Biz?"
- 3 madde: Uygun Fiyat (20$/ay), 7/24 Erişilebilirlik, Kümülatif İlişki Belleği

**5. Yeni: `MarketSlide.tsx` — Pazar Analizi**
- Başlık: "Dijital Sağlıkta Yeni Sınır: İlişki Terapisi"
- 3 madde: Pazar Büyüklüğü (12B$), Dijitalleşme Fırsatı, Oyuncu Değerlemeleri

**6. Yeni: `BusinessModelSlide.tsx` — İş Modeli**
- Başlık: "Gelir Kanalları"
- 3 madde: B2C Abonelik (30$/ay), Akademik Veri Servisi, Klinik Test Platformu

**7. Yeni: `CompetitionSlide.tsx` — Rekabet**
- Karşılaştırma tablosu: Geleneksel Terapi vs Standart Uygulamalar vs Bizim Çözümümüz
- Satırlar: Maliyet, Erişim, Veri Analizi, Metot Çeşitliliği

**8. `FutureSlide.tsx` → Roadmap olarak yeniden yaz**
- Başlık: "Gelecek 6 Ay"
- 3 madde: Method Orchestrator, Giyilebilir Cihaz Entegrasyonu, Partner Dijital İkizi

**9. Yeni: `TeamSlide.tsx` — Ekip**
- Ahmet Ekiz, Şefik Efe Altınoluk, Akademik Partner, Danışman bilgileri

**10. `LiveDemoSlide.tsx` — Demo (güncelle)**
- Başlık: "Canlı Uygulama Demosu"
- Alt metin: "Imago ve Freestyle Terapi Seansları"
- "Live Session: Ahmet ve Ayşe'nin simüle edilmiş diyaloğu"
- Canlı Gözlemci butonu

**11. `ConclusionSlide.tsx` — Kapanış (güncelle)**
- "Sorular ve Teşekkürler"

### Kaldırılacak Slaytlar
- `HowItWorksSlide.tsx` (Imago Mode detayları) — içerik Çözüm I'e entegre edildi
- `AdvancedModeSlide.tsx` (Tripwires) — kaldırılacak
- `ArchitectureSlide.tsx` — kaldırılacak

### `src/pages/Index.tsx` Güncelleme
- Eski slayt importlarını kaldır, yeni slaytları ekle
- Slideshow children sırasını 11 slayta güncelle

### Teknik Detaylar
- Tüm slaytlarda `font-display` class'ı kaldırılacak, başlıklar `font-sans font-bold text-[32px]` veya `text-[40px]` olacak
- Body text `text-[18px]` veya `text-[20px]`
- Muted renkleri daha açık yapılacak (okunabilirlik)
- Gradient arka planlar korunacak ama metin kontrastı artırılacak

