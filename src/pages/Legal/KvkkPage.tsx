export default function KvkkPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-text-primary">
        KVKK Aydinlatma Metni
      </h1>
      <p className="mt-2 text-text-secondary">
        Kisisel verilerinizin nasil islendigi hakkinda bilgi.
      </p>

      <article className="prose mt-10 max-w-none text-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-text-primary">
            1. Veri Sorumlusu
          </h2>
          <p>
            Cukurova Universitesi Baliz Parmak Kulubu olarak kisisel verilerinizin
            korunmasina onem veriyoruz. Bu aydinlatma metni, 6698 sayili Kisisel Verilerin
            Korunmasi Kanunu (KVKK) kapsaminda hazirlanmistir.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            2. Islenen Kisisel Veriler
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Kimlik bilgileri (ad, soyad)</li>
            <li>Iletisim bilgileri (e-posta adresi)</li>
            <li>Ozel nitelikli kisisel veriler (engelli raporu/belgesi)</li>
            <li>Kullanim verileri (sinav tercihleri, ilerleme durumu)</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            3. Verilerin Islenmesi Amaci
          </h2>
          <p>
            Toplanan veriler yalnizca platform hizmetlerinin sunulmasi,
            kullanicilarin sinav hazirlik surecinin desteklenmesi ve yasal
            yukumluluklerin yerine getirilmesi amaciyla islenmektedir.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-text-primary">
            4. Ozel Nitelikli Veriler
          </h2>
          <p>
            Engelli raporu gibi hassas veriler, KVKK m.6 uyarinca acik rizaniz
            dogrultusunda islenir. Bu belgeler sifrelenmis ortamda saklanir ve
            yalnizca yetkilendirilmis personel tarafindan erisilebilir.
          </p>
        </section>

        {/* TODO: Tam metin hukuk danismani ile tamamlanacak */}
      </article>
    </div>
  )
}
