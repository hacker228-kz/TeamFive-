import { SearchBar } from "./SearchBar";
import { PriceFilter } from "./PriceFilter";
import { CategoryList } from "./CategoryList";
import { ProductGrid } from "./ProductGrid";
import { Pagination } from "./Pagination";
import { SortDropdown } from "./SortDropdown";


const ProductLayout = () => {
  return (
    <main  id="shop" className="flex justify-center px-5 py-10">
      <div className="w-full max-w-[1170px] flex gap-[30px] max-md:flex-col">
        <aside className="w-[270px] max-md:w-full">
          <SearchBar />
          <PriceFilter />
          <CategoryList />
        </aside>

        <section className="flex-1">
          <div className="flex justify-between items-center mb-[30px] max-sm:flex-col max-sm:items-start max-sm:gap-5">
            <div className="text-lg text-[#878680]">
              Showing 1–9 of 10 results
            </div>
            <SortDropdown />
          </div>

          <ProductGrid />
          <Pagination />
        </section>
      </div>
    </main>
  );
};
export default ProductLayout;