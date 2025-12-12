"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserButton from "@/modules/authentication/components/user-button";
import {
  EllipsisIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  Trash,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ChatSidebar = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-sidebar flex h-full w-64 flex-col border-r">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
        </div>
      </div>

      <div className="p-4">
        <Link href={"/"}>
          <Button className={"w-full"}>
            <PlusIcon className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </Link>
      </div>

      <div className="px-4 pb-4">
        <div className="relative">
          <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search your chat"
            className={"bg-sidebar-accent border-sidebar-b pr-8 pl-9"}
            value={searchQuery}
            onChange={handleQueryChange}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        <div className="text-muted-foreground py-8 text-center text-sm">
          No chats yet
        </div>
      </div>

      <div className="border-sidebar-border flex items-center gap-3 border-t p-4">
        <UserButton user={user} />
        <span className="text-sidebar-foreground flex-1 truncate text-sm">
          {user.email}
        </span>
      </div>
    </div>
  );
};

export default ChatSidebar;
