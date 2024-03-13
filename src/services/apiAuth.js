import supabase, { supabaseUrl } from "./supabase";

export function forMatName(fileName) {
  const newName = `${Math.random()}-${fileName}`.replace("/", "");
  return newName;
}

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName: fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  const { error: createUserError } = await supabase
    .from("users")
    .insert([{ avatar: "", fullName, uid: String(data.user.id) }])
    .select();
  if (createUserError) {
    throw new Error(createUserError.message);
  }
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

export async function updateUser(data) {
  const user = await getCurrentUser();
  let Avatar, avatarName;
  if (data.Avatar[0]) {
    avatarName = forMatName(data.Avatar[0].name);
    Avatar = `${supabaseUrl}/storage/v1/object/public/avatars/${avatarName}`;
  }
  let newData = {};
  if (data.fullName) newData.fullName = data.fullName;
  if (Avatar) newData.avatar = Avatar;
  if (Avatar) {
    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(avatarName, data.Avatar[0]);

    if (storageError) {
      throw new Error(storageError.message);
    }
  }
  const { error: upDateUserError } = await supabase
    .from("users")
    .update({
      avatar: newData.avatar || user?.user_metadata?.avatar,
      fullName: newData.fullName || user?.user_metadata?.fullName,
    })
    .eq("uid", user.id)
    .select();
  if (upDateUserError) {
    throw new Error(upDateUserError.message);
  }
  let upDate = { data: newData };
  if (data.password) upDate.password = data.password;
  const { data: updateUser, error } = await supabase.auth.updateUser(upDate);
  if (error) {
    throw new Error(error.message);
  }
  return updateUser;
}
