import { useQuery } from "@tanstack/react-query";
import { searchMusic } from "../../services/apiMusic";

function useSearchMusic(searchStr) {
  const { data, isPending } = useQuery({
    queryFn: () => searchMusic(searchStr),
    queryKey: [`${searchStr}`],
  });

  return { data, isPending };
}

export default useSearchMusic;
