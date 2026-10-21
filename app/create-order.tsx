import React, { useState } from 'react';

export default function CreateOrderPage() {
  const [selectedPackage, setSelectedPackage] = useState('1-bulan');
  const [imeiNumber, setImeiNumber] = useState('');

  const packages = [
    {
      id: '1-bulan',
      name: 'Verifikasi IMEI - 1 Bulan',
      price: 250000,
      duration: '30 hari',
    },
    {
      id: '3-bulan',
      name: 'Verifikasi IMEI - 3 Bulan',
      price: 750000,
      duration: '90 hari',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Buat Pesanan Baru</h1>
          <p className="text-gray-600">Lengkapi informasi perangkat Anda untuk melanjutkan</p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">Pilih Paket Layanan</label>
            <div className="space-y-3">
              {packages.map((pkg) => (
                <label key={pkg.id} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="package"
                    value={pkg.id}
                    checked={selectedPackage === pkg.id}
                    onChange={() => setSelectedPackage(pkg.id)}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{pkg.name}</h3>
                    <p className="text-sm text-gray-600">{pkg.duration} • Rp {pkg.price.toLocaleString('id-ID')}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="imei" className="block text-sm font-medium text-gray-700 mb-2">Nomor IMEI (15 digit)</label>
            <input
              type="text"
              id="imei"
              value={imeiNumber}
              onChange={(e) => setImeiNumber(e.target.value)}
              placeholder="Contoh: 123456789012345"
              maxLength={15}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Buat Pesanan
          </button>
        </form>
      </div>
    </div>
  );
}
