import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

library.add(faFacebook, faTwitter);

export default function Home() {
  React.useEffect(() => {
    document.title = "Linku - Make your business more professional ";
  });
  return (
    <>
      <Navbar />
      <main>
        <section className="text-center max-w-xl mx-auto md:py-10 p-10 border-b">
          <h1 className="text-4xl font-bold text-blue-500">LINKU</h1>
          <p className="md:text-2xl text-lg text-gray-500 mt-4">
            Buat beberapa link dalam satu halaman
          </p>
          <Link
            to="/create"
            className="mt-6 inline-block font-semibold bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 active:bg-blue-800 transition-all "
            type="button"
          >
            Buat sekarang
          </Link>
        </section>
        <div className="mt-8 text-center">
          <h2 className="text-blue-500 text-2xl font-semibold">
            Kenapa harus menggunakan linku?
          </h2>
        </div>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-6 md:py-10 p-10">
          <div className="text-center shadow px-4 py-10 inline-block rounded-lg bg-white">
            <h2 className="text-2xl text-gray-700 font-semibold">
              Gunakan nama apa saja
            </h2>
            <p className="text-sm my-1 text-gray-500">
              Gunakan nama personal, brand atau perusahaan agar semakin mudah
              dikenal
            </p>
            <div className="mt-4 border border-gray-400 inline-block px-4 py-2 rounded-xl">
              <p>
                /<span className="text-blue-500">yourname</span>
              </p>
            </div>
          </div>
          <div className="text-center shadow px-4 py-10 inline-block rounded-lg bg-white">
            <h2 className="text-2xl text-gray-700 font-semibold">
              Banyak Pilihan Logo
            </h2>
            <p className="text-sm my-1 text-gray-500">
              Kami menyediakan banyak pilihan logo terkenal seperti tiktok,
              twitter, youtube dll.
            </p>
            <div className="mt-8 flex justify-around text-lg">
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTiktok} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
          <div className="text-center shadow px-4 py-10 inline-block rounded-lg bg-white">
            <h2 className="text-2xl text-gray-700 font-semibold">
              Bebas Customize
            </h2>
            <p className="text-sm my-1 text-gray-500">
              Pilih warna, tema, ukuran font dan masih banyak lagi!
            </p>
          </div>
        </section>
      </main>
      <Footer value="@adamrwib" />
    </>
  );
}
