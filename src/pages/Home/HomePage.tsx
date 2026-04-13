import { Link } from 'react-router-dom'
import {
  BookOpenIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import logoImg from '../../assets/logo.png'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            BALİZ PARMAK{' '}
            <span className="text-amber-400">KULÜBÜ</span>
          </h1>
          <p className="mt-4 text-xl text-slate-300">
            Çukurova Üniversitesi'nde engelleri aşan, ilham veren öğrenci kulübü
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/hakkimizda"
              className="rounded-xl bg-amber-500 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
            >
              Bizi Tanıyın
            </Link>
            <Link
              to="/duyurular"
              className="rounded-xl border border-white/20 px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Duyurular
            </Link>
          </div>
        </div>
      </section>

      {/* Biz Kimiz? */}
      <section aria-labelledby="bizkimiz-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl p-8 shadow-xl lg:p-12">
            <h2
              id="bizkimiz-heading"
              className="text-3xl font-bold text-slate-900 text-center mb-6"
            >
              Biz Kimiz?
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Çukurova Üniversitesi BalİZ Parmak Kulübü, bireylerin karşılaştığı
              fiziksel, sosyal ve psikolojik engelleri aşmalarına destek olmayı
              hedefleyen, ilham veren bir öğrenci kulübüdür. Kapsayıcılığı ve
              farkındalığı merkezine alarak öğrencilerin kişisel ve sosyal
              gelişimlerine katkı sağlamaktadır.
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
              <div>
                <h3 className="text-xl font-bold text-amber-600 mb-3">
                  Vizyonumuz
                </h3>
                <p className="text-slate-600 italic border-l-4 border-amber-400 pl-4 py-2 mb-6">
                  "Herkesin potansiyelini istediği şekilde gerçekleştirebildiği;
                  engellerin değil, hayallerin konuşulduğu bir birliktelik
                  oluşturmaktır."
                </p>

                <h3 className="text-xl font-bold text-amber-600 mb-3">
                  Misyonumuz
                </h3>
                <p className="text-slate-600 mb-2">
                  Sosyal, kültürel ve fiziksel engelleri aşmak için farkındalık
                  yaratmak, kapsayıcı projeler geliştirmektir.
                </p>
                <p className="text-slate-600">
                  BalİZ Parmak, yalnızca bireysel gelişimi değil; aynı zamanda
                  toplumun genelinde empati, dayanışma ve erişilebilirlik
                  kültürünü yaygınlaştırmayı amaçlar.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="h-64 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 shadow-inner flex items-center justify-center p-6">
                    <img
                      src={logoImg}
                      alt="BalİZ Parmak Kulübü Logo"
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <div className="absolute -right-3 -bottom-3 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/30 text-white font-bold text-center">
                    <div>
                      <div className="text-xs">BalİZ</div>
                      <div className="text-xs">Parmak</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Son Duyurular */}
      <section aria-labelledby="duyurular-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle id="duyurular-heading" title="Son Duyurular" subtitle="Etkinlik ve duyurularımızı takip edin" />

          <div className="mx-auto max-w-3xl glass rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
              <h3 className="text-xl font-bold text-white">
                Mektup Arkadaşlığı Projemizi Gerçekleştirdik
              </h3>
              <span className="inline-block shrink-0 rounded-full bg-amber-500/20 px-3 py-1 text-sm text-amber-400 border border-amber-500/30">
                29.12.2025
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Kalplerimizi birbirine bağlayan mektuplarla çıktığımız bu güzel
              yolculukta, 26 Aralık'ta Kayseri / Develi'de bulunan Turan
              Köylüoğlu İlkokulu'nu ziyaret ettik. Mektup arkadaşlığı projemiz
              kapsamında, daha önce mektuplaştığımız çocuklarla bir araya gelerek
              keyifli anlar yaşadık.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/duyurular"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
            >
              Tüm Duyuruları Görüntüle
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Faaliyetlerimiz & Değerlerimiz */}
      <section aria-labelledby="faaliyet-deger-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="faaliyet-deger-heading" className="sr-only">
            Faaliyetlerimiz ve Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Faaliyetlerimiz
              </h3>
              <p className="text-slate-300 mb-6">
                BalİZ Parmak Kulübü olarak, engelli bireylerin yaşamını
                kolaylaştırmak ve toplumsal farkındalığı artırmak için çeşitli
                projeler yürütüyoruz.
              </p>
              <ul className="space-y-3">
                {faaliyetler.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-200">
                    <CheckCircleIcon
                      className="h-5 w-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Değerlerimiz
              </h3>
              <p className="text-slate-300 mb-6">
                Gönüllülük esasıyla hareket eden topluluğumuz, öğrencilerin
                kendilerini gerçekleştirmeleri için gerekli ortamı sağlar. Fırsat
                eşitliği ve kapsayıcılık ilkelerimizden asla taviz vermiyoruz.
              </p>
              <ul className="space-y-3">
                {degerler.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-slate-200">
                    <CheckCircleIcon
                      className="h-5 w-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Etki Alanımız */}
      <section aria-labelledby="etki-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-10 shadow-xl shadow-amber-500/15">
            <h2
              id="etki-heading"
              className="text-2xl font-bold text-white text-center mb-10"
            >
              Etki Alanımız
            </h2>
            <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
              {etkiStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold text-white lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-amber-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etkinliklerimiz */}
      <section aria-labelledby="etkinlik-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle id="etkinlik-heading" title="Etkinliklerimiz" subtitle="Katılabileceğiniz etkinlikler ve kaynaklar" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {etkinlikler.map((e) => (
              <div
                key={e.title}
                className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-40 items-center justify-center bg-amber-500/10">
                  <e.icon
                    className="h-16 w-16 text-amber-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {e.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{e.description}</p>
                  {e.link ? (
                    <Link
                      to={e.link}
                      className="inline-block rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-400 transition-colors"
                    >
                      Keşfet
                    </Link>
                  ) : (
                    <span className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-slate-400 border border-white/10">
                      Yakında
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitap Önerileri */}
      <section aria-labelledby="kitap-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle id="kitap-heading" title="Kitap Önerileri" subtitle="Kulübümüzün ilham veren kitap önerileri" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kitaplar.map((kitap) => (
              <div
                key={kitap.title}
                className="glass rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="flex h-36 items-center justify-center bg-amber-500/10">
                  <BookOpenIcon
                    className="h-14 w-14 text-amber-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {kitap.title}
                  </h3>
                  <p className="text-amber-400 text-sm mb-2">
                    Yazar: {kitap.author}
                  </p>
                  <p className="text-slate-400 text-sm">{kitap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rakamlarla BalİZ Parmak */}
      <section aria-labelledby="rakamlar-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl py-12 px-4 shadow-xl sm:px-8">
            <h2
              id="rakamlar-heading"
              className="text-2xl font-bold text-white text-center mb-12"
            >
              Rakamlarla BalİZ Parmak
            </h2>
            <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
              {rakamStats.map((stat) => (
                <div key={stat.label}>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/30 mb-3">
                    <span className="text-xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network */}
      <section aria-labelledby="network-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl p-8 shadow-xl lg:p-12">
            <h2
              id="network-heading"
              className="text-3xl font-bold text-slate-900 text-center mb-4"
            >
              Network
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              BalİZ Parmak, üyeleri arasında güçlü bir bağ ve dayanışma ağı
              oluşturur. Sosyal girişimciler, akademisyenler ve sivil toplum
              kuruluşları ile iş birliği yaparak öğrencilere ilham verici
              buluşmalar ve yeni fırsatlar sunar.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {networkItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-amber-50 border border-amber-200/50 p-6"
                >
                  <item.icon
                    className="h-10 w-10 text-amber-500 mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Platformu CTA */}
      <section aria-labelledby="egitim-cta-heading" className="py-16 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 p-12 shadow-xl shadow-amber-500/15 text-center">
            <AcademicCapIcon
              className="mx-auto h-12 w-12 text-white/80"
              aria-hidden="true"
            />
            <h2
              id="egitim-cta-heading"
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
            >
              Erişilebilir Eğitim Platformu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
              Görme engelli bireyler için KPSS ve YKS sınav hazırlığı. Sesli ders
              içerikleri, deneme sınavları ve kişiselleştirilmiş öğrenme deneyimi.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/kayit"
                className="w-full sm:w-auto rounded-xl bg-white px-8 py-3.5 text-lg font-semibold text-amber-600 shadow-lg hover:bg-slate-50 transition-colors"
              >
                Hemen Başla
              </Link>
              <Link
                to="/sinav"
                className="w-full sm:w-auto rounded-xl border-2 border-white/60 px-8 py-3.5 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Sınavlara Göz At
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- Components ---------- */

function SectionTitle({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <div className="text-center mb-10">
      <h2 id={id} className="text-3xl font-bold text-white">
        {title}
      </h2>
      <p className="text-slate-400 mt-2">{subtitle}</p>
    </div>
  )
}

/* ---------- Data ---------- */

const faaliyetler = [
  'Erişilebilir gezi ve eğlence etkinlikleri',
  'İşaret dili eğitim programları',
  'Erişilebilirlik çalışmaları',
  'Sosyal entegrasyon etkinlikleri',
]

const degerler = [
  'Eşitlik ve kapsayıcılık',
  'Gönüllülük ve dayanışma',
  'Şeffaflık ve güvenilirlik',
]

const etkiStats = [
  { value: '750+', label: 'Desteklenen Öğrenci' },
  { value: '45+', label: 'Gönüllü Eğitmen' },
  { value: '120+', label: 'Eğitim Etkinliği' },
  { value: '2000+', label: 'Dağıtılan Kaynak' },
]

const rakamStats = [
  { value: '5+', label: 'Yıllık Tecrübe' },
  { value: '250+', label: 'Aktif Üye' },
  { value: '30+', label: 'Yıllık Etkinlik' },
  { value: '15+', label: 'Kurumsal Partner' },
]

const etkinlikler = [
  {
    icon: BookOpenIcon,
    title: 'Ozan Bayır Kütüphanesi',
    description: 'İşaret dili eğitim videoları ve kitap önerilerimizi keşfedin.',
    link: '/kutuphane',
  },
  {
    icon: UserGroupIcon,
    title: 'Atölyeler',
    description: 'Yakında gerçekleşecek işaret dili ve iletişim atölyelerimiz.',
    link: null,
  },
  {
    icon: CalendarIcon,
    title: 'Etkinlik Takvimi',
    description: 'Tüm etkinliklerimizi takip edebileceğiniz etkinlik takvimimiz.',
    link: null,
  },
]

const kitaplar = [
  {
    title: 'Körlük',
    author: 'Jose Saramago',
    description: 'Toplumsal çöküş ve insan doğası üzerine çarpıcı bir roman.',
  },
  {
    title: 'Empati',
    author: 'Adam Fawer',
    description: 'İnsan zihninin sınırlarını ve empati gücünü sorgulatan sürekleyici bir roman.',
  },
  {
    title: 'Zorba',
    author: 'Nikos Kazancakis',
    description: 'Hayatın anlamı, özgürlük ve dostluk üzerine unutulmaz bir başyapıt.',
  },
]

const networkItems = [
  {
    icon: UserGroupIcon,
    title: 'Öğrenci Toplulukları',
    description: 'Diğer öğrenci toplulukları ile iş birliği yaparak ortak projeler geliştiriyoruz.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Sivil Toplum Kuruluşları',
    description: "STK'lar ile birlikte çalışarak toplumsal fayda odaklı projeler üretiyoruz.",
  },
  {
    icon: BriefcaseIcon,
    title: 'Profesyonel Kurumlar',
    description: 'Profesyonel kurumlarla bağlantılar kurarak üyelerimize staj ve iş imkanları sağlıyoruz.',
  },
]
