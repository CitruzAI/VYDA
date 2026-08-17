import posts from "./blog-posts.json";

export const POSTS_PER_PAGE = 9;

export const blogPage = {
  heroImage: "/images/blog-hero.png",
  heroImagePosition: "center 35%",
};

export const featuredArticles = [
  {
    slug: "forest-keys-by-vyda-jp-nagar-bangalore",
    title: "Unlock Tranquility: Discover Forest Keys By VYDA in J.P. Nagar, Bangalore",
    date: "2025-10-10",
    excerpt:
      "A distinguished haven nestled in the green heart of J.P. Nagar — where urban convenience meets the calming touch of nature.",
    image: "https://vydahotels.com/wp-content/uploads/2025/10/VYDA-blog-images-2.jpg",
    link: "https://vydahotels.com/forest-keys-by-vyda-jp-nagar-bangalore/",
    category: "Featured",
    featured: true,
    isExternal: true,
  },
  {
    slug: "hello-inn-brookfield-bangalore-business-hotel",
    title: "Hello INN by VYDA — The Smart Stay for Business Travellers in Brookfield, Bangalore",
    date: "2025-10-08",
    excerpt:
      "The smart stay for business travellers in Brookfield, close to ITPL, RMZ Ecospace and Bagmane Tech Park.",
    image: "https://vydahotels.com/wp-content/uploads/2025/10/VYDA-blog-images-1.jpg",
    link: "https://vydahotels.com/hello-inn-brookfield-bangalore-business-hotel/",
    category: "Featured",
    featured: true,
    isExternal: true,
  },
  {
    slug: "aurum-keys-hotel-bengaluru-the-perfect-business-stay-for-corporate-professionals",
    title: "Aurum Keys Hotel Bengaluru – The Perfect Business Stay for Corporate Professionals",
    date: "2025-10-06",
    excerpt:
      "A boutique business hotel on the Outer Ring Road, steps from Bagmane Tech Park, with 47 individually designed rooms.",
    image: "https://vydahotels.com/wp-content/uploads/2025/10/VYDA-blog-images.jpg",
    link: "https://vydahotels.com/hotel-aurum-keys/",
    category: "Featured",
    featured: true,
    isExternal: true,
  },
];

export function getAllPosts() {
  return [...featuredArticles, ...posts];
}

export function getFeaturedPosts() {
  return featuredArticles;
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPaginatedPosts(page = 1) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return {
    posts: posts.slice(start, start + POSTS_PER_PAGE),
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    totalPosts: posts.length,
    currentPage: page,
  };
}

export function getRelatedPosts(slug, limit = 3) {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
