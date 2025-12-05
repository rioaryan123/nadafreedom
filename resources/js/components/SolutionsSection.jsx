import React from 'react';

const SolutionsSection = () => {
    const features = [
        {
            id: 1,
            title: "Symmetrical Speed",
            icon: "/icons/rocket.svg",
            desc: "Kecepatan Upload Sama Cepat dengan Download. Ideal untuk Content Creator dan Meeting Online."
        },
        {
            id: 2,
            title: "Pure Fiber Network",
            icon: "/icons/jack.svg",
            desc: "Nikmati Kualitas Jaringan Fiber Optik Terbaik Langsung ke Rumah Anda. Anti Lag, Minim Noise."
        },
        {
            id: 3,
            title: "Responsive Technician",
            icon: "/icons/customer-service.svg",
            desc: "Dukungan Teknisi Profesional yang Siap Datang Setelah Laporan Anda Diterima."
        },
        {
            id: 4,
            title: "Transparent Pricing",
            icon: "/icons/price-tag.svg",
            desc: "Tagihan Bulanan Tetap dan Jelas. Tanpa Biaya Tersembunyi, Tanpa Hidden Fee."
        }
    ];

    return (
        <section className="w-full font-['Poppins'] py-16 bg-white overflow-hidden">
            {/* Container Utama: Menggunakan flex column dan items-center untuk memaksa semua child ke tengah */}
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                
                {/* --- HEADER SECTION --- */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-purple-700 uppercase mb-2 tracking-wide flex justify-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600 text-center">
                            NFI SOLUTION'S FOR YOU
                        </span>
                    </h2>
                    <p className="text-gray-500 italic font-medium text-sm md:text-base text-center">
                        The Ultimate Connectivity Solution. Connect Your Home to the Future.
                    </p>
                </div>

                {/* --- FEATURES GRID --- */}
                {/* PERUBAHAN 1: mb-0
                    Menghilangkan margin bawah sepenuhnya pada grid fitur.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-0 w-full relative z-10">
                    {features.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-center px-2">
                            <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                <img 
                                    src={item.icon} 
                                    alt={item.title} 
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto text-center">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- FOOTER BANNER (#FREEDOM) --- */}
            {/* PERUBAHAN 2: -mt-10 (Margin Top Negatif)
                Ini menarik container gambar ke ATAS sebanyak 10 unit (sekitar 40px).
                Efeknya: Bagian atas gambar yang "pudar putih" akan menumpuk di bawah teks fitur,
                sehingga tidak ada celah putih yang terlihat pisah.
            */}
            <div className="relative w-full h-[362px] bg-white flex items-center justify-center -mt-10 z-0">
                
                {/* Background Image Layer */}
                <img 
                    src="/images/bg.svg"
                    alt="Freedom Background"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Masking Gradient */}
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>

                {/* Text Content */}
                <div className="relative z-20 w-full max-w-full px-4 flex justify-center items-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold italic tracking-tighter custom-text-color drop-shadow-sm text-center leading-normal py-4 pr-6 w-auto">
                        #FREEDOM OF EXPRESSION
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;