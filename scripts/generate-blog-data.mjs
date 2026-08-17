import fs from "fs";

const raw = JSON.parse(fs.readFileSync("blog-posts.json", "utf8"));
const featuredSlugs = new Set([
  "forest-keys-by-vyda-jp-nagar-bangalore",
  "hello-inn-brookfield-bangalore-business-hotel",
  "aurum-keys-hotel-bengaluru-the-perfect-business-stay-for-corporate-professionals",
]);

const decode = (s) =>
  s
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const imageForSlug = (slug) => {
  if (slug.includes("forest-keys") || slug.includes("jp-nagar")) {
    return "https://vydahotels.com/wp-content/uploads/2025/10/VYDA-blog-images-2.jpg";
  }
  if (slug.includes("hello-inn") || slug.includes("brookfield")) {
    return "https://vydahotels.com/wp-content/uploads/2025/10/VYDA-blog-images-1.jpg";
  }
  if (slug.includes("aurum-keys")) {
    return "https://vydahotels.com/wp-content/uploads/2025/10/VYDA-blog-images.jpg";
  }
  return "https://vydahotels.com/wp-content/uploads/2026/01/Untitled-design-64.jpg";
};

const posts = raw.map((p) => ({
  slug: p.slug,
  title: decode(p.title.rendered),
  date: p.date.split("T")[0],
  excerpt: decode((p.excerpt?.rendered || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()).slice(0, 220),
  link: p.link,
  image: imageForSlug(p.slug),
  category: featuredSlugs.has(p.slug) ? "Featured" : "Hospitality",
  featured: featuredSlugs.has(p.slug),
}));

fs.writeFileSync("src/data/blog-posts.json", JSON.stringify(posts, null, 2));
console.log(`Generated ${posts.length} blog posts`);
