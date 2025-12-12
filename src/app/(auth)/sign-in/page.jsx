"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="bg-background flex min-h-screen flex-col items-center justify-center px-4 py-16 md:py-32">
      <div className="flex flex-row items-center justify-center gap-x-2">
        <h1 className="text-foreground text-3xl font-medium">
          Welcome to <span className="font-medium"> PRISM</span>
        </h1>
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
      </div>

      <p className="mt-2 font-light">Sign in to increase your message limits</p>
      <Button
        variant={"default"}
        className={
          "mt-5 flex max-w-sm cursor-pointer flex-row items-center justify-center px-4 py-2"
        }
        onClick={() => signIn.social({ provider: "google", callbackURL: "/" })}
      >
        <Image src={"/google.svg"} alt="google" height={24} width={24} />
        <span className="ml-4 font-medium">Sign in with GitHub</span>
      </Button>
    </section>
  );
};

export default Page;
