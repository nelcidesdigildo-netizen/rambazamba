"use client";

import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function ScannerPage() {

  const [resultado, setResultado] = useState("");

  useEffect(() => {

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: 250,
      },
      false
    );

    scanner.render(
      (decodedText) => {
        setResultado(decodedText);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      scanner.clear().catch(console.error);
    };

  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-black mb-10">
        Scanner QR
      </h1>

      <div className="max-w-xl mx-auto">

        <div
          id="reader"
          className="overflow-hidden rounded-3xl"
        />

        <div className="mt-8 bg-zinc-900 p-6 rounded-3xl">

          <h2 className="text-2xl font-bold">
            Resultado
          </h2>

          <p className="mt-4 text-orange-400 break-all">
            {resultado || "Nenhum QR Code lido"}
          </p>

        </div>

      </div>

    </main>
  );
}