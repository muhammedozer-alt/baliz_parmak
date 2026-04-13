export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-text-primary">
        Kullanim Sozlesmesi
      </h1>
      <p className="mt-2 text-text-secondary">
        Platformu kullanimia iliskin sartlar ve kosullar.
      </p>

      <article className="prose mt-10 max-w-none text-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-text-primary">
            1. Genel Hukumler
          </h2>
          <p>
            Baliz Parmak Egitim Platformu, Cukurova Universitesi Baliz Parmak
            Kulubu tarafindan kar amaci gutmeksizin isletilmektedir. Platform
            ticari amacla kullanilamaz.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            2. Kullanim Kosullari
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Platform icerikleri yalnizca kisisel egitim amacli kullanilabilir.</li>
            <li>Iceriklerin kopyalanmasi, dagitilmasi veya ticari kullanimi yasaktir.</li>
            <li>Kullanicilar dogru ve guncel bilgi saglamakla yukumludur.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            3. Sorumluluk Sinirlamasi
          </h2>
          <p>
            Platform egitim amacli icerik sunmakta olup, sinav sonuclarina
            iliskin herhangi bir garanti vermemektedir.
          </p>
        </section>

        {/* TODO: Tam metin hukuk danismani ile tamamlanacak */}
      </article>
    </div>
  )
}
