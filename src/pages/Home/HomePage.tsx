import { Link } from 'react-router-dom'
import {
  BookOpenIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import anitkabirImg from '../../assets/anitkabir.jpeg'

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
            Çukurova Üniversitesi'nde İZ bırakan, birlikte değer üreten öğrenci kulübü
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/hakkimizda"
              className="rounded-xl bg-amber-500 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
            >
              Bizi Tanıyın
            </Link>
            <Link
              to="/yonetim"
              className="rounded-xl border border-white/20 px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Yönetim Kadromuz
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
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
              <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
                <p>
                  <strong>Çukurova Üniversitesi BALiz Parmak Kulübü</strong>,
                  sürekli kendini yenileyen, gelişen, geliştiren ve
                  gerçekleştirdiği projelerle topluma kalıcı izler bırakmayı
                  hedefleyen, üniversitenin en tatlı öğrenci topluluğudur.
                </p>
                <p>
                  Eğitimden sanata, kültürden sosyal sorumluluğa kadar birçok
                  alanda geliştirdiği projelerle bireylerin potansiyellerini
                  keşfetmelerine, kendilerini geliştirmelerine ve toplumsal
                  yaşamda aktif rol almalarına katkı sağlamayı amaçlamaktadır.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="h-64 sm:h-72 overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={anitkabirImg}
                      alt="Anıtkabir'de Çukurova Üniversitesi çelengini taşıyan askerler ve arkalarında yürüyen BalİZ Parmak Kulübü üyeleri"
                      className="h-full w-full object-cover"
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

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-amber-600 mb-3">
                  Vizyonumuz
                </h3>
                <p className="text-slate-600 italic border-l-4 border-amber-400 pl-4 py-2">
                  Engellerin değil, fırsatların konuşulduğu; farklılıkların
                  zenginlik olarak görüldüğü ve herkesin eşit imkânlarla geleceğe
                  iz bırakabildiği bir toplum oluşturmak.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-600 mb-3">
                  Misyonumuz
                </h3>
                <p className="text-slate-600">
                  Gençlerin bilgi, birikim, yaratıcılık ve gönüllülük ruhunu bir
                  araya getirerek birlikte üretmek, sürekli gelişmek ve topluma
                  değer katan projeler hayata geçirmek. Dayanışmayı,
                  kapsayıcılığı ve fırsat eşitliğini güçlendirerek dokunduğumuz
                  her hayatta tatlı bir iz bırakmak.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-3 text-center text-slate-700 leading-relaxed">
              <p>
                BALiz Parmak Kulübü olarak, her bireyin topluma katabileceği bir
                değer olduğuna inanıyor; gerçekleştirdiğimiz projelerle yalnızca
                bugüne değil, geleceğe de kalıcı ve anlamlı izler bırakmayı
                hedefliyoruz.
              </p>
              <p className="font-semibold italic text-slate-800">
                Çünkü biz inanıyoruz ki gelecek, BALiz Parmak'la daha tatlı
                gelecek!
              </p>
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
                BALiz Parmak Kulübü olarak gençlerin sosyalleştiği, eğlendiği,
                öğrendiği ve birlikte geliştiği bir topluluk oluşturuyoruz.
                Düzenlediğimiz etkinlikler ve hayata geçirdiğimiz projelerle hem
                üniversite yaşamını renklendiriyor hem de topluma tatlı izler
                bırakıyoruz.
              </p>
              <ul className="space-y-3">
                {faaliyetler.map((x) => (
                  <li key={x.title} className="flex items-start gap-3 text-slate-200">
                    <CheckCircleIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="text-white">{x.title}:</strong>{' '}
                      {x.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Değerlerimiz
              </h3>
              <p className="text-slate-300 mb-4">
                BALiz Parmak Kulübü olarak iyiliğin, nezaketin, sevginin ve
                dayanışmanın dünyayı güzelleştirdiğine inanıyoruz. İncinsek de
                incitmemeyi, kötülük görsek de iyilikle karşılık vermeyi ve her
                koşulda insan olmanın güzelliklerini yaşatmayı ilke ediniyoruz.
              </p>
              <p className="text-slate-300 mb-6">
                Bilgili, kültürlü, çalışkan ve duyarlı gençler olarak yalnızca
                kendimizi geliştirmeyi değil, edindiğimiz birikimle topluma değer
                katmayı ve ardımızda tatlı izler bırakmayı amaçlıyoruz.
              </p>
              <h4 className="text-lg font-semibold text-amber-400 mb-3">
                Temel Değerlerimiz
              </h4>
              <ul className="space-y-3">
                {degerler.map((x) => (
                  <li key={x.title} className="flex items-start gap-3 text-slate-200">
                    <CheckCircleIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="text-white">{x.title}:</strong>{' '}
                      {x.description}
                    </span>
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
            <div className="text-slate-600 text-center max-w-3xl mx-auto mb-8 space-y-3">
              <p>
                BALiz Parmak Kulübü olarak güçlü bir geleceğin, doğru insanlarla
                kurulan anlamlı bağlarla şekillendiğine inanıyoruz.
              </p>
              <p>
                Üyelerimizi girişimciler, akademisyenler, iş dünyasının
                temsilcileri ve farklı alanlarda başarıya ulaşmış kişilerle
                buluşturarak bilgi, deneyim ve fırsatların paylaşıldığı güçlü bir
                iletişim ağı oluşturuyoruz.
              </p>
              <p>
                Gençlerin yeni insanlarla tanışmasını, farklı bakış açıları
                kazanmasını, kendilerini geliştirmesini ve gelecekteki
                kariyerlerine değer katacak bağlantılar kurmasını destekliyoruz.
              </p>
              <p className="font-medium text-slate-700">
                Çünkü biz, yalnızca yeni insanlarla tanışmayı değil; birlikte
                öğrenmeyi, birlikte büyümeyi ve birbirimizin hayatında tatlı
                izler bırakmayı önemsiyoruz.
              </p>
            </div>
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
  {
    title: 'Sosyal ve Eğlenceli Etkinlikler',
    description:
      'Çiğ köfte partileri, geziler, festivaller, tanışma buluşmaları ve öğrencilerin keyifli vakit geçirebileceği çeşitli organizasyonlar.',
  },
  {
    title: 'Teknoloji ve Girişimcilik',
    description:
      'Yapay zekâ zirveleri, hackathon yarışmaları, yenilikçi fikir yarışmaları ve gençlerin yaratıcılıklarını ortaya çıkarabilecekleri etkinlikler.',
  },
  {
    title: 'Eğitim ve Kişisel Gelişim',
    description:
      'İşaret dili, sosyal medya yönetimi, etkili metin yazarlığı, iletişim ve liderlik eğitimlerinin yanı sıra Google, Microsoft ve Meta gibi teknoloji şirketlerinin sunduğu eğitim ve sertifika programlarına yönelik bilgilendirme ve gelişim çalışmaları.',
  },
  {
    title: 'Çevre ve Sürdürülebilirlik',
    description:
      'Sıfır atık projeleri, geri dönüşüm çalışmaları ve çevre bilincini artırmaya yönelik sosyal sorumluluk faaliyetleri.',
  },
  {
    title: 'Hayvan Hakları ve Gönüllülük',
    description:
      'Sokak hayvanlarının yaşam koşullarını iyileştirmeye yönelik farkındalık, beslenme ve gönüllülük projeleri.',
  },
  {
    title: 'Erişilebilirlik ve Toplumsal Fayda',
    description:
      'Engelli bireylerin sosyal ve eğitsel yaşama katılımını destekleyen, fırsat eşitliğini ve dayanışmayı güçlendiren projeler.',
  },
]

const degerler = [
  { title: 'İyilik ve Nezaket', description: 'İncinsek de incitmemek, karşılık beklemeden iyilik yapmak.' },
  { title: 'Sevgi ve Saygı', description: 'Farklılıklarımızı zenginlik bilerek herkese anlayışla yaklaşmak.' },
  { title: 'Çalışkanlık ve Gelişim', description: 'Sürekli öğrenmek, kendimizi yenilemek ve daha iyisini başarmak için emek vermek.' },
  { title: 'Birlik ve Dayanışma', description: 'Birlikte hareket etmek, birbirimize destek olmak ve başarıyı paylaşmak.' },
  { title: 'Toplumsal Fayda', description: 'Bilgimizi, emeğimizi ve enerjimizi toplumun yararına dönüştürmek.' },
  { title: 'Eşitlik ve Kapsayıcılık', description: 'Her bireyin değerli olduğuna inanmak ve herkes için fırsat eşitliğini savunmak.' },
  { title: 'Dürüstlük ve Güven', description: 'Şeffaf, samimi ve sorumluluk sahibi bir anlayışla hareket etmek.' },
]

const etkiStats = [
  { value: '750+', label: 'Desteklenen Öğrenci' },
  { value: '45+', label: 'Gönüllü Eğitmen' },
  { value: '120+', label: 'Eğitim Etkinliği' },
  { value: '2.000+', label: 'Dağıtılan Kaynak' },
]

const rakamStats = [
  { value: '10+', label: 'Yıllık Tecrübe' },
  { value: '5.000+', label: 'Aktif Üye' },
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
    title: 'Küçük Prens',
    author: 'Antoine de Saint-Exupéry',
    description: 'Sevgi, dostluk ve hayata çocuk gözüyle bakmanın değeri üzerine zamansız bir masal.',
  },
  {
    title: 'Küçük Kadınlar',
    author: 'Louisa May Alcott',
    description: 'Dört kız kardeşin dayanışmasını, hayallerini ve büyüme yolculuğunu anlatan bir klasik.',
  },
  {
    title: 'İnsan Ne ile Yaşar?',
    author: 'Lev Tolstoy',
    description: 'İnsanı yaşatanın sevgi ve iyilik olduğunu anlatan, düşündüren kısa öyküler.',
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
    description: 'Profesyonel kurumlarla bağlantılar kurarak üyelerimize staj ve iş imkânları sağlıyoruz.',
  },
]
