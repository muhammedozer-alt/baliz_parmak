import { Link, Navigate } from 'react-router-dom'
import {
  BookOpenIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'
import { useAuthStore } from '../../stores/authStore'
import { useGoalStore } from '../../stores/goalStore'

const subjects = [
  { id: 'cografya', label: 'Coğrafya', icon: '🧭', color: 'from-emerald-500/20 to-teal-500/20' },
  { id: 'matematik', label: 'Matematik', icon: '📐', color: 'from-violet-500/20 to-purple-500/20' },
  { id: 'genel-kultur', label: 'Genel Kültür', icon: '📰', color: 'from-amber-500/20 to-orange-500/20' },
]

export default function PanelPage() {
  const user = useAuthStore((s) => s.user)
  const goal = useGoalStore((s) => s.goal)
  const clearGoal = useGoalStore((s) => s.clearGoal)

  // Hedef seçilmemişse seçim sayfasına yönlendir
  if (!goal) {
    return <Navigate to="/kutuphane/hedef" replace />
  }

  return (
    <>
      {/* Header */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Kütüphanesi
              </h1>
              <p className="text-slate-400 mt-1">
                Hoşgeldin, <span className="text-amber-400">{user?.name}</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="glass rounded-xl px-4 py-2 text-sm font-medium text-amber-400 border border-amber-500/20">
                <AcademicCapIcon className="inline h-4 w-4 mr-1.5 -mt-0.5" aria-hidden="true" />
                {goal} Hazırlık
              </span>
              <button
                type="button"
                onClick={clearGoal}
                className="rounded-xl p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Hedefi değiştir"
                title="Hedefi değiştir"
              >
                <ArrowPathIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ders Kartları */}
      <section aria-labelledby="dersler-heading" className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="dersler-heading" className="text-xl font-bold text-white mb-6">
            <BookOpenIcon className="inline h-5 w-5 mr-2 text-amber-400 -mt-0.5" aria-hidden="true" />
            Ders Kartları
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {subjects.map((s) => (
              <Link
                key={s.id}
                to={`/kutuphane/deneme/${s.id}`}
                className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`h-28 flex items-center justify-center bg-gradient-to-br ${s.color}`}>
                  <span className="text-4xl" role="img" aria-hidden="true">{s.icon}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">Deneme ve ders içerikleri</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Denemeler */}
      <section aria-labelledby="denemeler-heading" className="pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 id="denemeler-heading" className="text-xl font-bold text-white">
              <ClipboardDocumentListIcon className="inline h-5 w-5 mr-2 text-amber-400 -mt-0.5" aria-hidden="true" />
              Altın Denemeler
            </h2>
            <Link
              to="/kutuphane/denemeler"
              className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              Tümünü Gör &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => (
              <Link
                key={s.id}
                to={`/kutuphane/deneme/${s.id}`}
                className="glass rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex items-center gap-4"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.color}`}>
                  <span className="text-xl" role="img" aria-hidden="true">{s.icon}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {s.label} - Deneme 1
                  </h3>
                  <p className="text-slate-500 text-xs mt-0.5">5 Soru</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* İlerleme durumu placeholder */}
      <section aria-labelledby="ilerleme-heading" className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="ilerleme-heading" className="text-xl font-bold text-white mb-6">
            İlerlemen
          </h2>
          <div className="glass rounded-2xl p-8 text-center shadow-xl">
            <p className="text-slate-400">
              Deneme çözdükçe ilerleme durumun burada görünecek.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
