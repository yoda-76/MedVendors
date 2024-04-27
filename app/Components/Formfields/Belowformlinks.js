"use client"

import Link from "next/link"
const Belowformlinks = ({ redirectpage , text}) => {
  return (
    <div className="flex justify-center px-2 mt-[-1.5rem] mb-12">
        <Link
          href={redirectpage}
          className="font-bold text-blue-400 bg-white px-1 rounded-md"
        >
          {text}
        </Link>
      </div>
  )
}

export default Belowformlinks
