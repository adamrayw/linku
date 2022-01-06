import React from "react";
import { SketchPicker } from "react-color";

export default function Create() {
  const [namaBisnis, setNamaBisnis] = React.useState(
    "PT. MENCARI CINTA SEJATI"
  );
  const [namaBisnisStyleBold, setNamaBisnisStyleBold] = React.useState("");
  const [namaBisnisStyleItalic, setNamaBisnisStyleItalic] = React.useState("");
  const [namaBisnisColor, setnamaBisnisColor] = React.useState("");
  const [deskripsi, setDeskripsi] = React.useState("Grow with us!");
  const [selectedImage, setSelectedImage] = React.useState("");
  const [deskripsiStyleBold, setDeskripsiStyleBold] = React.useState("");
  const [deskripsiStyleItalic, setDeskripsiStyleItalic] = React.useState("");
  const [deskripsiColor, setDeskripsiColor] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("tab1");
  const [deskripsiColorPicker, setDeskripsiColorPicker] = React.useState(false);
  const [namaBisnisColorPicker, setNamaBisnisColorPicker] =
    React.useState(false);
  const [deskripsiFontSize, setDeskripsiFontSize] = React.useState("");
  const [namaBisnisFontSize, setNamaBisnisFontSize] = React.useState("");
  const [postRequest, setPostRequest] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const data = {
    namaBisnis,
    deskripsi,
  };

  console.log(data);

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
    setPostRequest(false);
    setLoading(true);
    // POST Request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        link: namaBisnis,
        image: "test",
        nama: namaBisnis,
        nama_color: namaBisnisColor,
        nama_font_weight: namaBisnisStyleBold,
        nama_font_style: namaBisnisStyleItalic,
        nama_font_size: namaBisnisFontSize,
        deskripsi: deskripsi,
        deskripsi_color: deskripsiColor,
        deskripsi_font_weight: deskripsiStyleBold,
        deskripsi_font_style: deskripsiStyleItalic,
        deskripsi_font_size: deskripsiFontSize,
      }),
    };
    const response = await fetch(
      "http://127.0.0.1:8000/api/design",
      requestOptions
    );

    if (!response.ok) {
      console.log("Something error");
      setPostRequest(true);
      setInterval(() => {
        setPostRequest(false);
      }, 2000);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  return (
    <section className="py-10">
      <h1 className="text-2xl md:text-left text-center font-medium text-gray-500 md:px-0 px-4">
        Desain Halaman
      </h1>
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
            <form>
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
                    <option>Font Size</option>
                    <option value="text-xs">Extra Small</option>
                    <option value="text-sm">Small</option>
                    <option value="text-lg">Large</option>
                  </select>
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
                  <select
                    onChange={(e) => {
                      setDeskripsiFontSize(e.target.value);
                    }}
                    className="border rounded-sm text-xs bg-white p-1"
                  >
                    <option>Font Size</option>
                    <option value="text-xs">Extra Small</option>
                    <option value="text-sm">Small</option>
                    <option value="text-lg">Large</option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  className="px-4 py-2 tracking-wider mt-10 w-24 text-white font-bold rounded bg-blue-500 hover:bg-blue-700 transition-all"
                  onClick={handlePostDesign}
                >
                  Create
                </button>

                {postRequest ? (
                  <p className="text-red-500 mt-2">
                    Error... silahkan coba lagi!
                  </p>
                ) : (
                  ""
                )}
              </div>
              {loading ? (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="p-10 rounded shadow-sm bg-blue-500 z-50 ">
                    <p className="font-semibold text-lg text-white ">
                      Creating...
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
            </form>
          ) : (
            ""
          )}

          {activeTab === "tab3" ? (
            <div>
              <p>Coming soon...</p>
            </div>
          ) : (
            ""
          )}

          {activeTab === "tab2" ? (
            <div>
              <p>Links</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <div
            style={{ height: "684px" }}
            className="shadow px-4 md:w-96 w-full flex flex-col
           justify-center items-center bg-gray-200"
          >
            {!selectedImage && (
              <div className="w-28 h-28 rounded-full bg-gray-600"></div>
            )}
            {selectedImage && (
              <div className="w-28 h-28 rounded-full ">
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
              className="mt-6"
            >
              <h1 className={`${namaBisnisFontSize}`}>{namaBisnis}</h1>
            </div>
            <div className="mt-2">
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
          </div>
          <p className="text-sm mt-1 text-gray-400">Preview</p>
        </div>
      </div>
    </section>
  );
}
