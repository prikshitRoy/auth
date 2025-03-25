"use client";

import { WriteCityData } from "@/server/firebase/db/write";

export default function WriteCityDataButton() {
  const handleCityData = async () => {
    const result = await WriteCityData();
  };

  return (
    <div>
      <button
        onClick={handleCityData}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Write City Data in Firebase db
      </button>
    </div>
  );
}
