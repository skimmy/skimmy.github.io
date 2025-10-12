import type { MDXComponents } from 'mdx/types'
import Image from "next/image";
import ImageWithCaption from './app/components/ui/ImageWithCaption';
import Stopwatch from '@/app/components/ui/Stopwatch';
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeCallouts from 'rehype-callouts'
import type { Pluggable } from 'unified'


const components: MDXComponents = {
  p: ({ children }) => (
    <div className="my-3">{children}</div>
  ),
  img: ({ src, alt, title }) => (
    <ImageWithCaption src={src} alt={alt} title={title} />
  ),
  ul: ({ children, ...props }) => (
    <ul className="marker:text-inherit dark:marker:text-inherit" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }) => (
    <li {...props}>
      {children}
    </li>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return {
    Image,
    Stopwatch,
    ...components,
  }
}

export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [rehypeCallouts, {
        callouts: {
          tldr: {
            title: "TLDR",
          }
        },
      }] as Pluggable,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeHighlight,
      rehypeKatex,
    ],
  },
}