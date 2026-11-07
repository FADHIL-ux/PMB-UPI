
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


type FormData = {
  nama: string;
  nik: string;
  jenisKelamin: string;
  alamat: string;
  prodi: string;
  email: string;
  nomorHP: string;
};


type FormAction = {
  type: 'UPDATE_FIELD';
  field: keyof FormData;
  value: string;
};


const initialFormData: FormData = {
  nama: '',
  nik: '',
  jenisKelamin: '',
  alamat: '',
  prodi: '',
  email: '',
  nomorHP: '',
};

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


type FormContextType = {
  formData: FormData;
  dispatch: Dispatch<FormAction>;
};

const FormContext = createContext<FormContextType | null>(null);


const daftarProdi = [
  'Sistem Komputer',
  'Sistem Informasi',
  'Teknik Informatika',
];


const inputStyle =
  'w-full rounded-lg border border-[#DCCBB0] bg-[#F7F4EA] px-4 py-3 text-[#243B32] outline-none transition placeholder:text-[#9A927F] focus:border-[#244735] focus:ring-2 focus:ring-[#244735]/10';


function FormPMB() {
  
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('FormPMB harus berada di dalam FormContext');
  }

  const { formData, dispatch } = context;

  
  const [sudahSubmit, setSudahSubmit] = useState(false);

  
  const inputNama = useRef<HTMLInputElement>(null);

  
  useEffect(() => {
    const judulSebelumnya = document.title;

    document.title = 'PMB UPI';
    inputNama.current?.focus();

    return () => {
      document.title = judulSebelumnya;
    };
  }, []);

  
  const jumlahTerisi = useMemo(() => {
    return Object.values(formData).filter(
      (item) => item.trim() !== ''
    ).length;
  }, [formData]);

  
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log('Data Pendaftaran:', formData);
      setSudahSubmit(true);
    },
    [formData]
  );

  return (
    <div className="space-y-10">

      {/* Hero PMB */}
      <section className="relative overflow-hidden rounded-3xl bg-[#102D26] px-7 py-12 text-[#F7F4EA] shadow-xl md:px-12 md:py-16">

        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-black/60 blur-[90px]" />

        <div className="relative z-10">
          <span className="inline-block rounded-full border border-[#DCCBB0]/40 bg-[#DCCBB0]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#DCCBB0]">
            PENERIMAAN MAHASISWA BARU
          </span>

          <h1 className="mt-6 text-3xl font-bold text-[#F7F4EA] md:text-5xl">
            Mulai Perjalananmu
            <br />
            <span className="text-[#DCCBB0]">Bersama UPI.</span>
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-[#E4E8E1]">
            Lengkapi formulir pendaftaran dengan data yang benar
            untuk memulai perjalanan pendidikanmu.
          </p>
        </div>
      </section>

      {/* Formulir */}
      <section className="mx-auto max-w-3xl">

        <div className="mb-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8B7658]">
            REGISTRATION FORM
          </span>

          <h2 className="mt-2 text-2xl font-bold text-[#244735] md:text-3xl">
            Formulir Pendaftaran
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-[#58675A]">
            Silakan isi seluruh informasi di bawah ini.
          </p>
        </div>

        {/* Progress data */}
        <div className="mb-6 rounded-xl border border-[#DCCBB0] bg-[#EFE8DA] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-[#244735]">
              Kelengkapan Data
            </span>

            <span className="text-sm font-bold text-[#244735]">
              {jumlahTerisi} / 7
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#DCCBB0]">
            <div
              className="h-full rounded-full bg-[#244735] transition-all duration-300"
              style={{ width: `${(jumlahTerisi / 7) * 100}%` }}
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-[#DCCBB0] bg-white p-6 shadow-sm md:p-9"
        >

          {/* Nama */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#244735]">
              Nama Lengkap
            </label>

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
              className={inputStyle}
              required
            />
          </div>

          {/* NIK */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#244735]">
              NIK
            </label>

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
              className={inputStyle}
              required
            />
          </div>

          {/* Jenis Kelamin */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#244735]">
              Jenis Kelamin
            </label>

            <select
              value={formData.jenisKelamin}
              onChange={(e) =>
                dispatch({
                  type: 'UPDATE_FIELD',
                  field: 'jenisKelamin',
                  value: e.target.value,
                })
              }
              className={inputStyle}
              required
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          {/* Alamat */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#244735]">
              Alamat
            </label>

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
              className={`${inputStyle} min-h-28 resize-y`}
              required
            />
          </div>

          {/* Program Studi */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#244735]">
              Program Studi
            </label>

            <select
              value={formData.prodi}
              onChange={(e) =>
                dispatch({
                  type: 'UPDATE_FIELD',
                  field: 'prodi',
                  value: e.target.value,
                })
              }
              className={inputStyle}
              required
            >
              <option value="">Pilih program studi</option>

              {daftarProdi.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#244735]">
              Email
            </label>

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
              className={inputStyle}
              required
            />
          </div>

          {/* Nomor HP */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#244735]">
              Nomor HP
            </label>

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
              className={inputStyle}
              required
            />
          </div>

          {/* Tombol Submit */}
          <div className="border-t border-[#DCCBB0] pt-6">
            <button
              type="submit"
              className="w-full rounded-lg bg-black px-6 py-3.5 font-semibold text-[#F7F4EA] transition duration-300 hover:bg-[#244735] md:w-auto"
            >
              Kirim Pendaftaran ↗
            </button>
          </div>
        </form>

        {/* Hasil Pendaftaran */}
        {sudahSubmit && (
          <div className="mt-6 rounded-2xl border border-[#DCCBB0] bg-[#EFE8DA] p-6">
            <h3 className="text-xl font-bold text-[#244735]">
              Pendaftaran Berhasil!
            </h3>

            <p className="mt-3 text-[#58675A]">
              Nama: {formData.nama}
            </p>

            <p className="text-[#58675A]">
              Program Studi: {formData.prodi}
            </p>

            <p className="mt-2 text-sm text-[#58675A]">
              Data berhasil dikirim ke Console.
            </p>
          </div>
        )}

      </section>
    </div>
  );
}

// Komponen utama PMB
function PMB() {
  // useReducer
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
