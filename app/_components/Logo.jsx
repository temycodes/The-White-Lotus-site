import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      <div className='h-full w-auto flex-shrink-0 relative'>
        <Image
          src='/logo.png'
          height={50}
          width={50}
          alt='The White Lotus logo'
          className='h-full w-auto object-contain'
        />
      </div>
      <span className='text-xl font-bold text-accent-400 tracking-tight'>The White Lotus</span>
    </Link>
  );
}

export default Logo;
