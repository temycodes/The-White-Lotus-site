"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservastionContext";

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div
      className='
      fixed bottom-6 left-1/2 -translate-x-1/2
      flex items-start gap-6
      px-8 py-5
      max-w-[520px]
      rounded-lg
      bg-accent-500/95
      text-primary-900
      shadow-lg shadow-black/20
      backdrop-blur-sm
    '
    >
      <p className='text-sm leading-relaxed'>
        <span className='block font-semibold'>Reserve your stay</span>
        <span className='text-primary-800'>
          {format(new Date(range.from), "MMM dd yyyy")} - {format(new Date(range.to), "MMM dd yyyy")}
        </span>
      </p>

      <button
        onClick={resetRange}
        className='
        ml-auto
        rounded-md
        p-1.5
        transition-colors
        hover:bg-accent-600/60
      '
        aria-label='Dismiss reminder'
      >
        <XMarkIcon className='w-4 h-4' />
      </button>
    </div>
  );
}

export default ReservationReminder;
