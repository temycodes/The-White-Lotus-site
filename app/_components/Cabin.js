import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className='max-w-6xl mx-auto mt-12'>
      <div className='grid grid-cols-[3fr_4fr] gap-16 rounded-sm border border-primary-800 bg-primary-950 p-10 mb-24'>
        {/* Image container */}
        <div className='relative overflow-hidden rounded-sm'>
          <Image src={image} fill className='object-cover' alt={`Cabin ${name}`} />
        </div>

        {/* Content */}
        <div className='flex flex-col justify-center'>
          <h3 className='mb-6 text-6xl font-semibold text-accent-400'>Cabin {name}</h3>

          <p className='mb-10 text-lg leading-relaxed text-primary-300'>
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className='flex flex-col gap-4'>
            <li className='flex items-center gap-3 text-primary-200'>
              <UsersIcon className='w-5 h-5 text-primary-600' />
              <span>
                For up to <span className='font-semibold'>{maxCapacity}</span> guests
              </span>
            </li>

            <li className='flex items-center gap-3 text-primary-200'>
              <MapPinIcon className='w-5 h-5 text-primary-600' />
              <span>
                Located in the heart of the <span className='font-semibold'>Dolomites</span>, Italy
              </span>
            </li>

            <li className='flex items-center gap-3 text-primary-200'>
              <EyeSlashIcon className='w-5 h-5 text-primary-600' />
              <span>
                Privacy <span className='font-semibold'>100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cabin;
