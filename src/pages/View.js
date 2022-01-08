import React from "react";
import { useParams } from "react-router-dom";

export default function FinalLink() {
  const { link } = useParams();
  const [data, setData] = React.useState([]);
  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      setNotFound(true);
      const response = await fetch(
        "https://linku-backend.herokuapp.com/api/" + link
      );
      const datas = await response.json();
      console.log(datas);
      if (datas.data.length === 0) {
        setNotFound(true);
      }
      setData(datas.data);
      setNotFound(false);
      document.title = datas.data[0].nama;
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {notFound === true ? (
        <div className="max-w-4xl h-screen flex flex-col justify-center items-center bg-gray-200">
          <div className="w-28 h-28 rounded-full animate-pulse bg-gray-600">
            <img className="rounded-full bg-cover bg-center" src="" alt="" />
          </div>
          <div className="mt-8 rounded-full animate-pulse h-4 w-44 bg-gray-600"></div>
          <div className="mt-6">
            <div className="mt-6 rounded-full animate-pulse h-4 w-64 bg-gray-600"></div>
            <div className="flex items-center">
              <div className="mt-6 rounded-full animate-pulse h-4 w-44 mr-2 bg-gray-600"></div>
              <div className="mt-6 rounded-full animate-pulse h-4 w-20 bg-gray-600"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl px-6 mx-auto h-screen flex flex-col justify-center items-center bg-gray-200">
          {data.map((item) => {
            return (
              <>
                <div className="w-28 h-28 rounded-full">
                  <img
                    className="rounded-full bg-cover bg-center"
                    src={`https://linku-backend.herokuapp.com/storage/${item.image}`}
                    alt=""
                  />
                </div>
                <div className={`mt-8 text-center`}>
                  <h1
                    style={{ color: item.nama_color }}
                    className={`font-${item.nama_font_weight} ${item.nama_font_style} ${item.nama_font_size}`}
                  >
                    {item.nama}
                  </h1>
                </div>
                <div className="mt-4">
                  <div className="text-center">
                    <p
                      style={{ color: item.deskripsi_color }}
                      className={`font-${item.deskripsi_font_weight} ${item.deskripsi_font_style} ${item.deskripsi_font_size}`}
                    >
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </section>
  );
}
