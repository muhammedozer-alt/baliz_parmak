import { useState } from 'react'

type ExamType = 'kpss' | 'yks' | null

export default function ExamSelectPage() {
  const [selected, setSelected] = useState<ExamType>(null)
  const [targetNet, setTargetNet] = useState('')
  const [error, setError] = useState('')

  const examLimits: Record<string, { max: number; label: string }> = {
    kpss: { max: 120, label: 'KPSS' },
    yks: { max: 160, label: 'YKS (TYT+AYT)' },
  }

  const handleContinue = () => {
    setError('')

    if (!selected) {
      setError('Lutfen hazirlanmak istediginiz sinavi secin.')
      // TODO: Uyari sesi cal
      return
    }

    const net = Number(targetNet)
    const limit = examLimits[selected]

    if (!targetNet || isNaN(net) || net < 1 || net > limit.max) {
      setError(
        `Girdiginiz deger sinav standartlari disindadir. ${limit.label} icin 1-${limit.max} arasi bir deger girin.`
      )
      return
    }

    // TODO: Sonraki adima yonlendir
    console.log('Sinav:', selected, 'Hedef:', net)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold text-text-primary">Sinav Secimi</h1>
      <p className="mt-2 text-text-secondary">
        Hazirlanmak istediginiz sinavi secin ve hedefinizi belirleyin.
      </p>

      {/* Exam Type Selection */}
      <fieldset className="mt-10" aria-describedby={error ? 'exam-error' : undefined}>
        <legend className="text-lg font-semibold text-text-primary">
          Hangi sinava hazirlaniyorsunuz?
        </legend>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(['kpss', 'yks'] as const).map((exam) => (
            <label
              key={exam}
              className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-6 transition-colors ${
                selected === exam
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="exam-type"
                value={exam}
                checked={selected === exam}
                onChange={() => setSelected(exam)}
                className="h-5 w-5 text-primary"
              />
              <div>
                <span className="text-lg font-semibold text-text-primary">
                  {examLimits[exam].label}
                </span>
                <span className="block text-sm text-text-secondary">
                  Maksimum {examLimits[exam].max} net
                </span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Target Net Input */}
      {selected && (
        <div className="mt-8">
          <label htmlFor="target-net" className="block text-lg font-semibold text-text-primary">
            Hedef Netiniz
          </label>
          <p className="text-sm text-text-secondary">
            {examLimits[selected].label} icin 1 ile {examLimits[selected].max} arasinda bir deger girin.
          </p>
          <input
            id="target-net"
            type="number"
            min={1}
            max={examLimits[selected].max}
            value={targetNet}
            onChange={(e) => setTargetNet(e.target.value)}
            className="mt-2 block w-full max-w-xs rounded-lg border border-gray-300 px-4 py-3 text-text-primary shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
            aria-describedby={error ? 'exam-error' : 'target-hint'}
          />
          <p id="target-hint" className="mt-1 text-xs text-text-muted">
            Ornegin: 80
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          id="exam-error"
          role="alert"
          className="mt-6 rounded-lg border border-danger/30 bg-danger/5 p-4 text-danger"
        >
          {error}
        </div>
      )}

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="mt-8 rounded-xl bg-primary px-8 py-3 text-lg font-semibold text-text-inverse hover:bg-primary-dark transition-colors"
      >
        Devam Et
      </button>
    </div>
  )
}
