'use client'
import Image from "next/image";
import Hero from "@/components/Hero";
 export default function Home() {
   
  return (
    <main className="flex flex-1 flex-col items-center justify-between p-24">
       <Hero />
    </main>
  );
}
