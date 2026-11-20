import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { UserPlusIcon, EyeIcon, EyeSlashIcon, CloudArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: API entegrasyonu + engelli belgesi yükleme
    console.log('Register:', form)
  }

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 mb-4">
            <UserPlusIcon className="h-7 w-7 text-amber-400" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-white">Kayıt Ol</h1>
          <p className="mt-2 text-slate-400">
            Ücretsiz hesap oluşturun ve hemen başlayın.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-1.5">
                Ad Soyad
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                required
                placeholder="Adınız Soyadınız"
                value={form.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 shadow-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-slate-300 mb-1.5">
                E-posta Adresi
              </label>
              <input
                id="reg-email"
                type="email"
                autoComplete="email"
                required
                placeholder="ornek@email.com"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 shadow-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-slate-300 mb-1.5">
                Şifre
              </label>
              <div className="relative">
                <input
                  id="reg-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  placeholder="En az 8 karakter"
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white placeholder-slate-500 shadow-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="reg-password-confirm" className="block text-sm font-medium text-slate-300 mb-1.5">
                Şifre Tekrar
              </label>
              <div className="relative">
                <input
                  id="reg-password-confirm"
                  type={showConfirm ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  placeholder="Şifrenizi tekrar girin"
                  value={form.passwordConfirm}
                  onChange={(e) => update('passwordConfirm', e.target.value)}
                  className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white placeholder-slate-500 shadow-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label={showConfirm ? 'Şifreyi gizle' : 'Şifreyi göster'}
                >
                  {showConfirm ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Engelli Belgesi */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Engelli Belgesi
              </label>
              <p className="text-xs text-slate-500 mb-2">
                PDF, JPG veya PNG formatında engelli sağlık kurulu raporu yükleyin.
              </p>

              {file ? (
                <div className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <CloudArrowUpIcon className="h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                    <span className="text-sm text-white truncate">{file.name}</span>
                    <span className="text-xs text-slate-500 shrink-0">
                      ({(file.size / 1024 / 1024).toFixed(1)} MB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                    className="shrink-0 ml-2 text-slate-400 hover:text-red-400 transition-colors"
                    aria-label="Dosyayı kaldır"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault()
                    setDragOver(false)
                    const dropped = e.dataTransfer.files[0]
                    if (dropped) setFile(dropped)
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-6 cursor-pointer transition-colors ${
                    dragOver
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-white/10 hover:border-white/30 bg-white/5'
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label="Engelli belgesi yüklemek için tıklayın veya sürükleyin"
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click() }}
                >
                  <CloudArrowUpIcon className="h-8 w-8 text-slate-500 mb-2" aria-hidden="true" />
                  <span className="text-sm text-slate-400">
                    Sürükle bırak veya <span className="text-amber-400 font-medium">dosya seç</span>
                  </span>
                  <span className="text-xs text-slate-600 mt-1">
                    PDF, JPG, PNG — Maks. 10MB
                  </span>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                  const selected = e.target.files?.[0]
                  if (selected) setFile(selected)
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 px-4 py-3.5 text-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
            >
              Kayıt Ol
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Zaten hesabınız var mı?{' '}
          <Link to="/giris" className="font-medium text-amber-400 hover:text-amber-300 transition-colors">
            Giriş Yap
          </Link>
        </p>
      </div>
    </div>
  )
}
