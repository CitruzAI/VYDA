import { aurumKeysDetail } from "./aurumKeys.js";
import { forestKeysDetail } from "./forestKeys.js";
import { gubbiGooduDetail } from "./gubbiGoodu.js";
import { snoozRoomsDetail } from "./snoozRooms.js";

export const hotelDetails = {
  "aurum-keys": aurumKeysDetail,
  "forest-keys": forestKeysDetail,
  "gubbi-goodu": gubbiGooduDetail,
  "snooz-rooms": snoozRoomsDetail,
};

export function getHotelDetail(slug) {
  return hotelDetails[slug] ?? null;
}

export function getAllHotelSlugs() {
  return Object.keys(hotelDetails);
}
