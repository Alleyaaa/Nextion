// Public FAQ page with common questions about IMEI services
export default function FAQPage() {
  const faqs = [
    {
      question: 'Apa itu IMEI?',
      answer: 'IMEI (International Mobile Equipment Identity) adalah nomor unik 15 digit yang mengidentifikasi perangkat seluler Anda. Nomor ini digunakan oleh operator untuk melacak perangkat yang terdaftar dan diblokir.',
    },
    {
      question: 'Bagaimana cara kerja layanan verifikasi IMEI?',
      answer: 'Kami memeriksa status registrasi perangkat Anda melalui database resmi operator seluler Indonesia (KOMINFO). Sistem kami memverifikasi apakah perangkat terdaftar, diblokir, atau aktif.',
    },
    {
      question: 'Berapa lama proses verifikasi?',
      answer: 'Proses verifikasi biasanya selesai dalam hitungan detik hingga beberapa menit, tergantung pada beban sistem dan penyedia layanan yang digunakan.',
    },
    {
      question: 'Apa perbedaan antara paket 1 bulan dan 3 bulan?',
      answer: 'Paket 1 bulan memberikan verifikasi untuk periode 30 hari, sedangkan paket 3 bulan memberikan verifikasi untuk 90 hari. Paket yang lebih lama memberikan pembaruan status yang lebih lama dan prioritas dukungan.',
    },
    {
      question: 'Bagaimana cara pembayaran?',
      answer: 'Kami menerima transfer bank dan pembayaran digital melalui mitra pembayaran terpercaya. Pembayaran dilakukan terlebih dahulu, baru diverifikasi setelah bukti pembayaran diunggah.',
    },
    {
      question: 'Apa yang terjadi jika verifikasi gagal?',
      answer: 'Jika verifikasi gagal, kami akan mengembalikan dana sepenuhnya. Anda dapat mencoba layanan kembali atau meminta layanan penggantian jika memenuhi syarat.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h1>
        <p className="text-lg text-gray-600">
          Temukan jawaban atas pertanyaan umum tentang layanan verifikasi IMEI kami
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <span className="text-blue-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
