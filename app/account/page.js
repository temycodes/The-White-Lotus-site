import { CalendarDaysIcon, CreditCardIcon, UsersIcon } from "@heroicons/react/24/solid";
import { getServerSession } from "next-auth";
import Link from "next/link";
import authConfig from "../_lib/auth";
import { getBookings } from "../_lib/data-service";

export const metadata = {
  title: "Lotus Account",
};

async function page() {
  const session = await getServerSession(authConfig);
  const firstname = session.user.name.split(" ").at(0);

  const bookings = await getBookings(session.user.guestId);

  return (
    <div className='space-y-12'>
      {/* Greeting */}
      <div className='bg-primary-800 p-6 rounded-md shadow-md text-primary-200 text-center'>
        <h2 className='text-3xl font-semibold mb-2'>Welcome back, {firstname}!</h2>
        <p>Check your reservations or reserve a luxury cabin for your next stay ;)</p>
      </div>

      {/* Quick Stats */}
      <div className='grid grid-cols-3 gap-6'>
        <div className='bg-primary-900 p-6 rounded-md shadow flex flex-col items-center text-center'>
          <CalendarDaysIcon className='w-8 h-8 text-accent-400 mb-2' />
          <p className='text-primary-200 font-medium'>Upcoming Stays</p>
          <p className='text-2xl font-bold text-accent-400'>{bookings.length}</p>
        </div>
        <div className='bg-primary-900 p-6 rounded-md shadow flex flex-col items-center text-center'>
          <UsersIcon className='w-8 h-8 text-accent-400 mb-2' />
          <p className='text-primary-200 font-medium'>Total Guests</p>
          <p className='text-2xl font-bold text-accent-400'>{bookings.reduce((sum, b) => sum + b.numGuests, 0)}</p>
        </div>
        <div className='bg-primary-900 p-6 rounded-md shadow flex flex-col items-center text-center'>
          <CreditCardIcon className='w-8 h-8 text-accent-400 mb-2' />
          <p className='text-primary-200 font-medium'>Total Spent</p>
          <p className='text-2xl font-bold text-accent-400'>${bookings.reduce((sum, b) => sum + b.totalPrice, 0)}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className='flex flex-wrap gap-6'>
        <Link
          href='/cabins'
          className='px-6 py-3 bg-accent-500 text-primary-900 font-semibold rounded-md shadow hover:bg-accent-600 transition'
        >
          Reserve New Cabin
        </Link>
        <Link
          href='/account/profile'
          className='px-6 py-3 border border-primary-800 text-primary-200 font-semibold rounded-md shadow hover:bg-primary-900 transition'
        >
          Edit Profile
        </Link>
      </div>

      {/* Promo / CTA */}
      <div className='bg-accent-500 rounded-lg p-6 text-primary-900 text-center shadow-lg'>
        <h4 className='font-semibold text-xl mb-2'>Spring Special</h4>
        <p>Reserve 3 nights and get a complimentary spa experience.</p>
        <Link
          href='/cabins'
          className='mt-3 inline-block px-6 py-3 bg-primary-900 text-accent-500 font-semibold rounded-md hover:bg-primary-800 transition'
        >
          Reserve Now
        </Link>
      </div>
    </div>
  );
}

export default page;
