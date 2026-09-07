import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export default function AssignmentSubmission({ assignmentId = 'twibbon-submission' }) {
  const [submissions, setSubmissions] = useLocalStorage(`submissions-${assignmentId}`, [])
  
  const [name, setName] = useState('')
  const [nim, setNim] = useState('')
  const [group, setGroup] = useState('')
  const [postUrl, setPostUrl] = useState('')
  const [previewFile, setPreviewFile] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      setPreviewFile({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        dataUrl: event.target.result,
      })
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !nim.trim()) {
      alert('Mohon lengkapi Nama dan NIM terlebih dahulu.')
      return
    }

    const newSub = {
      id: Date.now().toString(),
      name: name.trim(),
      nim: nim.trim(),
      group: group.trim() || 'Mandiri',
      postUrl: postUrl.trim(),
      file: previewFile ? { name: previewFile.name, size: previewFile.size } : null,
      submittedAt: new Date().toISOString(),
    }

    setSubmissions([newSub, ...submissions])
    setIsSubmitted(true)
    
    // Clear form
    setName('')
    setNim('')
    setGroup('')
    setPostUrl('')
    setPreviewFile(null)

    setTimeout(() => {
      setIsSubmitted(false)
    }, 4000)
  }

  const handleDelete = (subId) => {
    if (confirm('Apakah Anda yakin ingin menghapus catatan pengumpulan ini?')) {
      setSubmissions(submissions.filter((s) => s.id !== subId))
    }
  }

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl border-2 border-black/20 dark:border-white/15 p-6 sm:p-8 shadow-lg space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold uppercase mb-2 border border-emerald-300 dark:border-emerald-700">
            <span>🚀</span> Form Pengumpulan & Konfirmasi Tugas
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white">
            Upload & Pengumpulan Penugasan Twibbon / Video
          </h3>
          <p className="text-xs sm:text-sm font-bold text-black/60 dark:text-white/50 mt-0.5">
            Kumpulkan link postingan TikTok/Instagram atau simpan bukti upload tugas Anda di sini.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-black dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 self-start sm:self-auto"
        >
          {isExpanded ? 'Tutup Form ▲' : 'Buka Form ▼'}
        </button>
      </div>

      {/* Submission Form */}
      {isExpanded && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-black/70 dark:text-white/60 mb-1.5">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Ahmad Dahlan"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border-2 border-black/15 dark:border-white/15 focus:border-blue-600 dark:focus:border-blue-500 text-sm font-bold text-black dark:text-white outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-black/70 dark:text-white/60 mb-1.5">
                NIM *
              </label>
              <input
                type="text"
                required
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Contoh: 2610201001"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border-2 border-black/15 dark:border-white/15 focus:border-blue-600 dark:focus:border-blue-500 text-sm font-bold text-black dark:text-white outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-black/70 dark:text-white/60 mb-1.5">
                Kelompok (Opsional)
              </label>
              <input
                type="text"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                placeholder="Contoh: Kelompok 03 - Turing"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border-2 border-black/15 dark:border-white/15 focus:border-blue-600 dark:focus:border-blue-500 text-sm font-bold text-black dark:text-white outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-black/70 dark:text-white/60 mb-1.5">
                Link Postingan Media Sosial (TikTok / Instagram / Drive)
              </label>
              <input
                type="url"
                value={postUrl}
                onChange={(e) => setPostUrl(e.target.value)}
                placeholder="https://www.tiktok.com/@username/video/..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border-2 border-black/15 dark:border-white/15 focus:border-blue-600 dark:focus:border-blue-500 text-sm font-bold text-black dark:text-white outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-black/70 dark:text-white/60 mb-1.5">
                Lampiran File Bukti / Screenshot (Opsional)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  id="submission-file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="submission-file"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-black/30 border-2 border-dashed border-black/20 dark:border-white/20 hover:border-blue-500 cursor-pointer text-xs font-mono font-bold text-black/70 dark:text-white/70 text-center truncate"
                >
                  {previewFile ? `📎 ${previewFile.name} (${previewFile.size})` : '📁 Pilih File / Foto Bukti'}
                </label>
                {previewFile && (
                  <button
                    type="button"
                    onClick={() => setPreviewFile(null)}
                    className="p-2 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 text-xs font-bold"
                    title="Hapus lampiran"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-[11px] font-mono text-black/50 dark:text-white/40">
              *Data tersimpan secara otomatis di perangkat lokal Anda sebagai bukti telah menyelesaikan penugasan.
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
            >
              Simpan & Konfirmasi Selesai ✓
            </button>
          </div>

          {isSubmitted && (
            <div className="p-3.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-300 text-xs font-bold text-center animate-fade-in">
              ✅ Konfirmasi pengumpulan berhasil disimpan! Semangat menyambut MATAF TI 2026!
            </div>
          )}
        </form>
      )}

      {/* Submission History List */}
      {submissions && submissions.length > 0 && (
        <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase text-black/60 dark:text-white/50 flex items-center gap-2">
            <span>📋</span> Riwayat Pengumpulan Anda ({submissions.length})
          </h4>

          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            {submissions.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/5 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2 font-black text-black dark:text-white">
                    <span>{item.name}</span>
                    <span className="font-mono text-black/50 dark:text-white/40 font-normal">({item.nim})</span>
                    {item.group && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono text-[10px]">
                        {item.group}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-1 text-black/70 dark:text-white/60 font-mono text-[11px]">
                    {item.postUrl && (
                      <a
                        href={item.postUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>🔗</span> Buka Postingan
                      </a>
                    )}
                    {item.file && (
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <span>📎</span> {item.file.name}
                      </span>
                    )}
                    <span className="text-black/40 dark:text-white/30">
                      🕒 {new Date(item.submittedAt).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-[11px] font-mono text-red-500 hover:text-red-700 self-end sm:self-auto hover:underline"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
