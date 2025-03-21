"use client";

import { AddData } from "@/app/action/FireStoreDb";

export default function AddDataButton() {
  const handleAddData = async () => {
    const result = await AddData();
  };

  return (
    <div>
      <button
        onClick={handleAddData}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Add Data
      </button>
    </div>
  );
}
