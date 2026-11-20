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
                OZAN'IN HAYALİNDE,{' '}
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
                Bir İZ Bırakmak
              </h3>
              <div className="space-y-3 text-amber-50 leading-relaxed">
                <p className="font-semibold text-white">
                  Ozan Bayır Erişilebilir Dijital Kütüphanesi
                </p>
                <p className="italic">Bir Hayalin İzinde, Erişilebilir Bir Geleceğe…</p>
                <p>
                  Ozan Bayır’ın herkes için erişilebilir bilgi hayali, BALİZ Parmak
                  Kulübü’ndeki ekip arkadaşları tarafından sahiplenilerek
                  geliştirilmiş ve kalıcı bir projeye dönüştürülmüştür.
                </p>
                <p>
                  Bu kütüphane, yalnızca dijital bir bilgi kaynağı değil; Ozan’ın
                  hayallerini yaşatma, onun bıraktığı izi geleceğe taşıma ve
                  bilgiye erişimde fırsat eşitliği sağlama çabamızın bir sonucudur.
                </p>
              </div>
            </div>

            {/* BALİZ Hayali */}
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
                  BALİZ Hayali
                </h3>
                <div className="space-y-3 text-slate-200 leading-relaxed text-sm mb-auto">
                  <p className="font-semibold text-white uppercase tracking-wide">
                    Ozan Bayır’ın Anısına
                  </p>
                  <p className="italic">
                    Bir Hayalin, Bir Emeğin ve Kalıcı Bir Mirasın Hikâyesi
                  </p>
                  <p>
                    Ozan Bayır, BALİZ Parmak Kulübü’nün kurucularından biri olarak,
                    Adıyaman’da başlayan kuruluş sürecinden itibaren kulübün
                    gelişimine büyük emek vermiştir.
                  </p>
                  <p>
                    Yıllar boyunca sponsorluk çalışmalarından organizasyon
                    süreçlerine kadar birçok alanda sorumluluk üstlenmiş; kulübün
                    büyümesi, güçlenmesi ve daha fazla insana ulaşması için
                    özveriyle çalışmıştır.
                  </p>
                  <p>
                    6 Şubat’ta hayatını kaybeden Ozan Bayır’ın bilgiye erişim
                    konusundaki hayali, ekip arkadaşları tarafından geliştirilerek
                    Ozan Bayır Erişilebilir Dijital Kütüphanesi adıyla hayata
                    geçirilmiştir.
                  </p>
                  <p>
                    Bu proje, yalnızca bir kütüphane değil; bilgiye
                    erişilebilecek, öğrenmenin ve kendini geliştirmenin
                    destekleneceği bir alan olacaktır.
                  </p>
                  <p>
                    Ozan Bayır’ı saygı, rahmet ve minnetle anıyoruz. Bıraktığı iz,
                    gerçekleştirdiğimiz her güzel çalışmada yaşamaya devam edecek.
                  </p>
                </div>

                {/* Video play button */}
                <div className="mt-6 flex justify-center">
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
                key={s}
                className="glass rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="flex h-14 items-center justify-center">
                  <span className="text-lg font-bold text-white">{s}</span>
                </div>
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

const sponsors: string[] = [
  'Beslen Tuz',
  'Duru Meşrubat',
  'FA Motors',
  'Onur Torun',
  'Günay Ülgülü',
  'Ömer Öksüzaşık',
]

const volunteers: { name: string; role: string; foto?: string }[] = [
  { name: 'Ömer Öksüzaşık', role: 'Proje Yöneticisi' },
  { name: 'Furkan Gönç', role: 'Proje Yöneticisi' },
  { name: 'Fatma Zeynep Akçalı', role: 'Proje Yöneticisi' },
  { name: 'Necati Dilek', role: 'Seslendirmen' },
  { name: 'Umut Çabuk', role: 'Seslendirmen' },
  { name: 'Işıl Kartal', role: 'Seslendirmen' },
  { name: 'Cemre Fırıncıoğulları', role: 'Seslendirmen' },
  { name: 'Rümeysa Altay', role: 'Seslendirmen' },
  { name: 'Kardelen Küsgün', role: 'Tasarımcı' },
  { name: 'Muhammed Özer', role: 'Yazılımcı' },
  { name: 'Mert Çorukoğlu', role: 'Yazılımcı' },
  { name: 'Beraat Öztorun', role: 'Yazılımcı' },
]
