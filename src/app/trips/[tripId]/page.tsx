'use client';
import React from "react";
import Image from "next/image"; 
import { heroData } from "@/app/data/heroData";

// ✅ FIX: Use the proper type for App Router params
type Props = {
  params: {
    tripId: string;
  };
};

export default function TripPage({ params }: Props) {
  const { tripId } = params;

  const trip = heroData[tripId as keyof typeof heroData];

  if (!trip) {
    return <div className="p-6 text-center text-red-500">🚫 الرحلة غير موجودة</div>;
  }

  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] md:h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${trip.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">{trip.name}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">{trip.description}</p>
        </div>
      </div>

      {/* Trip Details Section */}
      <div className="p-6 md:p-10 container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">تفاصيل الرحلة</h2>

        {/* Loop through trip details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {trip.details.map((detail, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <Image 
                src={detail.image} 
                alt={trip.name} 
                width={400} 
                height={200} 
                className="rounded-lg"
              />
              <p className="mt-4 text-gray-700">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
