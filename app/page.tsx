"use client";

import Countdown from "react-countdown";
import { Ticket, Clock3, Wine } from "lucide-react";

export default function Home() {

  const eventDate = new Date("2026-07-03T23:00:00");

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="text-2xl font-black tracking-widest">
      RAMBAZAMBA
    </h1>

    <div className="flex gap-4 items-center">

      <a
        href="https://instagram.com"
        target="_blank"
        className="text-sm md:text-base hover:text-orange-400 transition"
      >
        Instagram
      </a>

      <a
        href="/bilhete"
        className="bg-orange-500 hover:bg-orange-400 px-5 py-2 rounded-full font-bold transition"
      >
        Bilhete
      </a>

    </div>

  </div>

</header>

      {/* HERO SECTION */}
     <section className="relative min-h-screen flex items-center justify-center pt-24">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/rambazamba-bg.png')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center">

          {/* TITLE */}
          <h1 className="text-6xl md:text-8xl font-black tracking-widest drop-shadow-2xl">
            RAMBAZAMBA
          </h1>

          <p className="mt-3 text-xl md:text-3xl font-semibold text-zinc-200">
            A maior festa africana em Bragança
          </p>

          {/* SAVE THE DATE */}
          <div className="mt-10">

            <p className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-orange-400">
              Save The Date
            </p>

            <div className="mt-4 bg-orange-500 px-8 py-5 rounded-2xl shadow-2xl">

              <h2 className="text-4xl md:text-6xl font-black text-white">
                3 E 4 JULHO
              </h2>

            </div>

          </div>

          {/* PRICE */}
          <div className="mt-8 bg-white px-10 py-5 rounded-3xl shadow-2xl">

            <p className="text-5xl md:text-7xl font-black text-orange-500">
              50€
            </p>

          </div>

          {/* BAR ABERTO */}
          <p className="mt-8 text-3xl md:text-4xl font-black text-orange-400">
            🍹 BAR ABERTO 🍹
          </p>

          {/* COUNTDOWN */}
          <div className="mt-10 bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl px-8 py-6">

            <Countdown
              date={eventDate}
              renderer={({ days, hours, minutes, seconds }) => (

                <div className="flex gap-6 md:gap-10 text-center">

                  <div>
                    <h2 className="text-4xl md:text-6xl font-black">
                      {days}
                    </h2>

                    <p className="text-zinc-300 text-sm md:text-base">
                      DIAS
                    </p>
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-black">
                      {hours}
                    </h2>

                    <p className="text-zinc-300 text-sm md:text-base">
                      HORAS
                    </p>
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-black">
                      {minutes}
                    </h2>

                    <p className="text-zinc-300 text-sm md:text-base">
                      MIN
                    </p>
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-black">
                      {seconds}
                    </h2>

                    <p className="text-zinc-300 text-sm md:text-base">
                      SEG
                    </p>
                  </div>

                </div>

              )}
            />

          </div>

          {/* BUTTON */}
          <a
            href="/bilhete"
            className="mt-10 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 transition-all duration-300 px-10 py-5 rounded-2xl text-xl md:text-2xl font-black shadow-2xl"
          >

            <Ticket size={28} />

            ADQUIRIR BILHETE

          </a>

        </div>

      </section>

      {/* INFO SECTION */}
      <section className="bg-black py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition">

            <Wine
              className="text-orange-400 mb-5"
              size={45}
            />

            <h2 className="text-2xl font-bold mb-3">
              Bar Aberto
            </h2>

            <p className="text-zinc-400">
              Bebidas disponíveis durante toda a noite para aproveitares ao máximo.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition">

            <Clock3
              className="text-orange-400 mb-5"
              size={45}
            />

            <h2 className="text-2xl font-bold mb-3">
              Até de Manhã
            </h2>

            <p className="text-zinc-400">
              Boa música, energia africana e vibes incríveis até amanhecer.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition">

            <Ticket
              className="text-orange-400 mb-5"
              size={45}
            />

            <h2 className="text-2xl font-bold mb-3">
              Bilhete Digital
            </h2>

            <p className="text-zinc-400">
              Recebe automaticamente o teu QR Code diretamente no email.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}