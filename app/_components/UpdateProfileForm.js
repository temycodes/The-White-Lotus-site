"use client";
import Image from "next/image";
import { useState } from "react";
import { updateProfile } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
  const { count, setCount } = useState();

  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateProfile}
      className='flex flex-col gap-6 px-10 py-8 border rounded-lg border-primary-900 bg-primary-900/60'
    >
      {/* Full name */}
      <div className='space-y-1.5'>
        <label className='text-sm font-medium text-primary-300'>Full name</label>
        <input
          disabled
          name='fullName'
          defaultValue={fullName}
          className='
              w-full rounded-md
              bg-primary-950
              px-4 py-2.5
              text-primary-200
              border border-primary-800
              disabled:cursor-not-allowed
              disabled:opacity-60
            '
        />
      </div>

      {/* Email */}
      <div className='space-y-1.5'>
        <label className='text-sm font-medium text-primary-300'>Email address</label>
        <input
          disabled
          name='email'
          defaultValue={email}
          className='
              w-full rounded-md
              bg-primary-950
              px-4 py-2.5
              text-primary-200
              border border-primary-800
              disabled:cursor-not-allowed
              disabled:opacity-60
            '
        />
      </div>

      {/* Nationality */}
      <div className='space-y-1.5'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality' className='text-sm font-medium text-primary-300'>
            Where are you from?
          </label>
          {countryFlag && (
            <Image src={`${countryFlag}`} alt='Country flag' width={24} height={24} className='h-5 rounded-sm' />
          )}
        </div>

        {/* children represent the select country server component */}
        <div className='space-y-1.5'>{children}</div>
      </div>

      {/* National ID */}
      <div className='space-y-1.5'>
        <label htmlFor='nationalID' className='text-sm font-medium text-primary-300'>
          National ID number
        </label>
        <input
          name='nationalID'
          defaultValue={nationalID}
          className='
              w-full rounded-md
              bg-primary-950
              px-4 py-2.5
              text-primary-200
              border border-primary-800
              focus:outline-none
              focus:border-accent-500
            '
        />
      </div>

      {/* Actions */}
      <div className='flex justify-end pt-2'>
        <SubmitButton pendingLabel='Updating'>Update Profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
