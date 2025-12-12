"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";

import React from "react";

const Header = () => {
  return (
    <div className="border-border bg-sidebar flex h-14 w-full flex-row items-center justify-end border-b px-4 py-4">
      <ModeToggle />
    </div>
  );
};

export default Header;
