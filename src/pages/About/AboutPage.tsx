import {
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  GlobeAltIcon,
  HeartIcon,
  AcademicCapIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline'
import BizKimizContent from '../../components/content/BizKimizContent'

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
            Çukurova Üniversitesi BALiz Parmak Kulübü'nü yakından tanıyın
          </p>
        </div>
      </section>

      {/* Biz Kimiz? (Ana Sayfa ile aynı içerik) */}
      <section aria-labelledby="kimiz-heading" className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl p-8 shadow-xl lg:p-12">
            <h2
              id="kimiz-heading"
              className="text-3xl font-bold text-slate-900 text-center mb-6"
            >
              Biz Kimiz?
            </h2>
            <BizKimizContent />
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
    icon: SparklesIcon,
    title: 'İyilik ve Nezaket',
    description:
      'İncinsek de incitmemeyi, kötülük görsek de iyilikle karşılık vermeyi ve karşılık beklemeden insanların hayatına dokunmayı ilke ediniriz.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Çalışkanlık ve Sürekli Gelişim',
    description:
      'Öğrenmenin ve gelişmenin bir sınırı olmadığına inanırız. Bilgili, kültürlü, üretken ve çalışkan bireyler olarak hem kendimizi geliştirmeyi hem de topluma değer katmayı hedefleriz.',
  },
  {
    icon: HeartIcon,
    title: 'Sevgi ve Saygı',
    description:
      'Her bireyin değerli olduğuna inanır, farklılıklarımızı zenginlik olarak görürüz. İnsan ilişkilerimizde sevgiyi, saygıyı, hoşgörüyü ve anlayışı esas alırız.',
  },
  {
    icon: UserGroupIcon,
    title: 'Gönüllülük ve Dayanışma',
    description:
      'Birlikte hareket etmenin gücüne inanırız. Bilgimizi, zamanımızı ve emeğimizi paylaşarak birbirimize destek olur, iyiliği birlikte çoğaltırız.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Toplumsal Fayda ve Tatlı İzler',
    description:
      'Yalnızca kendimiz için değil, toplumumuz için de üretiriz. Hayata geçirdiğimiz projelerle insanların yaşamına değer katmayı ve ardımızda kalıcı, tatlı izler bırakmayı amaçlarız.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Eşitlik ve Kapsayıcılık',
    description:
      'Engellerin değil, fırsatların konuşulduğu bir dünya için çalışırız. Her bireyin eşit fırsatlara sahip olduğu, kendini özgürce ifade edebildiği ve potansiyelini geliştirebildiği bir topluluk oluşturmayı benimseriz.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Dürüstlük ve Güvenilirlik',
    description:
      'Sözlerimizde ve davranışlarımızda dürüstlüğü, sorumluluğu ve şeffaflığı esas alırız. Birbirimize duyduğumuz güveni, güçlü ve sürdürülebilir birlikteliğimizin temeli olarak görürüz.',
  },
]

