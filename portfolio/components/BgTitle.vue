<template>
  <h1 class="content__title">
    <span class="content__title-line content__title-line--1" data-splitting>{{ fullnameArr[0] }}</span>
    <span class="content__title-line content__title-line--2" data-splitting>{{ fullnameArr[1] }}</span>
  </h1>
</template>

<script setup>
  const author = ref('Ihor Savvov');

  const fullnameArr = computed(() => {
    return author.value.split(' ')
  })  
</script>
