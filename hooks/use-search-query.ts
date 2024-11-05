import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";

import { searchCakes } from "@/data/cake";

const debouncedSetTerm = debounce((term, setTerm) => setTerm(term), 300);

interface UseSearchQueryParams {
  searchTerm: string;
}

function useSearchQuery({ searchTerm }: UseSearchQueryParams) {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    debouncedSetTerm(searchTerm, setDebouncedSearchTerm);
    return () => debouncedSetTerm.cancel();
  }, [searchTerm]);

  const { data, isLoading } = useQuery({
    queryKey: ["products", debouncedSearchTerm],
    queryFn: () => searchCakes(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm,
  });

  return { data, isLoading };
}

export default useSearchQuery;
