import { aurumKeysDetail } from "./aurumKeys.js";
import { forestKeysDetail } from "./forestKeys.js";

export const hotelDetails = {
  "aurum-keys": aurumKeysDetail,
  "forest-keys": forestKeysDetail,
};

export function getHotelDetail(slug) {
  return hotelDetails[slug] ?? null;
}

export function getAllHotelSlugs() {
  return Object.keys(hotelDetails);
}
