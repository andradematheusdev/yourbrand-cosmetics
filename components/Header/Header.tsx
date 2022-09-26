import Announcement from "../Announcement/Announcement";
import Logo from "../Logo";
import Data from '../../fakedata/Data';
import Link from "next/link";
import MainNavigation from "../MainNavigation/MainNavigation";
import MobileNavToggle from "../MobileNavToggle/MobileNavToggle";

export default function Header() {
  return (
    <header className="border-b border-neutral-300">
      <Announcement message={Data.announcement} />
      <div className="flex w-full h-16 items-center px-4">        
        <div className="flex items-center flex-1">
          <Link href={"/"}>
            <a><Logo /></a>
          </Link>
        </div>
        <MainNavigation />
        <MobileNavToggle />
      </div>
    </header>
  )
}