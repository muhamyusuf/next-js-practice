"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navlinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/admin", label: "Dashboard Admin" },
];

const Navbar = () => {  
  const pathname = usePathname();

  return (
    <nav className="flex gap-5">
      {
        navlinks.map((link,index) => (
          <Link
            key={index}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            {link.label}
          </Link>
        ))
      }
    </nav>
  );
};

export default Navbar;
