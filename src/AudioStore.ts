import tracks from "./assets/Audio";
import { writable, readable } from "svelte/store";

export const audioStore = writable([ tracks[Math.floor(Math.random() * tracks.length)] ]);
export const audioStorePosition = writable(0);
export const audioElem = readable(document.createElement("audio"));
export const repeat = writable<string>("on");
export const openAlbum = writable<string>("");