import { notFound } from 'next/navigation'
  import { MDXRemote } from 'next-mdx-remote/rsc'

import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import Stopwatch from '@/app/components/ui/Stopwatch'
import { PAGE_TITLE, TAG_BADGE } from '@/styles/elements'
import { ARTICLE_CONTAINER } from '@/styles/paging'
import { BLOG_ARTICLE_BODY, BLOG_ARTICLE_INFO } from '@/styles/content'
import { mdxOptions } from '@/lib/mdx-config'


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
          <h1 className={PAGE_TITLE}>{post.title} {post.draft ? "[DRAFT]" : ""}</h1>
          <div className={`flex items-center ${BLOG_ARTICLE_INFO}`}>
            <time>{post.date}</time>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${TAG_BADGE}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div className={`${BLOG_ARTICLE_BODY}`}>
          <MDXRemote source={post.content} options={mdxOptions} components={components}/>
        </div>
      </article>
    </div>
  )
}