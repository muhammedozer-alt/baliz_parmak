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

## Cevap anahtarı (cevap kayıtları Whisper ile dinlendi, 22.11.2026)
| Deneme | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Coğrafya 1 | C | B | D | D | D | C | A | D | B | C |
| Genel Kültür 1 | B | C | B | C | B | B | C | B | B | B |
| Genel Kültür 2 | B | D | B | A | B | C | E | C | C | B |
| Matematik 1 | B | B | C | C | E | C | B | B | B | C |
| Matematik 2 | B | C | D | D | C | C | C | D | D | C |
| Tarih 1 | B | B | C | C | A | B | C | C | A | B |
| Tarih 2 | B | C | C | A | B | C | A | C | B | B |
| Türkçe 1 | C | D | B | E | A | E | B | D | E | D |

- GK1 S9: Kulüp kararıyla B (verilen cevap). Not: soru Everest'i soruyor, Himalaya C şıkkında.
- Mat2 S6: C — kullanıcı kaydı dinleyip teyit etti.
- Tarih 1 soru kayıtlarında okunan soru numaraları 1 kayık (2. dosya "Soru 3" diyor).
- Sitedeki eski .aac kayıtları farklı sorular; mevcut cevapları (C,E,C / E,D,C,A,E / C,E,B,E,A) kayıtlarla doğrulandı. Kullanıcı isteğiyle listeden kaldırıldı (dosyalar `public/audio/<ders>/` altında duruyor).

## Açık sorular
1. **Cevap anahtarı:** Sesleri dinleyemiyorum; her denemenin 10 sorusunun doğru şıkkı (A–E) lazım. Mevcut kodda yalnızca Coğrafya 1 (ilk 3), Genel Kültür 1 ve Matematik 1 (ilk 5) var.
2. **Ana sayfa "Biz Kimiz"** mesajı WhatsApp'ta kesik ("Devamını okuyun"). Tam metni yapıştırabilir misin? Yoksa Hakkımızda'daki yeni Biz Kimiz + Vizyon/Misyon metnini ana sayfada da kullanayım mı?
3. **Drive'daki görsel** elimde yok — dosyayı `src/assets/` altına koyarsan logo yerine onu koyarım.
4. ~~**Anıtkabir görseli**~~ — hiçbir soruya ait değil; WhatsApp'taki "görsel drive'da" bu. Ana sayfa Biz Kimiz'de logonun yerine kondu (22.11.2026).
5. `.ogg` dosyaları eski iPhone Safari'de çalışmayabilir; bilgisayarda ffmpeg yok, şimdilik olduğu gibi koyacağım.

## Doğrulama
- `npm run build` + tarayıcıda Ana Sayfa, Hakkımızda, Kütüphane, Denemeler sayfaları

---

# Kulüp cevabı (22.11.2026, 19:46–20:47)

## Hemen yapılabilir
- [x] **Hakkımızda = Ana Sayfa:** Biz Kimiz kısmında ana sayfadaki kısa metin (2 paragraf) ve ana sayfadaki Vizyon/Misyon kullanılacak. Uzun `BizKimizText` ve Hakkımızda'ya özel Vizyon/Misyon kaldırılacak. "Bizi Tanıyın" zaten `/hakkimizda`'ya gidiyor; ayrı bir sayfa yok.
- [x] **Kulüp adı her yerde "BALiz Parmak":** BalİZ / BALİZ geçen her yer değişecek: başlık, alt bilgi, Hakkımızda, Yönetim, SSS, KVKK, Sözleşme, Kütüphane ("BALİZ Hayali" → "BALiz Hayali"), duyurular, alt metinler.
  - Büyük harfli logo yazısı "BALİZ PARMAK KULÜBÜ" → "BALiz PARMAK KULÜBÜ"
  - Dergi adı **"BalİZ Macera"** kulüp adı değil, aynen kalacak
  - `tasks/lessons.md` ve hafızadaki "dokunma" kuralı bu isteğe göre güncellenecek
- [x] **Alt bilgi sloganı** → "Çukurova Üniversitesi'nde İZ bırakan, birlikte değer üreten öğrenci kulübü."
- [x] **Yönetim kadrosu** (`managementData.ts`): diğerleri silinecek, sadece şu 11 kişi kalacak:
  1. Ömer Öksüzaşıkı (Başkan)
  2. Umut Çabuk (Başkan Yardımcısı)
  3. Fatma Zeynep Akçalı (Başkan Yardımcısı)
  4. Furkan Selim Gönç (İdari İşler Sorumlusu)
  5. Kardelen Küsgün (Sayman)
  6. Işıl Kartal (Sponsorluk)
  7. Cemre Fırıncıoğulları (Sosyal Medya)
  8. Rümeysa Gülistan Altay (Organizasyon)
  9. Büşra Yeşilyurt (Yazman)
  10. Mert Benli (Denetim Kurulu Üyesi)
  11. Necati Dilek (Denetim Kurulu Üyesi)
  - Görseli olmayanlarda baş harf gösterilecek.
  - Mevcut LinkedIn adresleri olanlarda korunacak.
- [x] **Anıtkabir duyurusu:** "BALiz Parmak Kulübü'nden 1. Yılında Anıtkabir'e Anlamlı Ziyaret", metin harfi harfine ve `anitkabir.jpeg` ile.
- [x] Biz Kimiz'deki Anıtkabir görseli yerinde kalacak.
- [x] E-posta (`balparmakkulubu@gmail.com`) doğru, değişmeyecek.

## Bekleyen (kulüpten / Drive'dan)
- [x] **Drive görselleri:** yönetim fotoğrafları (Ömer, Umut, Furkan, Kardelen, Mert Benli, Necati) ve yeni duyuru görselleri. Drive'a erişimim yok; dosyalar `public/images/` altına indirilmeli.
- [ ] **Yeni duyurular:** metinleri ve görselleriyle gelecek.
- [ ] **Ses kayıtları:** Tarih denemesi dahil bu akşam yeniden kaydedilecek. Gelince Whisper ile tekrar dinlenip cevap anahtarı güncellenecek.

- 23.11.2026 zip'i: 6 yönetim + 11 duyuru görseli eklendi; ses dosyaları önceki zip ile birebir aynı (yeni kayıt yok).

## Açık soru
- **Anıtkabir duyurusu sabitlensin mi?** 19:46 mesajında "en üstte sabit dursun" deniyor, 19:48 mesajında "başta durmasın" deniyor. Şimdilik sabitleme yok; en yeni tarihli olduğu için zaten en üstte.
