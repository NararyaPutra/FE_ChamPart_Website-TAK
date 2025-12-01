function Card({gambar, judul, instansi, tanggal, statusTAK, tags = [], deadline, onClick}){
    return(
        <div onClick={onClick} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer transition-shadow duration-200 hover:shadow-md">
            <img className="w-full h-40 object-cover" src={gambar} alt="Event"/>
            <div className="p-4 space-y-2">
              <div className="font-bold">{judul}</div>  
              <div className="text-sm text-gray-600">{instansi}</div>
              <div className="text-sm text-gray-600">{tanggal}</div>
              <div className="text-sm font-bold">{statusTAK}</div>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-[#008DDA] text-white">{t}</span>
                ))}
              </div>
              <div className="text-xs text-gray-500 text-right">{deadline}</div>
            </div>
         </div>   
    );
}

export default Card;