import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Knowledge Base',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/accessibility/': { base: '/accessibility/', items: sidebarAccessibility() },
      '/user-experience/': { base: '/user-experience/', items: sidebarUserExperience() },
      '/artificial-intelligence/': { base: '/artificial-intelligence/', items: sidebarArtificialIntelligence() },
      '/resources/': { base: '/resources/', items: sidebarResources() },
      '/finance/': { base: '/finance/', items: sidebarFinance() },
      '/philosophy/': { base: '/philosophy/', items: sidebarPhilosophy() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home'    , link: '/' },
    { text: 'Accessibility', link: '/accessibility', activeMatch: '/accessibility/' },
    { text: 'User Experience', link: '/user-experience', activeMatch: '/user-experience/' },
    {
      text: 'Dropdown',
      items: [
        { text: 'Artificial Intelligence', link: '/artificial-intelligence', activeMatch: '/artificial-intelligence/' },
        { text: 'Resources', link: '/resources', activeMatch: '/resources/' },
        { text: 'Finance', link: '/finance', activeMatch: '/finance/' },
        { text: 'Philosophy', link: '/philosophy', activeMatch: '/philosophy/' }
      ]
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarAccessibility() : DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: 'foo' },
        { text: 'Getting Started', link: 'bar' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown Extensions', link: 'markdown' },
        { text: 'Asset Handling', link: 'asset-handling' },
        { text: 'Frontmatter', link: 'frontmatter' },
        { text: 'Using Vue in Markdown', link: 'using-vue' },
        { text: 'Internationalization', link: 'i18n' }
      ]
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
        {
          text: 'Extending the Default Theme',
          link: 'extending-default-theme'
        },
        { text: 'Build-Time Data Loading', link: 'data-loading' },
        { text: 'SSR Compatibility', link: 'ssr-compat' },
        { text: 'Connecting to a CMS', link: 'cms' }
      ]
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: 'mpa-mode' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' }
      ]
    },
    { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ];
}
function sidebarUserExperience() : DefaultTheme.SidebarItem[] {
  return [
    //
  ];
}
function sidebarArtificialIntelligence() : DefaultTheme.SidebarItem[] {
  return [
    //
  ];
}
function sidebarResources() : DefaultTheme.SidebarItem[] {
  return [
    //
  ];
}
function sidebarFinance() : DefaultTheme.SidebarItem[] {
  return [
    //
  ];
}

function sidebarPhilosophy(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}