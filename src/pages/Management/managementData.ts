export interface Member {
  id: number
  isim: string
  pozisyon: string
  foto?: string
  linkedin?: string
  hiyerarsi: number
  sira_no: number
}

// Kulüpten gelen güncel liste (22.11.2026)
export const members: Member[] = [
  {
    id: 1,
    isim: 'Ömer Öksüzaşıkı',
    pozisyon: 'Başkan',
    foto: '/images/yonetim/omer-oksuzasiki.jpeg',
    linkedin: 'https://www.linkedin.com/in/%C3%B6mer-%C3%B6ks%C3%BCza%C5%9F%C4%B1k%C4%B1-b364b9329/',
    hiyerarsi: 1,
    sira_no: 1,
  },
  {
    id: 2,
    isim: 'Umut Çabuk',
    pozisyon: 'Başkan Yardımcısı',
    foto: '/images/yonetim/umut-cabuk.jpeg',
    linkedin: 'https://www.linkedin.com/in/umut-%C3%A7abuk-75a792342/',
    hiyerarsi: 2,
    sira_no: 1,
  },
  {
    id: 3,
    isim: 'Fatma Zeynep Akçalı',
    pozisyon: 'Başkan Yardımcısı',
    hiyerarsi: 2,
    sira_no: 2,
  },
  {
    id: 4,
    isim: 'Furkan Selim Gönç',
    pozisyon: 'İdari İşler Sorumlusu',
    foto: '/images/yonetim/furkan-selim-gonc.jpeg',
    linkedin: 'https://www.linkedin.com/in/furkan-selim-g%C3%B6n%C3%A7-a832b430a/',
    hiyerarsi: 3,
    sira_no: 1,
  },
  {
    id: 5,
    isim: 'Kardelen Küsgün',
    pozisyon: 'Sayman',
    foto: '/images/yonetim/kardelen-kusgun.jpeg',
    linkedin: 'https://www.linkedin.com/in/kardelen-k-6a2b12326/',
    hiyerarsi: 3,
    sira_no: 2,
  },
  {
    id: 6,
    isim: 'Işıl Kartal',
    pozisyon: 'Sponsorluk',
    hiyerarsi: 3,
    sira_no: 3,
  },
  {
    id: 7,
    isim: 'Cemre Fırıncıoğulları',
    pozisyon: 'Sosyal Medya',
    hiyerarsi: 3,
    sira_no: 4,
  },
  {
    id: 8,
    isim: 'Rümeysa Gülistan Altay',
    pozisyon: 'Organizasyon',
    hiyerarsi: 3,
    sira_no: 5,
  },
  {
    id: 9,
    isim: 'Fatma Başboğa',
    pozisyon: 'Organizasyon',
    hiyerarsi: 3,
    sira_no: 6,
  },
  {
    id: 10,
    isim: 'Büşra Yeşilyurt',
    pozisyon: 'Yazman',
    hiyerarsi: 3,
    sira_no: 7,
  },
  {
    id: 11,
    isim: 'Mert Benli',
    pozisyon: 'Denetim Kurulu Üyesi',
    foto: '/images/yonetim/mert-benli.jpeg',
    hiyerarsi: 4,
    sira_no: 1,
  },
  {
    id: 12,
    isim: 'Necati Dilek',
    pozisyon: 'Denetim Kurulu Üyesi',
    foto: '/images/yonetim/necati-dilek.jpeg',
    linkedin: 'https://www.linkedin.com/in/necati-dilek-19b693296/',
    hiyerarsi: 4,
    sira_no: 2,
  },
]

export const hierarchyLabels: Record<number, string> = {
  1: 'Başkan',
  2: 'Başkan Yardımcıları',
  3: 'Yönetim Kurulu',
  4: 'Denetim Kurulu',
}
