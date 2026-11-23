export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-text-primary">
        Kullanım Sözleşmesi
      </h1>
      <p className="mt-2 text-text-secondary">
        Platformun kullanımına ilişkin şartlar ve koşullar.
      </p>

      <article className="prose mt-10 max-w-none text-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-text-primary">
            1. Genel Hükümler
          </h2>
          <p>
            BALiz Parmak Eğitim Platformu, Çukurova Üniversitesi BALiz Parmak
            Kulübü tarafından kâr amacı gütmeksizin işletilmektedir. Platform
            ticari amaçla kullanılamaz.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            2. Kullanım Koşulları
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Platform içerikleri yalnızca kişisel eğitim amaçlı kullanılabilir.</li>
            <li>İçeriklerin kopyalanması, dağıtılması veya ticari kullanımı yasaktır.</li>
            <li>Kullanıcılar doğru ve güncel bilgi sağlamakla yükümlüdür.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            3. Sorumluluk Sınırlaması
          </h2>
          <p>
            Platform eğitim amaçlı içerik sunmakta olup, sınav sonuçlarına
            ilişkin herhangi bir garanti vermemektedir.
          </p>
        </section>

        {/* TODO: Tam metin hukuk danismani ile tamamlanacak */}
      </article>
    </div>
  )
}
