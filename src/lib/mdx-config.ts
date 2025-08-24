import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeCallouts from 'rehype-callouts'
import type { Pluggable } from 'unified'

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