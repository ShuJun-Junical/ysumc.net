import {blogPlugin} from '@vuepress/plugin-blog'
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {getDirname, path} from 'vuepress/utils'
import {activeHeaderLinksPlugin} from '@vuepress/plugin-active-header-links'
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-Hans-CN',
  title: ' 燕山大学MC社',
  description: '燕山大学Minecraft学生同好者协会官方网站',
  head: [
    ['link', {rel: 'icon', href: '/favicon.svg', type: 'image/svg'}],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    }],
  ],
  alias: {
    '@': path.resolve(__dirname, './'),
    '~': path.resolve(__dirname, '../'),
  },

  theme: (app) => {
    return {
      name: 'theme-ysumc',
      clientConfigFile: path.resolve(__dirname, 'client.js'),
      plugins: [
        activeHeaderLinksPlugin({
          // 配置项
        }),
      ]
    }
  },

  plugins: [
    blogPlugin({
      hotReload: true,
    }),
    mdEnhancePlugin({
      // Enable attrs support
      attrs: true,
    }),
  ],

  markdown: {},
  extendsMarkdown: md => {
    md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => {
      return '<p class="hzsb-passage-paragraph">';
    };
    md.renderer.rules.paragraph_close = (tokens, idx, options, env, self) => {
      return "</p>";
    };
  },

  bundler: viteBundler(),
})
