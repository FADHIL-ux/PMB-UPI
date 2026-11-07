
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-14">

      {}
      <section className="relative overflow-hidden rounded-3xl bg-[#102D26] px-7 py-16 text-[#F7F4EA] shadow-xl md:px-14 md:py-24">

        {}
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-black/70 blur-[100px]" />

        <div className="relative z-10 max-w-3xl">

          <span className="inline-block rounded-full border border-[#DCCBB0]/40 bg-[#DCCBB0]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#DCCBB0]">
            PENERIMAAN MAHASISWA BARU
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-[#F7F4EA] md:text-6xl">
            Build Your Future,
            <br />
            <span className="text-[#DCCBB0]">
              Start at UPI.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#E4E8E1] md:text-lg">
            Wujudkan masa depan yang lebih baik melalui pendidikan
            dan pilihan program studi yang tepat bersama UPI.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/pmb"
              className="rounded-lg bg-black px-7 py-3.5 font-semibold text-[#F7F4EA] transition duration-300 hover:bg-[#DCCBB0] hover:text-[#102D26]"
            >
              Daftar Sekarang ↗
            </Link>

            <a
              href="#informasi"
              className="rounded-lg border border-[#DCCBB0]/50 px-7 py-3.5 font-semibold text-[#F7F4EA] transition duration-300 hover:bg-[#DCCBB0] hover:text-[#102D26]"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        {}
        <div className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 rounded-full border border-[#DCCBB0]/20 md:block" />
        <div className="pointer-events-none absolute right-20 top-20 hidden h-20 w-20 rounded-full border border-[#DCCBB0]/20 md:block" />

        <div className="absolute bottom-8 right-10 hidden text-8xl font-bold text-white/5 md:block">
          UPI
        </div>
      </section>

      {}
      <section id="informasi">

        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8B7658]">
            LANGKAH PENDAFTARAN
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#244735] md:text-3xl">
            Wujudkan Masa Depan Bersama UPI
          </h2>

          <p className="mt-4 leading-relaxed text-[#58675A]">
            Selamat datang di website Penerimaan Mahasiswa Baru UPI.
            Temukan program studi yang sesuai dengan minat dan bakat kamu.
          </p>
        </div>

        {}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

          <div className="group rounded-2xl border border-[#DCCBB0] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#F1E9DA] hover:shadow-xl">
            <span className="text-sm font-bold tracking-widest text-[#A38C6D]">
              01 / STUDY
            </span>

            <h3 className="mt-5 text-xl font-bold text-[#244735]">
              Pilih Program Studi
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#58675A]">
              Temukan program studi sesuai minat dan kemampuanmu.
            </p>
          </div>

          <div className="group rounded-2xl border border-[#DCCBB0] bg-[#EFE8DA] p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#E5D8C3] hover:shadow-xl">
            <span className="text-sm font-bold tracking-widest text-[#8B7658]">
              02 / APPLY
            </span>

            <h3 className="mt-5 text-xl font-bold text-[#244735]">
              Isi Formulir
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#58675A]">
              Lengkapi data pendaftaran dengan benar.
            </p>
          </div>

          <div className="group rounded-2xl border border-[#DCCBB0] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#F1E9DA] hover:shadow-xl">
            <span className="text-sm font-bold tracking-widest text-[#A38C6D]">
              03 / FUTURE
            </span>

            <h3 className="mt-5 text-xl font-bold text-[#244735]">
              Mulai Perjalanan
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#58675A]">
              Persiapkan dirimu untuk melanjutkan pendidikan.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
