import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { getPaginatedPosts } from "../data/blog.js";

function formatBlogDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(`${dateStr}T12:00:00`);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

export default function Blog() {
  const [page, setPage] = useState(1);
  const { posts, totalPages, totalPosts, currentPage } = getPaginatedPosts(page);

  return (
    <section className="pt-32 md:pt-40 pb-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="mb-14 md:mb-16 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="eyebrow mb-4">All Articles</span>
            <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05]">Latest Articles</h1>
          </div>
          <p className="text-sm text-ink/55 pb-1">{totalPosts} articles</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-14 md:gap-y-16">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.05}>
              <article className="flex flex-col h-full">
                <div className="flex items-center gap-2 text-champagne-text mb-4">
                  <Calendar className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <time dateTime={post.date} className="text-[0.72rem] uppercase tracking-[0.14em] font-medium">
                    {formatBlogDate(post.date)}
                  </time>
                </div>
                <h2 className="text-[clamp(1.3rem,2vw,1.65rem)] leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:text-champagne-text transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-[0.95rem] text-ink/65 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center mt-6 w-fit px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wider border border-ink/25 rounded-full text-ink/80 hover:border-espresso hover:text-espresso transition-colors"
                >
                  Read More
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 md:mt-20 flex items-center justify-center gap-3 flex-wrap">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-5 py-2.5 text-sm border border-ink/20 disabled:opacity-40 hover:border-espresso transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={`w-10 h-10 text-sm border transition-colors ${
                  p === currentPage
                    ? "bg-espresso text-ivory border-espresso"
                    : "border-ink/20 hover:border-espresso"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-5 py-2.5 text-sm border border-ink/20 disabled:opacity-40 hover:border-espresso transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
