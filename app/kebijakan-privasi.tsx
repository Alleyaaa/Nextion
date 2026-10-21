// Privacy policy page
export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kebijakan Privasi</h1>

        <div className="prose max-w-none">
          <p className="mb-4">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>

          <h2>1. Pengumpulan Informasi</h2>
          <p>Kami mengumpulkan informasi yang Anda berikan langsung kepada kami saat menggunakan layanan kami, seperti nomor IMEI dan informasi kontak.</p>

          <h2>2. Penggunaan Informasi</h2>
          <p>Informasi Anda digunakan untuk memberikan, meningkatkan, dan mengelola layanan verifikasi IMEI kami. Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda.</p>

          <h2>3. Penyimpanan Data</h2>
          <p>Data disimpan di server aman yang mematuhi standar industri. Kami menggunakan enkripsi dan langkah-langkah keamanan lainnya untuk melindungi informasi Anda.</p>

          <h2>4. Hak Anda</h2>
          <p>Anda dapat mengakses, memperbarui, atau menghapus informasi pribadi Anda kapan saja melalui akun Anda. Anda juga dapat meminta penghapusan data Anda.</p>

          <h2>5. Perubahan Kebijakan</h2>
          <p>Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan akan efektif setelah dipublikasikan di halaman ini.</p>
        </div>
      </div>
    </div>
  );
}
