import Link from "next/link";

function LoginMessage() {
  return (
    <div className='grid place-items-center bg-primary-900 rounded-lg shadow-md p-12 max-w-md mx-auto'>
      <p className='text-center text-lg text-primary-200 leading-relaxed'>
        Please{" "}
        <Link href='/login' className='underline text-accent-400 font-semibold'>
          login
        </Link>{" "}
        to reserve this cabin right now.
      </p>
    </div>
  );
}

export default LoginMessage;

