export interface Question {
  id: number
  audioUrl: string       // soru ses dosyası
  answerAudioUrl: string // cevap açıklama ses dosyası
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E'
}

export interface Quiz {
  id: string
  title: string
  subject: string
  icon: string       // emoji
  gradient: string   // tailwind gradient classes
  questionCount: number
  questions: Question[]
}

// TODO: Backend bağlantısında API'den gelecek
export const quizzes: Quiz[] = [
  {
    id: 'cografya',
    title: 'Coğrafya - Deneme 1',
    subject: 'Coğrafya',
    icon: '🧭',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    questionCount: 3,
    questions: [
      { id: 1, audioUrl: '/audio/cografya/soru1.aac', answerAudioUrl: '/audio/cografya/cevap1.aac', correctAnswer: 'C' },
      { id: 2, audioUrl: '/audio/cografya/soru2.aac', answerAudioUrl: '/audio/cografya/cevap2.aac', correctAnswer: 'E' },
      { id: 3, audioUrl: '/audio/cografya/soru3.aac', answerAudioUrl: '/audio/cografya/cevap3.aac', correctAnswer: 'C' },
    ],
  },
  {
    id: 'genel-kultur',
    title: 'Genel Kültür - Deneme 1',
    subject: 'Genel Kültür',
    icon: '📰',
    gradient: 'from-amber-500/20 to-orange-500/20',
    questionCount: 5,
    questions: [
      { id: 1, audioUrl: '/audio/genel-kultur/soru1.aac', answerAudioUrl: '/audio/genel-kultur/cevap1.aac', correctAnswer: 'E' },
      { id: 2, audioUrl: '/audio/genel-kultur/soru2.aac', answerAudioUrl: '/audio/genel-kultur/cevap2.aac', correctAnswer: 'D' },
      { id: 3, audioUrl: '/audio/genel-kultur/soru3.aac', answerAudioUrl: '/audio/genel-kultur/cevap3.aac', correctAnswer: 'C' },
      { id: 4, audioUrl: '/audio/genel-kultur/soru4.aac', answerAudioUrl: '/audio/genel-kultur/cevap4.aac', correctAnswer: 'A' },
      { id: 5, audioUrl: '/audio/genel-kultur/soru5.aac', answerAudioUrl: '/audio/genel-kultur/cevap5.aac', correctAnswer: 'E' },
    ],
  },
  {
    id: 'matematik',
    title: 'Matematik - Deneme 1',
    subject: 'Matematik',
    icon: '📐',
    gradient: 'from-violet-500/20 to-purple-500/20',
    questionCount: 5,
    questions: [
      { id: 1, audioUrl: '/audio/matematik/soru1.aac', answerAudioUrl: '/audio/matematik/cevap1.aac', correctAnswer: 'C' },
      { id: 2, audioUrl: '/audio/matematik/soru2.aac', answerAudioUrl: '/audio/matematik/cevap2.aac', correctAnswer: 'E' },
      { id: 3, audioUrl: '/audio/matematik/soru3.aac', answerAudioUrl: '/audio/matematik/cevap3.aac', correctAnswer: 'B' },
      { id: 4, audioUrl: '/audio/matematik/soru4.aac', answerAudioUrl: '/audio/matematik/cevap4.aac', correctAnswer: 'E' },
      { id: 5, audioUrl: '/audio/matematik/soru5.aac', answerAudioUrl: '/audio/matematik/cevap5.aac', correctAnswer: 'A' },
    ],
  },
]
