# /src/assets

This folder is intentionally empty in this delivery.

All property/room/section photography currently used by the site is
referenced directly from the official VYDA Hotels (vydahotels.com) and
Hotel Nivaara (nivaarahotels.com) media libraries — see the sourcing
note at the top of `src/data/content.js` for why, and for the full list
of image URLs in use.

To make the site fully self-contained:

1. Download each image URL referenced in `src/data/content.js`.
2. Save it here, e.g. `src/assets/images/aurum-keys.jpg`.
3. In `content.js`, replace the remote URL string with a local import:

   import aurumKeys from "../assets/images/aurum-keys.jpg";
   ...
   image: aurumKeys,

No component code needs to change — every image reference flows
through `content.js`.
