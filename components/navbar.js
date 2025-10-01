"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Description", href: "/description" },
  { name: "Projects ", href: "/projects" },
  { name: "Qualifications", href: "/qualifications" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-800 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10 select-none"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo and desktop menu */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Desktop links */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? "bg-gray-900 text-white dark:bg-gray-950/50"
                            : "text-gray-300 hover:bg-white/5 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* User icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative flex rounded-full">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBvXa_vFmcR82Aia3cVWwqsVKscEXrYVbuoNsnaZPIw&s"
                    className="h-8 w-8 rounded-full bg-gray-800 outline outline-white/10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "bg-gray-900 text-white dark:bg-gray-950/50"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
