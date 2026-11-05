
function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <span className="hero-label">PENERIMAAN MAHASISWA BARU</span>
        <h1>Selamat Datang di UPI</h1>
        <p>
          Wujudkan masa depan yang lebih baik melalui pendidikan
          dan pilihan program studi yang tepat.
        </p>
        <a href="/pmb" className="hero-button">
          Daftar Sekarang
        </a>
      </section>

      <section className="home-info">
        <h2>Wujudkan Masa Depan Bersama UPI</h2>
        <p>
          Selamat datang di website Penerimaan Mahasiswa Baru UPI.
          Temukan program studi yang sesuai dengan minat dan bakat kamu.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <span>01</span>
            <h3>Pilih Program Studi</h3>
            <p>Temukan program studi sesuai minat dan kemampuanmu.</p>
          </div>

          <div className="info-card">
            <span>02</span>
            <h3>Isi Formulir</h3>
            <p>Lengkapi data pendaftaran dengan benar.</p>
          </div>

          <div className="info-card">
            <span>03</span>
            <h3>Mulai Perjalanan</h3>
            <p>Persiapkan dirimu untuk melanjutkan pendidikan.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
