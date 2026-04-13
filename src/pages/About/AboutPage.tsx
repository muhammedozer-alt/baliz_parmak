import {
  ShieldCheckIcon,
  BoltIcon,
  CursorArrowRaysIcon,
  HeartIcon,
  AcademicCapIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline'
import logoImg from '../../assets/logo.png'

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section aria-labelledby="about-heading" className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            id="about-heading"
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Hakkımızda
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Çukurova Üniversitesi BalİZ Parmak Kulübü'nü yakından tanıyın
          </p>
        </div>
      </section>

      {/* Biz Kimiz? */}
      <section aria-labelledby="kimiz-heading" className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl p-8 shadow-xl lg:p-12">
            <h2
              id="kimiz-heading"
              className="text-3xl font-bold text-slate-900 mb-6"
            >
              Biz Kimiz?
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Çukurova Üniversitesi BalİZ Parmak Kulübü, bireylerin
                  karşılaştığı fiziksel, sosyal ve psikolojik engelleri
                  aşmalarına destek olmayı hedefleyen, ilham veren bir öğrenci
                  kulübüdür.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Kapsayıcılığı ve farkındalığı merkezine alarak öğrencilerin
                  kişisel ve sosyal gelişimlerine katkı sağlamaktadır.
                  Kullanıcılarımızın memnuniyeti, bizim için en önemli değerdir.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Misyonumuz, bilginin akıcı ve besleyici bir şekilde
                  paylaşılmasını sağlamaktır. Vizyonumuz ise engelleri aşan,
                  herkesin potansiyelini gerçekleştirebildiği bir topluluk
                  olmaktır.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm h-64 md:h-80 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={logoImg}
                    alt="BalİZ Parmak Kulübü Logo"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section aria-labelledby="vizyon-misyon-heading" className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="vizyon-misyon-heading" className="sr-only">
            Vizyon ve Misyon
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="glass rounded-2xl p-8 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 mb-4">
                <AcademicCapIcon className="h-6 w-6 text-amber-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vizyonumuz</h3>
              <p className="text-slate-300 italic leading-relaxed">
                "Herkesin potansiyelini istediği şekilde gerçekleştirebildiği;
                engellerin değil, hayallerin konuşulduğu bir birliktelik
                oluşturmaktır."
              </p>
            </div>

            <div className="glass rounded-2xl p-8 shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 mb-4">
                <HeartIcon className="h-6 w-6 text-amber-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Misyonumuz</h3>
              <p className="text-slate-300 leading-relaxed">
                Sosyal, kültürel ve fiziksel engelleri aşmak için farkındalık
                yaratmak, kapsayıcı projeler geliştirmek ve toplumun genelinde
                empati, dayanışma ve erişilebilirlik kültürünü yaygınlaştırmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section aria-labelledby="degerler-heading" className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="degerler-heading"
            className="text-3xl font-bold text-white text-center mb-10"
          >
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {degerler.map((d) => (
              <div key={d.title} className="glass rounded-2xl p-8 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 mb-4">
                  <d.icon className="h-6 w-6 text-amber-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {d.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

/* ---------- Data ---------- */

const degerler = [
  {
    icon: ShieldCheckIcon,
    title: 'Güvenilirlik',
    description:
      'Kullanıcıların bilgilerini güvenle saklar, doğru ve zamanında duyurular yapılmasını sağlarız.',
  },
  {
    icon: BoltIcon,
    title: 'Hız',
    description:
      'Duyurularınızı hızlıca oluşturabilir ve anında paylaşabilirsiniz. Sistemimiz her zaman hızlı ve kesintisiz çalışır.',
  },
  {
    icon: CursorArrowRaysIcon,
    title: 'Kullanım Kolaylığı',
    description:
      'Herkesin rahatlıkla kullanabileceği sade ve anlaşılır bir arayüz tasarladık. Teknik bilgi gerektirmez.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Eşitlik ve Kapsayıcılık',
    description:
      'Fırsat eşitliği ilkesiyle hareket eder, her bireyin potansiyelini gerçekleştirebileceği ortamı sağlarız.',
  },
  {
    icon: HeartIcon,
    title: 'Gönüllülük ve Dayanışma',
    description:
      'Gönüllülük esasıyla hareket eden topluluğumuz, dayanışma ruhunu her projede yaşatır.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Şeffaflık',
    description:
      'Tüm süreçlerimizde şeffaflığı ve güvenilirliği ön planda tutarak topluluk güvenini koruruz.',
  },
]

