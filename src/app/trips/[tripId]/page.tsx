'use client';
import React from "react";
import Link from "next/link";
import { heroData } from "@/app/data/heroData";


export default function TripPage({ params }: { params: { tripId: string } }) {
  const { tripId } = params;
  const trip = heroData[tripId];

  if (!trip) {
    return <div className="p-6 text-center text-red-500">🚫 الرحلة غير موجودة</div>;
  }

  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${trip.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">{trip.name}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">{trip.description}</p>
          <Link href={trip.link}>
            <button className="mt-6 px-8 py-3 text-lg bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300">
              احجز الآن
            </button>
          </Link>
        </div>
      </div>

      {/* Trip Details Section */}
      <div className="p-6 md:p-10 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">تفاصيل الرحلة</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">{trip.details}</p>
      </div>
    </main>
  );
}
