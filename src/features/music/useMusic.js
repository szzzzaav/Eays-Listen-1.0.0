import { useQuery } from "@tanstack/react-query";
import { getMusic } from "../../services/apiMusic";

function useMusic(id) {
  const { data, isPending } = useQuery({
    queryFn: () => getMusic(id),
    queryKey: ["music", id],
  });

  return { data, isPending };
}

export default useMusic;
