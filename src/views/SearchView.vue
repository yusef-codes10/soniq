<script setup>
// use Route to read the url and get the search query
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const searchQuery = computed(() => {
  return route.query.q?.toLowerCase() || ''
})

console.log(searchQuery)
</script>

<template>
  <div class="search">Search you are looking for {{ $route.query }}</div>
</template>

<style scoped>
</style>