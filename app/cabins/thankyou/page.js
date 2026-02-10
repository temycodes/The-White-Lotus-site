import Link from "next/link";

export default function Page() {
  return (
    <div className='mt-10 flex flex-col items-center gap-6 text-center'>
      <h1 className='text-4xl font-semibold tracking-tight text-primary-50'>Reservation confirmed</h1>

      <p className='max-w-md text-lg text-primary-300'>
        Your stay has been successfully reserved. We will take care of the rest.
      </p>

      <Link
        href='/account/reservations'
        className='inline-flex items-center gap-2 text-lg font-medium text-accent-500 transition-colors hover:text-accent-400'
      >
        Manage your reservations
        <span className='text-xl'>→</span>
      </Link>
    </div>
  );
}
