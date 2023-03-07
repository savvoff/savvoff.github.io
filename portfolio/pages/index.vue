<template>
  <div class="content">
    <h1 class="content__title">
      <span class="content__title-line content__title-line--1" data-splitting>{{ fullnameArr[0] }}</span>
      <span class="content__title-line content__title-line--2" data-splitting>{{ fullnameArr[1] }}</span>
    </h1>
    <div class="grid" ref="grid">
      <a v-for="project, idx in projects" 
      :key="idx" 
      :class="`grid__item pos-${idx+1}`" 
      :href="`#preview-${idx+1}`" 
      :data-title="project.title">
        <div class="grid__item-img" :style="`background-image:url(${project.image});`"></div>
      </a>
    </div>
    <div class="preview">
      <div v-for="project, idx in projects" 
      :key="idx" 
      :id="`preview-${idx+1}`"
      class="preview__item">
        <button class="preview__item-back unbutton"><span>Back</span></button>
        <div class="preview__item-imgwrap">
          <div class="preview__item-img" :style="`background-image:url(${project.image});`"></div>
        </div>
        <h2 data-splitting class="preview__item-title">{{ project.title }}</h2>
        <div class="preview__item-content">
          <div class="preview__item-meta"><span>Project Client</span><span>15/05/2022</span></div>
          <p class="preview__item-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore sequi temporibus aliquid quas minima assumenda et, quis perspiciatis incidunt est repellat, tempora magni commodi sit illo amet iure culpa!
          </p>      
          <div class="preview__item-info">
            <p>Used technologies:</p>
            <span>Nuxt 3</span>
            <span>Strapi</span>
            <span>SCSS</span>
          </div>    
          <a class="preview__item-button" href="" target="_blank">See site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>  
  import imagesLoaded from 'imagesloaded'

  const { $grid, $event } = useNuxtApp()
  const { public: { projects } } = useRuntimeConfig()
  const author = ref('Ihor Savvov');
  const grid = ref(null);  
  const fullnameArr = computed(() => {
    return author.value.split(' ')
  })

  onMounted(() => {
    imagesLoaded('.grid .grid__item-img', { background: true }, () => {      
      $event('imgs:loaded');
      // Initialize grid
      const item = $grid(grid.value)
  
      // change cursor text status when hovering a grid item
      item.on('mouseEnterItem', itemTitle => window.cursor.DOM.text.innerHTML = itemTitle)
      item.on('mouseLeaveItem', _ => window.cursor.DOM.text.innerHTML = '')
    });
  })
  const exposed = { projects, author }
  defineExpose(exposed)
</script>

<!-- <script>
 export default {
  setup() {
    const config = useRuntimeConfig()
    const projects = config.public.projects
  
    return {
      projects
    }
  }
 } 
</script> -->
