import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Modal from "../components/Modal";

library.add(faFacebook, faTwitter);

export default function Home() {
  React.useEffect(() => {
    document.title = "Linku - Make your business more professional ";
  });
  return (
    <main>
      <section className="text-center max-w-xl mx-auto md:py-10 p-10 border-b">
        <h1 className="text-4xl font-bold text-gray-700">LINKU</h1>
        <p className="md:text-2xl text-lg text-gray-500 mt-4">
          Link bisnis kamu dalam satu halaman
        </p>
        <Modal />
      </section>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-6 md:py-10 p-10">
        <div className="text-center shadow-md px-4 py-10 inline-block rounded-lg bg-white">
          <h2 className="text-2xl text-gray-700 font-semibold">
            Gunakan nama mu
          </h2>
          <p className="text-sm my-1 text-gray-500">
            Gunakan nama mu agar lebih profesional.
          </p>
          <div className="mt-4 border border-gray-400 inline-block px-4 py-2 rounded-xl">
            <p>
              linku.id/<span className="text-blue-500">yourname</span>
            </p>
          </div>
        </div>
        <div className="text-center shadow-md px-4 py-10 inline-block rounded-lg bg-white">
          <h2 className="text-2xl text-gray-700 font-semibold">
            Banyak Pilihan
          </h2>
          <p className="text-sm my-1 text-gray-500">
            Kami menyediakan banyak pilihan seperti tiktok, twitter, youtube
            dll.
          </p>
          <div className="mt-8 flex justify-around text-lg">
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTiktok} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="text-center shadow-md px-4 py-10 inline-block rounded-lg bg-white">
          <h2 className="text-2xl text-gray-700 font-semibold">
            Bebas Customize
          </h2>
          <p className="text-sm my-1 text-gray-500">
            Customize tampilan se menarik mungkin!
          </p>
        </div>
      </section>
    </main>
  );
}
