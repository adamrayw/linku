import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SketchPicker } from "react-color";
import { Transition } from "@windmill/react-ui";
import {
  faEdit,
  faPalette,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Links() {
  const [context, setContext] = useContext(Context);
  const [nama, setNama] = useState("");
  const [link, setLink] = useState("");
  const [bgcolor, setBgColor] = useState("");
  const [textcolor, setTextColor] = useState("");
  const [msg, setMsg] = useState(false);
  const [edit, setEdit] = useState([]);
  const [editData, setEditData] = useState({});
  const [bgColorPicker, setBgColorPicker] = useState(false);
  const [textColorPicker, setTextColorPicker] = useState(false);

  console.log(msg);

  function handleBgColorPickerClose() {
    setBgColorPicker(!bgColorPicker);
  }

  function handleTextColorPickerClose() {
    setTextColorPicker(!textColorPicker);
  }

  function generateId() {
    return Date.now();
  }

  function saveLink(e) {
    e.preventDefault();

    if (!nama || !link) {
      setMsg(true);
      return;
    }

    if (editData.id) {
      const updateLink = {
        ...editData,
        nama,
        link,
        bgColor: bgcolor,
        textColor: textcolor,
      };

      const linkFindIndex = context.findIndex((links) => {
        return links.id === editData.id;
      });

      const updatedLink = [...context];
      updatedLink[linkFindIndex] = updateLink;

      setContext(updatedLink);

      setEdit({});
      setNama("");
      setBgColor("");
      setEditData({});
      setTextColor("");
      setLink("");

      console.log(context);
      return;
    }

    setContext([
      ...context,
      {
        id: generateId(),
        nama: nama,
        link: link,
        bgColor: bgcolor,
        textColor: textcolor,
      },
    ]);

    console.log(context);
    setNama("");
    setLink("");
  }

  function removeLink(linkId) {
    const filtered = context.filter((link) => {
      return link.id !== linkId;
    });

    setEdit({});
    setContext(filtered);
    setNama("");
    setBgColor("");
    setEditData({});
    setTextColor("");
    setLink("");
  }

  function handleEdit(item) {
    setNama(item.nama);
    setTextColor(item.textcolor);
    setBgColor(item.bgColor);
    setLink(item.link);
    setEditData(item);
    setEdit(item);
  }

  function cancelEdit() {
    setEditData({});
    setEdit({});
    setNama("");
    setLink("");
    setBgColor("");
    setTextColor("");
  }

  return (
    <section>
      {edit.id && (
        <>
          <p className="mb-3 md:text-left text-center text-gray-500">
            Mode Edit & Desain
          </p>
        </>
      )}
      <form onSubmit={saveLink}>
        <div className="flex md:flex-row flex-col justify-between md:items-start items-center">
          <div className="space-y-2 ">
            <div>
              <input
                className="border text-gray-600 text-sm rounded py-2 px-3 placeholder-blue-500"
                type="text"
                placeholder="ex: Twitter"
                value={nama}
                onChange={(e) => {
                  setMsg(false);
                  setNama(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="border text-gray-600 text-sm rounded py-2 px-3 placeholder-blue-500"
                type="text"
                placeholder="https://twitter.com"
                value={link}
                onChange={(e) => {
                  setMsg(false);
                  setLink(e.target.value);
                }}
              />
            </div>
            {edit.id ? (
              <div className="py-6 ">
                <p className="mb-3 text-gray-500">Desain</p>
                <div className="flex justify-between items-center space-x-3">
                  <div>
                    <p className="text-xs mb-2 text-gray-400">
                      Warna Background
                    </p>
                    <div
                      onClick={handleBgColorPickerClose}
                      className="px-4 py-1 rounded w-10 h-6 border border-gray-400 hover:cursor-pointer"
                      style={{ backgroundColor: bgcolor }}
                    ></div>
                    <div className="absolute z-30 transition-all">
                      {bgColorPicker ? (
                        <div>
                          <div
                            className="top-0 right-0 bottom-0 left-0 fixed"
                            onClick={handleBgColorPickerClose}
                          ></div>
                          <SketchPicker
                            color={bgcolor}
                            onChange={(event) => {
                              setBgColor(event.hex);
                            }}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs mb-2 text-gray-400">Warna Text</p>
                    <div
                      onClick={handleTextColorPickerClose}
                      className="px-4 py-1 rounded w-10 h-6 border border-gray-400 hover:cursor-pointer"
                      style={{ backgroundColor: textcolor }}
                    ></div>
                    <div className="absolute z-30 transition-all">
                      {textColorPicker ? (
                        <div>
                          <div
                            className="top-0 right-0 bottom-0 left-0 fixed"
                            onClick={handleTextColorPickerClose}
                          ></div>
                          <SketchPicker
                            color={textcolor}
                            onChange={(event) => {
                              setTextColor(event.hex);
                            }}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {edit.id ? (
              <div className="md:mt-0 md:mb-1 mt-6">
                <button className="w-8 h-8 p-2 mb-1 rounded-full shadow-lg hover:shadow-xl transition-all flex justify-center items-center text-gray-400 active:bg-blue-500 active:text-white">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="text-xs" onClick={cancelEdit}>
                  Batal
                </button>
              </div>
            ) : (
              <button className="w-8 h-8 p-2 md:mt-0 md:my-2 my-6 rounded-full shadow-lg hover:shadow-xl transition-all flex justify-center items-center text-gray-400 active:bg-blue-500 active:text-white">
                +
              </button>
            )}
          </div>
        </div>
        <Transition
          show={msg}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <p className="text-blue-500 md:text-left text-center text-xs mt-2 transition-transform duration-500">
            Field tidak boleh kosong!
          </p>
        </Transition>
      </form>
      <div>
        <hr className="my-4" />
        {context && (
          <div className="space-y-2">
            {context.map((item) => {
              return (
                <div className="flex flex-col items-start">
                  <div className="flex items-center w-full" key={item.id}>
                    <div className="md:w-64 w-full rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-2 px-3 shadow-sm flex justify-between items-center">
                      {item.nama}
                    </div>
                    <button
                      className="ml-2"
                      onClick={removeLink.bind(this, item.id)}
                    >
                      <FontAwesomeIcon
                        className="text-red-600"
                        icon={faTimesCircle}
                      />
                    </button>
                  </div>
                  <button
                    className="space-x-2 bg-white text-blue-500 rounded-md px-2 py-1"
                    onClick={handleEdit.bind(this, item)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                    <span>&</span>
                    <FontAwesomeIcon icon={faPalette} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
