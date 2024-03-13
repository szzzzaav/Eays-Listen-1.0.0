import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiMusic";

function useComments(id) {
  const { data, isPending } = useQuery({
    queryKey: ["musicComment", id],
    queryFn: () => getComments(id),
  });
  return { data, isPending };
}

export default useComments;
