import React, { useState, useEffect, useContext } from "react";
import { SketchPicker } from "react-color";
import Links from "../components/Links";
import Navbar from "../components/Navbar";
import Themes from "../components/Themes";
import { Context, Tema } from "../context/context";

export default function Create() {
  const [link, setLink] = React.useState();
  const [namaBisnis, setNamaBisnis] = React.useState("");
  const [namaBisnisStyleBold, setNamaBisnisStyleBold] = useState("");
  const [namaBisnisStyleItalic, setNamaBisnisStyleItalic] = useState("");
  const [namaBisnisColor, setnamaBisnisColor] = useState("#000000");
  const [deskripsi, setDeskripsi] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [deskripsiStyleBold, setDeskripsiStyleBold] = useState("");
  const [deskripsiStyleItalic, setDeskripsiStyleItalic] = useState("");
  const [deskripsiColor, setDeskripsiColor] = useState("#000000");
  const [activeTab, setActiveTab] = useState("tab1");
  const [deskripsiColorPicker, setDeskripsiColorPicker] = useState(false);
  const [namaBisnisColorPicker, setNamaBisnisColorPicker] = useState(false);
  const [deskripsiFontSize, setDeskripsiFontSize] = useState("");
  const [namaBisnisFontSize, setNamaBisnisFontSize] = useState("");
  const [postRequestFailed, setPostRequestFailed] = useState(false);
  const [postRequestSucces, setPostRequestSucces] = useState(false);
  const [loading, setLoading] = useState();

  const context = useContext(Context);
  const tema = useContext(Tema);
  const getTema = tema[0];

  useEffect(() => {
    document.title = "Create";
  }, []);

  function handleNamaBisnisColorPicker() {
    setNamaBisnisColorPicker(!namaBisnisColorPicker);
  }
  function handleNamaBisnisColorPickerClose() {
    setNamaBisnisColorPicker(false);
  }

  function handleDeskripsiColorPicker() {
    setDeskripsiColorPicker(!deskripsiColorPicker);
  }

  function handleDeskripsiColorPickerClose() {
    setDeskripsiColorPicker(false);
  }

  function selectImage(e) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }

  function handleNamaBisnisStyleBold(event) {
    event.preventDefault();

    if (namaBisnisStyleBold !== "bold") {
      setNamaBisnisStyleBold("bold");
    } else {
      setNamaBisnisStyleBold("normal");
    }
  }

  function handleNamaBisnisStyleItalic(event) {
    event.preventDefault();

    if (namaBisnisStyleItalic !== "italic") {
      setNamaBisnisStyleItalic("italic");
    } else {
      setNamaBisnisStyleItalic("");
    }
  }
  function handleDeskripsiStyleBold(event) {
    event.preventDefault();

    if (deskripsiStyleBold !== "bold") {
      setDeskripsiStyleBold("bold");
    } else {
      setDeskripsiStyleBold("normal");
    }
  }

  function handleDeskripsiStyleItalic(event) {
    event.preventDefault();

    if (deskripsiStyleItalic !== "italic") {
      setDeskripsiStyleItalic("italic");
    } else {
      setDeskripsiStyleItalic("");
    }
  }

  function handleTab1() {
    setActiveTab("tab1");
  }

  function handleTab2() {
    setActiveTab("tab2");
  }

  function handleTab3() {
    setActiveTab("tab3");
  }

  async function handlePostDesign(e) {
    e.preventDefault();
    setPostRequestFailed(false);
    setLoading(true);
    // POST Request using fetch with async/await
    const formData = new FormData();
    formData.append("link", link);
    formData.append("image", selectedImage);
    formData.append("nama", namaBisnis);
    formData.append("nama_color", namaBisnisColor);
    formData.append("nama_font_weight", namaBisnisStyleBold);
    formData.append("nama_font_style", namaBisnisStyleItalic);
    formData.append("nama_font_size", namaBisnisFontSize);
    formData.append("deskripsi", deskripsi);
    formData.append("deskripsi_color", deskripsiColor);
    formData.append("deskripsi_font_weight", deskripsiStyleBold);
    formData.append("deskripsi_font_style", deskripsiStyleItalic);
    formData.append("deskripsi_font_size", deskripsiFontSize);
    formData.append("data_link", JSON.stringify(context[0]));
    formData.append("tema", getTema);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    const response = await fetch(
      "https://linku-backend.herokuapp.com/api/design",
      requestOptions
    );

    if (!response.ok) {
      console.log("Something error");
      setPostRequestFailed(true);
      setLoading(false);
    } else {
      setPostRequestFailed(false);
      setPostRequestSucces(true);
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <section className="py-10">
        <div className="flex justify-between items-center md:px-0 px-4">
          <h1 className="text-2xl md:text-left text-center font-medium text-gray-500 px-0">
            Desain Halaman
          </h1>
          <button
            className="px-4 py-2 tracking-wider w-24 text-white font-bold rounded bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-indigo-500 hover:to-sky-500 transition-colors"
            onClick={handlePostDesign}
          >
            Create
          </button>
        </div>
        <div className="mt-6">
          <ul className="flex space-x-6 md:justify-start justify-center">
            <li
              className={`transition-all cursor-pointer text-gray-500 pb-2 ${
                activeTab === "tab1"
                  ? "text-blue-500 border-b border-blue-500"
                  : ""
              }`}
              onClick={handleTab1}
            >
              Design
            </li>
            <li
              className={`transition-all cursor-pointer text-gray-500 pb-2 ${
                activeTab === "tab2"
                  ? "text-blue-500 border-b border-blue-500"
                  : ""
              }`}
              onClick={handleTab2}
            >
              Links
            </li>
            <li
              className={`transition-all cursor-pointer text-gray-500 pb-2 ${
                activeTab === "tab3"
                  ? "text-blue-500 border-b border-blue-500"
                  : ""
              }`}
              onClick={handleTab3}
            >
              Themes
            </li>
          </ul>
        </div>
        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between mx-auto mt-6 px-4 md:px-0">
          <div>
            {activeTab === "tab1" ? (
              <section className="space-y-6">
                <div>
                  <label className="block text-sm mb-1 text-gray-400">
                    My Link
                  </label>
                  <div className="mt-1 rounded-md">
                    <input
                      type="text"
                      className="border focus:ring-2 focus:ring-blue-500 text-blue-500 placeholder-blue-500 block w-full py-2 px-3 text-base border-gray-300 rounded-md transition-all"
                      placeholder="yourname"
                      value={link}
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                    />
                    <div className="mt-1 text-xs font-light text-gray-400">
                      https://linku.netlify.app/
                      <span className="text-blue-500">yourname</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 mt-4  text-gray-400">
                    Logo
                  </label>
                  <input
                    type="file"
                    name="gambar"
                    className=" text-gray-500 w-full rounded p-1 ransition-all file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-blue-500
                  hover:file:bg-violet-100 hover:file:cursor-pointer"
                    onChange={selectImage}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 mt-4  text-gray-400">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="namaBisnis"
                    className="border text-gray-500 w-full rounded py-2 px-3 text-base focus:ring-2 focus:border-blue-500 transition-all"
                    onChange={(event) => {
                      setNamaBisnis(event.target.value);
                    }}
                    value={namaBisnis}
                  />
                  <div className="flex items-center mt-2 space-x-2">
                    <div
                      onClick={handleNamaBisnisColorPicker}
                      className="px-4 py-1 rounded w-10 h-6 border border-gray-400 hover:cursor-pointer"
                      style={{ backgroundColor: namaBisnisColor }}
                    ></div>
                    <div className="absolute z-30 transition-all">
                      {namaBisnisColorPicker ? (
                        <div>
                          <div
                            className="top-0 right-0 bottom-0 left-0 fixed"
                            onClick={handleNamaBisnisColorPickerClose}
                          ></div>
                          <SketchPicker
                            color={namaBisnisColor}
                            onChange={(event) => {
                              setnamaBisnisColor(event.hex);
                            }}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <button
                      className={`w-10 px-1 border rounded-sm font-bold ${
                        namaBisnisStyleBold === "bold"
                          ? "bg-gray-300"
                          : "bg-white"
                      }`}
                      onClick={handleNamaBisnisStyleBold}
                    >
                      B
                    </button>
                    <button
                      className={`w-10 px-1 border rounded-sm italic ${
                        namaBisnisStyleItalic === "italic"
                          ? "bg-gray-300"
                          : "bg-white"
                      }`}
                      onClick={handleNamaBisnisStyleItalic}
                    >
                      I
                    </button>
                    <select
                      onChange={(e) => {
                        setNamaBisnisFontSize(e.target.value);
                      }}
                      className="border rounded-sm text-xs bg-white p-1"
                    >
                      <option>Normal</option>
                      <option value="text-sm">Small</option>
                      <option value="text-lg">Large</option>
                      <option value="text-xl">Extra Large</option>
                      <option value="text-2xl">2x Extra Large</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 mt-4  text-gray-400">
                    Bio
                  </label>
                  <textarea
                    className="border text-gray-500 w-full rounded py-2 px-3 focus:ring-2 focus:border-blue-500 transition-all"
                    onChange={(event) => {
                      setDeskripsi(event.target.value);
                    }}
                    value={deskripsi}
                  ></textarea>

                  <div className="flex items-center mt-2 space-x-2">
                    <div
                      onClick={handleDeskripsiColorPicker}
                      className="px-4 py-1 rounded w-10 h-6 border border-gray-400 hover:cursor-pointer"
                      style={{ backgroundColor: deskripsiColor }}
                    ></div>
                    <div className="absolute z-30 transition-all">
                      {deskripsiColorPicker ? (
                        <div>
                          <div
                            className="top-0 right-0 bottom-0 left-0 fixed"
                            onClick={handleDeskripsiColorPickerClose}
                          ></div>
                          <SketchPicker
                            color={deskripsiColor}
                            onChange={(event) => {
                              setDeskripsiColor(event.hex);
                            }}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <button
                      className={`w-10 px-1 border rounded-sm font-bold ${
                        deskripsiStyleBold === "bold"
                          ? "bg-gray-300"
                          : "bg-white"
                      }`}
                      onClick={handleDeskripsiStyleBold}
                    >
                      B
                    </button>
                    <button
                      className={`w-10 px-1 border rounded-sm italic ${
                        deskripsiStyleItalic === "italic"
                          ? "bg-gray-300"
                          : "bg-white"
                      }`}
                      onClick={handleDeskripsiStyleItalic}
                    >
                      I
                    </button>
                    <select
                      onChange={(e) => {
                        setDeskripsiFontSize(e.target.value);
                      }}
                      className="border rounded-sm text-xs bg-white p-1"
                    >
                      {deskripsiFontSize && (
                        <option>{deskripsiFontSize}</option>
                      )}

                      <option>Normal</option>
                      <option value="text-sm">Small</option>
                      <option value="text-lg">Large</option>
                      <option value="text-xl">Extra Large</option>
                      <option value="text-2xl">2x Extra Large</option>
                    </select>
                  </div>
                </div>
                <div>
                  {postRequestFailed ? (
                    <div className="fixed md:max-w-full w-72 mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="px-6 py-4 rounded shadow-sm bg-red-500 z-50 ">
                        <button
                          onClick={() => {
                            setPostRequestFailed(false);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 text-white top-0 m-2 h-4 w-4 ml-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 mx-auto text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="font-bold mt-2 text-xl text-white text-center">
                          Gagal Membuat
                        </p>
                        <p className="font-light mt-1 mb-4 text-xs text-white text-center">
                          Silahkan coba lagi.
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {postRequestSucces ? (
                    <div className="fixed md:max-w-full w-72 mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="px-6 py-4 rounded shadow-sm bg-gray-50 z-50 ">
                        <button
                          onClick={() => {
                            setPostRequestSucces(false);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 text-blue-500 top-0 m-2 h-4 w-4 ml-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 mx-auto text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="font-bold mt-2 text-xl text-blue-500 text-center">
                          Berhasil Membuat!
                        </p>
                        <p className="font-light mt-1 text-xs text-blue-500  text-center">
                          Di bawah adalah link kamu, silahkan copy & paste di
                          bio social media kamu!
                        </p>
                        <input
                          type="text"
                          className="border w-full text-center mt-4 mb-2 text-gray-500 border-blue-500 bg-white rounded-md px-4 py-2"
                          value={`linku.netlify.app/${link}`}
                          disabled
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {loading ? (
                  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="p-10 rounded shadow-sm bg-blue-500 z-50 ">
                      <p className="font-semibold text-lg text-white text-center">
                        Sedang Membuat...
                      </p>
                      <div className="flex justify-center items-center space-x-2 mt-4">
                        <div className="animate-bounce w-4 h-4 rounded-full bg-white"></div>
                        <div className="animate-bounce animation-delay-100 w-4 h-4 rounded-full bg-white"></div>
                        <div className="animate-bounce animation-delay-200 w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </section>
            ) : (
              ""
            )}

            {activeTab === "tab3" ? (
              <div>
                <Themes />
              </div>
            ) : (
              ""
            )}

            {activeTab === "tab2" ? (
              <div>
                <Links />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="text-sm mb-1 md:mt-1 mt-6 text-gray-400">Preview</p>

            <div
              style={{ height: "684px" }}
              className={`shadow px-6 py-10 md:w-96 w-full overflow-y-scroll mx-auto ${tema[0]}`}
            >
              {selectedImage && (
                <div className="mt-32">
                  <img
                    className="rounded-full w-32 h-32 mx-auto bg-cover bg-center"
                    src={URL.createObjectURL(selectedImage)}
                    alt=""
                  />
                </div>
              )}
              <div className="mt-8 text-center">
                <h1
                  style={{
                    fontWeight: namaBisnisStyleBold,
                    color: namaBisnisColor,
                    fontStyle: namaBisnisStyleItalic,
                  }}
                  className={`${namaBisnisFontSize}`}
                >
                  {namaBisnis}
                </h1>
              </div>
              <div className="mt-4">
                <p
                  style={{
                    fontWeight: deskripsiStyleBold,
                    color: deskripsiColor,
                    fontStyle: deskripsiStyleItalic,
                  }}
                  className={`text-center ${deskripsiFontSize}`}
                >
                  {deskripsi}
                </p>
              </div>

              <div className="links mt-6 space-y-4">
                {context[0].map((e) => {
                  return (
                    <div key={e.id}>
                      <a href={e.link} className="text-center">
                        <div
                          style={{
                            backgroundColor: e.bgColor,
                          }}
                          className="p-4 rounded-lg w-64 mx-auto"
                        >
                          <p
                            style={{
                              color: e.textColor,
                              backgroundColor: e.bgColor,
                            }}
                          >
                            {e.nama}
                          </p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
              <footer className=" text-center">
                <a
                  href="https://linku.netlify.app/"
                  className="inline-block bg-white px-4 py-2 mt-14 shadow-md rounded-full"
                >
                  <p className="text-gray-400 text-xs ">
                    Powered by{" "}
                    <span className="text-blue-500 outline outline-white">
                      Linku
                    </span>
                  </p>
                </a>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
