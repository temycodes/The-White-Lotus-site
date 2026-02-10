import Image from "next/image";
import Link from "next/link";
import bg from "../public/bg.png";

function page() {
  return (
    <main className='mt-24'>
      <Image
        src={bg}
        fill
        alt='Mountains and forests with two cabins'
        className='object-cover object-top'
        placeholder='blur'
      />

      <div className='relative z-10 text-center'>
        <h1 className='mb-10 font-normal tracking-tight text-8xl text-primary-50'>Welcome to paradise.</h1>
        <Link
          href='/cabins'
          className='px-8 py-5 text-base font-semibold transition-colors rounded-md bg-accent-500 text-primary-900 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400'
        >
          Explore Lotus cabins
        </Link>
      </div>
    </main>
  );
}

export default page;
