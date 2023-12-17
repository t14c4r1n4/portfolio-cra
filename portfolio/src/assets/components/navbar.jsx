'use client'
import React, { FC, useState } from "react";
import Link from "next/link";
import nav_items from '../../constants/nav_items';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const close = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>;
  const menu = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>;

  return (
    <div className="h-full fixed">
      <div className="h-screen flex flex-col flex-shrink-0 ">
        <nav className={`md-${isOpen ? "open" : ""} glass my-auto text-cyan-500`}>
          <button className="my-auto"
            type="button"
            // add the open-state on click:
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* close oder open navbar: */}
            <span className="my-auto">
              {isOpen ? close : menu}
            </span>
          </button>
          {isOpen && (
            <ul className="flex flex-col items-center justify-center flex-1">
              {nav_items.map((page, index) => (
                <li className="mb-8 px-4 py-2 nav-item" key={index}>
                  <Link href={page.href} aria-label={`Scroll to ${page.alt}`}>
                    {page.icon}
                    {/* <span className="hidden uppercase text-center"
                  >{page.alt}</span> */}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;