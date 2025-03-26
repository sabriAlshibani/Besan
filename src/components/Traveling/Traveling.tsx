"use client";
import React from "react";
import Link from "next/link";
import Box from "@/components/Box";
import MainTitle from "../MainTitle";
import { trips } from "@/app/data/tripData";


export default function Traveling() {
  return (
    <div className="py-section container mx-auto">
      <MainTitle>عروض السفر</MainTitle>

      {/* List of Trips */}
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
        {trips.map((trip, index) => (
          <Link key={index} href={`/trips/${trip.path}`}>
  <Box classNames="cursor-pointer" image={trip.image}>
      {trip.name}
  </Box>
</Link>

        ))}
      </div>
    </div>
  );
}
