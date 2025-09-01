import { getAllPosts } from '../../lib/mdx'
import { PAGE_TITLE } from '@/styles/elements'
import { ARTICLE_CONTAINER } from '@/styles/paging'
import BlogPostCard from '../components/content/BlogPostCard'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className={`${ARTICLE_CONTAINER}`}>
      <h1 className={`${PAGE_TITLE}`}>Posts</h1>
      
      <div className="space-y-4">
        {posts.sort((a,b) => a.date < b.date ? 1 : -1).map((post) => (
          <article key={post.slug}>
            <BlogPostCard post={post} />
          </article>
        ))}
      </div>
    </div>
  )
}