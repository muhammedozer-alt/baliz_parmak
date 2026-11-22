import { useState } from 'react'
import { Link } from 'react-router-dom'
import { subjects } from './quizData'

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function QuizListPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <>
      {/* Header */}
      <section aria-labelledby="quiz-heading" className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 id="quiz-heading" className="text-3xl font-bold text-white sm:text-4xl">
            İlk İz: Erişilebilir Deneme Serisi
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Çukurova Üniversitesi mezunları tarafından hazırlanan, tamamen
            erişilebilir sesli KPSS deneme örnekleri.
          </p>
        </div>
      </section>

      {/* Ders kartları — tıklayınca denemeler ve konu anlatımı açılır */}
      <section aria-label="Dersler" className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 items-start">
            {subjects.map((subject) => {
              const isOpen = openId === subject.id
              const panelId = `ders-${subject.id}`
              return (
                <div
                  key={subject.id}
                  className="glass rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : subject.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group block w-full text-left"
                  >
                    <div className={`h-40 flex items-center justify-center bg-gradient-to-br ${subject.gradient}`}>
                      <span className="text-6xl" role="img" aria-hidden="true">
                        {subject.icon}
                      </span>
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {subject.name}
                        </h2>
                        <p className="text-slate-400 text-sm mt-1">
                          Denemeler ve konu anlatımı
                        </p>
                      </div>
                      <ChevronRight
                        className={`h-5 w-5 text-amber-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <ul id={panelId} className="px-6 pb-6 space-y-2">
                      {subject.quizzes.map((quiz) => (
                        <li key={quiz.id}>
                          <Link
                            to={`/kutuphane/deneme/${quiz.id}`}
                            className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-white hover:bg-amber-500/20 hover:text-amber-300 transition-colors"
                          >
                            <span className="font-medium">
                              {quiz.label}{' '}
                              <span className="text-slate-400 text-sm font-normal">
                                · {quiz.questions.length} Soru
                              </span>
                            </span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </li>
                      ))}
                      {subject.lectureUrl && (
                        <li>
                          <Link
                            to={`/kutuphane/konu/${subject.id}`}
                            className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-white hover:bg-amber-500/20 hover:text-amber-300 transition-colors"
                          >
                            <span className="font-medium">Konu Anlatımı</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Erişim ve giriş/kayıt */}
      <section aria-labelledby="erisim-heading" className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 text-center shadow-lg">
            <h2 id="erisim-heading" className="text-2xl font-bold text-white">
              Görme Engelliler İçin Tam Erişim
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
              Tüm denemeler ve konu anlatımları sesli ve ekran okuyucu uyumludur.
              İlerlemeni kaydetmek için kayıt ol veya giriş yap.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kayit"
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
              >
                Kayıt Ol
              </Link>
              <Link
                to="/giris"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Giriş Yap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
