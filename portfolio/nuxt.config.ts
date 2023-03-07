import { projects } from './public/projects'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Savvoff\'s Portfolio',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no'
        },
        {
          name: 'author',
          content: 'Ihor Savvov'
        },
        {
          charset: 'utf-8'
        }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://use.typekit.net/gyf5muf.css' // tenon font-family
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
