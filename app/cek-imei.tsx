import React from 'react';

export default function CekImeiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Cek Status IMEI</h1>
          <p className="text-gray-600">
            Masukkan nomor IMEI perangkat Anda untuk memeriksa status registrasi dan garansi
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="imei" className="block text-sm font-medium text-gray-700 mb-2">
              Nomor IMEI (15 digit)
            </label>
            <input
              type="text"
              id="imei"
              name="imei"
              placeholder="Contoh: 123456789012345"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              maxLength={15}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Cek IMEI Sekarang
          </button>
        </form>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Tentang Layanan Verifikasi IMEI</h3>
          <p className="text-sm text-blue-800">
            Layanan ini memverifikasi status registrasi perangkat Anda melalui database resmi operator seluler Indonesia. 
            Hasil verifikasi menunjukkan status perangkat saat ini dan masa berlaku pendaftaran. 
            Layanan tidak mencakup garansi perangkat selain status registrasi.
          </p>
        </div>
      </div>
    </div>
  );
}
