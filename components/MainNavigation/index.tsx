import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { SearchPopover } from "../";

export const MainNavigation = () => {
  const { asPath } = useRouter();

  return (
    <nav className="hidden md:flex items-center px-4 uppercase text-sm">
        <ul className="flex h-8 items-center child:px-2 border-r-2 border-neutral-300 pr-1 mr-1">
          <li>
            <Link href={"/"}>
              <a className={classNames("transition-colors", {"font-bold": asPath == "/"})}>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className={classNames("transition-colors", {"font-bold": asPath == "/loja"})}>Loja</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className={classNames("transition-colors", {"font-bold": asPath == "/linhas"})}>Linhas</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className={classNames("transition-colors", {"font-bold": asPath == "/sobre"})}>Sobre</a>
            </Link>
          </li>
          <li>
              <SearchPopover />
          </li>
        </ul>
        <ul className="flex child:px-2">
          <li>
            <Link href={"#"}>
              <a className={classNames("transition-colors", {"font-bold": asPath == "/registro"})}>Registrar-se</a>
            </Link>
          </li>
          <li>
            <Link href={"/login"}><a className={classNames("transition-colors", {"font-bold": asPath == "/login"})}>Login</a></Link>
          </li>
        </ul>
      </nav>
  )
}