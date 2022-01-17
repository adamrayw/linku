import { faCheckCircle, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { Tema } from "../context/context";

export default function Themes(props) {
  const [tema, setTema] = useContext(Tema);
  const [clickedBorder, setClickedBorder] = useState(props.value);
  const temass = tema; // console.log(tema);
  props.func(temass);

  // console.log(clickedBorder);

  // function hanldeChangeTema(number, color) {
  //   setClickedBorder(number);
  //   setTema(color);
  // }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-gray-500">Tema</h1>
        <button
          onClick={() => {
            setClickedBorder(0);
            setTema("bg-gray-200");
          }}
          className="text-sm text-gray-400 hover:text-gray-500 active:text-gray-600 transition-all"
        >
          <FontAwesomeIcon icon={faRedo} className="mr-1" />
          Reset
        </button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-cyan-500 to-blue-500"
            className={`h-16 w-16 bg-gradient-to-br from-cyan-500 to-blue-500 ${
              clickedBorder === 1 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(1);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 1 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">Cyan Blue</p>
        </div>
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-sky-500 to-indigo-500"
            className={`h-16 w-16 bg-gradient-to-br from-sky-500 to-indigo-500 ${
              clickedBorder === 2 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(2);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 2 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">Sky Indigo</p>
        </div>
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-violet-500 to-fuchsia-500"
            className={`h-16 w-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded ${
              clickedBorder === 3 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(3);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 3 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">Violet Fuchsia</p>
        </div>
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-purple-500 to-pink-500"
            className={`h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded ${
              clickedBorder === 4 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(4);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 4 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">Purple Pink</p>
        </div>
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-gray-700 via-gray-900 to-black"
            className={`h-16 w-16 bg-gradient-to-br from-gray-700 via-gray-900 to-black rounded ${
              clickedBorder === 5 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(5);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 5 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">GOTHAM</p>
        </div>
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100"
            className={`h-16 w-16 bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 rounded ${
              clickedBorder === 6 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(6);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 6 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">SUNSET</p>
        </div>
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-purple-200 via-purple-400 to-purple-800"
            className={`h-16 w-16 bg-gradient-to-br from-purple-200 via-purple-400 to-purple-800 rounded ${
              clickedBorder === 7 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(7);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 7 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">Huckleberry</p>
        </div>
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400"
            className={`h-16 w-16 bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 rounded ${
              clickedBorder === 8 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(8);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 8 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">POWERPUFF</p>
        </div>
        <div className="text-center space-y-1 flex flex-col justify-center items-center">
          <button
            value="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400"
            className={`h-16 w-16 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 rounded ${
              clickedBorder === 9 ? "border-4 border-blue-500" : ""
            } rounded`}
            onClick={(e) => {
              setClickedBorder(9);
              setTema(e.target.value);
            }}
          >
            {clickedBorder === 9 ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-400 "
              />
            ) : (
              ""
            )}
          </button>
          <p className="text-xs text-gray-400">COTTON CANDY</p>
        </div>
      </div>
    </div>
  );
}
