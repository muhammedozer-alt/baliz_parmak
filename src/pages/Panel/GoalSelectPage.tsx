import { useNavigate } from 'react-router-dom'
import { useGoalStore, type ExamGoal } from '../../stores/goalStore'
import { useAuthStore } from '../../stores/authStore'

const goals: { id: ExamGoal; label: string; description: string; icon: string }[] = [
  {
    id: 'KPSS',
    label: 'KPSS',
    description: 'Kamu Personeli Seçme Sınavı hazırlığı',
    icon: '🏛️',
  },
  {
    id: 'YKS',
    label: 'YKS',
    description: 'Yükseköğretim Kurumları Sınavı hazırlığı',
    icon: '🎓',
  },
]

export default function GoalSelectPage() {
  const setGoal = useGoalStore((s) => s.setGoal)
  const user = useAuthStore((s) => s.user)
  const navigate = useNavigate()

  const handleSelect = (goal: ExamGoal) => {
    setGoal(goal)
    navigate('/kutuphane/panel')
  }

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md text-center">
        <div className="glass rounded-3xl p-8 sm:p-10 shadow-xl">
          {/* Greeting */}
          <h1 className="text-2xl font-bold text-white mb-2">
            Hoş Geldin,{' '}
            <span className="text-amber-400">
              {user?.name?.split(' ')[0] ?? 'Arkadaş'}
            </span>
          </h1>
          <p className="text-slate-400 mb-8">
            Ozan'ın Kütüphanesi Yol Arkadaşı
          </p>

          {/* Goal cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {goals.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => handleSelect(g.id)}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-200 hover:-translate-y-1 group"
              >
                <span className="text-4xl block mb-3" role="img" aria-hidden="true">
                  {g.icon}
                </span>
                <span className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {g.label}
                </span>
              </button>
            ))}
          </div>

          {/* Label */}
          <h2 className="text-lg font-semibold text-white mb-2">
            Hedefini Belirle
          </h2>
          <p className="text-slate-400 text-sm">
            Harika bir hedef! Seninle beraber bu yolda engelleri kaldıracağız. Hazır mısın?
          </p>
        </div>
      </div>
    </div>
  )
}
