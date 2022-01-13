import React, { useContext, useState } from "react";
import { Context } from "../context/context";

export default function Links() {
  const [context, setContext] = useContext(Context);
  const [nama, setNama] = useState();
  const [link, setLink] = useState();

  function saveLink(e) {
    e.preventDefault();
    setContext([...context, { nama: nama, link: link }]);
  }

  console.log(context);
  return (
    <section>
      <form onSubmit={saveLink}>
        <input
          className="border rounded p-1"
          type="text"
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          className="border rounded p-1"
          type="text"
          onChange={(e) => setLink(e.target.value)}
        />
        <button>+</button>
      </form>
      <div>
        {context && (
          <>
            {context.map((item) => {
              return <li key={item.nama}>{item.nama}</li>;
            })}
          </>
        )}
      </div>
    </section>
  );
}
