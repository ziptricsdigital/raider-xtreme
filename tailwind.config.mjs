/** Raider Xtreme — Tailwind theme extension
 *  Fonts are SELF-HOSTED (no external CDN):
 *    npm i @fontsource-variable/barlow-condensed
 *    import '@fontsource-variable/barlow-condensed' in src/layouts/Base.astro
 *  Body copy uses the native system-ui stack (zero font download).
 */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,md,mdx,js,ts}'],
  theme: {
    extend: {
      colors: {
        scarlet: { DEFAULT: 'rgb(var(--accent) / <alpha-value>)', dark: 'rgb(var(--accent-dark) / <alpha-value>)', tint: 'rgb(var(--accent-tint) / <alpha-value>)', light: 'rgb(var(--accent-light) / <alpha-value>)' /* light = use on midnight bg for 4.5:1 contrast */ },
        midnight: { DEFAULT: '#111114', soft: '#1C1C21' },
        bone: '#F6F5F2',
        ink: { DEFAULT: '#111114', muted: '#55555C' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', ...defaultTheme.fontFamily.sans],
        sans: ['system-ui', '-apple-system', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
};
