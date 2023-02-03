import Logo from "../Logo";
import {
  Ambassador,
  FooterAddress,
  SocialIcons,
  Sitemap,
  SectionTitle,
  ProductsCategory
} from "../";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center justify-between bg-neutral-900 pt-16">
      <div className="mb-8">
        <Logo color="#fff" className="scale-150"/>
      </div>
      <div className="flex flex-col md:flex-row w-full px-4 md:px-16">

        {/* first col */}
        <div className="flex-1 mb-12 sm:mb-0">
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
            <SocialIcons />
          </div>
        </div>

        {/* second col */}
        <div className="flex-1 mb-8 md:mb-0 place-content-start md:px-16">
          <div className="mb-16 md:mb-8">
            <SectionTitle title="sitemap" className="text-white" />
            <Sitemap />
          </div>
          <div>
            <SectionTitle title="linhas" className="text-white" />
            <ProductsCategory />
          </div>
        </div>

      {/* third col */}
        <div className="flex-1">
          <FooterAddress />
        </div>

      </div>
      <div className="px-4 mt-4 w-full">
        <div className="flex flex-wrap w-full py-6 items-center justify-center md:justify-between border-t border-neutral-700 px-6">
          <span className="text-white flex-1 flex justify-center md:justify-start">
            <Logo color="#fff" className="mr-2" /> Ⓒ 2022
          </span>
          <span className="text-white">Feito por Matheus.Dev</span>
        </div>
      </div>
    </footer>
  )
}
