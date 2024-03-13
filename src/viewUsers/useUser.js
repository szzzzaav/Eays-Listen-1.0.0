import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../services/apiUser";

function useUser(id) {
  const { data, isPending } = useQuery({
    queryFn: () => {
      return getUserById(id);
    },
    queryKey: ["friends", id],
  });
  return { data, isPending };
}

export default useUser;
