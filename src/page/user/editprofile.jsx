import Dropdown from '../../component/dropdown.jsx'
function Profile() {
   const minatKegiatan = [
    "Kewirausahaan (Entrepreneurship)",
    "Teknologi & Pemrograman",
    "Desain Grafis & UI/UX",
    "Pemasaran Digital & Media Sosial",
    "Fotografi & Videografi",
    "Penulisan Kreatif & Konten",
    "Riset & Karya Ilmiah",
    "Kesehatan Mental & Psikologi",
    "Kegiatan Sosial & Relawan (Volunteering)",
    "Lingkungan Hidup & Kepecintaalaman",
    "Musik & Seni Pertunjukan",
    "Investasi & Literasi Keuangan",
    "Olahraga (Umum)",
    "E-sports & Game Development",
    "Debat & Model United Nations (MUN)",
    "Pengembangan Diri (Soft Skills)",
    "Bahasa & Budaya Asing",
    "Organisasi & Kepemimpinan",
    "Seni Rupa & Kerajinan",
    "Kuliner & Tata Boga"
  ];

  const bakatKegiatan = [
    "Berbicara di Depan Umum (Public Speaking)",
    "Analisis & Logika",
    "Kepemimpinan (Leadership)",
    "Kreativitas & Menghasilkan Ide",
    "Kecerdasan Visual & Estetika",
    "Empati & Keterampilan Interpersonal",
    "Menulis Persuasif",
    "Berpikir Kritis & Memecahkan Masalah",
    "Adaptasi & Cepat Belajar",
    "Manajemen Waktu & Organisasi",
    "Kemampuan Musikal (Vokal/Alat Musik)",
    "Kemampuan Atletik & Kinestetik",
    "Negosiasi & Diplomasi",
    "Keterampilan Mengajar & Menjelaskan",
    "Kejelian Terhadap Detail (Attention to Detail)",
    "Penguasaan Bahasa Asing",
    "Seni Peran (Akting)",
    "Keterampilan Teknikal/Mekanik",
    "Strategi & Perencanaan",
    "Keberanian & Pengambilan Risiko"
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
     <aside className="border-r pr-4">
        <nav className="space-y-2">
          <a className="block rounded-md px-4 py-3 bg-[#F2E9DB]">Pengaturan Informasi Akun</a>
          <a href="/editpassword" className="block rounded-md px-4 py-3 hover:bg-gray-100">Pengaturan Keamanan</a>
          <a href="/editemail" className="block rounded-md px-4 py-3 hover:bg-gray-100">Pengaturan Email</a>
        </nav>
      </aside>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <button type="button" onClick={()=>window.history.back()} className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 fill-current"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <h2 className="text-2xl md:text-3xl font-semibold">Pengaturan Informasi Akun</h2>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Informasi Akun</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-[#F2E9DB] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-gray-700 fill-current"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"/></svg>
                </div>
                <div className="text-center text-xs text-gray-600 mt-2">Add a profile image<br/>drag and drop or choose a file to upload</div>
              </div>

              <label className="block">
                <div className="text-sm font-medium mb-1">Nama</div>
                <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Email</div>
                <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Nomor Telepon</div>
                <input type="tel" className="w-full rounded-md border border-gray-300 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Fakultas</div>
                <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Prodi</div>
                <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2" />
              </label>

              <button type="button" className="px-6 py-2.5 rounded-md bg-teal-200 text-gray-900 border border-gray-300 hover:bg-teal-300">Edit</button>
            </div>

            <div className="space-y-6">
              <label className="block">
                <div className="text-sm font-medium mb-1">Minat Kegiatan</div>
                <Dropdown items={minatKegiatan}>
                  Minat Kegiatan
                </Dropdown>
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Minat Kegiatan</div>
                <Dropdown items={minatKegiatan}>
                  Minat Kegiatan
                </Dropdown>
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Minat Kegiatan</div>
                 <Dropdown items={minatKegiatan}>
                  Minat Kegiatan
                </Dropdown>
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Bakat Kegiatan</div>
                <Dropdown items={bakatKegiatan}>
                  Bakat Kegiatan
                </Dropdown>
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Bakat Kegiatan</div>
                <Dropdown items={bakatKegiatan}>
                  Bakat Kegiatan
                </Dropdown>
              </label>
              <label className="block">
                <div className="text-sm font-medium mb-1">Bakat Kegiatan</div>
                <Dropdown items={bakatKegiatan}>
                  Bakat Kegiatan
                </Dropdown>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Profile
