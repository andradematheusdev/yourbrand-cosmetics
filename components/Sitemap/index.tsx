import Link from "next/link"

export const Sitemap = () => {
  return (
    <ul className="grid grid-cols-2 text-white px-4">
      <li><Link href={"/"}>HOME</Link></li>
      <li><Link href={"/"}>LOJA</Link></li>
      <li><Link href={"/"}>LINHAS</Link></li>
      <li><Link href={"/"}>SOBRE</Link></li>
      <li><Link href={"/"}>MINHA CONTA</Link></li>
      <li><Link href={"/"}>CARRINHO</Link></li>
      <li><Link href={"/"}>CHECKOUT</Link></li>
      <li><Link href={"/"}>SAIR</Link></li>
    </ul>
  )
}
