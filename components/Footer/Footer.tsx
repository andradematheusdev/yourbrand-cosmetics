import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full items-center bg-neutral-800 py-16">
      <div>
        <Logo color="#fff" />
      </div>
      <div className="grid w-full grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 px-16">
        <div>
          <div>Embaixadoras</div>
          <div>Redes Sociais</div>
        </div>
        <div>
          <div>Sitemap</div>
          <div>Linhas</div>
        </div>
        <div>
          Contato
        </div>
      </div>
      <div className="px-4 w-full">
        <div className="flex w-full py-6 items-center justify-between border-t border-neutral-700">
          <span className="text-white flex-1 flex"><Logo color="#fff" /> Ⓒ 2022</span>
          <span className="text-white">Feito por Matheus.Dev</span>
        </div>
      </div>
    </footer>
  )
}
