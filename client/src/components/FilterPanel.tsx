const  FilterPanel = ({categories, category, minPrice, MaxPrice, updateFilter, clearFilter, hasFilters} : any)  => {
    const categoriesWithAll = [{slug: "", name: "All categories"}, ...categories]
  return (
    <div className="space-y-6"> 
        <div>
            <h3 className="text-sm font-semibold text-app-green mb-3">Categories</h3>
            <div className="space-y-1.5">
                {categoriesWithAll.map((cat: any)=> (
                    <button onClick={()=> updateFilter('category', cat.slug)} key={cat.slug} 
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-all ${category === cat.slug ? "bg-app-green text-white" : "text-app-text-light hover:bg-app-cream"}`}>
                        {cat.name}
                    </button>
                ))}
            </div>
        </div>

        <div className="">
            <h3 className="text-sm font-semibold text-app-green mb-3">Price Range</h3>
            <div className="flex items-center gap-2">
                <input onChange={(e)=> updateFilter('minPrice', e.target.value)} type="number" placeholder="Min" value={minPrice}  
                className="w-full px-3 py-2 text-sm bg-white rounded-lg border not-focus:border-app-border"/>
                <span className="text-app-text-light">-</span>
                <input value={MaxPrice}   onChange={(e)=> updateFilter('maxPrice', e.target.value)} type="number" placeholder="Max" 
                className="w-full px-3 py-2 text-sm bg-white rounded-lg border not-focus:border-app-border"/>
            </div>
        </div>
        {hasFilters && (
            <button
            onClick={clearFilter}
            className="w-full py-2 text-sm text-app-error hover:bg-red-50 rounded-lg transition-colors font-medium">Clear All Filters</button>
        )}
    </div>
  )
}

export default FilterPanel