"use client";
import Tombol_l, { Tombol_2 } from "@/components/button";

export default function Home() {
return (
  <>
  <div className="container mx-auto">
    <h2>Kuis Kota</h2>
    <Tombol_l />
    <hr></hr>
    <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
  </div>
  </>
);
}
