import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SpeakerWaveIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/solid'
import { quizzes } from './quizData'

const choices = ['A', 'B', 'C', 'D', 'E'] as const

export default function QuizPlayPage() {
  const { quizId } = useParams<{ quizId: string }>()
  const quiz = quizzes.find((q) => q.id === quizId)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const feedbackRef = useRef<HTMLAudioElement>(null)

  // Reset audio state on question change
  useEffect(() => {
    setIsPlaying(false)
  }, [currentIndex])

  if (!quiz) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-md px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Deneme Bulunamadı</h1>
          <Link
            to="/kutuphane/denemeler"
            className="inline-block rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-400 transition-colors"
          >
            Denemelere Dön
          </Link>
        </div>
      </section>
    )
  }

  const question = quiz.questions[currentIndex]
  const isCorrect = selectedAnswer === question.correctAnswer

  const handlePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  const handleAnswer = (choice: string) => {
    if (answered) return
    // Stop question audio
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
    setSelectedAnswer(choice)
    setAnswered(true)
    const correct = choice === question.correctAnswer
    if (correct) {
      setScore((s) => s + 1)
    }
    // Play feedback audio
    if (feedbackRef.current) {
      feedbackRef.current.src = correct
        ? '/audio/dogru.aac'
        : question.answerAudioUrl
      feedbackRef.current.play()
    }
  }

  const handleNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
  }

  // Finished screen
  if (finished) {
    return (
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="glass rounded-3xl p-10 shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/20 mb-6">
              <span className="text-4xl">🎉</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Deneme Tamamlandı!
            </h1>
            <p className="text-slate-300 mb-6">{quiz.title}</p>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-8">
              <p className="text-5xl font-bold text-amber-400">
                {score}/{quiz.questions.length}
              </p>
              <p className="text-slate-400 mt-2">Doğru Cevap</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleRestart}
                className="w-full rounded-xl bg-amber-500 px-6 py-3.5 text-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
              >
                Tekrar Çöz
              </button>
              <Link
                to="/kutuphane/denemeler"
                className="w-full rounded-xl border border-white/20 px-6 py-3.5 text-lg font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                Diğer Denemeler
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 sm:py-16">
      <div className="mx-auto max-w-lg px-4">
        <div className="glass rounded-3xl p-6 sm:p-8 shadow-xl">
          {/* Progress */}
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/kutuphane/denemeler"
              className="text-slate-400 hover:text-white transition-colors text-sm"
              aria-label="Denemelere dön"
            >
              ← Geri
            </Link>
            <span className="text-slate-400 text-sm">
              {currentIndex + 1} / {quiz.questions.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full mb-8">
            <div
              className="h-full bg-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>

          {/* Question number */}
          <div className="text-center mb-6">
            <span className="text-5xl font-bold text-white">
              {currentIndex + 1}
            </span>
          </div>

          {/* Audio player */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <audio
              ref={audioRef}
              src={question.audioUrl}
              onEnded={() => setIsPlaying(false)}
              preload="auto"
            />
            <audio ref={feedbackRef} preload="none" />

            {/* Play button */}
            <button
              type="button"
              onClick={handlePlay}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition-colors"
              aria-label={isPlaying ? 'Soruyu duraklat' : 'Soruyu dinle'}
            >
              {isPlaying ? (
                <PauseIcon className="h-8 w-8 text-white" />
              ) : (
                <PlayIcon className="h-8 w-8 text-white ml-1" />
              )}
            </button>

            <button
              type="button"
              onClick={handlePlay}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition-colors"
            >
              <SpeakerWaveIcon className="h-4 w-4 text-amber-400" aria-hidden="true" />
              Soruyu Dinle
            </button>
          </div>

          {/* Answer choices */}
          <div className="grid grid-cols-5 gap-3 mb-6" role="radiogroup" aria-label="Cevap şıkları">
            {choices.map((choice) => {
              let style = 'bg-white/5 border-white/10 text-white hover:bg-white/10'

              if (answered) {
                if (choice === question.correctAnswer) {
                  style = 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                } else if (choice === selectedAnswer && !isCorrect) {
                  style = 'bg-red-500/20 border-red-500 text-red-400'
                } else {
                  style = 'bg-white/5 border-white/5 text-slate-600'
                }
              }

              return (
                <button
                  key={choice}
                  type="button"
                  onClick={() => handleAnswer(choice)}
                  disabled={answered}
                  role="radio"
                  aria-checked={selectedAnswer === choice}
                  aria-label={`${choice} şıkkı`}
                  className={`flex h-14 w-full items-center justify-center rounded-xl border-2 text-lg font-bold transition-all ${style} ${
                    !answered ? 'cursor-pointer active:scale-95' : 'cursor-default'
                  }`}
                >
                  {choice}
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          {answered && (
            <div
              className={`rounded-xl p-4 mb-6 ${
                isCorrect
                  ? 'bg-emerald-500/10 border border-emerald-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}
              role="alert"
            >
              <p className={`text-sm font-medium ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                {isCorrect
                  ? 'Doğru cevap! Harikasın! 🎉'
                  : `Yanlış cevap. Doğru cevap ${question.correctAnswer} şıkkıydı.`}
              </p>
            </div>
          )}

          {/* Next button */}
          {answered && (
            <button
              type="button"
              onClick={handleNext}
              className="w-full rounded-xl bg-amber-500 px-6 py-3.5 text-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
            >
              {currentIndex < quiz.questions.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
