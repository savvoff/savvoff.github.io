<template>
  <main class="wrapper">
    <slot />
  </main>
</template>

<script setup>
  const { $listen } = useNuxtApp()

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
