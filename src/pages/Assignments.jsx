import { useState } from 'react'
import { assignments, getTomorrowEvent, events } from '../data/mataf-data.js'
import { useCountdown } from '../hooks/useCountdown.js'
import Checklist from '../components/Checklist.jsx'
import TwibbonEditor from '../components/TwibbonEditor.jsx'

export default function Assignments() {
  const tomorrow = getTomorrowEvent() || events[0]
  const [activeTab, setActiveTab] = useState('twibbon') // 'twibbon' | 'video' | 'checklist'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
      
      {/* Header Halaman */}
      <div className="text-center sm:text-left border-b-2 border-black/15 dark:border-white/15 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-blue-300 dark:border-blue-700">
          <span>●</span> Penugasan & Twibbon Mahasiswa Baru
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          Tugas, Twibbon & Perlengkapan MATAF TI
        </h1>
        <p className="text-sm sm:text-base font-bold text-black/70 dark:text-white/60 mt-2">
          Studio pembuatan twibbon interaktif, panduan penugasan kreatif, dan checklist bawaan perlengkapan.
        </p>
      </div>

      {/* Navigation Quick Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10">
        <button
          onClick={() => setActiveTab('twibbon')}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'twibbon'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
          }`}
        >
          <span>🎨</span> Twibbon Studio
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'video'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
          }`}
        >
          <span>🎬</span> Panduan Video
        </button>
        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'checklist'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5'
          }`}
        >
          <span>🎒</span> Perlengkapan
        </button>
      </div>

      {/* 1. TWIBBON STUDIO INTERAKTIF */}
      {(activeTab === 'twibbon' || activeTab === 'all') && (
        <section className="space-y-4">
          <TwibbonEditor frameSrc="/Twibbon.png" />
        </section>
      )}

      {/* 2. DAFTAR PENUGASAN KREATIF */}
      {(activeTab === 'video' || activeTab === 'all') && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white flex items-center gap-2">
              <span>🎬</span> Penugasan Video Kreatif
            </h2>
            <span className="text-xs font-mono font-black uppercase px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
              Wajib untuk MABA
            </span>
          </div>

          <div className="space-y-6">
            {assignments.map((a) => (
              <AssignmentDetailCard key={a.id} assignment={a} />
            ))}
          </div>
        </section>
      )}

      {/* 4. KOTAK CHECKLIST PERLENGKAPAN HARIAN */}
      {(activeTab === 'checklist' || activeTab === 'all') && tomorrow && tomorrow.bring && (
        <section className="bg-white dark:bg-[#1a1a1a] rounded-2xl border-2 border-black/20 dark:border-white/15 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-black/10 dark:border-white/10 pb-3">
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase text-black dark:text-white flex items-center gap-2">
                <span>🎒</span> Checklist Perlengkapan Bawaan
              </h2>
              <p className="text-xs sm:text-sm font-bold text-black/60 dark:text-white/50 mt-0.5">
                Persiapan barang yang wajib dibawa saat kegiatan MATAF TI
              </p>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 bg-black/5 dark:bg-white/10 rounded-lg text-black/80 dark:text-white/80 self-start sm:self-auto">
              {tomorrow.bring.length} Item
            </span>
          </div>
          <Checklist storageKey={`checklist-${tomorrow.date}`} items={tomorrow.bring} />
        </section>
      )}

    </div>
  )
}

function AssignmentDetailCard({ assignment }) {
  const t = useCountdown(assignment.deadline)
  const deadlineFmt = new Date(assignment.deadline).toLocaleString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border-2 border-black/25 dark:border-white/15 shadow-md overflow-hidden transition-all">
      
      {/* Header Kartu */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-transparent dark:from-blue-950/20 dark:via-transparent border-b-2 border-black/15 dark:border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="text-xs font-mono font-black uppercase px-3 py-1 rounded-full bg-blue-600 text-white shadow-sm">
            {assignment.category || 'TUGAS UTAMA'}
          </span>
          <div className="flex items-center gap-2">
            {t && !t.done ? (
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                ⏳ {t.days ? `${t.days}h ` : ''}{t.hours}j {t.minutes}m tersisa
              </span>
            ) : (
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-red-100 text-red-700 border border-red-300">
                Deadline Terlewat
              </span>
            )}
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white tracking-tight uppercase">
          {assignment.title}
        </h3>
        <p className="text-xs sm:text-sm font-bold text-black/60 dark:text-white/50 mt-1">
          Batas Waktu Pengumpulan: <span className="text-black dark:text-white font-mono">{deadlineFmt} WIB</span>
        </p>
      </div>

      {/* Ringkasan Cepat */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/10 dark:border-white/10 text-center">
        <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
          <p className="text-[11px] font-mono font-bold text-black/50 dark:text-white/40 uppercase">Platform</p>
          <p className="text-sm font-black text-black dark:text-white mt-0.5">📱 TikTok</p>
        </div>
        <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
          <p className="text-[11px] font-mono font-bold text-black/50 dark:text-white/40 uppercase">Durasi</p>
          <p className="text-sm font-black text-black dark:text-white mt-0.5">⏱️ 1 – 3 Menit</p>
        </div>
        <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
          <p className="text-[11px] font-mono font-bold text-black/50 dark:text-white/40 uppercase">Akun</p>
          <p className="text-sm font-black text-black dark:text-white mt-0.5">🔓 Tidak Privat</p>
        </div>
        <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
          <p className="text-[11px] font-mono font-bold text-black/50 dark:text-white/40 uppercase">Caption</p>
          <p className="text-sm font-black text-black dark:text-white mt-0.5">✍️ Bebas & Sopan</p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* POIN-POIN ISI VIDEO (KREATIF & INTERAKTIF) */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-sm">
              01
            </span>
            <div>
              <h4 className="text-lg font-black uppercase text-black dark:text-white">
                Poin Wajib yang Harus Ada di Video
              </h4>
              <p className="text-xs font-bold text-black/60 dark:text-white/50">
                Pastikan kamu menyampaikan 6 poin berikut dalam video perkenalanmu:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3.5">
            {assignment.contentPoints?.map((pt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/5 border-2 border-black/15 dark:border-white/10 hover:border-blue-500/50 transition-all flex items-start gap-3.5"
              >
                <div className="text-2xl shrink-0 p-2 rounded-xl bg-white dark:bg-[#252525] border border-black/10 dark:border-white/10">
                  {pt.icon}
                </div>
                <div>
                  <h5 className="text-sm font-black text-black dark:text-white flex items-center gap-1.5">
                    {pt.label}
                  </h5>
                  <p className="text-xs font-medium text-black/75 dark:text-white/70 mt-1 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SYARAT & KETENTUAN TEKNIS */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black font-mono font-bold flex items-center justify-center text-sm">
              02
            </span>
            <div>
              <h4 className="text-lg font-black uppercase text-black dark:text-white">
                Syarat & Ketentuan Pembuatan
              </h4>
              <p className="text-xs font-bold text-black/60 dark:text-white/50">
                Aturan teknis dan etika dalam membuat video perkenalan:
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/5 border-2 border-black/15 dark:border-white/10 space-y-3">
            {assignment.rules?.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-base leading-none mt-0.5">●</span>
                <p className="text-xs sm:text-sm font-medium text-black/85 dark:text-white/80 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TIPS KREATIF UNTUK MABA */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-transparent border-2 border-amber-500/30 dark:border-amber-400/20">
          <h4 className="text-sm font-black uppercase text-amber-900 dark:text-amber-300 flex items-center gap-2">
            <span>💡</span> Tips Tambahan Biar Videomu Makin Keren:
          </h4>
          <ul className="mt-2 space-y-1.5 text-xs sm:text-sm font-medium text-black/80 dark:text-white/75 list-disc list-inside">
            <li>Kamu boleh menambahkan background music (soundtrack kekinian), stiker, atau teks animasi.</li>
            <li>Boleh menggunakan rekaman langsung (talking head) atau teknik <i>voice over / dubbing</i> dengan visual yang menarik.</li>
            <li>Gunakan pencahayaan yang cukup dan audio yang jelas agar pesanmu tersampaikan dengan baik!</li>
          </ul>
        </div>

      </div>

    </div>
  )
}
