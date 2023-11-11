import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 body-font backdrop-blur-2xl sticky top-0 z-50">
        <div className="container mx-auto flex p-2 justify-between flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={Logo} alt="Aapda." className="h-10 w-auto" />
            <span className="ml-1 text-xl">Aapda.</span>
          </Link>
          <Link href="/join-early">
          <Button>
            Join Wishlist
          </Button>
          </Link>
        </div>
      </header>
    </>
  );
}
