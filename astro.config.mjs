import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

/* Fonts: @fontsource (self-hosted). YouTube embeds: npm i lite-youtube-embed and import in Base layout.
   Site map (new)                         ← legacy GoDaddy URLs (301)
   /                                       ← /home.html
   /classes          (schedule + guide)    ← /developmental-2.html, /class-schedule.html, /class-descriptions.html
   /competitive      (cheer hub + #half-year) ← /competitive.html, /half-year-cheer---hip-hop.html
   /competitive/studio-x-hip-hop           ← /studio-x-hip-hop.html
   /competitive/air-extreme                ← /air-extreme.html
   /parties          (birthdays)           ← /entertainment.html, /birthday-parties.html
   /fun-friday       (parents' night out)  ← /fun-friday.html
   /field-trips                            ← /field-trips.html
   /school-cheer                           ← /school-cheer.html
   /faq                                    ← /faq.html, /info.html
   /#contact                               ← /contact.html
   iClassPro login (external)              ← /customer-portal.html
*/
export default defineConfig({
  site: 'https://www.raiderxtreme.com',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/home.html': '/',
    '/info.html': '/faq',
    '/faq.html': '/faq',
    '/contact.html': '/#contact',
    '/customer-portal.html': 'https://portal.iclasspro.com/raiderxtreme/login?next=raiderxtreme%2Faccount&nextQueryParams=%7B%7D',
    '/developmental-2.html': '/classes',
    '/class-schedule.html': '/classes',
    '/class-descriptions.html': '/classes',
    '/entertainment.html': '/parties',
    '/birthday-parties.html': '/parties',
    '/fun-friday.html': '/fun-friday',
    '/field-trips.html': '/field-trips',
    '/competitive.html': '/competitive',
    '/studio-x-hip-hop.html': '/competitive/studio-x-hip-hop',
    '/half-year-cheer---hip-hop.html': '/competitive#half-year',
    '/air-extreme.html': '/competitive/air-extreme',
    '/school-cheer.html': '/school-cheer',
    '/program-comparison.html': '/competitive',
    '/membership-fee-benefits.html': '/faq',
  },
});
