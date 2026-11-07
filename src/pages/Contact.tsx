
function Contact() {
  return (
    <div className="space-y-10">
      {/* Hero Contact */}
      <section className="relative overflow-hidden rounded-3xl bg-[#102D26] px-7 py-14 text-[#F7F4EA] shadow-xl md:px-12 md:py-20">
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-black/60 blur-[90px]" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-block rounded-full border border-[#DCCBB0]/40 bg-[#DCCBB0]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#DCCBB0]">
            CONTACT US
          </span>

          <h1 className="mt-7 text-4xl font-bold md:text-5xl">
            Ada yang Bisa Kami
            <br />
            <span className="text-[#DCCBB0]">Bantu?</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-relaxed text-[#E4E8E1]">
            Jika membutuhkan informasi lebih lanjut mengenai
            Penerimaan Mahasiswa Baru UPI, silakan hubungi kami
            melalui informasi kontak berikut.
          </p>
        </div>

        <div className="absolute bottom-5 right-8 hidden text-8xl font-bold text-white/5 md:block">
          UPI
        </div>
      </section>

      {/* Informasi Kontak */}
      <section>
        <div className="mb-7">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8B7658]">
            GET IN TOUCH
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#244735] md:text-3xl">
            Informasi Kontak
          </h2>

          <p className="mt-3 leading-relaxed text-[#58675A]">
            Berikut informasi yang dapat digunakan untuk menghubungi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Email */}
          <div className="rounded-2xl border border-[#DCCBB0] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#F1E9DA] hover:shadow-lg">
            <span className="text-sm font-bold tracking-widest text-[#A38C6D]">
              01 / EMAIL
            </span>

            <h3 className="mt-5 text-xl font-bold text-[#244735]">
              Email
            </h3>

            <p className="mt-3 break-words text-[#58675A]">
              info@upi.ac.id
            </p>
          </div>

          {/* Telepon */}
          <div className="rounded-2xl border border-[#DCCBB0] bg-[#EFE8DA] p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#E5D8C3] hover:shadow-lg">
            <span className="text-sm font-bold tracking-widest text-[#8B7658]">
              02 / PHONE
            </span>

            <h3 className="mt-5 text-xl font-bold text-[#244735]">
              Telepon
            </h3>

            <p className="mt-3 text-[#58675A]">
              0812-0000-0000
            </p>
          </div>

          {/* Alamat */}
          <div className="rounded-2xl border border-[#DCCBB0] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#F1E9DA] hover:shadow-lg">
            <span className="text-sm font-bold tracking-widest text-[#A38C6D]">
              03 / LOCATION
            </span>

            <h3 className="mt-5 text-xl font-bold text-[#244735]">
              Alamat
            </h3>

            <p className="mt-3 text-[#58675A]">
              Padang, Sumatera Barat
            </p>
          </div>
        </div>
      </section>

      {/* Penutup */}
      <section className="rounded-2xl border border-[#DCCBB0]/30 bg-[#102D26] p-8 text-center shadow-lg md:p-10">
        <span className="text-xs font-bold tracking-[0.2em] text-[#DCCBB0]">
          WE ARE HERE FOR YOU
        </span>

        <h2
          className="mt-4 text-3xl font-extrabold md:text-4xl"
          style={{ color: '#F7F4EA' }}
        >
          Kami Siap Membantu
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#E4E8E1]">
          Jangan ragu untuk menghubungi kami jika memiliki
          pertanyaan seputar pendaftaran mahasiswa baru.
        </p>
      </section>
    </div>
  );
}

export default Contact;
