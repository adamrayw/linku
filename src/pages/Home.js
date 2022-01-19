import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  faInfinity,
  faLink,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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

        <section
          className="grid md:grid-cols-3 grid-cols-1 gap-6 md:py-10 py-10 px-14 "
          id="#feature"
        >
          <div className="text-center px-4 py-10 inline-block bg-white">
            <FontAwesomeIcon
              icon={faLink}
              size="2x"
              className="text-blue-500 mb-2"
            />
            <h2 className="text-2xl text-gray-700 font-semibold">Your Link</h2>
            <p className="text-sm my-2 text-gray-500">
              Gunakan nama personal, brand atau perusahaan agar semakin mudah
              dikenal.
            </p>
          </div>
          <div className="text-center px-4 py-10 inline-block bg-white">
            <FontAwesomeIcon
              icon={faInfinity}
              size="2x"
              className="text-blue-500 mb-2"
            />
            <h2 className="text-2xl text-gray-700 font-semibold">
              Tak Terbatas
            </h2>
            <p className="text-sm my-2 text-gray-500">
              Buat link atau halaman tak terbatas.
            </p>
          </div>
          <div className="text-center px-4 py-10 inline-block bg-white">
            <FontAwesomeIcon
              icon={faPencilRuler}
              size="2x"
              className="text-blue-500 mb-2"
            />
            <h2 className="text-2xl text-gray-700 font-semibold">
              Bebas Customize
            </h2>
            <p className="text-sm my-2 text-gray-500">
              Pilih warna, tema, ukuran font dan masih banyak lagi!
            </p>
          </div>
        </section>
      </main>
      <Footer value="@adamrwib" />
    </>
  );
}
