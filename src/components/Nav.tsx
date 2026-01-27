import logo from "../assets/logo.svg";
import { Bell, ChevronDown, Search } from "lucide-react";
import profile from "../assets/profile.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Nav = () => {
  return (
    <header className=" w-full max-w-screen h-[80px] sticky top-0 z-99 shadow-sm bg-white">
      <nav className="h-full w-full mx-auto container flex items-center justify-between">
        <div className="">
          <img src={logo} alt="logo" className="w-[160px]" />
        </div>
        <div className="flex items-center gap-4 border border-border rounded-md w-[35%]">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for anything"
            className="outline-none px-4 text-md w-full"
          />
          <span className="bg-primary text-white px-6 py-3 rounded-r-sm">
            <Search size={20} />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="" className="underline text-secondary text-[.8em]">
            Docs
          </a>

          <span className="text-secondary">
            <Bell size={20} />
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={profile} />
                  <AvatarFallback>PfP</AvatarFallback>
                </Avatar>

                <p className="text-secondary flex items-center gap-2 ">
                  Elite DEV{" "}
                  <span>
                    <ChevronDown size={15} />
                  </span>
                </p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="z-100">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheckIcon />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCardIcon />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BellIcon />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
