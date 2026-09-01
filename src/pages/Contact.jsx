import { Link } from 'react-router-dom'
import { contacts, committee } from '../data/mataf-data.js'

export default function Contact() {
  const bphLeaders = committee.filter((c) => c.level === 'leader')
  const koorList = committee.filter((c) => c.level === 'koor')

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
      {/* Header Halaman */}
      <div className="text-center sm:text-left border-b-2 border-black/15 dark:border-white/15 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-blue-300 dark:border-blue-700">
          <span>💬</span> Pusat Bantuan & Kepanitiaan
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          Kontak & Kepanitiaan MATAF TI
        </h1>
        <p className="text-sm sm:text-base font-bold text-black/70 dark:text-white/60 mt-2">
          Punya pertanyaan seputar agenda, tugas, atau kendala teknis? Hubungi narahubung resmi panitia kami via WhatsApp.
        </p>
      </div>

      {/* =====================================================
          1. NARAHUBUNG UTAMA (WHATSAPP HOTLINE)
      ====================================================== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-black/10 dark:border-white/10 pb-3">
          <span className="text-xl">📞</span>
          <h2 className="text-lg sm:text-xl font-black uppercase text-black dark:text-white">
            Narahubung Cepat (Hotline WhatsApp)
          </h2>
        </div>

        <div className="space-y-4">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/20 dark:border-white/15 shadow-sm hover:border-black dark:hover:border-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Sisi Kiri: Informasi Kontak */}
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 text-black/70 dark:text-white/70">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 block">
                    {c.label}
                  </span>
                  <p className="font-black text-base sm:text-lg text-black dark:text-white truncate mt-0.5">
                    {c.name}
                  </p>
                  <p className="text-xs font-mono font-bold text-black/50 dark:text-white/40 mt-0.5">
                    {c.phone}
                  </p>
                </div>
              </div>

              {/* Sisi Kanan: Tombol WhatsApp */}
              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href={c.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-sm transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          2. STRUKTUR KEPANITIAAN MATAF TI 2026
      ====================================================== */}
      <section className="space-y-6 pt-4 border-t-2 border-black/10 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
            <span>👥</span> Struktur Organisasi
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-black dark:text-white">
            Susunan Kepanitiaan MATAF TI 2026
          </h2>
          <p className="text-xs sm:text-sm text-black/60 dark:text-white/50 font-medium mt-1">
            Badan Pengurus Harian (BPH) dan Seluruh Koordinator Divisi MATAF TI 2026.
          </p>
        </div>

        {/* --- TIER 1: BADAN PENGURUS HARIAN (KETUA, SEKRETARIS, BENDAHARA) --- */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
            ★ Badan Pengurus Harian (BPH Utama)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* KETUA PANITIA */}
            <div className="sm:col-span-2 lg:col-span-1 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/40 dark:from-blue-950/40 dark:to-indigo-950/20 border-2 border-blue-400 dark:border-blue-700 shadow-sm flex flex-col justify-center">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                  Pimpinan Utama
                </span>
                <p className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                  {bphLeaders[0]?.role}
                </p>
                <h4 className="text-lg font-black uppercase text-black dark:text-white mt-1">
                  {bphLeaders[0]?.name}
                </h4>
              </div>
            </div>

            {/* SEKRETARIS (ADIS & LUTFHIA) */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/20 dark:border-white/15 shadow-sm flex flex-col justify-center">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                  Sekretaris Pelaksana
                </span>
                <p className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400">
                  Sekretaris
                </p>
                <div className="mt-2 space-y-1.5">
                  <p className="text-sm font-black uppercase text-black dark:text-white">
                    1. {bphLeaders[1]?.name}
                  </p>
                  <p className="text-sm font-black uppercase text-black dark:text-white">
                    2. {bphLeaders[2]?.name}
                  </p>
                </div>
              </div>
            </div>

            {/* BENDAHARA (AULIA & STIFA) */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/20 dark:border-white/15 shadow-sm flex flex-col justify-center">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70 text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                  Bendahara Pelaksana
                </span>
                <p className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                  Bendahara
                </p>
                <div className="mt-2 space-y-1.5">
                  <p className="text-sm font-black uppercase text-black dark:text-white">
                    1. {bphLeaders[3]?.name}
                  </p>
                  <p className="text-sm font-black uppercase text-black dark:text-white">
                    2. {bphLeaders[4]?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TIER 2: KOORDINATOR DIVISI-DIVISI --- */}
        <div className="space-y-3 pt-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
            ★ Seluruh Koordinator Divisi
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {koorList.map((k, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/15 dark:border-white/10 hover:border-black dark:hover:border-white transition-all flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center font-mono font-bold text-xs shrink-0 text-black dark:text-white">
                  {k.division.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400 block tracking-wider">
                    {k.role}
                  </span>
                  <p className="font-bold text-sm text-black dark:text-white truncate mt-0.5" title={k.name}>
                    {k.name}
                  </p>
                  <p className="text-[11px] text-black/50 dark:text-white/40 font-mono mt-0.5">
                    Divisi {k.division}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Tambahan */}
      <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm font-medium text-black/75 dark:text-white/70">
        💡 Kamu juga dapat melihat denah gedung dan petunjuk arah ke lokasi di halaman{' '}
        <Link to="/lokasi" className="text-blue-600 dark:text-blue-400 font-bold underline">
          Lokasi Kegiatan
        </Link>.
      </div>
    </div>
  )
}
