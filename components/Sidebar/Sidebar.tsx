import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-[250px]  min-w-[250px] h-screen z-50 top-0 bottom-0 left-0 overflow-y-auto py-4 px-3 bg-[#3b75e3]">
      <div className="p-5">
        <Link href="/">
          <a>
            <Image
              src="/img/logo_cubox_w.png"
              alt="brand_logo"
              width={170}
              height={56}
            />
          </a>
        </Link>
      </div>

      <ul className="space-y-2">
        <li className="space-y-2 ">
          <a
            href="#"
            className="flex items-center justify-between  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 "
          >
            <div className="flex">
              <svg
                className="w-6 h-6 text-white transition duration-75  group-hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </div>
            <button onClick={() => setIsOpen(prev => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-[#213a84]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </a>

          <ul className="  space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Products
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="absolute left-[10px] bottom-0"></div>
    </nav>
  );
}
