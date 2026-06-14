import KitchenPartnerContentClient from './KitchenPartnerContentClient';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Kitchen Partner — Tiffica | Join as a Kitchen Partner in Jaipur',
  description: 'Become a kitchen partner in Jaipur & Beawar. Offer Instant delivery, Bulk catering or Daily Tiffin and grow with Tiffica.',
  path: '/kitchen-partner',
  extraKeywords: 'kitchen partner jaipur, tiffin partner jaipur, kitchen partnership jaipur',
});

export default function KitchenPartnerPage() {
  return <KitchenPartnerContentClient />;
}
