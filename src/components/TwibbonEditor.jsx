import React, { useState, useRef, useEffect } from 'react'

export default function TwibbonEditor({ frameSrc = '/Twibbon.png' }) {
  const [userImage, setUserImage] = useState(null)
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [twibbonLoaded, setTwibbonLoaded] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [copiedCaption, setCopiedCaption] = useState(false)

  const canvasRef = useRef(null)
  const fileInputRef = useRef(null)
  const twibbonImgRef = useRef(null)
  const userImgObjRef = useRef(null)

  // Load Twibbon Frame Image
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = frameSrc
    img.onload = () => {
      twibbonImgRef.current = img
      setTwibbonLoaded(true)
      renderCanvas()
    }
  }, [frameSrc])

  // Handle upload user image
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        userImgObjRef.current = img
        setUserImage(event.target.result)
        // Reset transform
        setScale(1)
        setRotation(0)
        setPosition({ x: 0, y: 0 })
      }
      img.src = event.target.result
    }
    reader.readAsDataURL(file)
  }

  // Render canvas
  const renderCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = 1080 // High resolution square canvas
    canvas.width = size
    canvas.height = size

    ctx.clearRect(0, 0, size, size)

    // 1. Draw User Image underneath
    if (userImgObjRef.current) {
      ctx.save()
      ctx.translate(size / 2 + position.x, size / 2 + position.y)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.scale(scale, scale)

      const img = userImgObjRef.current
      // Calculate aspect ratio to fit well initially
      const imgAspect = img.width / img.height
      let drawW, drawH
      if (imgAspect > 1) {
        drawH = size
        drawW = size * imgAspect
      } else {
        drawW = size
        drawH = size / imgAspect
      }

      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH)
      ctx.restore()
    } else {
      // Placeholder background when no user photo
      ctx.fillStyle = '#f1f5f9'
      ctx.fillRect(0, 0, size, size)

      // Background grid / guide
      ctx.strokeStyle = '#cbd5e1'
      ctx.lineWidth = 4
      ctx.setLineDash([16, 16])
      ctx.strokeRect(60, 60, size - 120, size - 120)
      ctx.setLineDash([])

      ctx.fillStyle = '#64748b'
      ctx.font = 'bold 36px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('Unggah foto Anda di sini 📷', size / 2, size / 2)
      ctx.font = '500 24px sans-serif'
      ctx.fillText('Geser & atur ukuran foto agar pas di dalam frame', size / 2, size / 2 + 50)
    }

    // 2. Draw Twibbon Frame on top
    if (twibbonImgRef.current) {
      ctx.drawImage(twibbonImgRef.current, 0, 0, size, size)
    }
  }

  useEffect(() => {
    renderCanvas()
  }, [userImage, scale, rotation, position, twibbonLoaded])

  // Dragging logic
  const handlePointerDown = (e) => {
    if (!userImage) return
    setIsDragging(true)
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0
    const clientY = e.clientY || e.touches?.[0]?.clientY || 0
    setDragStart({ x: clientX - position.x, y: clientY - position.y })
  }

  const handlePointerMove = (e) => {
    if (!isDragging || !userImage) return
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0
    const clientY = e.clientY || e.touches?.[0]?.clientY || 0
    setPosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y,
    })
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  // Zoom controls
  const handleZoomIn = () => setScale((s) => Math.min(s + 0.1, 3))
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.1, 0.2))
  const handleRotateLeft = () => setRotation((r) => (r - 90) % 360)
  const handleRotateRight = () => setRotation((r) => (r + 90) % 360)
  const handleResetTransform = () => {
    setScale(1)
    setRotation(0)
    setPosition({ x: 0, y: 0 })
  }

  // Download merged twibbon image
  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = `Twibbon-MATAF-TI-2026.png`
    link.href = canvas.toDataURL('image/png')
    link.click()

    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 4000)
  }

  // Download raw template only
  const handleDownloadFrameOnly = () => {
    const link = document.createElement('a')
    link.download = `Frame-Twibbon-MATAF-TI-2026.png`
    link.href = frameSrc
    link.click()
  }

  const captionTemplate = `Assalamualaikum Warahmatullahi wabarakatuh

Hallo IT-ers muda

perkenalkan nama saya [ Nama Lengkap ] bangga menjadi bagian dari keluarga besar Teknologi Informasi Universitas 'Aisyiyah Yogyakarta. Siap berkontribusi dan meraih prestasi bersama teman-teman semua!

[Kata-kata motivasi]

Mari kita satukan barisan, dan satukan semangat untuk memulai petualangan di dunia digital.
One purpose, one journey, one TI

#matafunisa
#MatafTIUnisa2026
#unisayogyakarta
#banggamenjadiunisa`

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(captionTemplate)
    setCopiedCaption(true)
    setTimeout(() => setCopiedCaption(false), 3000)
  }

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border-2 border-black/20 dark:border-white/15 p-6 sm:p-8 shadow-lg space-y-8">
      {/* Header Twibbon */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black/10 dark:border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 text-xs font-mono font-bold uppercase mb-2 border border-indigo-300 dark:border-indigo-700">
            <span>✨</span> Fitur Interaktif Twibbon
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black dark:text-white">
            Twibbon Generator MATAF TI 2026
          </h3>
          <p className="text-xs sm:text-sm font-bold text-black/60 dark:text-white/50 mt-1">
            Pasang foto terbaikmu langsung di frame twibbon resmi MATAF TI, sesuaikan posisi & ukuran, lalu unduh hasilnya!
          </p>
        </div>

        <button
          onClick={handleDownloadFrameOnly}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-black dark:text-white text-xs font-bold transition-all border border-black/10 dark:border-white/10 shrink-0"
          title="Unduh file mentahan frame PNG transparan"
        >
          <span>📥</span> Unduh Frame Mentahan
        </button>
      </div>

      {/* Main Interactive Editor Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Canvas Preview Area (Col 7) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border-2 border-black/30 dark:border-white/20 shadow-xl bg-slate-100 dark:bg-[#111] select-none touch-none">
            <canvas
              ref={canvasRef}
              onMouseDown={handlePointerDown}
              onMouseMove={handlePointerMove}
              onMouseUp={handlePointerUp}
              onMouseLeave={handlePointerUp}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
              onTouchEnd={handlePointerUp}
              className={`w-full h-full object-contain ${
                userImage ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
              }`}
              onClick={() => {
                if (!userImage && fileInputRef.current) {
                  fileInputRef.current.click()
                }
              }}
            />

            {/* Overlay hint if photo loaded */}
            {userImage && (
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-mono pointer-events-none flex items-center gap-1.5 shadow-sm">
                <span>✋</span> Geser foto untuk menyesuaikan posisi
              </div>
            )}
          </div>

          <p className="text-[11px] font-mono text-black/50 dark:text-white/40 mt-3 text-center">
            *Resolusi ekspor tinggi (1080 x 1080 px HQ) cocok untuk Profil TikTok, Instagram Post/Story, & WhatsApp.
          </p>
        </div>

        {/* Controls & Tools Area (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Upload Button */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-black/70 dark:text-white/60 mb-2">
              Langkah 1: Pilih / Ganti Foto Anda
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-black text-sm shadow-md transition-all"
            >
              <span className="text-lg">📷</span>
              <span>{userImage ? 'Ganti Foto Lain' : 'Upload Foto Saya'}</span>
            </button>
          </div>

          {/* Edit Controls (Only active if image is uploaded) */}
          <div
            className={`space-y-4 p-5 rounded-2xl border-2 transition-all ${
              userImage
                ? 'bg-black/[0.02] dark:bg-white/5 border-black/15 dark:border-white/10'
                : 'opacity-50 pointer-events-none bg-slate-50 dark:bg-white/[0.02] border-dashed border-black/10 dark:border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-black dark:text-white flex items-center gap-1.5">
                <span>⚙️</span> Atur & Sesuaikan Foto
              </span>
              {userImage && (
                <button
                  onClick={handleResetTransform}
                  className="text-[11px] font-mono font-bold text-red-600 hover:underline"
                >
                  Reset Posisi
                </button>
              )}
            </div>

            {/* Zoom Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-black/70 dark:text-white/60 mb-1.5">
                <span>Perbesar / Perkecil (Zoom)</span>
                <span className="font-mono">{Math.round(scale * 100)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  className="w-8 h-8 rounded-lg bg-white dark:bg-[#222] border border-black/15 dark:border-white/15 flex items-center justify-center font-black text-sm hover:bg-slate-100 dark:hover:bg-white/10 text-black dark:text-white"
                >
                  -
                </button>
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.05"
                  value={scale}
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className="flex-1 accent-blue-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                />
                <button
                  onClick={handleZoomIn}
                  className="w-8 h-8 rounded-lg bg-white dark:bg-[#222] border border-black/15 dark:border-white/15 flex items-center justify-center font-black text-sm hover:bg-slate-100 dark:hover:bg-white/10 text-black dark:text-white"
                >
                  +
                </button>
              </div>
            </div>

            {/* Rotate & Action Buttons */}
            <div>
              <span className="block text-xs font-bold text-black/70 dark:text-white/60 mb-1.5">
                Putar Foto
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleRotateLeft}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-[#222] border border-black/15 dark:border-white/15 text-xs font-bold text-black dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                >
                  <span>↺</span> Putar Kiri (-90°)
                </button>
                <button
                  onClick={handleRotateRight}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-[#222] border border-black/15 dark:border-white/15 text-xs font-bold text-black dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                >
                  <span>↻</span> Putar Kanan (+90°)
                </button>
              </div>
            </div>
          </div>

          {/* Download Final Result Button */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-black/70 dark:text-white/60 mb-2">
              Langkah 2: Simpan & Unduh Twibbon
            </label>
            <button
              onClick={handleDownload}
              disabled={!userImage}
              className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-black text-sm transition-all shadow-md ${
                userImage
                  ? 'bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white cursor-pointer'
                  : 'bg-slate-200 dark:bg-white/10 text-black/40 dark:text-white/30 cursor-not-allowed'
              }`}
            >
              <span className="text-xl">💾</span>
              <span>Unduh Hasil Twibbon (PNG)</span>
            </button>

            {downloadSuccess && (
              <div className="mt-2.5 p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-300 text-xs font-bold text-center animate-bounce">
                🎉 Twibbon berhasil diunduh! Siap diunggah ke medsos.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Caption Template Helper Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border-2 border-blue-500/20 dark:border-blue-400/20 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">📋</span>
            <h4 className="text-sm font-black uppercase text-blue-950 dark:text-blue-200">
              Template Caption Twibbon
            </h4>
          </div>
          <button
            onClick={handleCopyCaption}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold shadow-sm transition-all active:scale-95"
          >
            <span>{copiedCaption ? '✓ Tersalin!' : 'Salin Caption'}</span>
          </button>
        </div>

        <pre className="p-3.5 rounded-xl bg-white/80 dark:bg-black/40 border border-black/10 dark:border-white/10 text-xs font-mono text-black/80 dark:text-white/80 whitespace-pre-wrap leading-relaxed overflow-x-auto">
          {captionTemplate}
        </pre>
      </div>
    </div>
  )
}
