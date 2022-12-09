import tracks from "./assets/Audio";
import { writable, readable } from "svelte/store";
import { OGVLoader, OGVPlayer } from "ogv";
OGVLoader.base = "/ogv";

export const audioStore = writable([ tracks[Math.floor(Math.random() * tracks.length)] ]);
export const audioStorePosition = writable(0);
export const audioElem = readable(navigator.vendor.match(/apple/i) ? new OGVPlayer() : new Audio());