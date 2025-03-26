"use client";

interface ButtonProps {
  onClick?: () => void;
  buttonName?: string;
}

export default function Button({ onClick, buttonName }: ButtonProps) {
  // Fixed destructuring
  return (
    <button
      onClick={onClick} // Fixed casing from 'onclick' to 'onClick'
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
    >
      {buttonName ? buttonName : "Enter Button Name"}
    </button>
  );
}
