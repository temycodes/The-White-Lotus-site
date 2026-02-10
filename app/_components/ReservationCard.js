import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <article className='flex overflow-hidden border shadow-sm rounded-xl border-primary-800 bg-primary-900'>
      {/* Image */}
      <div className='relative h-32 aspect-square'>
        <Image src={image} fill alt={`Cabin ${name}`} className='object-cover' />
        <div className='absolute inset-y-0 right-0 w-px bg-primary-800' />
      </div>

      <div className='flex flex-col flex-grow px-6 py-4'>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='text-lg font-semibold text-primary-100'>
            {numNights} nights in Cabin {name}
          </h3>

          <span
            className={`flex items-center px-3 h-7 rounded-full text-xs font-semibold uppercase tracking-wide
            ${isPast(new Date(startDate)) ? "bg-primary-800 text-primary-400" : "bg-accent-500/15 text-accent-400"}`}
          >
            {isPast(new Date(startDate)) ? "Past" : "Upcoming"}
          </span>
        </div>

        <p className='mt-1 text-sm text-primary-400'>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(startDate)}) —{" "}
          {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className='flex items-center gap-4 pt-4 mt-auto'>
          <p className='text-lg font-semibold text-accent-400'>${totalPrice}</p>

          <span className='text-primary-500'>•</span>

          <p className='text-sm text-primary-300'>
            {numGuests} guest{numGuests > 1 && "s"}
          </p>

          <p className='ml-auto text-xs text-primary-500'>Booked {format(new Date(created_at), "MMM dd, yyyy")}</p>
        </div>
      </div>

      {/* Actions */}
      <div className='flex flex-col w-[104px] border-l border-primary-800'>
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className='flex items-center justify-center flex-grow gap-2 px-3 text-xs font-semibold tracking-wide uppercase transition-colors group text-primary-300 hover:bg-accent-500 hover:text-primary-900'
            >
              <PencilSquareIcon className='w-4 h-4 transition-colors group-hover:text-primary-900' />
              Edit
            </Link>

            <div className='h-px bg-primary-800' />

            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </article>
  );
}

export default ReservationCard;
