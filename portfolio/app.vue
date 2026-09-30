<template>
  <NuxtLayout>
    <div class="message">Please view this site on a desktop to see the effect.</div>
    <ResumeButton />
    <Cursor />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>  
  import Cursor from '~/components/Cursor.vue'
  import ResumeButton from '~/components/ResumeButton.vue'
</script>
