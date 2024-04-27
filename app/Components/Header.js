"use client";
import Link from "next/link";
const Header = () => {
  return (
    <div className="h-8 px-5 bg-blue-300 text-white text-center py-0.5">
      <Link href="/" className="font-extrabold font-mono text-xl">
        Med_Vendors
      </Link>
    </div>
  );
};

export default Header;
