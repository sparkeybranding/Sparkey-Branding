"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function InvertButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex justify-center items-center px-8 py-4 bg-black text-white overflow-hidden border border-black border-opacity-20 hover:border-black transition-colors ${className}`}
    >
      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
      <span className="relative z-10 text-sm font-sans uppercase tracking-widest group-hover:text-black transition-colors duration-500 delay-100">
        {children}
      </span>
    </Link>
  );
}
