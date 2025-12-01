function TampilanKegiatan(){
  const image = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
  const tags = ["Teknologi","IOT","AI"]
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <button type="button" onClick={()=>window.history.back()} className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-700 fill-current"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold">Kegiatan</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
        <div>
          <div className="rounded-xl border border-gray-300 overflow-hidden bg-white shadow-sm">
            <img src={image} alt="Poster" className="w-full h-[420px] object-cover" />
          </div>
          <button type="button" className="mt-4 w-full rounded-md border border-gray-300 bg-teal-100 text-gray-800 py-2.5 hover:bg-teal-200">Bookmark Kegiatan</button>
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map(t => (
              <span key={t} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">{t}</span>
            ))}
          </div>
          <div className="text-xs text-gray-500 pt-2">Diumumkan pada 19/10/2021</div>
        </div>

        <div className="space-y-2">
          <div className="text-xl md:text-2xl font-semibold">Artificial Intelligence Competition "Implementasi AI dalam Kehidupan Sehari - Hari"</div>
          <div className="text-sm text-gray-700">Sabtu, 31 Oktober 2021 · Universitas Mercu Buana Yogyakarta</div>
          <div className="font-semibold text-sm">TAK WAJIB</div>
          <div className="text-sm">Nominal: 4</div>
          <div className="text-xs text-justify whitespace-pre-line">
            Universitas Mercu Buana Yogyakarta mengadakan Artificial Intelligence Competition (AIC) dengan tema “Implementasi AI dalam Kehidupan Sehari-hari.” Kompetisi ini bertujuan mendorong siswa SMA/SMK serta mahasiswa S1 untuk berinovasi dalam penerapan teknologi kecerdasan buatan pada berbagai aspek kehidupan modern.

            Peserta dapat memilih berbagai topik kompetisi seperti Internet of Things (IoT), Business Intelligence, Decision Support System, Machine Learning, serta Data Mining pada berbagai bidang termasuk pertanian, ekonomi, psikologi, pendidikan, UMKM, kesehatan, teknologi informasi, dan pemerintahan.
            Selain itu, peserta diwajibkan membuat prototipe yang dapat berupa penerapan teknologi IoT, aplikasi web, desktop, atau aplikasi mobile (Android/iOS).

            Acara ini akan berlangsung secara virtual melalui Zoom dan YouTube pada 9 November 2021, sehingga memungkinkan peserta dari seluruh Indonesia untuk ikut berpartisipating secara mudah dan fleksibel.

            Tersedia hadiah menarik untuk tiga juara utama, dengan total jutaan rupiah. Pendaftaran dibuka untuk tim beranggotakan 2–3 orang dengan biaya Rp125.000 per tim, dan proses pendaftaran dilakukan melalui website resmi AIC dengan pembayaran melalui rekening BNI Yayasan Wangsammanggala.

            Event ini menjadi kesempatan besar bagi generasi muda untuk mengasah kemampuan teknologi, berkreasi, dan menunjukkan kontribusi mereka dalam penerapan kecerdasan buatan di dunia nyata.  
          </div>
        </div>
      </div>

      <div className="flex justify-end text-sm text-gray-700">View: 100</div>
    </div>
  )
}

export default TampilanKegiatan