// Public service packages page showing available service options
export default function LayananPage() {
  const packages = [
    {
      id: '1-bulan',
      name: 'Verifikasi IMEI - 1 Bulan',
      duration: '30 hari',
      price: 250000,
      description: 'Layanan verifikasi IMEI untuk 1 bulan dengan dukungan penuh',
      features: ['Verifikasi status registrasi', 'Laporan detail', 'Dukungan 24/7'],
    },
    {
      id: '3-bulan',
      name: 'Verifikasi IMEI - 3 Bulan',
      duration: '90 hari',
      price: 750000,
      description: 'Paket premium untuk verifikasi IMEI selama 3 bulan',
      features: ['Verifikasi status registrasi', 'Laporan detail', 'Dukungan 24/7', 'Prioritas tinggi'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pilih paket layanan yang sesuai dengan kebutuhan Anda. Semua paket mencakup verifikasi IMEI yang cepat dan akurat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h2>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              
              <div className="mb-4">
                <p className="text-3xl font-bold text-blue-600">Rp {pkg.price.toLocaleString('id-ID')}</p>
                <p className="text-sm text-gray-500">{pkg.duration}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Pilih Paket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
