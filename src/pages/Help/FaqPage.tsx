import { useState } from 'react'

const faqItems = [
  {
    question: 'Platforma nasıl kayıt olabilirim?',
    answer:
      'Ana sayfadaki "Kayıt Ol" butonuna tıklayarak e-posta adresiniz ve kişisel bilgilerinizle kayıt olabilirsiniz.',
  },
  {
    question: 'Engelli belgemi nasıl yükleyebilirim?',
    answer:
      'Kayıt olduktan sonra profil ayarlarından engelli belgenizi yükleyebilirsiniz. Belgeniz yönetici tarafından incelenip onaylanacaktır.',
  },
  {
    question: 'Ses dosyaları yüklenmiyor, ne yapmalıyım?',
    answer:
      'İnternet bağlantınızı kontrol edin. Sorun devam ederse sayfayı yenileyip tekrar deneyin. Hâlâ çözülmediyse "Hata Bildir" butonunu kullanın.',
  },
  {
    question: 'Deneme sınavında kaldığım yerden devam edebilir miyim?',
    answer:
      'Evet! İlerlemeniz otomatik olarak kaydedilir. Siteyi kapatıp açtıktan sonra kaldığınız sorudan devam edebilirsiniz.',
  },
  {
    question: 'Ses hızını nasıl değiştirebilirim?',
    answer:
      'Ses oynatıcısındaki hız butonlarıyla 0.75x, 1x, 1.25x ve 1.5x seçenekleri arasında geçiş yapabilirsiniz.',
  },
  {
    question: 'Platform ücretsiz mi?',
    answer:
      'Evet, BalİZ Parmak Eğitim Platformu tamamen ücretsizdir ve kâr amacı gütmez.',
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
        Sıkça Sorulan Sorular
      </h1>
      <p className="mt-2 text-text-secondary">
        Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
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
          Bir hata veya sorun bildirmek isterseniz aşağıdaki butonu kullanın.
        </p>
        <button className="mt-4 rounded-lg bg-danger px-6 py-2.5 font-medium text-text-inverse hover:bg-red-700 transition-colors">
          Hata Bildir
        </button>
      </div>
    </div>
  )
}
