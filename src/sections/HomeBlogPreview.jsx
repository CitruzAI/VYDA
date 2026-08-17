import { Link } from "react-router-dom";
import { getFeaturedPosts } from "../data/blog.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

export default function HomeBlogPreview() {
  const featured = getFeaturedPosts();

  return (
    <section className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-10 mb-14">
          <div>
            <span className="eyebrow mb-4">From VYDA</span>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)]">Latest from the VYDA Blog</h2>
          </div>
          <Button to="/blog" variant="text">
            View All Articles
          </Button>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <article className="group">
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-[4/3] mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
                <time className="text-[0.72rem] uppercase tracking-wider text-champagne-text">
                  {post.date}
                </time>
                <h3 className="mt-2 text-xl leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:text-champagne-text transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[0.92rem] text-ink/60 line-clamp-3">{post.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
