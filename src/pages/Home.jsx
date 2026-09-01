import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  SITE,
  getTodayEvent,
  getTomorrowEvent,
  getNextUpcomingEvent
} from '../data/mataf-data.js'
import CountdownBox from '../components/CountdownBox.jsx'

const HERO_SLIDES = [
  {
    type: 'video',
    src: '/WhatsApp Video 2026-08-19 at 20.11.02.mp4',
    alt: 'Video Teaser / Kegiatan MATAF TI',
    label: 'Video Dokumentasi MATAF TI · UNISA Yogyakarta',
    tag: 'VIDEO'
  },
  {
    type: 'image',
    src: '/DSC01230.JPG',
    alt: 'Dokumentasi MATAF TI',
    label: 'Dokumentasi MATAF TI · UNISA Yogyakarta',
    tag: 'FOTO 01'
  },
  {
    type: 'image',
    src: '/DSC01371.JPG',
    alt: 'Kebersamaan Mahasiswa Baru & Panitia MATAF TI',
    label: 'Kebersamaan Mahasiswa Baru & Panitia',
    tag: 'FOTO 02'
  }
]

const dateFmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef(null)
  const today = getTodayEvent()
  const tomorrow = getTomorrowEvent()
  const next = getNextUpcomingEvent()

  // Kontrol slide otomatis:
  // - Jika slide berupa gambar: ganti otomatis tiap 5 detik.
  // - Jika slide berupa video: biarkan video diputar sampai selesai (onEnded akan ganti slide).
  useEffect(() => {
    const activeItem = HERO_SLIDES[currentSlide]
    if (activeItem.type === 'video') {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => {
          // Autoplay fallback jika dicegah browser
        })
      }
      return
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [currentSlide])

  const handleVideoEnded = () => {
    // Ketika video selesai diputar, langsung slide ke slide berikutnya
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4] dark:bg-[#121212] text-[#1a1a1a] dark:text-[#f3f3f3] transition-colors duration-300">

      {/* =====================================================
          1. HERO SLIDESHOW (VIDEO & FOTO OTOMATIS SLIDE KANAN KIRI)
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-black border-b-2 border-black/30 dark:border-white/20">
        <div className="relative h-[48vh] sm:h-[60vh] w-full overflow-hidden group">
          
          {/* Slider Container Track */}
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, idx) => (
              <div key={idx} className="w-full h-full shrink-0 relative bg-black flex items-center justify-center">
                {slide.type === 'video' ? (
                  <video
                    ref={idx === currentSlide ? videoRef : null}
                    src={slide.src}
                    className="w-full h-full object-cover object-center"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnded}
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center brightness-95 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Overlay Gradient Halus */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Navigasi Slide Manual */}
          <div className="absolute right-4 sm:right-8 bottom-6 sm:bottom-8 z-20">
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 text-white">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                aria-label="Slide sebelumnya"
                className="px-2 py-1 text-xs font-mono font-bold hover:bg-white/20 rounded transition-colors"
              >
                ← Prev
              </button>
              <span className="text-xs font-mono font-bold px-2 text-white/80">
                {currentSlide + 1} / {HERO_SLIDES.length}
              </span>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                aria-label="Slide berikutnya"
                className="px-2 py-1 text-xs font-mono font-bold hover:bg-white/20 rounded transition-colors"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-20 flex gap-1.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Pindah ke foto ${i + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          2. HEADER UTAMA & SAMBUTAN (SIMPEL & JELAS)
      ====================================================== */}
      <section className="px-4 sm:px-8 py-10 sm:py-14 border-b-2 border-black/25 dark:border-white/10 bg-white/60 dark:bg-white/5">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/10 border-2 border-black/30 dark:border-white/15 text-xs font-mono font-bold tracking-wider uppercase text-black dark:text-white/80 shadow-sm">
            <span>●</span> MATAF TI UNISA YOGYAKARTA 2026
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black dark:text-white uppercase leading-tight">
            Selamat Datang <br />
            <span className="text-blue-600 dark:text-blue-400">Keluarga Baru TI</span>
          </h1>

          <p className="text-base sm:text-lg font-bold text-black/85 dark:text-white/80 max-w-2xl mx-auto leading-relaxed pt-2">
            {SITE.taglineId || "Bersama Membangun Masa Depan Teknologi yang Inovatif, Berkarakter, dan Berdampak."}
          </p>

          <p className="text-sm font-bold text-black/70 dark:text-white/60">
            Portal resmi panduan, agenda, jadwal kegiatan, dan tugas mahasiswa baru.
          </p>

        </div>
      </section>

      {/* =====================================================
          3. AGENDA UTAMA & HITUNG MUNDUR (KOTAK INFORMASI)
      ====================================================== */}
      <section className="px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black/30 dark:border-white/20 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-black dark:text-white">
                AGENDA MATAF TI
              </h2>
              <p className="text-sm font-bold text-black/70 dark:text-white/60">
                Informasi jadwal pelaksanaan dan lokasi utama kegiatan
              </p>
            </div>
            <Link
              to="/rundown"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black font-mono uppercase bg-black dark:bg-white text-white dark:text-black px-4 py-2.5 rounded-xl border-2 border-black dark:border-white hover:bg-black/90 dark:hover:bg-white/90 shadow-sm transition-all self-start sm:self-auto"
            >
              Lihat Rundown Lengkap →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Kartu Tanggal */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/25 dark:border-white/15 shadow-sm space-y-3">
              <span className="text-xs font-mono font-black uppercase px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-700 inline-block">
                01 · TANGGAL ACARA
              </span>
              <p className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                15 September 2026
              </p>
              <p className="text-sm font-bold text-black/80 dark:text-white/75">
                Hari Selasa (Kegiatan Utama)
              </p>
            </div>

            {/* Kartu Lokasi */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/25 dark:border-white/15 shadow-sm space-y-3">
              <span className="text-xs font-mono font-black uppercase px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 inline-block">
                02 · LOKASI UTAMA
              </span>
              <p className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                Gedung SM 5.10
              </p>
              <p className="text-sm font-bold text-black/80 dark:text-white/70 leading-relaxed">
                Ruang Utama MATAF TI · UNISA Yogyakarta
              </p>
            </div>

            {/* Kartu Hitung Mundur */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border-2 border-black/25 dark:border-white/15 shadow-sm space-y-3">
              <span className="text-xs font-mono font-black uppercase px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700 inline-block">
                03 · HITUNG MUNDUR
              </span>
              {next ? (
                <CountdownBox
                  targetDate={`${next.date}T${next.meetTime || next.time}:00`}
                />
              ) : (
                <p className="text-sm font-bold text-black/75 dark:text-white/70">Jadwal acara sedang disiapkan.</p>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          4. MENU CEPAT / DIREKTORI PUSAT INFORMASI
      ====================================================== */}
      <section className="px-4 sm:px-8 py-12 bg-black/[0.03] dark:bg-white/5 border-t-2 border-black/25 dark:border-white/10">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white">
              Menu Informasi Penting
            </h2>
            <p className="text-sm font-bold text-black/70 dark:text-white/60">
              Pilih informasi yang ingin Anda akses dengan mudah
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <QuickMenuCard
              to="/rundown"
              icon="⏱️"
              title="Rundown Acara"
              desc="Jadwal & rincian susunan waktu kegiatan."
            />
            <QuickMenuCard
              to="/dresscode"
              icon="👔"
              title="Aturan Dresscode"
              desc="Ketentuan pakaian resmi setiap hari acara."
            />
            <QuickMenuCard
              to="/tugas"
              icon="📝"
              title="Daftar Tugas"
              desc="Checklist barang bawaan & berkas penugasan."
            />
            <QuickMenuCard
              to="/pengumuman"
              icon="📢"
              title="Pengumuman"
              desc="Pemberitahuan resmi terbaru dari panitia."
            />
            <QuickMenuCard
              to="/lokasi"
              icon="📍"
              title="Peta & Denah Lokasi"
              desc="Panduan ruang kegiatan dan titik kumpul."
            />
            <QuickMenuCard
              to="/kontak"
              icon="💬"
              title="Bantuan & Kontak"
              desc="Hubungi panitia jika ada kendala."
            />
          </div>

        </div>
      </section>

    </main>
  )
}

/* =========================================================
   KOMPONEN KARTU MENU CEPAT (MUDAH DIBACA & BORDER TEGAS)
========================================================= */

function QuickMenuCard({ to, icon, title, desc }) {
  return (
    <Link
      to={to}
      className="p-5 rounded-2xl bg-white dark:bg-[#1f1f1f] border-2 border-black/25 dark:border-white/15 shadow-sm hover:border-black dark:hover:border-white hover:shadow-md transition-all group flex items-start gap-4"
    >
      <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/15 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-white/20 transition-all">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-base text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
          {title} <span>→</span>
        </h3>
        <p className="text-xs sm:text-sm font-medium text-black/75 dark:text-white/65 mt-1 leading-relaxed">
          {desc}
        </p>
      </div>
    </Link>
  )
}