"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  const [email, setEmail] = useState("");

const handleJoinWaitlist = (event) => {
  event.preventDefault();
  // Add logic to handle waitlist subscription using the email
  console.log("Email for waitlist:", email);
  // You might want to add a success message or similar feedback for the user here
};
  return (
    <>
      <header className="text-gray-600 body-font backdrop-blur-2xl sticky top-0 z-50">
        <div className="container mx-auto flex p-2 justify-between flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image src={Logo} alt="Aapda." className="h-10 w-auto" />
            <span className="ml-1 text-xl">AAPDA</span>
          </Link>
          <Dialog>
            <DialogTrigger>
              <Button>Join Waitlist</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join our early access waitlist.</DialogTitle>
                <DialogDescription>
                <form action="https://formsubmit.io/send/8d2ea8c6-8ab1-4212-b027-d846eeeb27e5" method="POST">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-2 p-2 border rounded w-full"
                    required
                  />
                  <input name="_formsubmit_id" type="text" className="hidden" />
                  <Button type="submit" className="mt-4">
                    Submit
                  </Button>
                </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </header>
    </>
  );
}
