export default function KvkkPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-text-primary">
        KVKK Aydınlatma Metni
      </h1>
      <p className="mt-2 text-text-secondary">
        Kişisel verilerinizin nasıl işlendiği hakkında bilgi.
      </p>

      <article className="prose mt-10 max-w-none text-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-text-primary">
            1. Veri Sorumlusu
          </h2>
          <p>
            Çukurova Üniversitesi BALiz Parmak Kulübü olarak kişisel verilerinizin
            korunmasına önem veriyoruz. Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin
            Korunması Kanunu (KVKK) kapsamında hazırlanmıştır.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            2. İşlenen Kişisel Veriler
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Kimlik bilgileri (ad, soyad)</li>
            <li>İletişim bilgileri (e-posta adresi)</li>
            <li>Özel nitelikli kişisel veriler (engelli raporu/belgesi)</li>
            <li>Kullanım verileri (sınav tercihleri, ilerleme durumu)</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            3. Verilerin İşlenme Amacı
          </h2>
          <p>
            Toplanan veriler yalnızca platform hizmetlerinin sunulması,
            kullanıcıların sınav hazırlık sürecinin desteklenmesi ve yasal
            yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            4. Özel Nitelikli Veriler
          </h2>
          <p>
            Engelli raporu gibi hassas veriler, KVKK m.6 uyarınca açık rızanız
            doğrultusunda işlenir. Bu belgeler şifrelenmiş ortamda saklanır ve
            yalnızca yetkilendirilmiş personel tarafından erişilebilir.
          </p>
        </section>

        {/* TODO: Tam metin hukuk danismani ile tamamlanacak */}
      </article>
    </div>
  )
}
