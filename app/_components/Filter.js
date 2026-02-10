"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";
  //   filter is either all, small, medium, large
  function handleFilterChange(filter) {
    // urlSearchParams is used to manipulate query parameters
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter);

    // Update the URL with the new filter and navigate without scrolling. this is where the url is created
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className='border flex border-primary-900'>
      <Button filter='all' handleFilterChange={handleFilterChange} activeFilter={activeFilter}>
        All Cabins
      </Button>
      <Button filter='small' handleFilterChange={handleFilterChange} activeFilter={activeFilter}>
        Small Cabins
      </Button>
      <Button filter='medium' handleFilterChange={handleFilterChange} activeFilter={activeFilter}>
        Medium Cabins
      </Button>
      <Button filter='large' handleFilterChange={handleFilterChange} activeFilter={activeFilter}>
        Large Cabins
      </Button>
    </div>
  );
}

function Button({ filter, activeFilter, handleFilterChange, children }) {
  const isActive = filter === activeFilter;

  return (
    <button
      onClick={() => handleFilterChange(filter)}
      className={`
        px-6 py-3 text-sm font-medium transition-colors
        ${isActive ? "bg-accent-500 text-primary-900" : "text-primary-300 hover:bg-primary-900"}
      `}
    >
      {children}
    </button>
  );
}

export default Filter;
