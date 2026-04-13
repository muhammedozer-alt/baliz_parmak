export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-text-primary">Admin Paneli</h1>
      <p className="mt-2 text-text-secondary">
        Belge onay, icerik yukleme ve istatistikleri buradan yonetebilirsiniz.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Belge Onay */}
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-text-primary">Belge Onay</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Gonderilen engelli belgelerini inceleyin ve onaylayin.
          </p>
          <p className="mt-6 text-4xl font-bold text-warning">0</p>
          <p className="text-sm text-text-muted">Bekleyen belge</p>
        </div>

        {/* Icerik Yukleme */}
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-text-primary">Icerik Yukleme</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Yeni ses dosyalari, denemeler ve metinler yukleyin.
          </p>
          <button className="mt-6 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-text-inverse hover:bg-secondary-dark transition-colors">
            Icerik Yukle
          </button>
        </div>

        {/* Istatistik */}
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-text-primary">Istatistikler</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Kullanici ve icerik istatistikleri.
          </p>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">Toplam Kullanici</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">Aktif Deneme</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">Hedefe Ulasan</span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
