import Link from "next/link"

export const ProductsCategory = () => {
  return (
    <ul className="grid grid-cols-2 text-white px-4">
      <li><Link href={"/"}>SHINNEE</Link></li>
      <li><Link href={"/"}>PEARL</Link></li>
      <li><Link href={"/"}>MAX COLLAGE</Link></li>
      <li><Link href={"/"}>CLEAR X</Link></li>
      <li><Link href={"/"}>NATURAL</Link></li>
      <li><Link href={"/"}>ACQUA</Link></li>
      <li><Link href={"/"}>MAX ANGEL</Link></li>
      <li><Link href={"/"}>NANOBLOND</Link></li>
      <li><Link href={"/"}>PLEX</Link></li>
      <li><Link href={"/"}>MAX GRAVITY</Link></li>
      <li><Link href={"/"}>DEEP CLEAR</Link></li>
      <li><Link href={"/"}>YOU COLORS</Link></li>
      <li><Link href={"/"}>RADIANCE</Link></li>
    </ul>
  )
}
