'use client'

import { useHousing } from "@/context/HousingProvider";

export const ButtonCard = ({stay})=>{
  const { removeWish, addWish} = useHousing()
  
  return (
    <button
      className="absolute z-10 top-5 sm:top-2 right-2 rounded-2lg flex items-center justify-center bg-white text-brand-500 hover:cursor-pointer"
      onClick={() => {
        if (stay?.isFavorite) {
          removeWish(stay.id);
        } else {
          addWish(stay.id);
        }
      }}
    >
      <div>
        <svg
          stroke="black"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8 p-1 hover:stroke-red ${
            stay?.isFavorite ? 'stroke-red' : 'stroke-black'
          }`}
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
          ></path>
        </svg>
      </div>
    </button>
  );
}