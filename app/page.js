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
import PaginationArrows from "@/components/arrow";
import ParticlesLayout from '@/components/ParticlesLayout';

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Description", href: "/description" },
  { name: "Uses", href: "/uses" },
  { name: "Qualifications", href: "/qualifications" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-800 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ParticlesLayout>
       <div className="relative z-10">
      <Navbar />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black mb-8">Christie Payne</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Introduction */}
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">Hello</h2>
            <p className="text-gray-700 text-sm">
              I'm Christie Payne, a aspiring cybersecurity and game developer.
            </p>
          </div>

          {/* What I Do */}
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">What I Do</h2>
            <p className="text-gray-700 text-sm">
              2 years of programming through the courses code academy and cs50.
              My current skills are fullstack web developer that specialises in
              backend using django.
            </p>
          </div>

          {/* Recent Work */}
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">Recent Work</h2>
            <p className="text-gray-700 text-sm mb-2">
              This project, which is a next.js project using react and tailwind
              and a financial application using c.
            </p>
          </div>

          {/* Currently */}
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">Currently</h2>
            <p className="text-gray-700 text-sm">
              Currently looking study and university and improve my skills and
              broaden my knowledge within this field as a whole
            </p>
          </div>

          {/* Contact */}
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">Contact</h2>
            <div className="space-y-1 text-sm">
              <div>
                <span className="text-gray-700">Email: </span>
                <a
                  href="mailto:[christiepaynr]@gmail.com"
                  className="text-black underline"
                >
                  christiepaynr@gmail.com
                </a>
              </div>
              <div>
                <span className="text-gray-700">GitHub: </span>
                <a
                  href="https://github.com/Swe2123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                >
                  Swe2123
                </a>
              </div>
              <div>
                <span className="text-gray-700">YouTube: </span>
                <a
                  href="https://youtube.com/@[NoStringsAttached-f8n]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                >
                  @NoStringsAttached-f8n
                </a>
              </div>
              <div>
                <span className="text-gray-700">LinkedIn: </span>
                <a
                  href="https://linkedin.com/in/[]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                ></a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <h2 className="text-lg font-medium text-black mb-3">Quick Links</h2>
            <div className="space-y-1 text-sm">
              <a
                href="/resume.pdf"
                download="[Your-Name]-Resume.pdf"
                className="text-black underline"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <PaginationArrows />
    </div>
    </ParticlesLayout>
    </div>
  );
}
