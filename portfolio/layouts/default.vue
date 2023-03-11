<template>
  <main class="wrapper">
    <slot />
  </main>
</template>

<script setup>
  const { $listen } = useNuxtApp()
  const route = useRoute()
  useHead({
    link: [
      {
        rel: 'canonical',
        href: `https://savvoff.space${route.path}`,
      },
    ],
  })
  $listen('imgs:loaded', () => {
    // Remove loader (loading class)
    document.body.classList.remove('loading')
  })  
</script>

<style lang="scss">
  .wrapper {
    position: relative;
    overflow: hidden;
  }
</style>
