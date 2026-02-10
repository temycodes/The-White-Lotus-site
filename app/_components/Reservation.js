import { getServerSession } from "next-auth";
import authConfig from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { se } from "date-fns/locale";
import LoginMessage from "./LoginMessage";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([getSettings(), getBookedDatesByCabinId(cabin.id)]);

  const session = await getServerSession(authConfig);
  return (
    <div
      className='
      grid grid-cols-[1.2fr_1fr]
      mt-12
      min-h-[360px]
      border border-primary-800
      bg-primary-950
      rounded-md
      overflow-hidden
    '
    >
      {/* Date selector */}
      <div className='px-6 py-6 border-r border-primary-800'>
        <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin} />
      </div>

      {/* Reservation form */}
      <div className='px-6 py-6'>
        {session?.user ? <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage />}
      </div>
    </div>
  );
}

export default Reservation;
