export type Choice = 'A' | 'B' | 'C' | 'D' | 'E'

export interface Question {
  id: number
  audioUrl: string       // soru ses dosyası
  answerAudioUrl: string // cevap açıklama ses dosyası
  correctAnswer: Choice
}

export interface Quiz {
  id: string         // URL'de kullanılır: /kutuphane/deneme/:id
  title: string
  label: string      // ders kartında görünen kısa ad
  questions: Question[]
}

export interface Subject {
  id: string
  name: string
  icon: string       // emoji
  gradient: string   // tailwind gradient classes
  lectureUrl: string | null // konu anlatımı ses dosyası
  quizzes: Quiz[]
}

/**
 * Ozan Bayır ses arşivinden bir deneme oluşturur.
 * Dosyalar: /audio/<ders>/deneme-<n>/{soru,cevap}-<k>.<uzantı>
 * Cevap anahtarı cevap kayıtları dinlenerek çıkarıldı (bkz. tasks/todo.md).
 */
function deneme(
  subjectId: string,
  subjectName: string,
  n: number,
  answers: string,
  ext: 'ogg' | 'm4a',
  extOverrides: Record<number, 'ogg' | 'm4a'> = {},
): Quiz {
  const keys = answers.split('') as Choice[]
  return {
    id: `${subjectId}-${n}`,
    title: `${subjectName} - Deneme ${n}`,
    label: `Deneme ${n}`,
    questions: keys.map((correctAnswer, i) => {
      const k = i + 1
      const e = extOverrides[k] ?? ext
      const base = `/audio/${subjectId}/deneme-${n}`
      return {
        id: k,
        audioUrl: `${base}/soru-${k}.${e}`,
        answerAudioUrl: `${base}/cevap-${k}.${e}`,
        correctAnswer,
      }
    }),
  }
}

// TODO: Backend bağlantısında API'den gelecek
export const subjects: Subject[] = [
  {
    id: 'cografya',
    name: 'Coğrafya',
    icon: '🧭',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    lectureUrl: '/audio/cografya/konu-anlatimi.ogg',
    quizzes: [
      deneme('cografya', 'Coğrafya', 1, 'CBDDDCADBC', 'm4a', { 1: 'ogg' }),
    ],
  },
  {
    id: 'genel-kultur',
    name: 'Genel Kültür',
    icon: '📰',
    gradient: 'from-amber-500/20 to-orange-500/20',
    lectureUrl: '/audio/genel-kultur/konu-anlatimi.ogg',
    quizzes: [
      // Soru 9: kulübün verdiği cevap B (kayıt da "B, And Dağları" diyor); soru Everest'i soruyor, ileride gözden geçirilebilir.
      deneme('genel-kultur', 'Genel Kültür', 1, 'BCBCBBCBBB', 'ogg'),
      deneme('genel-kultur', 'Genel Kültür', 2, 'BDBABCECCB', 'ogg'),
    ],
  },
  {
    id: 'matematik',
    name: 'Matematik',
    icon: '📐',
    gradient: 'from-violet-500/20 to-purple-500/20',
    lectureUrl: '/audio/matematik/konu-anlatimi.ogg',
    quizzes: [
      deneme('matematik', 'Matematik', 1, 'BBCCECBBBC', 'ogg'),
      // Soru 6: |2x−5|=9 → toplam 5 → C (kullanıcı kaydı dinleyip teyit etti).
      deneme('matematik', 'Matematik', 2, 'BCDDCCCDDC', 'ogg'),
    ],
  },
  {
    id: 'tarih',
    name: 'Tarih',
    icon: '🏛️',
    gradient: 'from-rose-500/20 to-red-500/20',
    lectureUrl: '/audio/tarih/konu-anlatimi.ogg',
    quizzes: [
      deneme('tarih', 'Tarih', 1, 'BBCCABCCAB', 'm4a'),
      deneme('tarih', 'Tarih', 2, 'BCCABCACBB', 'm4a'),
    ],
  },
  {
    id: 'turkce',
    name: 'Türkçe',
    icon: '📖',
    gradient: 'from-sky-500/20 to-blue-500/20',
    lectureUrl: '/audio/turkce/konu-anlatimi.ogg',
    quizzes: [deneme('turkce', 'Türkçe', 1, 'CDBEAEBDED', 'ogg')],
  },
]

export const quizzes: Quiz[] = subjects.flatMap((s) => s.quizzes)
