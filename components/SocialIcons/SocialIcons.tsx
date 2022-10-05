import Link from "next/link";
import { FiFacebook, FiInstagram, FiYoutube, FiTwitch, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function SocialIcons() {
  return(
    <div className="flex w-full gap-x-1">
      <Link href={"#"}>
        <a className="flex w-12 h-12 items-center justify-center bg-neutral-700"><FiFacebook color="#fff" size={24} /></a>
      </Link>
      <Link href={"#"}>
        <a className="flex w-12 h-12 items-center justify-center bg-neutral-700"><FiInstagram color="#fff" size={24} /></a>
      </Link>
      <Link href={"#"}>
        <a className="flex w-12 h-12 items-center justify-center bg-neutral-700"><FiYoutube color="#fff" size={24} /></a>
      </Link>
      <Link href={"#"}>
        <a className="flex w-12 h-12 items-center justify-center bg-neutral-700"><FiTwitter color="#fff" size={24} /></a>
      </Link>
      <Link href={"#"}>
        <a className="flex w-12 h-12 items-center justify-center bg-neutral-700"><FiLinkedin color="#fff" size={24} /></a>
      </Link>
    </div>   
  );
}
