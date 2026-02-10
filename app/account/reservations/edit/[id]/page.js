import SubmitButton from "@/app/_components/SubmitButton";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

// the params is bookingid
export default async function Page({ params }) {
  const bookingId = params.id;
  const { numGuest, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <section className='max-w-3xl'>
      <h2 className='mb-8 text-2xl font-semibold text-accent-400'>
        Edit Reservation
        <span className='ml-2 text-md font-medium text-primary-500'>#{bookingId}</span>
      </h2>

      <form className='flex flex-col gap-8 rounded-xl bg-primary-900 px-12 py-10 shadow-sm' action={updateReservation}>
        <input type='hidden' name='bookingId' value={bookingId} />

        <div className='space-y-2'>
          <label htmlFor='numGuests' className='text-sm font-medium text-primary-300'>
            Number of guests
          </label>

          <select
            name='numGuests'
            id='numGuests'
            defaultValue={numGuest}
            required
            className='w-full rounded-lg bg-primary-200 px-5 py-3 text-primary-800 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-accent-500/40'
          >
            <option value=''>Select number of guests...</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations' className='text-sm font-medium text-primary-300'>
            Notes for your stay
          </label>

          <textarea
            name='observations'
            defaultValue={observations}
            rows={4}
            placeholder='Any pets, allergies, or special requests?'
            className='w-full rounded-lg bg-primary-200 px-5 py-3 text-primary-800 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-accent-500/40'
          />
        </div>

        <div className='flex justify-end pt-4'>
          <SubmitButton pendingLabel='Updating'>Update reservation</SubmitButton>
        </div>
      </form>
    </section>
  );
}
