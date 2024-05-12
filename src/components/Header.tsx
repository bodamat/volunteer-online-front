import Link from "next/link";
import {
  CircleUser,
  Menu,
  CheckIcon,
  User,
  LogOut,
  Plus,
  Info,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";
import { isRegistered, navBar } from "@/constants/navBar";

export function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <CheckIcon className="h-6 w-6" />
          <span className="sr-only">Volunteer Online</span>
        </Link>
        {navBar.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`${
              router.pathname === item.link
                ? "text-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground
            `}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <CheckIcon className="h-6 w-6" />
              <span className="sr-only">Volunteer Online</span>
            </Link>
            {navBar.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`${
                  router.pathname === item.link ? "" : "text-muted-foreground"
                } hover:text-foreground
            `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {!isRegistered ? (
          <Button asChild>
            <Link href={"/login"}>
              <User className="mr-2 h-4 w-4" /> Login / Sign Up
            </Link>
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("#")}>
                <Info className="mr-2 h-4 w-4" />
                <span>Personal Info</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/create-activity")}>
                <Plus className="mr-2 h-4 w-4" />
                <span>Create Activity</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => console.log("Logout")}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
