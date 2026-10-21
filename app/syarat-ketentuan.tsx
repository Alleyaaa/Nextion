// Terms and conditions page
export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Syarat & Ketentuan</h1>

        <div className="prose max-w-none">
          <h2>1. Penerimaan Ketentuan</h2>
          <p>Dengan mengakses dan menggunakan layanan kami, Anda menyetujui untuk terikat oleh Syarat & Ketentuan ini.</p>

          <h2>2. Definisi</h2>
          <p><strong>Layanan:</strong> Layanan verifikasi IMEI yang disediakan oleh Nextion IMEI.</p>
          <p><strong>Pelanggan:</strong> Setiap orang atau entitas yang mengakses atau menggunakan layanan kami.</p>

          <h2>3. Layanan dan Pembayaran</h2>
          <p>Layanan kami mencakup verifikasi status IMEI perangkat selama periode yang dipilih. Pembayaran harus dilakukan terlebih dahulu melalui metode yang tersedia.</p>

          <h2>4. Proses Verifikasi</h2>
          <p>Verifikasi IMEI dilakukan melalui database resmi operator seluler. Hasil verifikasi tergantung pada ketersediaan data dan mungkin tidak selalu lengkap.</p>

          <h2>5. Pengembalian Dana</h2>
          <p>Jika verifikasi gagal karena alasan teknis, kami akan mengembalikan dana sepenuhnya dalam 3-5 hari kerja.</p>

          <h2>6. Batasan Tanggung Jawab</h2>
          <p>Nextion IMEI tidak bertanggung jawab atas keputusan operator atau otoritas terkait status perangkat. Layanan kami adalah penyediaan informasi, bukan jaminan.</p>

          <h2>7. Perubahan Ketentuan</h2>
          <p>Kami dapat memperbarui Syarat & Ketentuan ini sewaktu-waktu. Perubahan akan efektif setelah dipublikasikan di situs web kami.</p>
        </div>
      </div>
    </div>
  );
}
