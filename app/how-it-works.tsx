import React from 'react';
import { Search, CheckCircle, AlertCircle, Clock, Shield, FileText } from 'lucide-react';

// Steps section explaining the IMEI checking process
export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Masukkan Nomor IMEI',
      description: 'Masukkan 15 digit nomor IMEI perangkat Anda di halaman cek IMEI',
    },
    {
      icon: CheckCircle,
      title: 'Verifikasi Status',
      description: 'Sistem kami memeriksa status registrasi resmi perangkat Anda',
    },
    {
      icon: Clock,
      title: 'Tunggu Hasil',
      description: 'Proses verifikasi selesai dalam beberapa detik',
    },
    {
      icon: Shield,
      title: 'Dapatkan Kepastian',
      description: 'Terima informasi lengkap tentang status garansi dan layanan',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cara Kerja Nextion IMEI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses verifikasi IMEI yang cepat dan akurat untuk memastikan keaslian perangkat Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
