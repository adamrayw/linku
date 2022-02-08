import React from "react";
export default function Footer(props) {
  return (
    <footer>
      <p className="text-center pb-4 text-gray-300 font-light text-sm">
        Dibuat oleh <span className="text-blue-500">{props.value}</span>
      </p>
    </footer>
  );
}
