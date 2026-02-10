import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Lotus Cabins",
};

// turning page dynamic
// export const revalidate = 0;

// turning page dynamic(isr)
export const revalidate = 3600;

export default function Page({ searchParams }) {
  // { capacity: 'all' | 'small' | 'medium' | 'large' }
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='mb-4 text-4xl font-medium tracking-tight text-accent-400'>Our Luxury Cabins</h1>

      <p className='max-w-3xl mb-12 text-base leading-relaxed text-primary-300'>
        Cozy yet luxurious cabins nestled in the heart of the Italian Dolomites. Wake up to mountain views, spend your
        days exploring quiet forests, or unwind in your private hot tub beneath the stars. Each cabin offers comfort,
        privacy, and a deep connection to nature your personal retreat for a calm, restorative stay.
      </p>

      <div className='flex justify-end mb-8'>
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
