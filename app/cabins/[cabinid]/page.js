import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";

import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinid);

  if (!cabin) {
    notFound();
  }

  return {
    title: `Cabin ${cabin.name}`,
  };
}

// export async function generateStaticParams() {
//   const cabins = await getCabins();

//   const cabinIds = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

//   return cabinIds;
// }

//

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinid);

  if (!cabin) notFound();

  return (
    <div>
      <Cabin cabin={cabin} />

      {/* CTA */}
      <div className='text-center'>
        <h2 className='text-5xl font-medium text-accent-400'>Book today. Payment on arrival.</h2>
      </div>

      <Suspense fallback={<Spinner />}>
        <Reservation cabin={cabin} />
      </Suspense>
    </div>
  );
}
