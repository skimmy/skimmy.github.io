import Tags from '@/app/components/content/Tags';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { useMDXComponents as getMdxComponents, mdxOptions } from '@/mdx-components';
import { BLOG_ARTICLE_BODY, BLOG_ARTICLE_INFO } from '@/styles/content';
import { EMPHASIS_ELEMENTS_WITH_HOVER, PAGE_TITLE, TAG_BADGE } from '@/styles/elements';
import { ARTICLE_CONTAINER } from '@/styles/paging';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub, FaGraduationCap } from 'react-icons/fa6';


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
  }>;
}

function TheoryLink() {
  return(
    <div className="flex items-center">
      <FaGraduationCap className="inline mr-2" />
      <span>Theory</span>
    </div>
  )
}

function RepoLink() {
    return(
    <div className="flex items-center">
      <FaGithub className="inline mr-2" />
      <span>Repo</span>
    </div>
  )
}

const BlogPost = async ({ params }: PageProps) => {
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
          <div className={`flex items-center gap-2 ${BLOG_ARTICLE_INFO}`}>
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
            <div>{post.tags.length > 0 && <Tags tags={post.tags} tagStyle={TAG_BADGE} />}</div>
            
            <div className="flex ml-auto gap-2">
              {post.repo && <div className={`${EMPHASIS_ELEMENTS_WITH_HOVER} rounded-full px-4`}><Link  href={post.repo} target="_blank"><RepoLink /></Link></div>}
              {post.theorySlug && <div className={`${EMPHASIS_ELEMENTS_WITH_HOVER} rounded-full px-4`}><Link href={post.theorySlug}><TheoryLink /></Link></div>}
            </div>
          </div>
          
        </header>

        <div className={`${BLOG_ARTICLE_BODY}`}>
          <MDXRemote source={post.content} options={mdxOptions} components={getMdxComponents()} />
        </div>
      </article>
    </div>
  )
}

export default BlogPost;