import React from "react";
import { Link } from "react-router-dom";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="mt-6 inline-block font-semibold bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-all"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Buat sekarang
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative p-6 flex-auto text-left">
                  <p className="my-4 text-blueGray-500 text-md text-gray-500 leading-relaxed">
                    Isi nama bisnis anda.
                  </p>
                  <div className="flex">
                    <p className="text-blue-500">linku.id/</p>
                    <form>
                      <div>
                        <input
                          type="text"
                          name="bisnisName"
                          className="border-b border-gray-300 focus:border-b focus:border-blue-500"
                          placeholder=""
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Tutup
                  </button>
                  <Link
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    to={{
                      pathname: "/courses",
                      state: { namaBisnis: "true" },
                    }}
                  >
                    LANJUT
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}
