import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Context } from "../../contexts/UserAuthContext";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SearchPopover, UserContextMenu } from "../";

export const MainNavigation = () => {
  const { asPath } = useRouter();
  const { isAuthenticated } = useContext(Context);

  const SignInSignUpLinks = () => {
    return (
      <ul className="flex child:px-2">
        <li>
          <Link href={"#"}>
            <a className={classNames("transition-colors", { "font-bold": asPath == "/signup" })}>Registrar-se</a>
          </Link>
        </li>
        <li>
          <Link href={"/signin"}>
            <a className={classNames("transition-colors", { "font-bold": asPath == "/signin" })}>Login</a>
          </Link>
        </li>
      </ul>
    );
  };

  const ShopingCartAndProfileLinks = () => {
    return (
      <ul className="flex items-center gap-6 ml-2">
        <li>
          <Link href={"#"}>
            <a className={classNames("transition-colors", { "font-bold": asPath == "/signup" })}>
              <AiOutlineShoppingCart size={22} />
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/signin"}>
            <a className={classNames("transition-colors", { "font-bold": asPath == "/signin" })}><UserContextMenu /></a>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className="hidden md:flex items-center px-4 uppercase text-sm">
      <ul className="flex h-8 items-center child:px-2 border-r-2 border-neutral-300 pr-1 mr-1">
        <li>
          <Link href={"/"}>
            <a className={classNames("transition-colors", { "font-bold": asPath == "/" })}>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <a className={classNames("transition-colors", { "font-bold": asPath == "/loja" })}>Loja</a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <a className={classNames("transition-colors", { "font-bold": asPath == "/linhas" })}>Linhas</a>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <a className={classNames("transition-colors", { "font-bold": asPath == "/sobre" })}>Sobre</a>
          </Link>
        </li>
        <li>
          <SearchPopover />
        </li>
      </ul>
      {isAuthenticated ? <ShopingCartAndProfileLinks /> : <SignInSignUpLinks />}
    </nav>
  );
};
