import Announcement from "../Announcement/Announcement";
import Logo from "../Logo";
import Data from '../../fakedata/Data';
import Link from "next/link";
import { CgSearch } from "react-icons/cg";

export default function MainNavigation() {
  return (
    <header>
      <Announcement message={Data.announcement} />
      <nav className="flex w-full h-16 items-center px-6 border-b border-neutral-300 uppercase text-sm">
        <div className="flex-1">
          <Link href={"/"}>
            <a><Logo /></a>
          </Link>
        </div>
        <ul className="flex h-8 items-center child:px-2 border-r-2 border-neutral-300 pr-1 mr-1">
          <li>
            <Link href={"/"}>
              <a className="border-b-2 border-black">Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="hover:border-b-2 hover:border-neutral-300 transition-colors">Loja</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="hover:border-b-2 hover:border-neutral-300 transition-colors">Linhas</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="hover:border-b-2 hover:border-neutral-300 transition-colors">Sobre</a>
            </Link>
          </li>
          <li>
              <a role={'button'}><CgSearch size={22} /></a>
          </li>
        </ul>
        <ul className="flex child:px-2">
          <li>
            <Link href={"#"}><a className="font-bold hover:border-b-2 hover:border-neutral-300 transition-colors">Registrar-se</a></Link>
          </li>
          <li>
            <Link href={"#"}><a className="hover:border-b-2 hover:border-neutral-300 transition-colors">Login</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}