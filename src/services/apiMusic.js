import { AudioControlObject } from "../util/AudioControlObject";
import { lyricObject } from "../util/LyricObject";
import supabase, { supabaseUrl } from "./supabase";

function isChinese(temp) {
  const re = new RegExp(
    "([\u4E00-\u9FFF]|[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b\uff01\u3010\u3011\uffe5])+",
    "g"
  );
  if (re.test(temp)) return true;
  return false;
}

export function forMatName(fileName) {
  const newName = `${Math.random()}-${fileName}`.replace("/", "");
  return newName;
}

export async function CreateMusic(musicdata) {
  const { cover, lyric, name, author, music, createUserId } = musicdata;
  const newCoverName = forMatName(cover.name);
  const newLyricName = forMatName(lyric.name);
  const newMusicName = forMatName(music.name);
  const coverPath = `${supabaseUrl}/storage/v1/object/public/cover/${newCoverName}`;
  const lyricPath = `${supabaseUrl}/storage/v1/object/public/lyric/${newLyricName}`;
  const musicPath = `${supabaseUrl}/storage/v1/object/public/audioBuffer/${newMusicName}`;
  if (
    isChinese(newCoverName) ||
    isChinese(newLyricName) ||
    isChinese(newMusicName)
  ) {
    throw new Error("The file name cannot contain Chinese characters");
  }
  const { data, error } = await supabase
    .from("music")
    .insert([
      {
        cover: coverPath,
        audio: musicPath,
        lyric: lyricPath,
        name,
        author,
        createUserId,
      },
    ])
    .select();
  if (error) {
    console.log(1);
    console.log(error);
  }

  const { error: CoverStorageError } = await supabase.storage
    .from("cover")
    .upload(newCoverName, cover);
  if (CoverStorageError) {
    console.log(2);
    console.log(CoverStorageError);
  }

  const { error: LyricStorageError } = await supabase.storage
    .from("lyric")
    .upload(newLyricName, lyric);
  if (LyricStorageError) {
    console.log(newLyricName);
    console.log(3);
    console.log(LyricStorageError);
  }

  const { error: MusicStorageError } = await supabase.storage
    .from("audioBuffer")
    .upload(newMusicName, music);
  if (MusicStorageError) {
    console.log(newMusicName);
    console.log(4);
    console.log(MusicStorageError);
  }

  return data;
}

export async function getMusic(id, needProvider = true) {
  let { data: music, error: getMusicError } = await supabase
    .from("music")
    .select("*")
    .eq("id", Number(id));
  if (getMusicError) {
    throw new Error("Music not found");
  }
  if (!needProvider) return { music: music[0] };
  let { data: provider, error: getProviderError } = await supabase
    .from("users")
    .select("*")
    .eq("uid", music[0].createUserId);
  if (getProviderError) {
    throw new Error("Provider not found");
  }
  const d = await fetch(music.cover);
  const img = new Image();
  img.src = d.url;
  return { music: music[0], provider };
}

export async function getComments(id) {
  const { data, error } = await supabase
    .from("comments")
    .select("*,users(*)")
    .eq("musicId", id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function sendComments({ content, mid, uid }) {
  const { data, error } = await supabase
    .from("comments")
    .insert([
      { musicId: Number(mid), content: String(content), userId: String(uid) },
    ]);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function decodeAudioData(
  url,
  { visualStageRef, progressRef, progressBgRef, volumnRef, timeProgressRef }
) {
  const data = await fetch(url);
  const ArrayBuffer = await data.arrayBuffer();
  const AudioObject = await new AudioControlObject(ArrayBuffer, {
    volumnRef,
    progressRef,
    progressBgRef,
    visualStageRef,
    timeProgressRef,
  });
  return AudioObject;
}

export async function decodeLyric(url, id, lyricStageRef) {
  const offset = 4;
  const data = await fetch(url);
  const text = await data.text();
  return new lyricObject({ text, lyricStageRef, offset, id });
}

export async function searchMusic(searchStr) {
  const { data, error } = await supabase
    .from("music")
    .select("*")
    .ilike("name", `%${searchStr}%`, "author", `%${searchStr}%`);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getNewMusic() {
  const { data, error } = await supabase.from("music").select("*").limit(28);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
