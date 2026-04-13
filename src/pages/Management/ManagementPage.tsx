import { members, hierarchyLabels, type Member } from './managementData'

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
  </svg>
)

function MemberCard({ member, size = 'md' }: { member: Member; size?: 'lg' | 'md' | 'sm' }) {
  const imgSize = size === 'lg' ? 'h-36 w-36' : size === 'md' ? 'h-28 w-28' : 'h-24 w-24'
  const nameSize = size === 'lg' ? 'text-xl' : size === 'md' ? 'text-lg' : 'text-base'
  const padding = size === 'lg' ? 'p-8' : size === 'md' ? 'p-6' : 'p-5'

  return (
    <div className={`glass rounded-2xl ${padding} text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="relative inline-block mb-4">
        <img
          src={member.foto}
          alt={member.isim}
          loading="lazy"
          className={`${imgSize} rounded-full object-cover mx-auto ring-3 ring-amber-500/30`}
        />
        {size === 'lg' && (
          <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <h3 className={`${nameSize} font-bold text-white mb-1`}>{member.isim}</h3>
      <p className="text-amber-400 text-sm mb-3">{member.pozisyon}</p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors text-sm"
        aria-label={`${member.isim} LinkedIn profili`}
      >
        <LinkedInIcon />
        LinkedIn
      </a>
    </div>
  )
}

export default function ManagementPage() {
  const grouped = new Map<number, Member[]>()
  for (const m of members) {
    const list = grouped.get(m.hiyerarsi) ?? []
    list.push(m)
    grouped.set(m.hiyerarsi, list)
  }

  const baskan = grouped.get(1)?.[0]
  const yonetim = grouped.get(2) ?? []
  const remaining = [...grouped.entries()]
    .filter(([h]) => h >= 3)
    .sort(([a], [b]) => a - b)

  return (
    <>
      {/* Page Header */}
      <section aria-labelledby="yonetim-heading" className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            id="yonetim-heading"
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Yönetim Kadromuz
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            BalİZ Parmak Kulübü'nü yöneten ekibimizle tanışın
          </p>
        </div>
      </section>

      {/* Başkan */}
      {baskan && (
        <section aria-label="Kulüp Başkanı" className="pb-12">
          <div className="mx-auto max-w-sm px-4 sm:px-6 lg:px-8">
            <MemberCard member={baskan} size="lg" />
          </div>
        </section>
      )}

      {/* Connector line */}
      <div className="flex justify-center pb-8">
        <div className="w-px h-10 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </div>

      {/* Yönetim (hiyerarşi 2) */}
      {yonetim.length > 0 && (
        <section aria-label="Yönetim" className="pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-amber-400 mb-8">
              {hierarchyLabels[2]}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {yonetim.map((m) => (
                <MemberCard key={m.id} member={m} size="md" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Remaining groups */}
      {remaining.map(([hiyerarsi, groupMembers]) => (
        <section key={hiyerarsi} aria-label={hierarchyLabels[hiyerarsi]} className="pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                {hierarchyLabels[hiyerarsi]}
              </h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {groupMembers.map((m) => (
                <MemberCard key={m.id} member={m} size="sm" />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
