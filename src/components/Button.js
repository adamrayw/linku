import { Link } from "react-router-dom";
import React from "react";

export default function Button() {
  return (
    <Link
      to=""
      className="mt-6 inline-block bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-all"
    >
      Buat Sekarang
    </Link>
  );
}
