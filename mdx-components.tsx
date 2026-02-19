import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-terminal-green mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-terminal-text mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium text-terminal-text mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-terminal-muted mb-4 leading-relaxed">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-terminal-blue hover:text-terminal-green transition-colors">
        {children}
      </a>
    ),
    ...components,
  };
}
