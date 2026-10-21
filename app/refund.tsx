// Refund policy page
export default function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kebijakan Pengembalian Dana</h1>

        <div className="prose max-w-none">
          <h2>1. Kapan Pengembalian Dana Berlaku</h2>
          <p>Pengembalian dana diberikan dalam kasus berikut:</p>
          <ul>
            <li>Verifikasi IMEI gagal karena alasan teknis</li>
            <li>Layanan tidak dapat diselesaikan dalam jangka waktu yang dijanjikan</li>
            <li>Kesalahan dalam penagihan</li>
          </ul>

          <h2>2. Proses Pengembalian Dana</h2>
          <p>Pengembalian dana akan diproses dalam 3-5 hari kerja setelah permintaan disetujui. Dana akan dikembalikan ke metode pembayaran asli.</p>

          <h2>3. Syarat Pengembalian Dana</h2>
          <p>Untuk meminta pengembalian dana, kirimkan tiket dukungan dengan bukti verifikasi kegagalan. Tim kami akan meninjau dan membalas dalam 2 hari kerja.</p>

          <h2>4. Tidak Dapat Dikembalikan</h2>
          <p>Pengembalian dana tidak berlaku untuk:</p>
          <ul>
            <li>Keputusan verifikasi yang valid (misalnya, perangkat benar-benar diblokir)</li>
            <li>Permintaan pembatalan setelah layanan dimulai</li>
            <li>Alasan pribadi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
