import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { getPostBySlug, getRelatedPosts, blogPage } from "../data/blog.js";

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

export default function BlogArticle() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const related = getRelatedPosts(slug, 3);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!post) {
      setLoading(false);
      return;
    }

    if (post.isExternal) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch(`https://vydahotels.com/wp-json/wp/v2/posts?slug=${slug}&_fields=content`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data[0]?.content?.rendered) {
          setContent(data[0].content.rendered);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, post]);

  if (!post) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-3xl mb-4">Article not found</h1>
        <Button to="/blog" variant="primary" icon={false}>
          Back to Blog
        </Button>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={formatBlogDate(post.date)}
        headline={post.title}
        image={blogPage.heroImage}
        imageAlt="VYDA hospitality editorial"
        imagePosition={blogPage.heroImagePosition}
        size="compact"
      />

      <article className="py-[clamp(60px,8vw,100px)]">
        <div className="max-w-[800px] mx-auto px-5 md:px-10">
          <Reveal>
            <Button to="/blog" variant="text" className="mb-8">
              Back to Blog
            </Button>

            {post.isExternal ? (
              <div className="py-4">
                <p className="text-[1.05rem] text-ink/65 leading-relaxed mb-8">{post.excerpt}</p>
                <Button href={post.link} variant="primary" icon={false}>
                  Read Full Article on VYDA Hotels
                </Button>
              </div>
            ) : loading ? (
              <div className="py-16 text-center text-ink/50">Loading article...</div>
            ) : content ? (
              <div
                className="prose-vyda text-[1.02rem] text-ink/75 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_ul]:mb-5 [&_ul]:pl-5 [&_li]:mb-2 [&_a]:text-champagne-text [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="py-8">
                <p className="text-[1.05rem] text-ink/65 leading-relaxed mb-6">{post.excerpt}</p>
                <Button href={post.link} variant="primary" icon={false}>
                  Read Full Article on VYDA Hotels
                </Button>
              </div>
            )}
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-[clamp(60px,8vw,100px)] bg-sand">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10">
            <Reveal className="mb-10">
              <span className="eyebrow mb-4">Related</span>
              <h2 className="text-2xl">More from the VYDA Blog</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Reveal key={r.slug}>
                  <Link to={`/blog/${r.slug}`} className="block group">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-48 object-cover mb-4 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <time className="text-[0.68rem] uppercase tracking-wider text-champagne-text">{r.date}</time>
                    <h3 className="mt-1 text-lg group-hover:text-champagne-text transition-colors">{r.title}</h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
