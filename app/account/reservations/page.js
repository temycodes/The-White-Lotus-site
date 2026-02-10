import ReservationList from "@/app/_components/ReservationList";
import authConfig from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Reservsations | Lotus Account",
};

export default async function Page() {
  const session = await getServerSession(authConfig);
  const bookings = await getBookings(session.user.guestId);

  return (
    <section className='space-y-8'>
      <h2 className='text-2xl font-semibold tracking-tight text-primary-100'>Your reservations</h2>

      {bookings.length === 0 ? (
        <div className='rounded-xl border border-primary-800 bg-primary-900 p-10 text-center shadow-sm'>
          <p className='text-lg text-primary-300'>You have no reservations yet.</p>

          <a
            href='/cabins'
            className='inline-block mt-4 text-accent-400 font-semibold underline-offset-4 hover:underline'
          >
            Explore our luxury cabins →
          </a>
        </div>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </section>
  );
}
