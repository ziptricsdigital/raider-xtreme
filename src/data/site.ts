/** Shared site settings.
 *  DECAP CMS: Settings singleton → src/content/settings/site.json (fields mirror this object).
 *  Swap for: const site = (await getEntry('settings', 'site')).data
 */
export const site = {
  name: 'Raider Xtreme',
  url: 'https://www.raiderxtreme.com',
  phone: '806.795.2222', phoneHref: 'tel:+18067952222',
  email: 'lubbock@raiderxtreme.com',
  street: '3801 154th Street', city: 'Lubbock', region: 'TX', postal: '79423',
  officeHours: 'Monday–Thursday, 4:00–7:30 PM',
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? 'YOUR_WEB3FORMS_ACCESS_KEY',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? 'YOUR_TURNSTILE_SITE_KEY',
  mapEmbedUrl: 'https://www.google.com/maps?q=3801+154th+Street+Lubbock+TX+79423&output=embed',
};

/** DECAP CMS: settings.externalLinks — update each season when iClassPro session IDs roll over. */
export const links = {
  portalLogin: 'https://portal.iclasspro.com/raiderxtreme/login?next=raiderxtreme%2Faccount&nextQueryParams=%7B%7D',
  enrollClasses: 'https://portal.iclasspro.com/raiderxtreme/classes?sessions=111', // 2026–27 developmental
  enrollHalfYear: 'https://portal.iclasspro.com/raiderxtreme/classes?sessions=112', // 2026–27 half-year cheer & hip-hop
  partyBooking: 'https://portal.iclasspro.com/raiderxtreme/party-booking-01-date',
  shop: 'https://shop.game-one.com/sw/sw4/raider-xtreme',
  competitivePacket: '/docs/competitive-packet-2026-27.pdf', // re-host the PDF currently on wsimg.com
};

/** DECAP CMS: settings.primaryNav */
export const primaryNav = [
  { label: 'Classes', href: '/classes', children: [
    { label: 'Class Guide & Schedule', href: '/classes' },
    { label: 'School Cheer', href: '/school-cheer' },
    { label: 'Enroll Online ↗', href: links.enrollClasses, external: true },
  ] },
  { label: 'Competitive', href: '/competitive', children: [
    { label: 'All-Star Cheer', href: '/competitive' },
    { label: 'Studio X Hip-Hop', href: '/competitive/studio-x-hip-hop' },
    { label: 'Air Extreme T&T', href: '/competitive/air-extreme' },
  ] },
  { label: 'Party & Play', href: '/parties', children: [
    { label: 'Birthday Parties', href: '/parties' },
    { label: 'Fun Friday', href: '/fun-friday' },
    { label: 'Field Trips', href: '/field-trips' },
  ] },
  { label: 'Families', href: '/faq', children: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Parent Portal ↗', href: links.portalLogin, external: true },
    { label: 'Team Shop ↗', href: links.shop, external: true },
  ] },
];

/** DECAP CMS: settings.footerLinks */
export const footerLinks = [
  { heading: 'Classes', links: [
    { label: 'Class guide & schedule', href: '/classes' },
    { label: 'Enroll online', href: links.enrollClasses, external: true },
    { label: 'School cheer', href: '/school-cheer' },
  ]},
  { heading: 'Competitive', links: [
    { label: 'All-star cheer', href: '/competitive' },
    { label: 'Studio X hip-hop', href: '/competitive/studio-x-hip-hop' },
    { label: 'Air Extreme T&T', href: '/competitive/air-extreme' },
  ]},
  { heading: 'Party & Play', links: [
    { label: 'Birthday parties', href: '/parties' },
    { label: 'Fun Friday', href: '/fun-friday' },
    { label: 'Field trips', href: '/field-trips' },
  ]},
  { heading: 'Families', links: [
    { label: 'Parent Portal', href: links.portalLogin, external: true },
    { label: 'Team Shop', href: links.shop, external: true },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy policy', href: '/privacy' },
  ]},
];

export const ext = { target: '_blank', rel: 'noopener' } as const;
