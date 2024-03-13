import { useQuery } from "@tanstack/react-query";
import { getNewMusic } from "../../services/apiMusic";

function useNewMusic() {
  const { data, isPending } = useQuery({
    queryKey: ["new"],
    queryFn: getNewMusic,
  });
  return { data, isPending };
}

export default useNewMusic;
