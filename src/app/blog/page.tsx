import Link from 'next/link'
import { getAllPosts } from '../../lib/mdx'
import { PAGE_TITLE, TAG_BADGE } from '@/styles/elements'
import { ARTICLE_CONTAINER } from '@/styles/paging'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className={`${ARTICLE_CONTAINER}`}>
      <h1 className={`${PAGE_TITLE}`}>Posts</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-75">
              <h2 className="text-2xl mb-2">{post.title}</h2>
              <p className="mb-3">{post.excerpt}</p>
              <div className="flex items-center text-sm mb-2">
                <time>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
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
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}