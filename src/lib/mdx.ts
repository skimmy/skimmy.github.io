import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const contentDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  theorySlug?: string;
  repo?: string;
  draft: boolean;
  pinned?: boolean;
  content: string;
}

function createBlogPost(slug: string, data: {[key: string]: unknown}, content: string): BlogPost {
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: data.tags as string[] || [] ,
    readingTime: readingTime(content).text,
    theorySlug: data.theorySlug as string,
    repo: data.repo as string || undefined,
    draft: data.draft as boolean || false,
    pinned: data.pinned as boolean,
    content,
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return createBlogPost(slug, data, content)
  } catch {
    return null
  }
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith(".mdx"))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, "")
      return getPostBySlug(slug)
    })
    .filter((post): post is BlogPost => post !== null)
    .filter(post => {
      if (process.env.NODE_ENV === "production") {
        return !post.draft;
      }
      return true;
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}