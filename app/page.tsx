import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Selamat datang di Nextion</h1>
        <p className="mb-8">Unblock IMEI 1 bulan atau 3 bulan untuk Android & iPhone. Cek CEIR, IMEI status, dan lainnya.</p>
        <a href="/products" className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition">Lihat Paket</a>
      </main>
      <Footer />
    </>
  );
}
