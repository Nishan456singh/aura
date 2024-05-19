import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import Navbar from "./Navbar"
import Dropdown from "./Dropdown"

const Header = () => {
  return (
    <header className="w-full">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/assets/images/logo.png" alt="logo" width={200} height={40} />
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <Navbar />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
            <Dropdown />
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
