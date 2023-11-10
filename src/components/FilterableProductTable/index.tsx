import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import { Product } from "@/types/product.type";

function FilterableProductTable({ products }: { products: Product[] }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;
