"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservastionContext";
import { createReservation } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();

  // CHANGE
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = { startDate, endDate, cabinPrice, numNights, cabinId: id };

  const createReservervationWithData = createReservation.bind(null, bookingData);

  return (
    <div className='overflow-hidden border border-primary-800 bg-primary-950'>
      <div className='flex items-center justify-between px-16 py-3 text-sm border-b bg-primary-900 border-primary-800 text-primary-400'>
        <p>Logged in as</p>

        {/* user info stays optional */}
        <div className='flex items-center gap-4'>
          {user?.image && (
            <img
              src={user.image}
              alt='User Avatar'
              className='inline-block w-8 h-8 rounded-full mr-2'
              referrerPolicy='no-referrer'
            />
          )}
          <p>{user?.email || user?.name || "Guest"}</p>
        </div>
      </div>

      {/* Form */}
      <form
        action={async (formData) => {
          await createReservervationWithData(formData);
          resetRange();
        }}
        className='flex flex-col gap-6 px-16 py-10 text-lg'
      >
        <div className='space-y-2'>
          <label htmlFor='numGuests' className='text-primary-300'>
            Number of guests
          </label>

          <select
            name='numGuests'
            id='numGuests'
            required
            className='w-full px-5 py-3 transition-colors border rounded-sm bg-primary-900 border-primary-700 text-primary-100 focus:outline-none focus:border-accent-500'
          >
            <option value=''>Select guests…</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations' className='text-primary-300'>
            Special requests
          </label>

          <textarea
            name='observations'
            id='observations'
            rows={4}
            placeholder='Allergies, pets, arrival notes, or anything else we should know'
            className='w-full px-5 py-3 transition-colors border rounded-sm resize-none bg-primary-900 border-primary-700 text-primary-100 focus:outline-none focus:border-accent-500 placeholder:text-primary-500'
          />
        </div>

        {/* Actions */}
        
        {!(startDate && endDate) ? (
          <p className='text-sm text-primary-400'>Select dates to continue</p>
        ) : (
          <SubmitButton pendingLabel='Working on it...'> Reserve </SubmitButton>
        )}
      </form>
    </div>
  );
}

export default ReservationForm;
