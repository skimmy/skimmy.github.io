import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"
import { metadata } from './layout'
import { LINK_DEFAULT, PAGE_TITLE } from '@/styles/elements'
import BearLogo from './components/icons/BearLogo'
import BlogPostCard from "./components/content/BlogPostCard"

export default function Home() {
  let posts = getAllPosts(); 
  const pinned = posts.filter(a => a.pinned)[0] || undefined;
  posts = pinned ? posts.filter(a => a.slug !== pinned.slug) : posts;

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12 drop-shadow-4xl text-blue-950 dark:text-blue-100">
        <h1 className={`${PAGE_TITLE}`}>
          <span className="relative inline-block align-middle -mt-[1rem] -ml-[0.4rem] opacity-80">
            <BearLogo size={`2.5rem`} />
          </span>
          <span>
            {`${metadata.title?.toString().slice(1)}`}
          </span>
        </h1>
        <div className="text-2xl">
          {metadata.description}
        </div>
      </section>
    {/* Recent post section */}
      <section>
        {pinned ? <div>
          <article>
              <BlogPostCard post={pinned} beforeTitle="📌 " afterTitle=" 📌"/>
          </article>
        </div> : <></>}
        <div>
          {posts.slice(0,3).sort((a,b) => (a.date > b.date) ? -1 : 1).map((post) => (
            <article key={post.slug}>
              <BlogPostCard post={post} />
            </article>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/blog" className={`${LINK_DEFAULT}`}>
            View all →
          </Link>
        </div>
      </section>
      {/* <section>
        <h2 className={`mt-8 ${SECTION_TITLE}`}>Topics 📓</h2>
        <div className={`space-y-6 mb-8`}>
          Want to dive into some topic or argument your curious about? Our topics section provides notes, guides, tutorials and many more resources to get your around selected arguments. The discussed topics are broad and ever increasing, don&apos;t miss them.
          <div className="mt-2">
            <Link href="/topics" className={`${LINK_DEFAULT} block`}>View all topics →</Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}