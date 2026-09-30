import { projects } from './public/projects'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-09-30',
  app: {
    head: {
      title: 'Savvoff\'s Portfolio',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'theme-color',
          content: '#000'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no'
        },
        {
          name: 'author',
          content: 'Ihor Savvov'
        },
        {
          name: 'description',
          content: 'Ihor Savvov\'s portfolio showcases; ukrainian fullstack developer with focus on creative development'
        },
      ],
      link: [
        // { 
        //   rel: 'stylesheet', 
        //   href: 'https://use.typekit.net/gyf5muf.css' // tenon font-family
        // },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png' // tenon font-family
        }
      ],
      style: [],
      script: [
        {
          id: 'help-ukraine-win',
          async: true,
          src: 'https://helpukrainewinwidget.org/cdn/widget.js?type=three&position=bottom-right&layout=collapsed'
        },
        {
          innerHTML: `
          document.documentElement.className="js";
          var supportsCssVars=function(){
            var e,t=document.createElement("style");
            return t.innerHTML="root: { --tmp-var: bold; }",
            document.head.appendChild(t),
            e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),
            t.parentNode.removeChild(t),e
          };
          supportsCssVars()||alert("Please view this site in a modern browser that supports CSS Variables.");
          `
        }
      ],
      noscript: [],
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'loading'
      }
    },
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    // 'bulma',
    // SCSS file in the project
    '@/assets/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'color-functions',
            'import',
            'global-builtin',
            'legacy-js-api'
          ]
        }
      }
    }
  },
  runtimeConfig: {
    // Config within public will be also exposed to the client
    public: {
      projects
    }
  }
})
