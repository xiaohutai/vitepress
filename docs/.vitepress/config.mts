import { defineConfig } from 'vitepress'
import { en } from './en.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/vitepress/',
  lang: 'en-US',
  title: "Awesomesauce",
  description: "Knowledge Base",
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    math: true
  },
  sitemap: {
    hostname: 'https://darkaesthetics.com',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  /* prettier-ignore */
  head: [
    //['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Awesomesauce | Knowledge Base' }],
    ['meta', { property: 'og:site_name', content: 'Awesomesauce' }],
    ['meta', { property: 'og:image', content: 'https://darkaesthetics.com/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://darkaesthetics.com/' }],
    //['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      pattern: 'https://github.com/xiaohutai/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Foobar',
        items: [
          { text: 'Foo', link: '/foobar/foo' },
          { text: 'Bar', link: '/foobar/bar' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaohutai/vitepress' }
    ]
  },
  locales: {
    root: { label: 'English', ...en }
  }
})
