"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { links } from "../constants/nav-links";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { useShoppingCart } from "use-shopping-cart";

// export const dynamic = "force-dynamic";
export const revalidate = 5;
function Navbar() {
  const pathName = usePathname();
  const { user } = useUser();
  const {handleCartClick} = useShoppingCart()
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="text-2xl sm:text-4xl font-bold">
            E<span className="text-primary">Shop</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg text-primary font-semibold"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg text-gray-600 font-semibold transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex relative">
          <Button
            className="flex flex-col gap-y-1.5 h-16 w-16 sm:h-20 sm:w-20 rounded-none col-span-8"
            variant="outline"
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className="hidden sm:block font-semibold text-gray-500 text-xs">
              Cart
            </span>
          </Button>
          {!user ? (
            <Link
              href="/sign-in"
              className="bg-primary text-sm text-white font-bold px-4 flex justify-center items-center"
            >
              Sign In
            </Link>
          ) : null}
          {user ? (
            <Button
              className="flex justify-center items-center gap-y-1.5 h-16 w-16 sm:h-20 sm:w-20 rounded-none col-span-8"
              variant="outline"
            >
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
