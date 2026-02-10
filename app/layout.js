import Header from "./_components/Header";
import ReservationProvider from "./_components/ReservastionContext";

import "./_styles/globals.css";

import { DM_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The White Lotus",
    default: "The White Lotus",
  },
  description:
    "Discover White Lotus, a tranquil retreat offering elegant cabins, warm hospitality, and effortless online booking.",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${dmSans.className} min-h-screen bg-primary-950 text-primary-50 flex flex-col antialiased relative`}
      >
        <Header />

        <div className='flex-1 px-4 py-10 sm:px-6 lg:px-8'>
          <main className='mx-auto max-w-7xl w-full'>
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
