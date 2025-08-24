import Link from 'next/link'
import { getAllPosts } from '../lib/mdx'
import { metadata } from './layout'
import { LINK_DEFAULT, PAGE_TITLE, SECTION_TITLE } from '@/styles/elements'
import BearLogo from './components/icons/BearLogo'

export default function Home() {
  const posts = getAllPosts().slice(0, 3) // Show latest 3 posts

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className={`${PAGE_TITLE}`}>
          <span className="relative inline-block align-middle -mt-[1rem] opacity-80">
            {/* <img src="/home_logo.png" alt="Drop cap" className="w-10 h-10 inline-block" /> */}
            <BearLogo size={`2.5rem`} />
          </span>
          <span>
          {`${metadata.title?.toString().slice(1)}`}
          </span>
        </h1>
        <p className="text-2xl">
          {metadata.description}
        </p>
      </section>

      <section>
        <h2 className={`${SECTION_TITLE}`}>Topics</h2>
        <div className={`space-y-6 mb-8`}>
          Want to dive into some topic or argument your curious about? Our topics section provides notes, guides, tutorials and many more resources to get your around selected arguments. The discussed topics are broad and ever increasing, don&apos;t miss them.
          <div className="mt-2">
            <Link href="/topics" className={`${LINK_DEFAULT} block`}>View all topics →</Link>
          </div>
        </div>
        <h2 className={`${SECTION_TITLE}`}>Latest Posts</h2>
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
          <Link href="/blog" className={`${LINK_DEFAULT}`}>
            View all posts →
          </Link>
        </div>
      </section>
    </div>
  )
}