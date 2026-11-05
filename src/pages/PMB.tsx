
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useReducer,
  useCallback,
  useMemo
} from 'react';

import type { Dispatch, FormEvent } from 'react';

// Data formulir
type FormData = {
  nama: string;
  nik: string;
  jenisKelamin: string;
  alamat: string;
  prodi: string;
  email: string;
  nomorHP: string;
};

// Jenis perubahan data
type FormAction = {
  type: 'UPDATE_FIELD';
  field: keyof FormData;
  value: string;
};

// Data awal formulir
const initialFormData: FormData = {
  nama: '',
  nik: '',
  jenisKelamin: '',
  alamat: '',
  prodi: '',
  email: '',
  nomorHP: '',
};

// Reducer untuk mengelola data formulir
function formReducer(state: FormData, action: FormAction): FormData {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      return state;
  }
}

// Context untuk membagikan data formulir
type FormContextType = {
  formData: FormData;
  dispatch: Dispatch<FormAction>;
};

const FormContext = createContext<FormContextType | null>(null);

// Daftar program studi
const daftarProdi = [
  'Sistem Komputer',
  'Sistem Informasi',
  'Teknik Informatika',
];

// Komponen formulir
function FormPMB() {
  // useContext: mengambil data dari Context
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('FormPMB harus berada di dalam FormContext');
  }

  const { formData, dispatch } = context;

  // useState: menyimpan status pendaftaran
  const [sudahSubmit, setSudahSubmit] = useState(false);

  // useRef: mengakses input nama
  const inputNama = useRef<HTMLInputElement>(null);

  // useEffect: mengatur judul dan fokus input
  useEffect(() => {
    document.title = 'PMB UPI';
    inputNama.current?.focus();

    return () => {
      document.title = 'PMB UPI';
    };
  }, []);

  // useMemo: menghitung jumlah kolom yang terisi
  const jumlahTerisi = useMemo(() => {
    return Object.values(formData).filter(
      (item) => item.trim() !== ''
    ).length;
  }, [formData]);

  // useCallback: mengelola proses submit
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log('Data Pendaftaran:', formData);
      setSudahSubmit(true);
    },
    [formData]
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
          value={formData.nama}
          onChange={(e) =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'nama',
              value: e.target.value,
            })
          }
          placeholder="Masukkan nama lengkap"
          required
        />

        <br /><br />

        <label>NIK</label>
        <br />
        <input
          type="text"
          value={formData.nik}
          onChange={(e) =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'nik',
              value: e.target.value,
            })
          }
          placeholder="Masukkan NIK"
          required
        />

        <br /><br />

        <label>Jenis Kelamin</label>
        <br />
        <select
          value={formData.jenisKelamin}
          onChange={(e) =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'jenisKelamin',
              value: e.target.value,
            })
          }
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
          value={formData.alamat}
          onChange={(e) =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'alamat',
              value: e.target.value,
            })
          }
          placeholder="Masukkan alamat lengkap"
          required
        />

        <br /><br />

        <label>Program Studi</label>
        <br />
        <select
          value={formData.prodi}
          onChange={(e) =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'prodi',
              value: e.target.value,
            })
          }
          required
        >
          <option value="">Pilih program studi</option>
          {daftarProdi.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <br /><br />

        <label>Email</label>
        <br />
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'email',
              value: e.target.value,
            })
          }
          placeholder="Masukkan email"
          required
        />

        <br /><br />

        <label>Nomor HP</label>
        <br />
        <input
          type="tel"
          value={formData.nomorHP}
          onChange={(e) =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'nomorHP',
              value: e.target.value,
            })
          }
          placeholder="Masukkan nomor HP"
          required
        />

        <br /><br />

        <button type="submit">Daftar</button>
      </form>

      {sudahSubmit && (
        <div>
          <h3>Pendaftaran Berhasil!</h3>
          <p>Nama: {formData.nama}</p>
          <p>Program Studi: {formData.prodi}</p>
          <p>Data berhasil dikirim ke Console.</p>
        </div>
      )}
    </div>
  );
}

// Komponen utama PMB
function PMB() {
  // useReducer: mengelola seluruh data formulir
  const [formData, dispatch] = useReducer(
    formReducer,
    initialFormData
  );

  return (
    <FormContext.Provider value={{ formData, dispatch }}>
      <FormPMB />
    </FormContext.Provider>
  );
}

export default PMB;
