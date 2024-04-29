import tracks from "./assets/Audio";
import { writable, readable, get } from "svelte/store";

export const audioStore = writable(
  localStorage.getItem("audioStore") && JSON.parse(localStorage.getItem("audioStore")).length ?
  JSON.parse(localStorage.getItem("audioStore")) :
  [ tracks[Math.floor(Math.random() * tracks.length)] ]
);
export const audioStorePosition = writable(0);
export const audioElem = readable(document.createElement("audio"));
export const repeat = writable<string>("on");
export const openAlbum = writable<any>(null);
export const playlists = writable<any>(
  localStorage.getItem("dlr-playlists") ?
  JSON.parse(localStorage.getItem("dlr-playlists")) :
  []
);

/* preserve last played song(s) */
audioStore.subscribe((value) => {
  // clean tracks of albums to prevent circular JSON
  const cleanedTracks = JSON.stringify(value.slice(get(audioStorePosition))).replace(/"tracks":\[{.*?}\]/g, "\"tracks\":[]");
  localStorage.setItem("audioStore", cleanedTracks);
});
// If audioStorePosition is set to != 0, playback will start automatically...
// this is a different way of handling preservation of song playback
audioStorePosition.subscribe((value) => {
  // clean tracks of albums to prevent circular JSON
  const cleanedTracks = JSON.stringify(get(audioStore).slice(value)).replace(/"tracks":\[{.*?}\]/g, "\"tracks\":[]");
  localStorage.setItem("audioStore", cleanedTracks);
});

/* preserve playlists */
playlists.subscribe((value) => {
  localStorage.setItem("dlr-playlists", JSON.stringify(value));
});