import { useQuery } from "@tanstack/react-query";

function useMusicByKey(id) {
  const { data, isPending } = useQuery({
    queryKey: ["music", id],
  });

  return { data, isPending };
}

export default useMusicByKey;
