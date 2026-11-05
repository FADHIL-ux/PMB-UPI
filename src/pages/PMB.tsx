
import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} from 'react';

import type { FormEvent } from 'react';

const daftarProdi = [
  'Sistem Komputer',
  'Sistem Informasi',
  'Teknik Informatika',
];

function PMB() {
  // 1. useState: menyimpan data formulir
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [alamat, setAlamat] = useState('');
  const [prodi, setProdi] = useState('');
  const [email, setEmail] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [sudahSubmit, setSudahSubmit] = useState(false);

  // 2. useRef: mengakses input nama
  const inputNama = useRef<HTMLInputElement>(null);

  // 3. useEffect: mengatur judul halaman dan fokus input
  useEffect(() => {
    document.title = 'PMB UPI';

    inputNama.current?.focus();

    return () => {
      document.title = 'PMB UPI';
    };
  }, []);

  // 4. useMemo: menghitung jumlah data yang sudah diisi
  const jumlahTerisi = useMemo(() => {
    const data = [
      nama,
      nik,
      jenisKelamin,
      alamat,
      prodi,
      email,
      nomorHP,
    ];

    return data.filter((item) => item.trim() !== '').length;
  }, [nama, nik, jenisKelamin, alamat, prodi, email, nomorHP]);

  // 5. useCallback: mengelola proses submit
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const dataPendaftar = {
        nama,
        nik,
        jenisKelamin,
        alamat,
        prodi,
        email,
        nomorHP,
      };

      console.log('Data Pendaftaran:', dataPendaftar);

      setSudahSubmit(true);
    },
    [nama, nik, jenisKelamin, alamat, prodi, email, nomorHP]
  );

  return (
    <div>
      <h1>PMB UPI</h1>
      <p>Pendaftaran Mahasiswa Baru</p>

      <h2>Formulir Pendaftaran</h2>

      <p>Data terisi: {jumlahTerisi} dari 7 kolom</p>

      <form onSubmit={handleSubmit}>
        <label>Nama Lengkap</label>
        <br />
        <input
          ref={inputNama}
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan nama lengkap"
          required
        />

        <br /><br />

        <label>NIK</label>
        <br />
        <input
          type="text"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
          placeholder="Masukkan NIK"
          required
        />

        <br /><br />

        <label>Jenis Kelamin</label>
        <br />
        <select
          value={jenisKelamin}
          onChange={(e) => setJenisKelamin(e.target.value)}
          required
        >
          <option value="">Pilih jenis kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <br /><br />

        <label>Alamat</label>
        <br />
        <textarea
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Masukkan alamat lengkap"
          required
        />

        <br /><br />

        <label>Program Studi</label>
        <br />
        <select
          value={prodi}
          onChange={(e) => setProdi(e.target.value)}
          required
        >
          <option value="">Pilih program studi</option>
          {daftarProdi.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <br /><br />

        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email"
          required
        />

        <br /><br />

        <label>Nomor HP</label>
        <br />
        <input
          type="tel"
          value={nomorHP}
          onChange={(e) => setNomorHP(e.target.value)}
          placeholder="Masukkan nomor HP"
          required
        />

        <br /><br />

        <button type="submit">Daftar</button>
      </form>

      {sudahSubmit && (
        <div>
          <h3>Pendaftaran Berhasil!</h3>
          <p>Nama: {nama}</p>
          <p>Program Studi: {prodi}</p>
          <p>Data berhasil dikirim ke Console.</p>
        </div>
      )}
    </div>
  );
}

export default PMB;
