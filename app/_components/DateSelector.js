"use client";

import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservastionContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from && range.to && datesArr.some((date) => isWithinInterval(date, { start: range.from, end: range.to }))
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  // PRICE CALCULATION
  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(range.to, range.from);
  const cabinPrice = numNights ? (regularPrice - discount) * numNights : 0;

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className='flex flex-col overflow-hidden border border-primary-800 bg-primary-950'>
      {/* Calendar */}
      <DayPicker
        className='px-6 pt-10 text-primary-200'
        mode='range'
        onSelect={setRange}
        selected={range}
        disabled={(curDate) => isPast(curDate) || bookedDates.some((date) => isSameDay(date, curDate))}
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        startDate={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, 11)}
        captionLayout='dropdown'
        numberOfMonths={2}
      />

      {/* Price bar */}
      <div className='flex items-center justify-between px-8 h-[72px] bg-primary-900 border-t border-primary-800'>
        <div className='flex items-center gap-8'>
          {/* Nightly price */}
          <p className='flex items-baseline gap-2 text-primary-100'>
            {discount > 0 ? (
              <>
                <span className='text-2xl font-medium'>${regularPrice - discount}</span>
                <span className='text-sm line-through text-primary-500'>${regularPrice}</span>
              </>
            ) : (
              <span className='text-2xl font-medium'>${regularPrice}</span>
            )}
            <span className='text-sm text-primary-400'>/ night</span>
          </p>

          {/* Total */}
          {numNights ? (
            <>
              <span className='text-sm text-primary-400'>× {numNights} nights</span>

              <p className='text-primary-100'>
                <span className='text-xs tracking-wide uppercase text-primary-400'>Total</span>{" "}
                <span className='text-2xl font-semibold'>${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {/* Clear */}
        {range.from || range.to ? (
          <button
            onClick={resetRange}
            className='text-sm font-medium transition-colors text-primary-300 hover:text-primary-100'
          >
            Clear dates
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
