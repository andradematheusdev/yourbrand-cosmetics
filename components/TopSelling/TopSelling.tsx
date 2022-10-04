import Product from "../Product/Product";

export default function TopSelling() {
  return (
    <div className="flex flex-col w-full items-center justify-center text-3xl mt-16">
      <h1>OS QUERIDINHOS</h1>
      <div className="flex w-full justify-center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}
