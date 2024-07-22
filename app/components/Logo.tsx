import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-2xl sm:text-4xl font-bold">
        E<span className="text-primary">Shop</span>
      </h1>
    </Link>
  );
}

export default Logo;
