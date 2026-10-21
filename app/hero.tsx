import React from 'react';

// Hero section for the public landing page
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Layanan IMEI Indonesia
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100">
            IMEI Services. Clear Status. Trusted Process.
          </p>
          <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto">
            Platform verifikasi IMEI terpercaya untuk perangkat Android dan iPhone di Indonesia. 
            Cek status registrasi, garansi, dan layanan purna jual dengan cepat dan akurat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
              Cek IMEI Sekarang
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Pelajari Layanan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
