function escapeYaml(str: string) {
  return String(str).replace(/"/g, '\\"').replace(/\r?\n/g, ' ');
}

function decodeEntities(str: string) {
  return String(str)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '—')
    .replace(/&hellip;/g, '...');
}

function htmlToMarkdown(html: string) {
  if (!html) return '';
  // strip scripts/styles/comments
  html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<!--([\s\S]*?)-->/g, '');

  // headings
  html = html.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  html = html.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  html = html.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');

  // paragraphs
  html = html.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');

  // list items
  html = html.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');

  // links
  html = html.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // images
  html = html.replace(/<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi, '![$2]($1)');
  html = html.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi, '![]($1)');

  // line breaks
  html = html.replace(/<br\s*\/?>(\s*)/gi, '\n');

  // remove remaining tags
  html = html.replace(/<[^>]+>/g, '');

  // decode common entities
  html = decodeEntities(html);

  // collapse whitespace
  html = html.replace(/\s+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return html;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const original = url.searchParams.get('original_path') || '/';

  const title = `Tiffica — ${original === '/' ? 'Home' : original.replace(/\//g, '')}`;
  const description = 'Structured data endpoint for crawlers. Visit site to get full HTML content.';
  const timestamp = new Date().toISOString();
  const data = {
    path: original,
    title,
    description,
    timestamp,
  };

  // Fetch the rendered HTML for the original path with a normal browser UA so middleware won't rewrite.
  const origin = url.origin;
  const target = new URL(original, origin).toString();
  let pageMarkdown = '';
  try {
    const res = await fetch(target, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36',
      },
    });
    if (res.ok) {
      const html = await res.text();
      pageMarkdown = htmlToMarkdown(html);
    } else {
      pageMarkdown = `Unable to fetch page HTML (status: ${res.status}).`;
    }
  } catch (err) {
    pageMarkdown = `Error fetching page HTML: ${String(err)}`;
  }

  const md = `---\ntitle: "${escapeYaml(title)}"\ndescription: "${escapeYaml(description)}"\npath: "${escapeYaml(
    original
  )}"\ntimestamp: "${timestamp}"\n---\n\n# ${title}\n\n${description}\n\n**Path:** ${original}\n\n**Timestamp:** ${timestamp}\n\n## Page Content\n\n${pageMarkdown}\n\n## Structured Data\n\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\`\n\n[Open full HTML](${target})\n`;

  return new Response(md, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
