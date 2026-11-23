import anitkabirImg from '../../assets/anitkabir.jpeg'

/** Ana Sayfa ve Hakkımızda'da ortak kullanılan Biz Kimiz + Vizyon/Misyon içeriği */
export default function BizKimizContent() {
  return (
    <>
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
                alt="Anıtkabir'de Çukurova Üniversitesi çelengini taşıyan askerler ve arkalarında yürüyen BALiz Parmak Kulübü üyeleri"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-3 -bottom-3 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/30 text-white font-bold text-center">
              <div>
                <div className="text-xs">BALiz</div>
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
    </>
  )
}
