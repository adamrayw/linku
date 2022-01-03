import React from "react";

export default function Create() {
  const [backColor, setBackColor] = React.useState("rgb(243 244 246)");
  const [namaBisnis, setNamaBisnis] = React.useState("Nama atau bisnis anda");
  const [namaBisnisStyleBold, setNamaBisnisStyleBold] = React.useState("");
  const [namaBisnisStyleItalic, setNamaBisnisStyleItalic] = React.useState("");
  const [namaBisnisColor, setnamaBisnisColor] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("Deskripsi");
  const [selectedImage, setSelectedImage] = React.useState("");
  const [deskripsiStyleBold, setDeskripsiStyleBold] = React.useState("");
  const [deskripsiStyleItalic, setDeskripsiStyleItalic] = React.useState("");
  const [deskripsiColor, setDeskripsiColor] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("tab2");

  React.useEffect(() => {
    document.title = "Create";
  });

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
  return (
    <section className="py-10">
      <h1 className="text-2xl font-medium text-gray-500 md:px-0 px-4">
        Desain Halaman
      </h1>
      <div className="mt-6">
        <ul className="flex space-x-2">
          <li
            className={`transition-all cursor-pointer  pb-2 ${
              activeTab === "tab1"
                ? "text-blue-500 border-b border-blue-500"
                : ""
            }`}
            onClick={handleTab1}
          >
            Design
          </li>
          <li
            className={`transition-all cursor-pointer  pb-2 ${
              activeTab === "tab2"
                ? "text-blue-500 border-b border-blue-500"
                : ""
            }`}
            onClick={handleTab2}
          >
            Tema
          </li>
        </ul>
      </div>
      <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between mx-auto mt-6 px-4 md:px-0">
        <div>
          {activeTab === "tab1" ? (
            <form>
              <div>
                <label className="block text-sm mb-1 text-gray-400">
                  Pilih warna background
                </label>
                <input
                  type="color"
                  name="color"
                  onChange={(event) => {
                    setBackColor(event.target.value);
                  }}
                />
              </div>

              <div>
                <label className="block text-sm mb-1 mt-4  text-gray-400">
                  Gambar
                </label>
                <input
                  type="file"
                  name="file-gambar"
                  className="border text-gray-500 w-full rounded p-1 ransition-all"
                  onChange={selectImage}
                />
              </div>
              <div>
                <label className="block text-sm mb-1 mt-4  text-gray-400">
                  Nama Bisnis
                </label>
                <input
                  type="text"
                  name="namaBisnis"
                  className="border text-gray-500 w-full rounded px-2 py-1 text-base focus:ring-2 focus:ring-blue-500 transition-all"
                  onChange={(event) => {
                    setNamaBisnis(event.target.value);
                  }}
                />
                <div className="flex items-center mt-2 space-x-2">
                  <input
                    type="color"
                    className="w-8"
                    name="namaBisnisColor"
                    onChange={(event) => {
                      setnamaBisnisColor(event.target.value);
                    }}
                  />
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
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 mt-4  text-gray-400">
                  Deskripsi (optional)
                </label>
                <textarea
                  className="border text-gray-500 w-full rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
                  onChange={(event) => {
                    setDeskripsi(event.target.value);
                  }}
                ></textarea>

                <div className="flex items-center mt-2 space-x-2">
                  <input
                    type="color"
                    className="w-8"
                    name="namaBisnisColor"
                    onChange={(event) => {
                      setDeskripsiColor(event.target.value);
                    }}
                  />
                  <button
                    className={`w-10 px-1 border rounded-sm font-bold ${
                      deskripsiStyleBold === "bold" ? "bg-gray-300" : "bg-white"
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
                </div>
              </div>
            </form>
          ) : (
            <div>
              <p>Coming soon...</p>
            </div>
          )}
        </div>
        <div>
          <div
            style={{ backgroundColor: backColor }}
            className="shadow px-4 h-96 w-80 flex flex-col
           justify-center items-center "
          >
            {!selectedImage && (
              <div className="w-20 h-20 rounded-full bg-gray-600"></div>
            )}
            {selectedImage && (
              <div className="w-20 h-20 rounded-full ">
                <img
                  className="rounded-full bg-cover bg-center"
                  src={URL.createObjectURL(selectedImage)}
                  alt=""
                />
              </div>
            )}
            <div
              style={{
                fontWeight: namaBisnisStyleBold,
                color: namaBisnisColor,
                fontStyle: namaBisnisStyleItalic,
              }}
              className="mt-4"
            >
              <h1>{namaBisnis}</h1>
            </div>
            <div className="mt-2">
              <p
                style={{
                  fontWeight: deskripsiStyleBold,
                  color: deskripsiColor,
                  fontStyle: deskripsiStyleItalic,
                }}
                className="text-center"
              >
                {deskripsi}
              </p>
            </div>
          </div>
          <p className="text-sm mt-1 text-gray-400">Preview</p>
        </div>
      </div>
    </section>
  );
}
