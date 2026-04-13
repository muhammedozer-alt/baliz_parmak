import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center px-4 text-center">
      {/* Illustration area */}
      <div
        className="flex h-40 w-40 items-center justify-center rounded-full bg-primary/10 text-7xl"
        aria-hidden="true"
      >
        📚
      </div>

      <h1 className="mt-8 text-4xl font-bold text-text-primary">
        404 - Sayfa Bulunamadi
      </h1>

      <p className="mt-4 max-w-md text-lg text-text-secondary">
        Aradiginiz sayfayi kutuphane raflarinda bulamadik.
        Ama uzulmeyin, ana sayfaya donup yeni bir kesfe cikabiliriz!
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-primary px-8 py-3 text-lg font-semibold text-text-inverse hover:bg-primary-dark transition-colors"
      >
        Beni Ana Sayfaya Gotur
      </Link>
    </div>
  )
}
