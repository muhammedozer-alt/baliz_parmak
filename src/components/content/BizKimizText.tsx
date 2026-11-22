/**
 * "Biz Kimiz?" tanıtım metni. Ana Sayfa ve Hakkımızda'da ortak kullanılır;
 * metin değişecekse yalnızca burası güncellenir.
 */
export default function BizKimizText({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-4 text-slate-700 leading-relaxed ${className}`}>
      <p>
        <strong>Çukurova Üniversitesi BALiz Parmak Kulübü</strong>, iyiliği,
        dayanışmayı ve birlikte gelişmeyi benimseyen; gerçekleştirdiği projelerle
        topluma değer katmayı ve geleceğe tatlı izler bırakmayı hedefleyen bir
        öğrenci topluluğudur.
      </p>
      <p>
        Bizler; öğrenmeyi seven, kendini sürekli geliştiren, çalışkan, üretken ve
        hayallerinin peşinden giden gençleriz. Birlikte eğleniyor, yeni dostluklar
        kuruyor, bilgi ve deneyimlerimizi paylaşıyor, ortak hedefler
        doğrultusunda çalışıyoruz.
      </p>
      <p>
        Eğitimden teknolojiye, kültür ve sanattan sosyal sorumluluğa kadar birçok
        alanda düzenlediğimiz etkinliklerle gençlerin kişisel, sosyal ve kültürel
        gelişimlerini destekliyor; gönüllülük, fırsat eşitliği ve toplumsal
        faydayı çalışmalarımızın merkezinde tutuyoruz.
      </p>
      <p className="font-semibold italic text-slate-800">
        İncinsek de incitmemeyi, kötülük görsek de iyilik yapmayı ilke ediniyor;
        küçük bir iyiliğin bile büyük değişimlere öncülük edebileceğine
        inanıyoruz.
      </p>
      <p>
        Bizim için BALiz Parmak, yalnızca bir öğrenci kulübü değil; birlikte
        büyüdüğümüz, birbirimizden öğrendiğimiz ve güzel anılar biriktirdiğimiz
        bir yol arkadaşlığıdır.
      </p>
      <p className="font-semibold italic text-slate-800">
        Çünkü biz, birlikte daha güçlü olduğumuza ve geleceğin BALiz Parmak'la
        daha tatlı geleceğine inanıyoruz!
      </p>
    </div>
  )
}
