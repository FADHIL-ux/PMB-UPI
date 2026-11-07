
function About() {
  return (
    <div className="space-y-10">

      {/* Hero About */}
      <section className="relative overflow-hidden rounded-3xl bg-[#102D26] px-8 py-14 text-[#F7F4EA] shadow-xl md:px-14 md:py-20">

        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-black/60 blur-[90px]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-block rounded-full border border-[#DCCBB0]/40 bg-[#DCCBB0]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#DCCBB0]">
            ABOUT UPI
          </span>

          <h1 className="mt-7 text-4xl font-bold text-[#F7F4EA] md:text-5xl">
            Mengenal Lebih Dekat
            <br />
            <span className="text-[#DCCBB0]">UPI.</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-relaxed text-[#E4E8E1]">
            Mengenal profil, visi, dan misi UPI sebagai bagian
            dari perjalanan pendidikan dan masa depan mahasiswa.
          </p>
        </div>

        <div className="absolute bottom-5 right-8 hidden text-8xl font-bold text-white/5 md:block">
          UPI
        </div>
      </section>

      {/* Profil Kampus */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-[#DCCBB0] bg-white p-8">
          <span className="text-sm font-bold tracking-widest text-[#A38C6D]">
            01 / PROFILE
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#244735]">
            Profil Kampus
          </h2>

          <p className="mt-4 leading-relaxed text-[#58675A]">
            UPI merupakan perguruan tinggi yang menyediakan
            berbagai program pendidikan untuk mahasiswa.
          </p>
        </div>

        <div className="rounded-2xl border border-[#DCCBB0] bg-[#EFE8DA] p-8">
          <span className="text-sm font-bold tracking-widest text-[#8B7658]">
            02 / VISION & MISSION
          </span>

          <h2 className="mt-5 text-2xl font-bold text-[#244735]">
            Visi dan Misi
          </h2>

          <p className="mt-4 leading-relaxed text-[#58675A]">
            Menjadi perguruan tinggi yang menghasilkan lulusan
            berkualitas, berkompeten, dan mampu bersaing.
          </p>
        </div>

      </section>

      {/* Penutup */}
      <section className="rounded-2xl bg-[#102D26] p-8 text-center md:p-10">
        <h2 className="text-2xl font-bold text-[#F7F4EA]">
          Masa Depan Dimulai dari Sini
        </h2>

        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-[#DCCBB0]">
          Bersiaplah menjadi bagian dari perjalanan pendidikan
          dan wujudkan potensi terbaikmu bersama UPI.
        </p>
      </section>

    </div>
  );
}

export default About;
