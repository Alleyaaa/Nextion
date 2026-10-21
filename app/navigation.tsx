import React from 'react';

// Navigation component with site branding and public menu
export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="text-xl font-bold text-gray-900">Nextion IMEI</div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Beranda</a>
              <a href="/cek-imei" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Cek IMEI</a>
              <a href="/layanan" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Layanan</a>
              <a href="/cara-kerja" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Cara Kerja</a>
              <a href="/faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
              <a href="/kontak" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Kontak</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
