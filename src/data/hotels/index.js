import { helloInnDetail } from "./helloInn.js";
import { aurumKeysDetail } from "./aurumKeys.js";
import { forestKeysDetail } from "./forestKeys.js";

export const hotelDetails = {
  "hello-inn": helloInnDetail,
  "aurum-keys": aurumKeysDetail,
  "forest-keys": forestKeysDetail,
};

export function getHotelDetail(slug) {
  return hotelDetails[slug] ?? null;
}

export function getAllHotelSlugs() {
  return Object.keys(hotelDetails);
}
