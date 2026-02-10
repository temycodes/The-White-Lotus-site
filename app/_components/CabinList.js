import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ filter }) {
  // noStore()

  // fetching all cabins- id, name, maxCapacity, regularPrice, discount, image
  const cabins = await getCabins();

  let displayedCabins;

  // filters
  if (filter === "all") displayedCabins = cabins;
  if (filter === "small") displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
  if (filter === "medium") displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7);
  if (filter === "large") displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  if (!cabins.length) return null;
  return (
    <div className='grid gap-10 md:grid-cols-2 xl:gap-14'>
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
