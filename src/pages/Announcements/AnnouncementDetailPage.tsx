import { useParams, Link } from 'react-router-dom'
import { announcements } from './announcementsData'

export default function AnnouncementDetailPage() {
  const { id } = useParams<{ id: string }>()
  const announcement = announcements.find((a) => a.id === Number(id))

  if (!announcement) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Duyuru Bulunamadı
          </h1>
          <p className="text-slate-300 mb-8">
            Aradığınız duyuru mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link
            to="/duyurular"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-400 transition-colors"
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Tüm Duyurular
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Back link */}
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          to="/duyurular"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm"
        >
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
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Tüm Duyurular
        </Link>
      </div>

      {/* Article */}
      <article className="py-8 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl overflow-hidden shadow-xl">
            {/* Image */}
            {announcement.image_url && (
              <div className="w-full max-h-[28rem] overflow-hidden flex items-center justify-center bg-slate-100">
                <img
                  src={announcement.image_url}
                  alt={announcement.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-6">
                <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {announcement.title}
                </h1>
                <span className="inline-block shrink-0 rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800 border border-amber-200">
                  {announcement.date}
                </span>
              </div>

              <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                {announcement.content}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
