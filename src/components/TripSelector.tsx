"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Trip {
  name: string;
  path: string;
}

const trips: Trip[] = [
  { name: "السعودية", path: "saudi-arabia" },
  { name: "الإمارات", path: "uae" },
  { name: "مصر", path: "egypt" },
  { name: "تركيا", path: "turkey" },
];

const TripSelector: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<string>("اختر الرحلة");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleSelect = (trip: Trip) => {
    setSelectedTrip(trip.name);
    setIsOpen(false);
    router.push(`./trips/${trip.path}`);
  };

  return (
    <div className="relative inline-block text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-primary bg-white text-[20px] px-4 py-2 rounded-md shadow-md"
      >
        {selectedTrip}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-md border">
          {trips.map((trip, index) => (
            <div
              key={index}
              onClick={() => handleSelect(trip)}
              className="cursor-pointer px-4 py-2 hover:bg-primary"
            >
              {trip.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripSelector;
