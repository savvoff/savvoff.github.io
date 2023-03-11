import { projects } from './public/projects'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
          hid: 'description',
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
        class: ['loading']
      }      
    },
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    // 'bulma',
    // SCSS file in the project
    '@/assets/scss/main.scss'
  ],
  runtimeConfig: {
    // Config within public will be also exposed to the client
    public: {
      projects
    }
  }
})
