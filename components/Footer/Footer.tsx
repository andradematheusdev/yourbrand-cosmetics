import Ambassador from "../Ambassador/Ambassador";
import Logo from "../Logo";
import SectionTitle from "../SectionTitle/SectionTitle";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full items-center justify-between bg-neutral-800 pt-16">
      <div>
        <Logo color="#fff" />
      </div>
      <div className="grid w-full grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 px-10">
        <div>
          <div className="mb-12">
            <SectionTitle title="Embaixadoras" className="text-white font-normal" />
            <div className="grid grid-cols-3 grid-rows-1 justify-items-start">
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
        <div>
          <div>Sitemap</div>
          <div>Linhas</div>
        </div>
        <div>
          Contato
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
