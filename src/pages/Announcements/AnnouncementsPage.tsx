import { Link } from 'react-router-dom'
import { announcements } from './announcementsData'

export default function AnnouncementsPage() {
  return (
    <>
      {/* Page Header */}
      <section aria-labelledby="duyurular-heading" className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            id="duyurular-heading"
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Duyurular
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Kulübümüzün en güncel duyurularını takip edin ve etkinliklerimizden
            haberdar olun
          </p>
        </div>
      </section>

      {/* Announcements List */}
      <section aria-label="Duyuru listesi" className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {announcements.map((a) => (
              <article
                key={a.id}
                className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="md:flex">
                  {/* Image */}
                  {a.image_url && (
                    <div className="md:w-2/5 shrink-0">
                      <div className="h-56 md:h-full min-h-[16rem] overflow-hidden bg-white/5">
                        <img
                          src={a.image_url}
                          alt={a.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div
                    className={`p-6 md:p-8 ${a.image_url ? 'md:w-3/5' : 'w-full'}`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
                      <h2 className="text-xl font-bold text-white">
                        {a.title}
                      </h2>
                      <span className="inline-block shrink-0 rounded-full bg-amber-500/20 px-3 py-1 text-sm text-amber-400 border border-amber-500/30">
                        {a.date}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-4 whitespace-pre-line">
                      {a.content}
                    </p>

                    <div className="mt-6">
                      <Link
                        to={`/duyurular/${a.id}`}
                        className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
                      >
                        Devamını oku
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
