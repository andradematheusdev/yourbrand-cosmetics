import Link from "next/link";
import { CgSearch } from "react-icons/cg";
import { SearchPopover } from "../SearchPopover/SearchPopover";

export default function MainNavigation() {
  return (
    <nav className="hidden md:flex items-center px-4 uppercase text-sm">
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
              <SearchPopover />
          </li>
        </ul>
        <ul className="flex child:px-2">
          <li>
            <Link href={"#"}><a className="font-bold hover:text-neutral-700 transition-colors">Registrar-se</a></Link>
          </li>
          <li>
            <Link href={"#"}><a className="hover:text-neutral-700 transition-colors">Login</a></Link>
          </li>
        </ul>
      </nav>
  )
}