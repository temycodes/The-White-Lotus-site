import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className='flex overflow-hidden border rounded-lg border-primary-900 bg-primary-950'>
      {/* Image container */}
      <div className='relative flex-1'>
        <Image src={image} fill alt={`Cabin ${name}`} className='object-cover border-r border-primary-900' />
      </div>

      {/* Details container */}
      <div className='flex-grow'>
        <div className='pt-5 pb-4 px-7 bg-primary-950'>
          <h3 className='mb-3 text-2xl font-semibold text-accent-500'>Cabin {name}</h3>

          <div className='flex items-center gap-3 mb-2'>
            <UsersIcon className='w-5 h-5 text-primary-400' />
            <p className='text-base text-primary-200'>
              For up to <span className='font-semibold'>{maxCapacity}</span> guests
            </p>
          </div>

          {/* Price container */}
          <p className='flex items-baseline justify-end gap-3'>
            {discount > 0 ? (
              <>
                <span className='text-3xl font-medium text-primary-50'>${regularPrice - discount}</span>
                <span className='text-sm font-medium line-through text-primary-500'>${regularPrice}</span>
              </>
            ) : (
              <span className='text-3xl font-medium text-primary-50'>${regularPrice}</span>
            )}
            <span className='text-sm text-primary-300'>/ night</span>
          </p>
        </div>

        {/* Button container */}
        <div className='text-right border-t bg-primary-950 border-primary-900'>
          <Link
            href={`/cabins/${id}`}
            className='inline-block px-6 py-4 text-sm font-medium transition-colors text-primary-200 hover:bg-accent-600 hover:text-primary-900'
          >
            Details & reservation →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
