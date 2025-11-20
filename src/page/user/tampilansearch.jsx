import Card from "../../component/card.jsx" 
function TampilanSearch(){
    const items = new Array(8).fill(0)
    return(
        <div>
            <h1 className="text-2xl font-semibold mb-8">Filter</h1>
            <div className="flex flex-wrap gap-10">
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Kategori</h2>
                    <div className="flex flex-wrap gap-2 cursor-pointer">
                        <div className="bg-[#F0F0F0] text-center py-2 rounded-md"></div>
                        <div>semua</div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Bakat Kegiatan</h2>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Minat Kegiatan</h2>
                </div>
            </div>
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
    );
}
export default TampilanSearch