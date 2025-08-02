import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'

import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import Stopwatch from '@/app/components/ui/Stopwatch'
import { PAGE_TITLE } from '@/styles/elements'
import { ARTICLE_CONTAINER } from '@/styles/paging'

// Configure MDX with plugins
const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeHighlight,
      rehypeKatex,
    ],
  },
}

const components = { Stopwatch };

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div className={ARTICLE_CONTAINER}>
      <article>
        <header className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to blog
          </Link>
          <h1 className={PAGE_TITLE}>{post.title} {post.draft ? "[DRAFT]" : ""}</h1>
          <div className="flex items-center text-gray-500 mb-4">
            <time>{post.date}</time>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div className="prose prose-lg dark:prose-invert max-w-none prose-pre:bg-gray-900 prose-pre:text-gray-100">
          <MDXRemote source={post.content} options={mdxOptions} components={components}/>
        </div>
      </article>
    </div>
  )
}