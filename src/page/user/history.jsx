import Card from "../../component/card.jsx"

function History() {
  const items = new Array(4).fill(0)

  return (
    <div className="">
      <h1 className="text-2xl font-semibold mb-8">List Deadline</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((_, i) => (
          <Card
           key={i}
            gambar="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
            judul="Artificial Intelligence Competition “Implementasi AI dalam Kehidupan Sehari - Hari”"
            instansi="Universitas Negeri Yogyakarta"
            tanggal="Sabtu, 31 Oktober 2021"
            statusTAK="TAK WAJIB"
            tags={["Teknologi", "ICT", "AI"]}
            deadline="19/10/2021"
          />
        ))}
      </section>
    </div>
  )
}

export default History
