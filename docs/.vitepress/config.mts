import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/vitepress/',
  lang: 'en-US',
  title: "Awesomesauce",
  description: "Knowledge Base",
  cleanUrls: true,
  markdown: {
    math: true
  },
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

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Dropdown',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],

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
  }
})
