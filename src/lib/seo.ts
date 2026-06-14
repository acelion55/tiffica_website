import type { Metadata } from 'next';

export const SITE_URL = 'https://tiffica.xyz';

/** Primary keywords for service areas (Beawar & Jaipur) */
export const GLOBAL_SEO_KEYWORDS = [
  'best tiffin service in beawar',
  'best tiffin service in jaipur',
  'daily tiffin beawar',
  'daily tiffin jaipur',
  'monthly tiffin beawar',
  'monthly tiffin jaipur',
  'homemade tiffin beawar',
  'homemade tiffin jaipur',
].join(', ');

const DEFAULT_DESCRIPTION =
  'Order the best affordable homemade tiffin in Beawar & Jaipur. Veg meals, student & office plans, daily fresh home-cooked meals.';

export function buildPageMetadata(opts: {
  title: string;
  description?: string;
  path?: string;
  extraKeywords?: string;
}): Metadata {
  const description = opts.description || DEFAULT_DESCRIPTION;
  const keywords = opts.extraKeywords
    ? `${opts.extraKeywords}, ${GLOBAL_SEO_KEYWORDS}`
    : GLOBAL_SEO_KEYWORDS;

  const canonical = opts.path || '/';

  return {
    title: opts.title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: opts.title,
      description,
      url: `${SITE_URL}${canonical}`,
      siteName: 'Tiffica',
      locale: 'en_IN',
      type: 'website',
      images: ['/logo.jpeg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description,
      images: ['/logo.jpeg'],
    },
    robots: { index: true, follow: true },
  };
}

export const DEFAULT_SITE_METADATA = buildPageMetadata({
  title: 'Tiffica — Best Tiffin Service in Beawar & Jaipur | Home Cooked Meals',
  description: DEFAULT_DESCRIPTION,
  path: '/',
});
