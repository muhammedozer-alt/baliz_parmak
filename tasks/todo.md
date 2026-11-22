# İçerik Güncellemesi (WhatsApp mesajları + Ozan Bayır ses dosyaları)

## A. Metin / içerik değişiklikleri (hemen yapılabilir)

### Ana Sayfa (`src/pages/Home/HomePage.tsx`)
- [ ] Hero alt başlık → "Çukurova Üniversitesi'nde İZ bırakan, birlikte değer üreten öğrenci kulübü"
- [ ] Hero butonları → **Bizi Tanıyın** · **Yönetim Kadromuz** (`/yonetim`) · **Duyurular**
- [ ] Biz Kimiz? → yeni metin (bkz. Soru 2)
- [ ] Faaliyetlerimiz → yeni giriş paragrafı + 6 madde (Sosyal ve Eğlenceli Etkinlikler, Teknoloji ve Girişimcilik, Eğitim ve Kişisel Gelişim, Çevre ve Sürdürülebilirlik, Hayvan Hakları ve Gönüllülük, Erişilebilirlik ve Toplumsal Fayda) — başlık kalın, açıklama yanında
- [ ] Değerlerimiz → 2 giriş paragrafı + "Temel Değerlerimiz" 7 madde
- [ ] Kitap Önerileri → Küçük Prens (Antoine de Saint-Exupéry), Küçük Kadınlar (Louisa May Alcott), İnsan Ne ile Yaşar? (Lev Tolstoy) — kısa açıklamaları ben yazacağım
- [ ] Rakamlarla → **10+** Yıllık Tecrübe, **5.000+** Aktif Üye; diğer ikisi aynı
- [ ] Network → yeni 4 paragraflık metin (alttaki 3 kart aynı kalır)

### Hakkımızda (`src/pages/About/AboutPage.tsx`)
- [ ] Biz Kimiz? → yeni metin (6 paragraf, 2 italik vurgu)
- [ ] Vizyonumuz / Misyonumuz → yeni metinler
- [ ] Değerlerimiz → 7 kart: İyilik ve Nezaket, Çalışkanlık ve Sürekli Gelişim, Sevgi ve Saygı, Gönüllülük ve Dayanışma, Toplumsal Fayda ve Tatlı İzler, Eşitlik ve Kapsayıcılık, Dürüstlük ve Güvenilirlik

### Kütüphane – Gönüllü Yol Arkadaşlarımız (`src/pages/Library/LibraryPage.tsx`)
- [ ] Yazılımcılar (Muhammed Özer, Mert Çorukoğlu, Beraat Öztorun) proje yöneticilerinin hemen altına taşınacak
- [ ] Büşra Yeşilyurt — Gönüllü Destekçi (sondan bir önce)
- [ ] Fatma Başboğa — Gönüllü Destekçi (en sonda)

## B. Ses dosyaları (zip: 166 dosya)
- Denemeler: Coğrafya 1, Genel Kültür 1–2, Matematik 1–2, Tarih 1–2, Türkçe 1 (her biri 10 soru + 10 cevap)
- Konu anlatımı: Coğrafya, Genel Kültür, Matematik, Tarih, Türkçe
- [ ] Dosyaları `public/audio/<ders>/deneme-<n>/soru-<k>.<ext>` şeklinde temiz isimlerle kopyala
- [ ] `quizData.ts`'i ders → denemeler + konu anlatımı yapısına çevir, Tarih ve Türkçe kartlarını ekle
- [ ] Deneme listesinde "Yakında" yerine gerçek Deneme 2 / Konu Anlatımı bağlantıları
- [ ] Konu anlatımı için basit sesli oynatıcı sayfası (hız ayarı ile)

## Açık sorular
1. **Cevap anahtarı:** Sesleri dinleyemiyorum; her denemenin 10 sorusunun doğru şıkkı (A–E) lazım. Mevcut kodda yalnızca Coğrafya 1 (ilk 3), Genel Kültür 1 ve Matematik 1 (ilk 5) var.
2. **Ana sayfa "Biz Kimiz"** mesajı WhatsApp'ta kesik ("Devamını okuyun"). Tam metni yapıştırabilir misin? Yoksa Hakkımızda'daki yeni Biz Kimiz + Vizyon/Misyon metnini ana sayfada da kullanayım mı?
3. **Drive'daki görsel** elimde yok — dosyayı `src/assets/` altına koyarsan logo yerine onu koyarım.
4. **Anıtkabir görseli** zip'te var — hangi soruya/sayfaya ait?
5. `.ogg` dosyaları eski iPhone Safari'de çalışmayabilir; bilgisayarda ffmpeg yok, şimdilik olduğu gibi koyacağım.

## Doğrulama
- `npm run build` + tarayıcıda Ana Sayfa, Hakkımızda, Kütüphane, Denemeler sayfaları
