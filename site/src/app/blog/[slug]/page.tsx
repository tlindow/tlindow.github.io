import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

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

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost =
    currentIndex >= 0 && currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : blogPosts[0];

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

        {/* Article Header (Purple pre-title, Title, Content format) */}
        <header className="mb-12 space-y-2">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-indigo-dark block">
            {post.pretitle || "My work product"}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground font-mono leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted font-mono pt-2">
            <span className="text-foreground font-medium">{post.date}</span>
            <span>·</span>
            <span>By {post.author.name}</span>
          </div>
        </header>

        {/* Full Essay Prose (Zero Box Containers, All Quotes in Purple) */}
        <article className="prose prose-neutral max-w-none font-mono space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">
          {post.content.map((paragraph, index) => {
            const isBlockquote = paragraph.startsWith("> ");

            const formattedText = paragraph
              .replace(/^>\s+/, "")
              .replace(
                /"([^"]+)"/g,
                '<span class="text-indigo-dark font-medium italic">“$1”</span>'
              )
              .replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="font-bold text-foreground">$1</strong>'
              )
              .replace(
                /\*(.*?)\*/g,
                '<em class="italic text-foreground/80">$1</em>'
              )
              .replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline text-indigo-dark hover:text-foreground transition-colors">$1</a>'
              );

            if (isBlockquote) {
              return (
                <p
                  key={index}
                  className="text-indigo-dark font-medium italic leading-relaxed my-4 text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: formattedText }}
                />
              );
            }

            return (
              <p
                key={index}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          })}
        </article>

        {/* Bottom Navigation: Back to Home & Forward to Next Post Title */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-bold text-indigo-dark hover:text-indigo-dark/80 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to home</span>
          </Link>

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="inline-flex items-center gap-1.5 font-bold text-foreground hover:text-indigo-dark transition-colors group text-right ml-auto"
              title={`Read next: ${nextPost.title}`}
            >
              <span>{nextPost.title}</span>
              <ArrowRight size={14} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
