import Ambassador from "../Ambassador/Ambassador";
import FootAddress from "../FooterAddress/FootAddress";
import Logo from "../Logo";
import ProductsCategory from "../ProductsCategory/ProductsCategory";
import SectionTitle from "../SectionTitle/SectionTitle";
import Sitemap from "../Sitemap/Sitemap";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full items-center justify-between bg-neutral-900 pt-16">
      <div className="mb-8">
        <Logo color="#fff" className="scale-150"/>
      </div>
      <div className="flex w-full px-10">
        <div className="flex-1">
          <div className="mb-12">
            <SectionTitle title="Embaixadoras" className="text-white font-normal" />
            <div className="flex gap-x-2">
              <Ambassador />
              <Ambassador />
              <Ambassador />
            </div>
          </div>
          <div>
            <SectionTitle title="Redes Sociais" className="text-white font-normal" />
            <div>
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="flex-1 px-8">
          <div>
            <SectionTitle title="sitemap" className="text-white" />
            <Sitemap />
          </div>
          <div>
            <SectionTitle title="linhas" className="text-white" />
            <ProductsCategory />
          </div>
        </div>
        <div className="flex-1">
          <FootAddress />
        </div>
      </div>
      <div className="px-4 mt-4 w-full">
        <div className="flex w-full py-6 items-center justify-between border-t border-neutral-700 px-6">
          <span className="text-white flex-1 flex"><Logo color="#fff" className="mr-2" /> Ⓒ 2022</span>
          <span className="text-white">Feito por Matheus.Dev</span>
        </div>
      </div>
    </footer>
  )
}
