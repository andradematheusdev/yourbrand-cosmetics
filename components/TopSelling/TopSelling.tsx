import Product from "../Product/Product";

export default function TopSelling() {
  return (
    <div className="flex flex-col w-full items-center justify-center text-3xl mt-16">
      <h1 className="mb-8">OS QUERIDINHOS</h1>
      <div className="
        grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-6 gap-y-6 w-full
        px-4 sm:p-0 sm:w-6/12 md:w-10/12
      ">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}