import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// AI crawler user-agent candidates (serve Markdown)
const AI_BOT_REGEX = /gptbot|openai|perplexity|perplexitybot|anthropic|claude|claude-instant|claude-ai|claude-preview|huggingface|serpapi/i;
// Traditional search engine crawlers (serve HTML)
const SEARCH_BOT_REGEX = /googlebot|bingbot|slurp|yandex|baiduspider|duckduckbot|teoma|rogerbot|exabot|facebookexternalhit|applebot/i;

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const pathname = request.nextUrl.pathname;

  // Skip assets, next internals, APIs and the accent route itself
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/public') ||
    pathname === '/favicon.ico' ||
    pathname === '/accent' ||
    pathname.includes('.') // skip files with extensions
  ) {
    return NextResponse.next();
  }

  // If this looks like a known AI crawler, rewrite to /accent so it gets Markdown
  if (AI_BOT_REGEX.test(ua)) {
    const url = request.nextUrl.clone();
    url.pathname = '/accent';
    url.searchParams.set('original_path', pathname);
    url.searchParams.set('format', 'md');
    return NextResponse.rewrite(url);
  }

  // If it's a traditional search crawler, allow normal HTML rendering
  if (SEARCH_BOT_REGEX.test(ua)) {
    return NextResponse.next();
  }

  // Default: allow normal rendering for browsers and unknown agents
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|accent|api).*)'],
};
