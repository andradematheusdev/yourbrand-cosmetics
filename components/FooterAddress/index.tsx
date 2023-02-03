export const FooterAddress = () => {
  return (
    <aside className="flex flex-col w-full items-center justify-start pt-4 md:pt-0 pl-0 md:pl-16 border-t md:border-t-0 md:border-l border-neutral-800 h-full text-white">
      <h2 className="font-bold text-lg uppercase mb-4">Contato</h2>
      <div className="flex flex-col justify-center overflow-hidden rounded">
        <iframe className="rounded-lg" width="100%" height="220" id="gmap_canvas" src="https://maps.google.com/maps?q=rio%20de%20janeiro&t=&z=5&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe>
        <div className="text-left mt-4">
          <span className="block">R. Lorem Ipsun, N° 123</span>
          <span className="block">Dolor Sit - RJ - Brasil</span> 
          <span className="block">Tel.: (00) 0000-0000 / (00) 00000-0000</span>
          <span className="block">contato@placeholder.com </span>        
        </div>
      </div>
    </aside>
  )
}
