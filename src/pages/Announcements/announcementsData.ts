export interface Announcement {
  id: number
  title: string
  content: string
  date: string
  image_url?: string
}

// TODO: Supabase API'ye bağlanınca bu statik veri kaldırılacak
export const announcements: Announcement[] = [
  {
    id: 1767036490398,
    title: 'Mektup Arkadaşlığı Projemizi Gerçekleştirdik',
    content:
      "Kalplerimizi birbirine bağlayan mektuplarla çıktığımız bu güzel yolculukta, 26 Aralık'ta Kayseri / Develi'de bulunan Turan Köylüoğlu İlkokulu'nu ziyaret ettik.\n\nMektup arkadaşlığı projemiz kapsamında, daha önce mektuplaştığımız çocuklarla bir araya gelerek keyifli anlar yaşadık, birlikte güldük, oyunlar oynadık ve unutulmaz anılar biriktirdik.\n\nBu ziyaret, sadece bir buluşma değil; sevgiyle kurulan bağların, paylaşmanın ve dayanışmanın ne kadar güçlü olduğunu bir kez daha gösterdi.\n\nKalpten kalbe kurulan bu köprünün bir parçası olmaktan büyük mutluluk duyuyoruz.\nBirlikte yazdık, birlikte büyüdük.",
    date: '29.12.2025',
    image_url:
      'https://tcbwiysmhbuensgixvws.supabase.co/storage/v1/object/public/uploads/images/image_1767036489424.jpeg',
  },
  {
    id: 1767036386046,
    title: '19 Aralık Yılbaşı Etkinliğimizi Gerçekleştirdik!',
    content:
      "BALİZ Parmak Kulübü olarak 19 Aralık'ta Loba Kafe'de düzenlediğimiz yılbaşı etkinliğinde; birlikte güldük, eğlendik ve yeni yıla güzel anılarla adım attık.\n\nOyunlar, yarışmalar ve sürprizlerle dolu bu keyifli akşamda; eğlenceli aktiviteler, hediye çekleri ve Kayseri gezisi çekilişi, filtre kahve & latte, çay, limonata, çikolatalı kek ve kurabiye ikramlarıyla dolu dolu bir etkinlik gerçekleştirdik.\n\nKatılım gösteren tüm arkadaşlarımıza teşekkür ediyor, birlikte geçirilen bu güzel anların yeni yılda da artarak devam etmesini diliyoruz.",
    date: '29.12.2025',
    image_url:
      'https://tcbwiysmhbuensgixvws.supabase.co/storage/v1/object/public/uploads/images/image_1767036384925.jpeg',
  },
  {
    id: 1767036268616,
    title: '10 Aralık – BALİZ Parmak Kulübü 2. Olağan Seçimi',
    content:
      "10 Aralık tarihinde, Çukurova Üniversitesi Sağlık Kültür ve Spor Daire Başkanlığı bünyesinde gerçekleştirilen BALİZ Parmak Kulübü 2. Olağan Seçimi başarıyla tamamlandı.\n\nGerçekleştirilen seçimde, tek aday olarak seçime giren Ömer Öksüzaşıkı, 120 kişinin oyunu alarak gerekli çoğunluğu sağlamış ve ilk turda yeniden başkanlığa seçilmiştir.\n\nDemokratik katılımın esas alındığı bu süreçte, kulübümüzün gelecek dönem hedefleri doğrultusunda güçlü bir irade ortaya konmuştur.\nYeni dönemde de BALİZ Parmak Kulübü olarak sosyal fayda üretmeye, daha kapsayıcı projeler geliştirmeye ve birlikte iz bırakmaya devam edeceğiz.",
    date: '29.12.2025',
    image_url:
      'https://tcbwiysmhbuensgixvws.supabase.co/storage/v1/object/public/uploads/images/image_1767036267637.jpeg',
  },
  {
    id: 1767036113964,
    title: 'Geleceğin Liderliği Akademisi | 6 Aralık',
    content:
      "Cumhurbaşkanlığı İletişim Başkanlığı Adana Bölge Müdürlüğü koordinasyonunda ve üniversitemizin desteğiyle hayata geçirilen Geleceğin Liderliği Akademisi, gençlerin liderlik becerilerini geliştirmeye odaklanan çok kıymetli bir program olarak bizlere ilham verdi.\n\nProgram boyunca bilgi ve deneyimleriyle bizlere rehberlik eden, vizyonumuzu genişleten ve liderlik yolculuğumuza katkı sağlayan kıymetli hocalarımıza şükranlarımızı sunarız.\n\nAldığımız her eğitim; topluluk bilincimizi güçlendiren, karar alma cesaretimizi artıran ve geleceğe daha sağlam adımlarla yürümemizi sağlayan önemli bir kazanım oldu.",
    date: '29.12.2025',
    image_url:
      'https://tcbwiysmhbuensgixvws.supabase.co/storage/v1/object/public/uploads/images/image_1767036112945.jpg',
  },
  {
    id: 1767036020187,
    title: '3 Aralık Dünya Engelliler Günü',
    content:
      "3 Aralık Dünya Engelliler Günü kapsamında, 6 Nokta Görme Engelliler Derneği'ni ziyaret ederek hem yürüttüğümüz projeleri hem de gelecekte hayata geçirmeyi hedeflediğimiz çalışmaları paylaştık.\n\nDaha erişilebilir, daha kapsayıcı ve herkes için eşit bir yaşamı mümkün kılma yolunda fikir alışverişinde bulunmak bizler için oldukça kıymetliydi.\n\nZiyaretimizin sonunda, çocuklara ilham olması amacıyla BalİZ Macera dergimizi hediye ettik.\nİş birliği, dayanışma ve ortak üretimle daha güçlü adımlar atılacağına yürekten inanıyoruz.",
    date: '29.12.2025',
    image_url:
      'https://tcbwiysmhbuensgixvws.supabase.co/storage/v1/object/public/uploads/images/image_1767036019397.jpeg',
  },
  {
    id: 1767035982758,
    title: '24 Kasım Öğretmenler Günü',
    content:
      "Başta Başöğretmenimiz Mustafa Kemal Atatürk olmak üzere, geleceğimizi aydınlatan, yolumuzu açan ve hayatımıza dokunan tüm öğretmenlerimizin 24 Kasım Öğretmenler Günü'nü saygı ve minnetle kutluyoruz.\n\nBu anlamlı günde, öğretmenlerimizin adına mama bağışında bulunarak; yalnızca insanlara değil, tüm canlılara dokunan bir iyiliği çoğaltmak istedik.\n\nEmeğiyle, sabrıyla ve sevgisiyle iz bırakan tüm öğretmenlerimize teşekkür ediyoruz.",
    date: '29.12.2025',
    image_url:
      'https://tcbwiysmhbuensgixvws.supabase.co/storage/v1/object/public/uploads/images/image_1767035981948.jpeg',
  },
  {
    id: 1767035764748,
    title: '20 Kasım Dünya Çocuk Hakları Günü',
    content:
      'Bugün, geçmişteki gülüşlerimizi hatırlayarak tüm çocukların hak ettiği güvenli, mutlu ve eşit bir geleceğin önemini bir kez daha vurguluyoruz.\n\nHer çocuğun; korunmaya, desteklenmeye ve özgürce büyümeye hakkı var.\nBizler de dünün çocukları, bugünün gençleri olarak; umutları yeşerten, hakları savunan ve her çocuğun sesine kulak veren bir dünyanın kurulmasına katkı sunmaya devam ediyoruz.\n\nBu anlamlı günde, Sihirli Eller Eğitim Kurumu iş birliğiyle gerçekleştirdiğimiz etkinlikte çocukların hayallerine, gülüşlerine ve umutlarına ortak olduk.',
    date: '29.12.2025',
    image_url:
      'https://tcbwiysmhbuensgixvws.supabase.co/storage/v1/object/public/uploads/images/image_1767035763625.jpeg',
  },
  {
    id: 1767035609670,
    title: '3 Kasım Çiğköfte Partisi',
    content:
      "BALİZ Parmak Kulübü olarak 3 Kasım'da bir araya geldik, sohbet ettik, güldük ve birlikte güzel bir anı paylaştık.\nÇiğköfte eşliğinde gerçekleşen bu buluşma, hem tanışmak hem de kulüp ruhunu daha yakından hissetmek için harika bir fırsat oldu.\n\nBirlikte üretmenin, paylaşmanın ve aynı sofrada buluşmanın keyfini yaşadığımız bu etkinlikte; samimiyet, enerji ve dayanışma ön plandaydı.\nBALİZ Parmak ailesi olarak her buluşmada bağlarımızı daha da güçlendiriyoruz.",
    date: '29.12.2025',
    image_url:
      'https://tcbwiysmhbuensgixvws.supabase.co/storage/v1/object/public/uploads/images/image_1767035608497.jpeg',
  },
  {
    id: 1748936649266,
    title: 'BALiz Parmak Kulübü, ÇÜFEST 2025\'te Yerini Aldı!',
    content:
      "Çukurova Üniversitesi'nde bu yıl ilk kez düzenlenen ÇÜFEST 2025'te, BALiz Parmak Kulübü olarak standımızla yerimizi aldık ve büyük bir heyecanla öğrencilerle buluştuk.\n\nKampüs yaşamını oyunlaştıran ÇÜPOLY adlı kendi tasarımımız olan masa oyununu tanıttık. Katılımcılara GOLBOL ile farkındalık sağlayan sportif bir deneyim sunduk.\n\nStandımızı ziyaret eden yüzlerce öğrenciyle tanıştık, sohbet ettik, oyun oynadık ve BALiz Parmak ruhunu birlikte yaşadık.",
    date: '03.06.2025',
  },
  {
    id: 1748936332834,
    title: 'Ritmin Gücü: Bilal Göregen ile Buluşma',
    content:
      "26 Mayıs 2025 tarihinde, Çukurova Üniversitesi İ. Akif Kansu Konferans Salonu'nda BALiz Parmak Kulübü olarak gerçekleştirdiğimiz bu özel etkinlik, 200'ü aşkın öğrencinin katılımıyla büyük ilgi gördü.\n\nHayat hikâyesiyle milyonlara ilham olan Bilal Göregen, etkinliğimizde hem sahne performansıyla hem de içten sohbetiyle unutulmaz anlar yaşattı.",
    date: '03.06.2025',
  },
  {
    id: 1747415791386,
    title: 'BalİZ Macera Yayında!!',
    content:
      "Türkiye'nin ilk erişilebilir çocuk dergisi BalİZ Macera artık yayında!\nGörme engelli çocuklara özel olarak yazılı, sesli ve kabartmalı formatta hazırlanan BalİZ Macera, her sayfasında yeni bir macera sunuyor.\n\nHayal gücünü güçlendiren, eğlendirirken öğreten ve herkesin erişimine açık olan bu özel dergiyi keşfetmek için hemen web sitemizi ziyaret et!",
    date: '16.05.2025',
  },
]
