"use client";

import Countdown from "react-countdown";
import { Ticket, Clock3, Wine } from "lucide-react";

export default function Home() {
  const eventDate = new Date("2026-07-25T23:00:00");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">

      {/* HERO SECTION */}
      <section className="w-full relative h-[90vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070&auto=format&fit=crop"
          alt="Party"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl md:text-7xl font-black tracking-widest">
            RAMBAZAMBA
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-zinc-300">
            A maior festa africana em Bragança
          </p>

          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6">

              <Countdown
                date={eventDate}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="flex gap-4 text-center">

                    <div>
                      <h2 className="text-4xl font-bold">{days}</h2>
                      <p className="text-sm text-zinc-300">Dias</p>
                    </div>

                    <div>
                      <h2 className="text-4xl font-bold">{hours}</h2>
                      <p className="text-sm text-zinc-300">Horas</p>
                    </div>

                    <div>
                      <h2 className="text-4xl font-bold">{minutes}</h2>
                      <p className="text-sm text-zinc-300">Min</p>
                    </div>

                    <div>
                      <h2 className="text-4xl font-bold">{seconds}</h2>
                      <p className="text-sm text-zinc-300">Seg</p>
                    </div>

                  </div>
                )}
              />

            </div>
          </div>

          <a
            href="/bilhete"
            className="mt-10 inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full text-lg transition"
          >
            <Ticket size={22} />
            Adquirir Bilhete
          </a>

        </div>
      </section>

      {/* INFO SECTION */}
      <section className="w-full max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <Wine className="mb-4 text-yellow-400" size={40} />
          <h2 className="text-2xl font-bold mb-2">
            Bar Aberto
          </h2>
          <p className="text-zinc-400">
            Aproveita bebidas ilimitadas durante toda a noite.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <Clock3 className="mb-4 text-yellow-400" size={40} />
          <h2 className="text-2xl font-bold mb-2">
            Até de Manhã
          </h2>
          <p className="text-zinc-400">
            Música africana, vibes incríveis e energia máxima.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <Ticket className="mb-4 text-yellow-400" size={40} />
          <h2 className="text-2xl font-bold mb-2">
            Bilhete Digital
          </h2>
          <p className="text-zinc-400">
            Recebe o teu QR Code automaticamente por email.
          </p>
        </div>

      </section>

    </main>
  );
}