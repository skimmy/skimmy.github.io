import type { MDXComponents } from 'mdx/types'
import Stopwatch from './app/components/ui/Stopwatch'
  
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Stopwatch,
    ...components,
  }
}