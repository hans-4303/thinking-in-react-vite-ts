function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: {
  filterText: string;
  inStockOnly: boolean;
  /* 들어올 파라미터와 타입까지 명시하기 */
  onFilterTextChange: (filterText: string) => void;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={(event) => onFilterTextChange(event.target.value)}
        placeholder="Search..."
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          /* checkbox 경우 onChange -> event.target.checked 통해서 작동 가능 */
          onChange={(event) => onInStockOnlyChange(event.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
