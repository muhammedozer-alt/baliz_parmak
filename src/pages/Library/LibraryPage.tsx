import { Link } from 'react-router-dom'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import ozanImg from '../../assets/ozan-bayir.jpeg'
import bookIcon from '../../assets/book-image.png'

export default function LibraryPage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="library-heading" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-96 w-72 sm:h-[28rem] sm:w-80 overflow-hidden rounded-2xl border-2 border-amber-500/30 shadow-xl shadow-amber-500/10">
                  <img
                    src={ozanImg}
                    alt="Ozan Bayır portre çizimi"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Ozan Bayır Kütüphanesi
              </p>
              <h1
                id="library-heading"
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight"
              >
                OZAN'IN IŞIĞINDA,{' '}
                <span className="text-amber-400">BİLGİYE ENGELSİZ ERİŞİM</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Ozan Bayır Erişilebilir Dijital Kütüphanesi — BALİZ Parmak
                Tarafından Hayata Geçirildi.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/kutuphane/denemeler"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
                >
                  Kütüphaneyi Keşfet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <Link
                  to="/kayit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Hemen Başla
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Yaptık? */}
      <section aria-labelledby="neden-heading" className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="neden-heading"
            className="text-3xl font-bold text-white mb-10"
          >
            Neden Yaptık?
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Bir İz Bırakmak */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 p-8 shadow-xl shadow-amber-500/15">
              <div className="flex justify-center mb-6">
                <img
                  src={bookIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-40 w-40 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Bir İz Bırakmak
              </h3>
              <p className="text-amber-100 leading-relaxed">
                Ozan Bayır Erişilebilir Dijital Kütüphanesi — BALİZ Parmak
                Tarafından Hayata Geçirildi. Neden Yaptık'ının daimi kahraman
                olduğunu hissettirmek istiyoruz. Bilgi Bırakmak, onu bir
                karakalem tonlarında ölümsüz olan dijital kütüphanede kişisel
                hikaye yazısını bir sürece yaptırmak.
              </p>
            </div>

            {/* Ozan'ın Mirası */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: `url(${ozanImg})`,
                backgroundSize: '60%',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#e5e7eb',
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/95 via-slate-800/60 to-slate-800/80" />

              <div className="relative p-8 flex flex-col h-full min-h-[22rem]">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ozan'ın Mirası
                </h3>
                <p className="text-slate-200 leading-relaxed text-sm mb-auto">
                  Ozan Bayır Erişilebilir Dijital Kütüphanesi — BALİZ Parmak
                  Tarafından Hayata Geçirildi. Dorulanının mireninden bir oluşum
                  mirasan yapılmaktadır.
                </p>

                {/* Video play button */}
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                    aria-label="Videoyu oynat"
                  >
                    <PlayCircleIcon className="h-10 w-10 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bize Güç Verenler */}
      <section aria-labelledby="sponsors-heading" className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="sponsors-heading"
            className="text-3xl font-bold text-white text-center mb-10 italic"
          >
            Bize Güç Verenler
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {sponsors.map((s) => (
              <div
                key={s.name + s.role}
                className="glass rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="flex h-14 items-center justify-center mb-3">
                  <span className="text-lg font-bold text-white">{s.name}</span>
                </div>
                <p className="text-slate-400 text-xs">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gönüllü Yol Arkadaşlarımız */}
      <section aria-labelledby="volunteers-heading" className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="volunteers-heading"
            className="text-3xl font-bold text-white text-center mb-10 italic"
          >
            Gönüllü Yol Arkadaşlarımız
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {volunteers.map((v) => (
              <div key={v.name} className="text-center w-28">
                <div className="mx-auto h-20 w-20 rounded-full overflow-hidden ring-2 ring-amber-500/30 mb-3">
                  {v.foto ? (
                    <img
                      src={v.foto}
                      alt={v.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-white/10 flex items-center justify-center">
                      <span className="text-slate-400 text-lg font-bold">
                        {v.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-white text-sm font-medium leading-tight">
                  {v.name}
                </p>
                <p className="text-slate-400 text-xs mt-1">{v.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- Data ---------- */

const sponsors: { name: string; role: string }[] = [
  { name: 'Microsoft', role: 'Teknik Altyapı Desteği' },
  { name: 'Microsoft', role: 'Teknik Altyapı Desteği' },
  { name: 'Accessibility Foundation', role: 'Erişilebilirlik Danışmanı' },
  { name: 'Accessibility Foundation', role: 'Teknik Altyapı Desteği' },
  { name: 'Google', role: 'Erişilebilirlik Danışmanı' },
  { name: 'Accessibility Foundation', role: 'Erişilebilirlik Danışmanı' },
]

const volunteers: { name: string; role: string; foto?: string }[] = [
  { name: 'Ozan Bayırlar', role: 'Seslendiren' },
  { name: 'Ozan Bayır', role: 'Seslendiren' },
  { name: 'Ozan Gönüllür', role: 'Seslendiren' },
  { name: 'Sehnia Duvana', role: 'İçerik Üreticisi' },
  { name: 'Yasef Etana', role: 'İçerik Üreticisi' },
]
