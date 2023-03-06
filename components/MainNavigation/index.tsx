import Link from "next/link";
import { SearchPopover } from "../";

export const MainNavigation = () => {
  return (
    <nav className="hidden md:flex items-center px-4 uppercase text-sm">
        <ul className="flex h-8 items-center child:px-2 border-r-2 border-neutral-300 pr-1 mr-1">
          <li>
            <Link href={"/"}>
              <a className="font-bold transition-colors">Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="transition-colors">Loja</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="transition-colors">Linhas</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="transition-colors">Sobre</a>
            </Link>
          </li>
          <li>
              <SearchPopover />
          </li>
        </ul>
        <ul className="flex child:px-2">
          <li>
            <Link href={"#"}><a className="transition-colors">Registrar-se</a></Link>
          </li>
          <li>
            <Link href={"/login"}><a className="transition-colors">Login</a></Link>
          </li>
        </ul>
      </nav>
  )
}