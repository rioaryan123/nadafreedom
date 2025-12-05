import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'BUSINESS', href: '/business' },
        { name: 'PLANS', href: '/plans' },
        { name: 'ABOUT US', href: '/about-us' },
        { name: 'CONTACT', href: '/contact' },
    ];

    // Style untuk gradient text (SUDAH BENAR SESUAI DESAIN)
    const gradientTextClass = 'text-transparent bg-clip-text bg-gradient-to-r from-[#6717cd] to-[#2871fa]';

    return (
        // PENAMBAHAN KECIL: Saya tambahkan 'font-sans' di sini untuk menjamin penggunaan Poppins
        <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-100 font-sans">
            <div className="container mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
                
                {/* --- 1. LOGO SECTION --- */}
                <Link href="/" className="flex items-center gap-1 group">
                    {/* Pastikan file gambar logo Anda ada di public/images/logo.png */}
                    <img 
                        src="/images/logo.png" 
                        alt="NFI Logo"
                        className="h-10 w-auto" // Ukuran logo
                        onError={(e) => {
                            // Fallback jika gambar tidak ditemukan
                            e.currentTarget.style.display = 'none';
                            document.getElementById('logo-fallback').style.display = 'flex';
                        }}
                    />
                    {/* Fallback Teks (Akan tampil jika gambar error) */}
                    <div id="logo-fallback" className="hidden text-3xl font-extrabold tracking-tighter items-center select-none">
                        <span className="bg-gradient-to-r from-[#6717cd] to-[#2871fa] bg-clip-text text-transparent">
                            NFI
                        </span>
                    </div>
                </Link>

                {/* --- 2. DESKTOP MENU LINKS --- */}
                {/* Ukuran text-xl sudah pas untuk tampilan yang jelas */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = url === link.href;
                        return (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className={`text-xl font-bold tracking-wide transition-all duration-300 uppercase 
                                    ${isActive 
                                        ? gradientTextClass // Jika Aktif: Pakai Gradient
                                        : 'text-indigo-900/70 hover:' + gradientTextClass // Tidak Aktif: Hover jadi Gradient
                                    }
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* --- 3. RIGHT SECTION (Bahasa & Mobile Toggle) --- */}
                <div className="flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="hidden lg:flex items-center text-sm font-bold tracking-wider">
                        <span className={gradientTextClass + " cursor-pointer"}>ID</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-gray-400 cursor-pointer hover:text-blue-600 transition">EN</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition p-1"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>
            </div> 

            {/* --- 4. MOBILE DROPDOWN MENU --- */}
            <div className={`lg:hidden bg-white absolute w-full left-0 top-24 shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className={`text-xl font-bold block ${url === link.href ? gradientTextClass : 'text-gray-600'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* Mobile Language Switcher */}
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center gap-3 font-bold text-sm">
                        <span className={gradientTextClass}>ID</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-400">EN</span>
                    </div>
                </div>
            </div> 
        </nav>
    );
}