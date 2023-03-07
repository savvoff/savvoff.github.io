<template>
  <div class="cursor" ref="cursor">
    <svg class="cursor__svg" width="80" height="80" viewBox="0 0 80 80">
      <circle vector-effect="non-scaling-stroke" class="cursor__svg-circle" cx="40" cy="40" r="20"/>
    </svg>
    <span class="cursor__text"></span>
  </div>
</template>

<script setup>
  const { $cursor } = useNuxtApp()
  const cursor = ref(null)

  onMounted(() => {
    window.cursor = $cursor(cursor.value)
  });
</script>
