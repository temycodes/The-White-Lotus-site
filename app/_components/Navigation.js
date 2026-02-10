import NextAuth, { getServerSession } from "next-auth";
import Link from "next/link";
import authConfig from "../_lib/auth";

export default async function Navigation() {
  const session = await getServerSession(authConfig);

  return (
    <nav className='z-10'>
      <ul className='flex items-center gap-14 text-lg font-medium tracking-wide'>
        <li>
          <Link href='/cabins' className='text-primary-300 transition-colors hover:text-accent-400'>
            Cabins
          </Link>
        </li>

        <li>
          <Link href='/about' className='text-primary-300 transition-colors hover:text-accent-400'>
            About
          </Link>
        </li>

        <li>
          {session?.user?.image ? (
            <Link
              href='/account'
              className='flex items-center gap-3 text-primary-200 transition-colors hover:text-accent-400'
            >
              <img
                src={session.user.image}
                alt='User Avatar'
                className='h-8 w-8 rounded-full ring-1 ring-primary-700'
                referrerPolicy='no-referrer'
              />
              <span className='text-sm uppercase tracking-wide'>Account</span>
            </Link>
          ) : (
            <Link href='/api/auth/signin' className='text-primary-200 transition-colors hover:text-accent-400'>
              Sign in
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
