"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className='px-8 py-3 font-semibold transition-colors rounded-md bg-accent-500 text-primary-900 hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-60'
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
