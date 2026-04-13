import { Link } from 'react-router-dom'
import { quizzes } from './quizData'

export default function QuizListPage() {
  return (
    <>
      {/* Header */}
      <section aria-labelledby="quiz-heading" className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            id="quiz-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            İlk İz: Erişilebilir Deneme Serisi
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Çukurova Üniversitesi mezunları tarafından hazırlanan, tamamen
            erişilebilir sesli KPSS deneme örnekleri.
          </p>
        </div>
      </section>

      {/* Quiz Grid */}
      <section aria-label="Deneme listesi" className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {quizzes.map((quiz) => (
              <Link
                key={quiz.id}
                to={`/kutuphane/deneme/${quiz.id}`}
                className={`group glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`h-40 flex items-center justify-center bg-gradient-to-br ${quiz.gradient}`}>
                  <span className="text-6xl" role="img" aria-hidden="true">
                    {quiz.icon}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {quiz.title}
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    {quiz.questionCount} Soru
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-amber-400 text-sm font-medium">
                    <span>Denemeye Başla</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
