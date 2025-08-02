import Link from 'next/link'
import { getAllPosts } from '../lib/mdx'
import { metadata } from './layout'

export default function Home() {
  const posts = getAllPosts().slice(0, 3) // Show latest 3 posts

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{`${metadata.title}`}</h1>
        <p className="text-xl">
          {metadata.description}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-6">
              <Link href={`/blog/${post.slug}`} className="block hover:opacity-75">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="mb-2">{post.excerpt}</p>
                <div className="flex items-center text-sm">
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">
            View all posts →
          </Link>
        </div>
      </section>
    </div>
  )
}