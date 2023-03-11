<template>
  <div class="content">
    <bg-title />
    <div class="grid" ref="grid">
      <a v-for="project, idx in projects" 
      :key="idx" 
      :class="`grid__item pos-${idx+1}`" 
      :href="`#preview-${idx+1}`" 
      :data-title="project.title"
      :data-color="projectsColors[idx]">
        <div class="grid__item-img" 
        :style="`background-color: ${projectsColors[idx]};background-image:url(${project.image});`"></div>
      </a>
    </div>
    <div class="preview">
      <div v-for="project, idx in projects" 
      :key="idx" 
      :id="`preview-${idx+1}`"
      class="preview__item">
        <button class="preview__item-back unbutton"><span>Back</span></button>
        <div class="preview__item-imgwrap">
          <div class="preview__item-img" 
          :style="`background-color: ${projectsColors[idx]};background-image:url(https://picsum.photos/1400/1800?random=${idx});`"></div>
        </div>
        <h2 data-splitting class="preview__item-title">{{ project.title }}</h2>
        <div class="preview__item-content">
          <div class="preview__item-meta">
            <span>{{ project.category }}</span>
            <span>{{ project.date }}</span>
          </div>
          <p class="preview__item-description">
           {{ project.desc }}
          </p>      
          <div class="preview__item-info">
            <p class="preview__item-meta">Used technologies:</p>
            <span v-for="lib, id in project.stack" :key="id">
              {{ lib }}
            </span>
          </div>    
          <a v-if="project.link" class="preview__item-button" :href="project.link" target="_blank">See site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>  
  import imagesLoaded from 'imagesloaded'
  import BgTitle from '~/components/BgTitle.vue'

  const { $grid, $event } = useNuxtApp()
  const { public: { projects } } = useRuntimeConfig()
  const grid = ref(null);  

  const colors = [
   '#684ee3',
   '#c0ec59',
   '#0053d4',
   '#2187f1',
   '#54c4db',
   '#9a4fd8',
   '#f4c466'
  ]

  const projectsColors = computed(() => {
    let colorsArr = [], i = 0
    if (projects.length > colors.length) {
      do {
        colorsArr.push(...colors)
        i++
      } while (i < Math.ceil(projects.length/colors.length))
    }
    return colorsArr
  }) 

  onMounted(() => {
    imagesLoaded('.grid .grid__item-img', { background: true }, () => {
      $event('imgs:loaded');      
      // Initialize grid
      const item = $grid(grid.value)
  
      // change cursor text status when hovering a grid item
      item.on('mouseEnterItem', itemTitle => window.cursor.DOM.text.innerHTML = itemTitle)
      item.on('mouseLeaveItem', _ => window.cursor.DOM.text.innerHTML = '')
      window.cursor.renderedStyles['scaleTrail'].current = 1;
    });
  })
  const exposed = { projects }
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
