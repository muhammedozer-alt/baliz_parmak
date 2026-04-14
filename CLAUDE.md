# Baliz Parmak - Erişilebilir Eğitim Platformu

## Proje Özeti
Çukurova Üniversitesi Baliz Parmak Kulübü'nün resmi web sitesi ve erişilebilir eğitim platformu. Site hem kulübün tanıtımı, etkinlikleri ve duyurularını barındırır hem de görme engelli bireylerin sınav hazırlık sürecinde kullanabileceği erişilebilir bir eğitim modülü sunar. KPSS ve YKS sınavlarına yönelik sesli ders ve deneme içerikleri sağlar.

## Tech Stack
- **Frontend:** React 18+ (Vite), TypeScript, React Router v6
- **Backend:** .NET Core 8 (Web API)
- **Database:** PostgreSQL
- **UI/Styling:** Tailwind CSS + headless UI bileşenleri (erişilebilirlik öncelikli)
- **State Management:** Zustand (hafif, basit)
- **Auth:** JWT tabanlı kimlik doğrulama

## Proje Yapısı
```
balizparmak/
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/    # Yeniden kullanılabilir bileşenler
│   │   ├── pages/         # Sayfa bileşenleri
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API çağrıları
│   │   ├── stores/        # Zustand store'ları
│   │   ├── utils/         # Yardımcı fonksiyonlar
│   │   ├── assets/        # Statik dosyalar (ses, görsel)
│   │   └── styles/        # Global stiller
│   └── public/
├── server/          # .NET Core backend (sonra eklenecek)
└── docs/            # Proje dökümanları
```

## Temel Özellikler
1. **Kullanıcı Sistemi:** Login/Register, engelli belgesi yükleme
2. **Sınav Seçimi:** KPSS/YKS hedef belirleme ve doğrulama
3. **Sesli İçerik:** Ders dinleme, hız ayarı (0.75x-1.5x), uyku zamanlayıcısı
4. **Deneme Sistemi:** Sesli sorular, şık seçimi, kaldığı yerden devam
5. **Sesli Arama:** Mikrofon ile site içi arama
6. **Admin Paneli:** Belge onay, içerik yükleme, istatistik
7. **Erişilebilirlik:** WCAG 2.1 uyumlu, aria-labels, focus visible, kontrast 4.5:1+
8. **Yasal:** KVKK aydınlatma metni, kullanım sözleşmesi
9. **Destek:** SSS, hata bildir

## Erişilebilirlik Kuralları (KRİTİK)
- Tüm interaktif elemanlar TAB ile gezilmeli
- Her görsel eleman aria-label içermeli
- Arka plan/metin kontrast oranı minimum 4.5:1
- Focus durumunda belirgin çerçeve görünmeli
- Tüm uyarılar sesli olarak da verilmeli
- Screen reader uyumluluğu zorunlu

## Konvansiyonlar
- Dil: TypeScript (strict mode)
- Component isimlendirme: PascalCase
- Dosya isimlendirme: PascalCase (bileşenler), camelCase (utils/hooks)
- CSS: Tailwind utility-first yaklaşım
- Commit mesajları: Conventional commits (feat:, fix:, chore:)

## Workflow Kuralları
- Kapsamlı görevlerde önce `tasks/todo.md`'ye plan yaz, onay al, sonra başla
- Kullanıcı düzeltmelerinden sonra `tasks/lessons.md`'ye kalıbı kaydet
- Bir görevi "bitti" demeden önce çalıştığını kanıtla (test, log, demo)
