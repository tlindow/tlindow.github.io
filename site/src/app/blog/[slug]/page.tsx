import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import SlideDownloader from "@/components/blog/SlideDownloader";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — Tyler Lindow`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-light selection:text-indigo-dark font-mono flex flex-col justify-between">
      <Navbar />

      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20 sm:pb-32 flex-1">
        {/* Back Navigation */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-indigo-dark transition-colors py-1"
          >
            <ArrowLeft size={14} />
            <span>All posts</span>
          </Link>
        </div>

        {/* Article Header (Editorial, Zero Boxes) */}
        <header className="mb-12 space-y-4">
          {post.pillarLabel && (
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-dark bg-indigo-light px-2.5 py-1 rounded-md">
              <span>Pillar: {post.pillarLabel}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted font-mono">
            <span className="text-foreground font-medium">{post.date}</span>
            <span>·</span>
            <span className="text-muted/80">
              {post.tags.map((t) => `#${t.replace(/\s+/g, "")}`).join(" ")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground font-mono leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-muted font-mono leading-relaxed">
            {post.subtitle}
          </p>

          <div className="pt-1 text-xs text-muted font-mono">
            <span>By {post.author.name}</span>
          </div>
        </header>

        {/* Full Essay Prose (Zero Box Containers) */}
        <article className="prose prose-neutral max-w-none font-mono space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong class="font-bold text-foreground">$1</strong>'
                  )
                  .replace(/\*(.*?)\*/g, '<em class="italic text-foreground/80">$1</em>'),
              }}
            />
          ))}
        </article>

        {/* Minimalist Slide Download Action for posts with generated slide PNGs */}
        {post.slug === "over-index-on-intuition" && post.slides && post.slides.length > 0 && (
          <div className="mt-12">
            <SlideDownloader slides={post.slides} />
          </div>
        )}

        {/* Back Link to Value Propositions */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/#what-you-get"
            className="inline-flex items-center gap-1.5 font-bold text-indigo-dark hover:text-labs-primary-dark transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to Value Propositions</span>
          </Link>

          <Link
            href="/blog"
            className="text-muted hover:text-foreground transition-colors"
          >
            <span>Browse all blog posts →</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
