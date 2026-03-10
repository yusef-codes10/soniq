<script setup>
// use Route to read the url and get the search query
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const searchQuery = computed(() => {
  return route.query.q?.toLowerCase() || ''
})
</script>

<template>
  <div class="search">Search</div>
</template>

<style scoped>
</style>