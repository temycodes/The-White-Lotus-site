import Image from "next/image";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { getServerSession } from "next-auth";
import authConfig from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Lotus Profile",
};

export default async function Page() {
  const session = await getServerSession(authConfig);
  const guest = await getGuest(session.user.email);

  return (
    <div className='max-w-3xl'>
      <h2 className='mb-3 text-2xl font-semibold text-accent-400'>Update your profile</h2>

      <p className='mb-8 text-base text-primary-300'>
        Providing the following information will make your check-in process faster and smoother.
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name='nationality'
          id='nationality'
          defaultCountry={guest.nationality}
          className='
              w-full rounded-md
              bg-primary-950
              px-4 py-2.5
              text-primary-200
              border border-primary-800
            '
        />
      </UpdateProfileForm>
    </div>
  );
}
