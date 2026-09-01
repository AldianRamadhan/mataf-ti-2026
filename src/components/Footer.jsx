import { SITE } from '../data/mataf-data.js'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-navy-900/10 dark:border-white/10 bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display font-bold text-lg">{SITE.eventName}</p>
          <p className="text-sm text-white/60 mt-1">"{SITE.tagline}"</p>
        </div>
        <div className="text-sm text-white/70 space-y-1">
          <p className="font-medium text-white">{SITE.prodi}</p>
          <p>{SITE.kampus}</p>
        </div>
        <div className="text-sm space-y-2">
          <a href={SITE.instagram} className="block hover:text-amber">Instagram Panitia</a>
          <a href={SITE.websiteKampus} className="block hover:text-amber">Website UNISA Yogyakarta</a>
          <a href={SITE.whatsappPanitia} className="block hover:text-amber">Kontak Panitia</a>
        </div>
      </div>
      <p className="text-center text-xs text-white/40 pb-6">© 2026 Panitia MATAF Teknologi Informasi — UNISA Yogyakarta</p>
    </footer>
  )
}
