'use client';

import Link from "next/link";
import { useState } from "react";
import { FOOTER_DATA } from "@/constants";
import { ContactModal } from "@/components/sub/contact-modal";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      id="contact"
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => {
                // If it's the specific Contact page link, we intercept it!
                if (link.includes("mailto:mihirmahato1304@gmail.com") || name === "Contact Me") {
                  return (
                    <button
                      key={`${column.title}-${name}`}
                      onClick={() => setIsModalOpen(true)}
                      className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition"
                    >
                      {Icon && <Icon />}
                      <span className="text-[15px] ml-[6px]">{name}</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-row items-center my-[15px] hover:text-purple-400 transition"
                  >
                    {Icon && <Icon />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Mihir Mahato {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
