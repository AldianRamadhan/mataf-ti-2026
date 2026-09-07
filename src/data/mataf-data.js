// =========================================================================
// MATAF TI 2026 — PUSAT DATA
// Panitia cukup ubah nilai-nilai di file ini. Tidak perlu menyentuh
// komponen React lain. Semua data DEMO wajib diganti sebelum publikasi.
// =========================================================================

export const SITE = {
  eventName: 'MATAF TI 2026',
  tagline: 'United in Purpose, Growing in Excellence',
  taglineId: 'United in Purpose, Growing in Excellence',
  prodi: 'Teknologi Informasi',
  kampus: "Universitas 'Aisyiyah Yogyakarta (UNISA Yogyakarta)",
  instagram: '[ISI LINK INSTAGRAM]',
  websiteKampus: 'https://unisayogya.ac.id',
  whatsappPanitia: '[ISI LINK WHATSAPP]',
}

// EDIT THIS SECTION TO UPDATE AGENDA / DRESSCODE / RUNDOWN PER HARI
// status: "announced" | "soon" | "unavailable"  -> dipakai badge Dresscode
export const events = [
  {
    date: '2026-09-15', // YYYY-MM-DD
    day: 1,
    title: 'Opening MATAF TI 2026',
    time: '06:30',
    meetTime: '06:15', // wajib hadir 15 menit sebelum
    location: 'SM 5.10',
    dresscode: {
      status: 'announced',
      atasan: 'Kemeja putih',
      bawahan: 'Celana bahan hitam',
      sepatu: 'Sepatu formal hitam',
      tambahan: 'ID Card MATAF',
    },
    bring: [
      'CoCard MATAF TI 2026',
      'Alat Tulis Lengkap',
      'Tumbler / Botol Air Minum Pribadi',
      'Obat-obatan Pribadi (Khusus yang memiliki riwayat penyakit)',
      'Sandal Jepit dan Alat Sholat (Untuk keperluan ibadah/wudhu)'
    ],
    note: 'Peserta wajib hadir 15 menit sebelum acara dimulai.',
    description: 'Pembukaan resmi MATAF TI 2026, pengenalan program studi, dan pengenalan Itech.',
    pic: '[ISI NAMA PANITIA]',
    rundown: [
      { time: '04:30 - 04:45',
    activity: 'Kedatangan Panitia & Pendamping',
    location: 'SM 5.10', },

      { time: '04:45 - 05:00',
    activity: 'Presensi Kehadiran Panitia & Pendamping',
    location: 'SM 5.10', },

      {  time: '05:00 - 06:30',
    activity: 'Persiapan & Briefing Panitia dan Pendamping',
    location: 'SM 5.10', },

      {  time: '06:30 - 07:00',
    activity: 'Kedatangan MABA ke Universitas',
    location: 'Halaman Depan Gedung SW', },

      { time: '07:00 - 07:45',
    activity: 'Pengecekan MABA',
    location: 'Halaman Depan Gedung SW', },

      {  time: '07:45 - 08:30',
    activity: 'Kedatangan & Presensi Kehadiran MABA',
    location: 'SM 5.10', },

      { time: '08:30 - 08:40',
    activity: 'Pembukaan Acara',
    location: 'SM 5.10', },

      { time: '08:40 - 08:45',
    activity: 'Pembacaan Kalam Ilahi',
    location: 'SM 5.10', },

      { time: '08:45 - 08:55',
    activity: 'Menyanyikan Indonesia Raya, Mars Aisyiyah & Mars UNISA',
    location: 'SM 5.10', },

    { time: '08:55 - 08:59',
    activity: 'Sambutan Ketua Pelaksana MATAF TI 2026',
    location: 'SM 5.10', },

    {  time: '08:59 - 09:03',
    activity: 'Sambutan Kaprodi Teknologi Informasi',
    location: 'SM 5.10', },

    {  time: '09:03 - 09:33',
    activity: 'Pengenalan Akademik',
    location: 'SM 5.10', },

    {  time: '09:33 - 09:48',
    activity: 'Sesi Tanya Jawab',
    location: 'SM 5.10', },

    {  time: '09:48 - 09:50',
    activity: 'Pembacaan CV Pemateri',
    location: 'SM 5.10', },

    {  time: '09:50 - 10:50',
    activity: 'Materi Motivasi & Pengembangan Diri',
    location: 'SM 5.10', },

    {  time: '10:50 - 11:05',
    activity: 'Sesi Tanya Jawab',
    location: 'SM 5.10', },

    {  time: '11:05 - 11:10',
    activity: 'Penyerahan Sertifikat & Foto Bersama',
    location: 'SM 5.10', },

    {  time: '11:10 - 11:25',
    activity: 'Ice Breaking',
    location: 'SM 5.10', },

    {  time: '11:25 - 13:00',
    activity: 'ISHOMA',
    location: 'Masjid Walidah Dahlan / SM 5.10', },

    {  time: '13:00 - 13:20',
    activity: 'Pemaparan Materi PPLKPT & ULD',
    location: 'SM 5.10',},

    {  time: '13:20 - 13:40',
    activity: 'Pengenalan HIMA',
    location: 'SM 5.10',},

    {  time: '13:40 - 13:50',
    activity: 'Sesi Tanya Jawab',
    location: 'SM 5.10', },

    {  time: '13:50 - 14:15',
    activity: 'Games Interaktif',
    location: 'SM 5.10', },

    { time: '14:15 - 15:00',
  activity: 'PEDOMAN',
  location: 'SM 5.10', },     
    
    { time: '15:00 - 15:05',
    activity: 'Pengumuman Tugas Terbaik MABA',
    location: 'SM 5.10', },                                                                                   

    { time: '15:05 - 15:10',
    activity: 'Penyerahan Hadiah',
    location: 'SM 5.10', },                                                                                   

    { time: '15:10 - 15:25',
    activity: 'Kesan & Pesan dari MABA',
    location: 'SM 5.10', },  
    
    { time: '15:25 - 15:30',
    activity: 'Doa',
    location: 'SM 5.10', },                                                                                   

    { time: '15:30 - 15:45',
    activity: 'Foto Bersama',
    location: 'SM 5.10', },                                                                                   

    { time: '15:45 - 15:50',
    activity: 'Penutup',
    location: 'SM 5.10', },                                                                                   

    { time: '15:50 - 16:00',
    activity: 'Pengarahan Kepulangan MABA',
    location: 'SM 5.10', },                                                                                   


    ],
  },
  
  
]

// EDIT THIS SECTION TO UPDATE PENGUMUMAN — pengumuman terbaru taruh paling ATAS
export const announcements = [
  {
    id: 'a1',
    category: 'Important',
    title: 'Jadwal Pelaksanaan, Waktu Kedatangan & Titik Kumpul MATAF TI 2026',
    body: 'Kegiatan MATAF TI 2026 akan diselenggarakan pada hari Selasa, 15 September 2026. Mahasiswa Baru wajib hadir tepat waktu pukul 06.30 WIB bertempat di Depan Gedung Siti Walidah, kemudian akan diarahkan oleh panitia menuju Gedung Siti Moendjijah. Pastikan seluruh atribut dresscode dan perlengkapan bawaan sudah siap.',
    date: '2026-08-25',
  },
  {
    id: 'a2',
    category: 'Event',
    title: 'Titik Kumpul Utama di Depan Gedung Siti Walidah',
    body: 'Titik kumpul dan presensi awal mahasiswa baru bertempat di Depan Gedung Siti Walidah. Harap hadir pukul 06.30 WIB untuk briefing dan pengecekan kelengkapan atribut oleh pendamping sebelum diarahkan bersama-sama menuju Gedung Siti Moendjijah.',
    date: '2026-08-25',
  },
  {
    id: 'a3',
    category: 'Information',
    title: 'Ketepatan Waktu Kehadiran Mahasiswa Baru (06.30 WIB)',
    body: 'Presensi kehadiran dibuka mulai pukul 06.30 WIB di Depan Gedung Siti Walidah. Keterlambatan tanpa konfirmasi akan dicatat oleh divisi kedisiplinan panitia.',
    date: '2026-08-25',
  },
]

// EDIT THIS SECTION TO UPDATE TUGAS
export const assignments = [
  {
    id: 't1',
    title: 'Pembuatan Video Kreatif Perkenalan Diri',
    category: 'Penugasan Individu',
    deadline: '2026-09-12T23:59:00', // Batas waktu H-3 sebelum pelaksanaan acara (15 September 2026)
    deadlineNote: 'Batas akhir pengumpulan H-3 (Sabtu, 12 September 2026 pukul 23.59 WIB) untuk proses review dan kurasi oleh panitia.',
    platform: 'TikTok (Akun Utama / Publik)',
    duration: '1 – 3 Menit',
    frameProvided: true,
    captionRule: 'Bebas (Tidak ada ketentuan khusus)',
    rules: [
      'Menggunakan frame/twibbon resmi yang telah disediakan oleh panitia.',
      'Video diposting pada akun pertama media sosial (TikTok), akun tidak boleh diprivat.',
      'Durasi video minimal 1 menit dan maksimal 3 menit.',
      'Tidak ada ketentuan caption (bebas dan sopan).',
      'Berpenampilan sopan, rapi, dan menarik selama pembuatan video.',
      'Video yang dibuat TIDAK mengandung hoax, ujaran kebencian, SARA, dengan pemilihan kata yang baik serta tidak boleh menyinggung pihak manapun.',
      'Diperbolehkan menambahkan efek, musik/backsound, atau elemen visual lain agar video lebih menarik.',
      'Diperkenankan untuk dubbing / voice over selama proses pembuatan video berlangsung.',
    ],
    contentPoints: [
      {
        label: '1. Nama Panggilan',
        desc: 'Sebutkan nama panggilan akrabmu secara jelas dan percaya diri.',
        icon: '👤'
      },
      {
        label: '2. Asal Daerah',
        desc: 'Sebutkan asal daerah / kota tempat tinggal asalmu.',
        icon: '📍'
      },
      {
        label: '3. Hobi (Sambil Diperagakan)',
        desc: 'Ceritakan hobimu dan peragakan secara kreatif & ekspresif di depan kamera!',
        icon: '🎭'
      },
      {
        label: '4. Alasan Masuk TI & Ingin Jadi / Buat Apa?',
        desc: 'Kenapa memilih TI? Ingin menjadi apa (Programmer, UI/UX Designer, Data Analyst, AI Engineer, Cybersecurity)? Atau ingin membuat aplikasi tertentu? Masih bingung? Atau: “Kalau suatu saat aku bisa membuat teknologi sendiri, aku ingin membuat ... karena ...”',
        icon: '🚀'
      },
      {
        label: '5. AI Favorit',
        desc: 'AI yang paling sering/suka kamu gunakan dan jelaskan alasannya.',
        icon: '🤖'
      },
      {
        label: '6. Fun Fact Teknologi / AI',
        desc: 'Bagikan fakta menarik yang berkaitan dengan dunia teknologi atau kecerdasan buatan.',
        icon: '💡'
      }
    ],
    status: 'pending',
  },
]

// EDIT THIS SECTION TO UPDATE FAQ
export const faqs = [
  { q: 'Kalau terlambat bagaimana?', a: 'Segera hubungi narahubung kelompok atau panitia lapangan yang bertugas hari itu.' },
  { q: 'Kalau tidak tahu lokasi kegiatan?', a: 'Gunakan halaman Location untuk melihat titik kumpul dan denah lokasi.' },
  { q: 'Kalau lupa dresscode hari ini?', a: 'Silakan cek halaman Dresscode, informasi diperbarui setiap hari berdasarkan tanggal.' },
  { q: 'Apakah boleh izin tidak hadir?', a: 'Perizinan wajib disampaikan ke narahubung kelompok minimal H-1 dengan alasan yang jelas.' },
  { q: 'Bagaimana jika ada perubahan mendadak?', a: 'Pantau halaman Pengumuman dan notifikasi di navbar, seluruh perubahan akan diinformasikan di sana.' },
  { q: 'Apa yang terjadi jika tugas tidak dikumpulkan tepat waktu?', a: 'Hubungi PIC tugas terkait melalui kontak panitia sebelum deadline untuk konfirmasi.' },
]

// EDIT THIS SECTION TO UPDATE PANDUAN MABA
export const guide = [
  {
    title: 'Apa itu MATAF?',
    content: 'MATAF (Masa Ta’aruf) adalah rangkaian kegiatan pengenalan kampus, program studi, dan lingkungan akademik bagi mahasiswa baru Teknologi Informasi UNISA Yogyakarta.',
  },
  {
    title: 'Apa yang harus dilakukan sebelum MATAF?',
    content: 'Sebelum mengikuti MATAF, mahasiswa baru diharapkan mengisi data atau formulir yang diperlukan, mengikuti briefing yang telah ditentukan, serta memastikan jadwal, lokasi, dan perlengkapan yang harus dibawa sudah dipersiapkan.',
  },
  {
    title: 'Apa yang harus dibawa secara umum?',
    content: 'Mahasiswa baru diharapkan membawa identitas diri, alat tulis, perlengkapan sesuai ketentuan MATAF, air minum, serta kebutuhan pribadi lainnya.',
  },
  {
    title: 'Etika selama kegiatan',
    content: 'Selama kegiatan MATAF, mahasiswa baru diharapkan menjaga sopan santun, menghormati panitia dan seluruh pihak yang terlibat, mengikuti kegiatan dengan tertib, serta menjaga nama baik diri sendiri dan kampus.',
  },
  {
    title: 'Peraturan MATAF',
    content: 'Mahasiswa baru wajib mengikuti seluruh rangkaian kegiatan sesuai jadwal, menggunakan pakaian dan atribut sesuai ketentuan, mematuhi arahan panitia, serta tidak membawa barang yang dilarang selama kegiatan.',
  },
  {
    title: 'Tips mengikuti MATAF',
    content: 'Datanglah tepat waktu atau lebih awal, pastikan sudah membaca seluruh informasi yang diberikan, siapkan perlengkapan dari jauh-jauh hari, dan jangan ragu untuk bertanya kepada panitia apabila terdapat informasi yang belum dipahami.',
  },
  {
    title: 'Informasi Kampus',
    content: 'Mahasiswa baru disarankan untuk mengenali lingkungan dan fasilitas kampus serta mengikuti kanal informasi resmi kampus agar selalu mendapatkan informasi terbaru mengenai kegiatan akademik maupun kemahasiswaan.',
    link: {
      label: 'Website Resmi UNISA Yogyakarta',
      url: 'https://www.unisayogya.ac.id/'
    }
  },
  {
    title: 'Informasi Program Studi TI (PSTI)',
    content: 'Mahasiswa baru dapat mulai mengenal lebih jauh Program Studi Teknologi Informasi (PSTI), mulai dari lingkungan program studi, dosen, kegiatan akademik, mata kuliah, hingga berbagai kegiatan kemahasiswaan yang tersedia. Informasi mengenai program studi, kegiatan, pengumuman, dan informasi akademik lainnya dapat diakses melalui website resmi PSTI UNISA Yogyakarta.',
    link: {
      label: 'Website Resmi PSTI UNISA Yogyakarta',
      url: 'https://psti.unisayogya.ac.id/?utm_source=chatgpt.com'
    }
  },
]

// EDIT THIS SECTION TO UPDATE LOKASI
export const locationInfo = {
  name: SITE_LOCATION_NAME(),
  building: 'Gedung Utama UNISA Yogyakarta',
  address: 'Jl. KH. Ahmad Dahlan, Area Sawah, Ngampilan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55261',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Universitas+Aisyiyah+Yogyakarta&output=embed',
  mapsLink: 'https://maps.google.com/?q=Universitas+Aisyiyah+Yogyakarta',
}
function SITE_LOCATION_NAME() {
  return "Universitas 'Aisyiyah Yogyakarta"
}

// EDIT THIS SECTION TO UPDATE STRUKTUR PANITIA
export const committee = [
  // Pimpinan Utama (BPH - Badan Pengurus Harian)
  { role: 'Ketua Panitia / Ketua Pelaksana', name: 'Almido Syaban', division: 'Ketua', level: 'leader' },
  { role: 'Sekretaris 1', name: 'ADIS MEDYA NURAGUSTIN', division: 'Sekretaris', level: 'leader' },
  { role: 'Sekretaris 2', name: 'LUTFHIA REVI NAFISA', division: 'Sekretaris', level: 'leader' },
  { role: 'Bendahara 1', name: 'AULIA MARGARETHA R. SIDAURUK', division: 'Bendahara', level: 'leader' },
  { role: 'Bendahara 2', name: 'STIFA ALIYA FAUZIYYAH', division: 'Bendahara', level: 'leader' },

  // Koordinator Divisi
  { role: 'Koordinator Acara', name: 'Aldian Ramadhan Primadiansyah', division: 'Acara', level: 'koor' },
  { role: 'Koordinator Humas', name: 'Ananda Muthia Maghfira Salsabila', division: 'Humas', level: 'koor' },
  { role: 'Koordinator Media', name: "ARZA AL-A'LA PUTRA USGIANTO", division: 'Media', level: 'koor' },
  { role: 'Koordinator Perkab', name: 'ANANDA MUHAMMAD SYAIFUL HADJIM', division: 'Perkab', level: 'koor' },
  { role: 'Koordinator Konsumsi', name: 'MIFTAHUL JANNAH AZZAHRA', division: 'Konsumsi', level: 'koor' },
  { role: 'Koordinator Kantib', name: 'DESTIANNA NELIZA', division: 'Kantib', level: 'koor' },
]

// EDIT THIS SECTION TO UPDATE KONTAK BANTUAN
export const contacts = [
  {
    label: 'Ketua Pelaksana / Panitia',
    name: 'Almido Syaban',
    phone: '+62 831-9374-0685',
    whatsapp: 'https://wa.me/6283193740685'
  },
  {
    label: 'Divisi Acara',
    name: 'Aldian Ramadhan Primadiansyah',
    phone: '+62 896-3773-2667',
    whatsapp: 'https://wa.me/6289637732667'
  },
  {
    label: 'Divisi Humas',
    name: 'Adis Medya Nuragustin',
    phone: '+62 821-1793-3102',
    whatsapp: 'https://wa.me/6282117933102'
  },
]

// Achievement definitions untuk gamifikasi sederhana
export const achievements = [
  { id: 'day1', label: 'First Day Completed', icon: '\ud83c\udfc6', requiredDays: 1 },
  { id: 'streak3', label: '3 Days Streak', icon: '\ud83d\udd25', requiredDays: 3 },
  { id: 'survivor', label: 'MATAF Survivor', icon: '\u2b50', requiredDays: 5 },
  { id: 'ready', label: 'Ready for TI', icon: '\ud83d\ude80', requiredDays: 5 },
]

// ---- Helper functions (dipakai di komponen, tidak perlu diedit) ----
export function getTodayEvent(refDate = new Date()) {
  const iso = toISODate(refDate)
  return events.find((e) => e.date === iso) || null
}

export function getTomorrowEvent(refDate = new Date()) {
  const tomorrow = new Date(refDate)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const iso = toISODate(tomorrow)
  return events.find((e) => e.date === iso) || null
}

export function getNextUpcomingEvent(refDate = new Date()) {
  const iso = toISODate(refDate)
  return events.find((e) => e.date >= iso) || events[0]
}

export function toISODate(d) {
  return d.toISOString().slice(0, 10)
}

export function daysCompleted(refDate = new Date()) {
  const iso = toISODate(refDate)
  return events.filter((e) => e.date < iso).length
}
