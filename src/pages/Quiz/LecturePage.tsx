import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { subjects } from './quizData'

const speeds = [0.75, 1, 1.25, 1.5] as const

export default function LecturePage() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const subject = subjects.find((s) => s.id === subjectId)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [speed, setSpeed] = useState<number>(1)
  const [status, setStatus] = useState('')

  if (!subject || !subject.lectureUrl) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-md px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Konu Anlatımı Bulunamadı</h1>
          <Link
            to="/kutuphane/denemeler"
            className="inline-block rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-400 transition-colors"
          >
            Derslere Dön
          </Link>
        </div>
      </section>
    )
  }

  const changeSpeed = (value: number) => {
    setSpeed(value)
    if (audioRef.current) audioRef.current.playbackRate = value
    setStatus(`Oynatma hızı ${value} kat olarak ayarlandı.`)
  }

  const skip = (seconds: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + seconds))
    setStatus(seconds > 0 ? `${seconds} saniye ileri alındı.` : `${-seconds} saniye geri alındı.`)
  }

  const buttonBase =
    'rounded-xl px-4 py-2.5 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'

  return (
    <section aria-labelledby="lecture-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/kutuphane/denemeler"
          className="text-amber-400 hover:text-amber-300 text-sm font-medium"
        >
          &larr; Derslere dön
        </Link>

        <div className="mt-6 glass rounded-2xl p-8 shadow-xl text-center">
          <span className="text-6xl" role="img" aria-hidden="true">
            {subject.icon}
          </span>
          <h1 id="lecture-heading" className="mt-4 text-3xl font-bold text-white">
            {subject.name} — Konu Anlatımı
          </h1>
          <p className="mt-2 text-slate-300">
            Sesli konu anlatımını dinleyebilir, hızını ayarlayabilirsiniz.
          </p>

          <audio
            ref={audioRef}
            src={subject.lectureUrl}
            controls
            preload="metadata"
            className="mt-8 w-full"
            aria-label={`${subject.name} konu anlatımı ses kaydı`}
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = speed
            }}
          >
            Tarayıcınız ses oynatmayı desteklemiyor.
          </audio>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => skip(-10)}
              className={`${buttonBase} bg-white/10 text-white hover:bg-white/20`}
            >
              10 sn geri
            </button>
            <button
              type="button"
              onClick={() => skip(10)}
              className={`${buttonBase} bg-white/10 text-white hover:bg-white/20`}
            >
              10 sn ileri
            </button>
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm text-slate-300 mb-3">Oynatma hızı</legend>
            <div className="flex flex-wrap justify-center gap-2">
              {speeds.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => changeSpeed(value)}
                  aria-pressed={speed === value}
                  className={`${buttonBase} ${
                    speed === value
                      ? 'bg-amber-500 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {value}x
                </button>
              ))}
            </div>
          </fieldset>

          <p role="status" aria-live="polite" className="sr-only">
            {status}
          </p>
        </div>
      </div>
    </section>
  )
}
