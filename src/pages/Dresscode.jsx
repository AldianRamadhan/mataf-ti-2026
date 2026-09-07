import { useState, useEffect } from 'react'
import { events, getTomorrowEvent } from '../data/mataf-data.js'
import StatusBadge from '../components/StatusBadge.jsx'

const dateFmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

const DRESSCODES = [
  {
    id: 'laki-laki',
    title: 'Laki-Laki',
    subtitle: 'Contoh Pakaian Resmi Mahasiswa Baru',
    image: '/laki lak.jpg',
    badge: 'Laki-Laki',
    icon: '👨'
  },
  {
    id: 'perempuan',
    title: 'Perempuan',
    subtitle: 'Contoh Pakaian Resmi Mahasiswi Baru',
    image: '/perepuan.jpeg',
    badge: 'Perempuan',
    icon: '🧕'
  }
]

const COCARD_ITEM = {
  id: 'cocard',
  title: 'CoCard Peserta',
  subtitle: 'Tanda Pengenal Resmi Peserta MATAF TI 2026',
  image: '/cocard.jpg',
  badge: 'CoCard Wajib',
  icon: '🪪'
}

const ALL_PREVIEW_ITEMS = [...DRESSCODES, COCARD_ITEM]

export default function Dresscode() {
  const tomorrow = getTomorrowEvent()
  const [selected, setSelected] = useState(tomorrow?.date || events[0]?.date)
  const [zoomImg, setZoomImg] = useState(null)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const active = events.find((e) => e.date === selected)

  // Tutup fullscreen jika modal ditutup atau tekan ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullScreen) {
          setIsFullScreen(false)
        } else if (zoomImg) {
          setZoomImg(null)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullScreen, zoomImg])

  const handleOpenModal = (item) => {
    setZoomImg(item)
    setIsFullScreen(false)
  }

  const handleNextModel = (e) => {
    e.stopPropagation()
    const currentIndex = ALL_PREVIEW_ITEMS.findIndex((d) => d.id === zoomImg?.id)
    const nextIndex = (currentIndex + 1) % ALL_PREVIEW_ITEMS.length
    setZoomImg(ALL_PREVIEW_ITEMS[nextIndex])
  }

  const handlePrevModel = (e) => {
    e.stopPropagation()
    const currentIndex = ALL_PREVIEW_ITEMS.findIndex((d) => d.id === zoomImg?.id)
    const prevIndex = (currentIndex - 1 + ALL_PREVIEW_ITEMS.length) % ALL_PREVIEW_ITEMS.length
    setZoomImg(ALL_PREVIEW_ITEMS[prevIndex])
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
      {/* Header Halaman */}
      <div className="text-center sm:text-left border-b-2 border-black/15 dark:border-white/15 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-blue-300 dark:border-blue-700">
          <span>👔</span> Ketentuan Pakaian Resmi
        </div>
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
          Dresscode MATAF TI
        </h1>
        <p className="text-sm sm:text-base font-bold text-black/70 dark:text-white/60 mt-2">
          Contoh panduan visual pakaian resmi mahasiswa baru. Klik foto untuk memperbesar tampilan secara penuh.
        </p>
      </div>

      {/* Pemilih Tanggal */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {events.map((e) => (
            <button
              key={e.date}
              onClick={() => setSelected(e.date)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider border-2 transition-all ${
                selected === e.date
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
                  : 'bg-white dark:bg-[#1a1a1a] text-black/75 dark:text-white/70 border-black/15 dark:border-white/15 hover:border-black dark:hover:border-white'
              }`}
            >
              {dateFmt(e.date)}
            </button>
          ))}
        </div>

        {active && <StatusBadge status={active.dresscode.status} />}
      </div>

      {/* =========================================================
          GALLERY FOTO PERAGA DRESSCODE (LAKI-LAKI & PEREMPUAN)
      ========================================================= */}
      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
        {DRESSCODES.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenModal(item)}
            className="group relative cursor-pointer bg-white dark:bg-[#1a1a1a] rounded-3xl border-2 border-black/20 dark:border-white/15 overflow-hidden shadow-md hover:shadow-2xl hover:border-black dark:hover:border-white transition-all duration-300 flex flex-col"
          >
            {/* Image Box */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/90 flex items-center justify-center">
              <img
                src={item.image}
                alt={`Dresscode ${item.title}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Badge Gender Atas */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
                  <span>{item.icon}</span> {item.badge}
                </span>
              </div>

              {/* Hover Zoom Hint */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md transition-all flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:scale-105">
                  🔍 Klik untuk Zoom
                </span>
              </div>

              {/* Label Informasi Bawah Foto */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white space-y-1">
                <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="p-4 bg-black/[0.02] dark:bg-white/[0.03] border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold uppercase text-black/70 dark:text-white/70">
              <span className="flex items-center gap-1.5">
                <span>👁️</span> Lihat Detail Pakaian
              </span>
              <span className="group-hover:translate-x-1 transition-transform">
                Perbesar ➔
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================================
          SECTION COCARD PESERTA (BARU & KEREN)
      ========================================================= */}
      <div className="mt-12 pt-8 border-t-2 border-black/10 dark:border-white/10">
        <div className="text-center sm:text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase mb-2 border border-emerald-300 dark:border-emerald-700">
            <span>🪪</span> Atribut Wajib Peserta
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white">
            CoCard / ID Card Peserta
          </h2>
          <p className="text-sm font-medium text-black/70 dark:text-white/60 mt-1">
            Wajib dicetak dan dibawa serta dikenakan selama rangkaian MATAF TI 2026 berlangsung.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/10 via-indigo-900/5 to-purple-900/10 dark:from-blue-950/40 dark:via-purple-950/20 dark:to-black rounded-3xl border-2 border-black/15 dark:border-white/15 p-5 sm:p-8 shadow-lg">
          <div className="grid md:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Kartu CoCard dengan Tampilan Estetik */}
            <div className="md:col-span-5 flex justify-center">
              <div
                onClick={() => handleOpenModal(COCARD_ITEM)}
                className="group relative cursor-pointer max-w-[280px] sm:max-w-[320px] w-full rounded-2xl overflow-hidden border-2 border-black/20 dark:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-black"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={COCARD_ITEM.image}
                    alt="CoCard MATAF TI 2026"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono font-bold border border-white/30 backdrop-blur-sm">
                      🔍 Klik untuk Memperbesar
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-600/90 text-white border border-blue-400/40 backdrop-blur-md shadow">
                      CoCard Resmi
                    </span>
                  </div>
                </div>
                <div className="p-3.5 bg-black text-white flex items-center justify-between text-xs font-mono font-bold uppercase">
                  <span>Lihat Desain Asli</span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            </div>

            {/* Keterangan & Aturan CoCard */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black font-mono font-black text-xs uppercase tracking-wider">
                  Ketentuan CoCard
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight">
                  Tanda Pengenal Resmi MATAF TI 2026
                </h3>
                <p className="text-xs sm:text-sm font-medium text-black/80 dark:text-white/70 leading-relaxed">
                  Setiap peserta MATAF TI 2026 diwajibkan mencetak CoCard sesuai desain resmi yang telah ditentukan dengan identitas diri yang jelas dan lengkap.
                </p>
              </div>

              {/* Poin-poin spesifikasi CoCard */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-black/60 dark:text-white/60 flex items-center gap-1.5">
                    <span>�️</span> Tips Nge-Print
                  </div>
                  <p className="text-sm font-black text-black dark:text-white">
                    Kertas A4 (Portrait)
                  </p>
                  <p className="text-[11px] font-medium text-black/60 dark:text-white/50">
                    Gunakan format A4 Portrait agar ukuran proporsional dan tidak terlalu besar.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-black/60 dark:text-white/60 flex items-center gap-1.5">
                    <span>🏷️</span> Identitas Peserta
                  </div>
                  <p className="text-sm font-black text-black dark:text-white">
                    Nama Panggilan
                  </p>
                  <p className="text-[11px] font-medium text-black/60 dark:text-white/50">
                    Cantumkan nama panggilan saja (tanpa pasfoto).
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-black/60 dark:text-white/60 flex items-center gap-1.5">
                    <span>🎗️</span> Tali Lanyard
                  </div>
                  <p className="text-sm font-black text-black dark:text-white">
                    Warna Biru
                  </p>
                  <p className="text-[11px] font-medium text-black/60 dark:text-white/50">
                    Wajib menggunakan tali lanyard / gantungan berwarna biru.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 space-y-1">
                  <div className="text-xs font-mono font-bold uppercase text-black/60 dark:text-white/60 flex items-center gap-1.5">
                    <span>🛡️</span> Pelindung CoCard
                  </div>
                  <p className="text-sm font-black text-black dark:text-white">
                    Card Case Plastik / Laminating
                  </p>
                  <p className="text-[11px] font-medium text-black/60 dark:text-white/50">
                    Gunakan card case plastik mika atau di-laminating agar tidak mudah rusak / basah.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/cocard-mataf-ti-unisa.pdf"
                  download="COCARD MATAF TI UNISA.pdf"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>📥</span> Unduh File CoCard (PDF)
                </a>
                <button
                  onClick={() => handleOpenModal(COCARD_ITEM)}
                  className="px-5 py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow"
                >
                  <span>🔍</span> Lihat CoCard Layar Penuh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MODAL POPUP 1 (PREVIEW & ZOOM MODAL)
      ========================================================= */}
      {zoomImg && !isFullScreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setZoomImg(null)}
        >
          <div
            className="relative max-w-xl w-full bg-[#181818] rounded-3xl border-2 border-white/20 overflow-hidden shadow-2xl flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{zoomImg.icon}</span>
                <div>
                  <h4 className="font-black font-mono text-base uppercase">
                    Dresscode {zoomImg.title}
                  </h4>
                  <p className="text-xs text-white/60 font-mono">Klik gambar untuk tampilan layar penuh (Full Screen)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullScreen(true)}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold border border-white/20 flex items-center gap-1 transition-all"
                  title="Layar Penuh"
                >
                  <span>⛶</span> Full
                </button>
                <button
                  onClick={() => setZoomImg(null)}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold transition-all text-sm"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Gambar yang bisa diklik untuk Full Pop-Up */}
            <div
              className="p-3 sm:p-4 flex items-center justify-center bg-black/70 flex-1 overflow-y-auto cursor-zoom-in relative group"
              onClick={() => setIsFullScreen(true)}
              title="Klik gambar untuk layar penuh"
            >
              <img
                src={zoomImg.image}
                alt={zoomImg.title}
                className="max-h-[68vh] w-auto object-contain rounded-2xl border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform duration-300"
              />

              {/* Overlay Hover Hint */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-2xl bg-black/80 text-white font-mono font-bold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-md flex items-center gap-2 shadow-xl">
                  <span>🔍</span> Klik untuk Tampilan Fullscreen
                </span>
              </div>

              {/* Tombol Geser Ganti Laki-laki / Perempuan */}
              <button
                onClick={handlePrevModel}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/30 flex items-center justify-center font-bold text-base transition-all z-20"
                title="Lihat model sebelumnya"
              >
                ‹
              </button>
              <button
                onClick={handleNextModel}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/30 flex items-center justify-center font-bold text-base transition-all z-20"
                title="Lihat model berikutnya"
              >
                ›
              </button>
            </div>

            {/* Footer Modal */}
            <div className="p-4 bg-[#121212] border-t border-white/10 flex items-center justify-between text-xs text-white/70">
              <span className="font-mono flex items-center gap-1.5">
                <span>💡</span> Klik foto untuk zoom layar penuh
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFullScreen(true)}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs uppercase hover:bg-blue-500 transition-all flex items-center gap-1"
                >
                  <span>⛶</span> Layar Penuh
                </button>
                <button
                  onClick={() => setZoomImg(null)}
                  className="px-4 py-2 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase hover:bg-white/90 transition-all"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          MODAL POPUP 2 (FULL SCREEN POP-UP MAXIMUM VIEW)
      ========================================================= */}
      {zoomImg && isFullScreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-2 sm:p-4 animate-fadeIn"
          onClick={() => setIsFullScreen(false)}
        >
          {/* Header Bar Fullscreen */}
          <div
            className="w-full max-w-5xl flex items-center justify-between p-3 sm:p-4 text-white z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{zoomImg.icon}</span>
              <div>
                <h3 className="font-black font-mono text-base sm:text-lg uppercase tracking-wider">
                  Foto Lengkap: Dresscode {zoomImg.title}
                </h3>
                <p className="text-xs text-white/60 font-mono">Tampilan ukuran penuh panduan pakaian MATAF TI 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevModel}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold border border-white/20 transition-all flex items-center gap-1"
              >
                ‹ Ganti Model
              </button>
              <button
                onClick={handleNextModel}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold border border-white/20 transition-all flex items-center gap-1"
              >
                Ganti Model ›
              </button>
              <button
                onClick={() => setIsFullScreen(false)}
                className="w-10 h-10 rounded-2xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white font-bold transition-all text-base border border-white/30"
                title="Keluar dari Layar Penuh"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Area Foto Fullscreen Utama */}
          <div
            className="relative flex-1 w-full max-w-5xl flex items-center justify-center overflow-hidden p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={zoomImg.image}
              alt={zoomImg.title}
              className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/20 select-none animate-fadeIn"
            />

            {/* Navigasi Geser Kiri / Kanan Fullscreen */}
            <button
              onClick={handlePrevModel}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-black/80 hover:bg-black text-white border border-white/30 flex items-center justify-center font-bold text-2xl transition-all shadow-xl"
              title="Model sebelumnya"
            >
              ‹
            </button>
            <button
              onClick={handleNextModel}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-black/80 hover:bg-black text-white border border-white/30 flex items-center justify-center font-bold text-2xl transition-all shadow-xl"
              title="Model berikutnya"
            >
              ›
            </button>
          </div>

          {/* Hint Bawah Fullscreen */}
          <div
            className="p-3 text-center text-xs font-mono text-white/60 flex items-center gap-4 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <span>💡 Tekan <b>ESC</b> atau klik tombol ✕ untuk kembali</span>
            <button
              onClick={() => setIsFullScreen(false)}
              className="px-4 py-1.5 rounded-xl bg-white text-black font-mono font-bold uppercase text-xs hover:bg-white/90"
            >
              Kembali
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
