"use client";

import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className='w-5 h-5 text-primary-400' />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className='w-5 h-5 text-primary-400' />,
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: <UserIcon className='w-5 h-5 text-primary-400' />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className='border-r border-primary-900 bg-primary-950'>
      <ul className='flex flex-col h-full gap-1 px-2 py-4 text-sm'>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`
                flex items-center gap-4 rounded-md
                px-4 py-2.5
                font-medium
                text-primary-300
                transition-colors
                hover:bg-primary-900
                hover:text-primary-100
              ${pathname === link.href ? "bg-primary-800 text-primary-200" : ""}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className='pt-4 mt-auto border-t border-primary-900'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
