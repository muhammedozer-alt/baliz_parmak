# Dersler

## Kişi isimlerini "yazım hatası" diye düzeltme (22.11.2026)
- **Hata:** Önceki oturumda "Ömer Öksüzaşıkı" yazım hatası sanılıp "Öksüzaşık" yapıldı (ac81d69); doğrusu "Öksüzaşıkı".
- **Kural:** Özel isimleri (kişi, kulüp, ürün) kaynağa göre doğrula: LinkedIn adresi, kullanıcının yazdığı hâl. Tahminle düzeltme; emin değilsen sor.

## "BalİZ Parmak" özel isimdir, yazımına dokunma (22.11.2026)
- **Hata:** Yazım düzeltmesi yaparken "BalİZ Parmak" yazımlarını "BALiz Parmak" diye "tek tipe" çevirdim.
- **Kural:** "BalİZ Parmak" kulübün adıdır (İZ vurgusu bilinçli). Yazım düzeltmelerinde marka/özel isimleri değiştirme.
  Kulübün kendi yazımı "Çukurova Üniversitesi BALiz Parmak Kulübü". Kullanıcının (WhatsApp'tan) gönderdiği metinler
  **harfi harfine** yazılır; sitede zaten "BalİZ" / "BALİZ" yazan yerlere de dokunulmaz. "BalİZ Macera" gibi ürün adları aynen kalır.
- **İkinci hata:** "BALiz → BalİZ" değişikliğini `sed` ile tüm `src`'ye uyguladım ve duyurulardaki özgün "BALiz" yazımları da değişti.
  Toplu değiştirmeyi yalnızca hedef dosya/satırlara uygula, sonra `git grep HEAD` ile karşılaştır.
- **Uygulama:** Yazım taramasında özel isimleri listele ve dokunmadan geç; emin değilsen sor.
