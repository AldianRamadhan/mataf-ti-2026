import { locationInfo, getTomorrowEvent } from '../data/mataf-data.js'

export default function Location() {
  const tomorrow = getTomorrowEvent()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-display font-bold text-3xl mb-2">Lokasi & Titik Kumpul</h1>
      <p className="text-navy-900/60 dark:text-white/60 mb-8">Titik kumpul dan lokasi kegiatan MATAF TI 2026.</p>

      <div className="glass rounded-2xl p-6 mb-6">
        <p className="font-display font-semibold text-lg">{locationInfo.name}</p>
        <p className="text-sm text-navy-900/60 dark:text-white/60 mt-1">{locationInfo.building}</p>
        <p className="text-sm text-navy-900/60 dark:text-white/60">{locationInfo.address}</p>
        {tomorrow && (
          <p className="text-sm mt-3 bg-trail/10 text-trail rounded-lg px-3 py-2 inline-block">
            📍 Titik kumpul besok: {tomorrow.location}
          </p>
        )}
        <a
          href={locationInfo.mapsLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 px-5 py-2.5 rounded-xl bg-trail hover:bg-trail-light text-white text-sm font-medium transition-colors"
        >
          Open in Google Maps
        </a>
      </div>

      <div className="rounded-2xl overflow-hidden border border-navy-900/10 dark:border-white/10 aspect-video">
        <iframe
          title="Lokasi MATAF TI 2026"
          src={locationInfo.mapsEmbedUrl}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
