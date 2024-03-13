import supabase from "./supabase";

export async function getUserById(id) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("uid", String(id));
  if (error) {
    throw new Error(error.message);
  }
  return data[0];
}
