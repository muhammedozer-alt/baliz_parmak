import { useState } from 'react'

const faqItems = [
  {
    question: 'Platforma nasil kayit olabilirim?',
    answer:
      'Ana sayfadaki "Kayit Ol" butonuna tiklayarak e-posta adresiniz ve kisisel bilgilerinizle kayit olabilirsiniz.',
  },
  {
    question: 'Engelli belgemi nasil yukleyebilirim?',
    answer:
      'Kayit olduktan sonra profil ayarlarindan engelli belgenizi yukleyebilirsiniz. Belgeniz admin tarafindan incelenip onaylanacaktir.',
  },
  {
    question: 'Ses dosyalari yuklenmiyor, ne yapmaliyim?',
    answer:
      'Internet baglantinizi kontrol edin. Sorun devam ederse sayfayi yenileyip tekrar deneyin. Hala cozulmediyse "Hata Bildir" butonunu kullanin.',
  },
  {
    question: 'Deneme sinavinda kaldigim yerden devam edebilir miyim?',
    answer:
      'Evet! Ilerlemeniz otomatik olarak kaydedilir. Siteyi kapatip actiktan sonra kaldiginiz sorudan devam edebilirsiniz.',
  },
  {
    question: 'Ses hizini nasil degistirebilirim?',
    answer:
      'Ses oynaticisindaki hiz butonuyla 0.75x, 1x, 1.25x ve 1.5x secenekleri arasinda gecis yapabilirsiniz.',
  },
  {
    question: 'Platform ucretsiz mi?',
    answer:
      'Evet, Baliz Parmak Egitim Platformu tamamen ucretsizdir ve kar amaci gutmez.',
  },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-text-primary">
        Sikca Sorulan Sorular
      </h1>
      <p className="mt-2 text-text-secondary">
        Merak ettiginiz sorularin cevaplarini burada bulabilirsiniz.
      </p>

      <div className="mt-10 space-y-3">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-text-primary hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>
              <span
                className={`ml-4 text-xl transition-transform ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                className="border-t border-gray-100 px-6 py-4 text-text-secondary"
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hata Bildir */}
      <div className="mt-12 rounded-2xl border border-gray-200 p-8 text-center">
        <h2 className="text-xl font-semibold text-text-primary">
          Sorunuz burada yok mu?
        </h2>
        <p className="mt-2 text-text-secondary">
          Bir hata veya sorun bildirmek isterseniz asagidaki butonu kullanin.
        </p>
        <button className="mt-4 rounded-lg bg-danger px-6 py-2.5 font-medium text-text-inverse hover:bg-red-700 transition-colors">
          Hata Bildir
        </button>
      </div>
    </div>
  )
}
