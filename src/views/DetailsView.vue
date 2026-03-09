<script setup>
import { defineProps } from 'vue'

const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

console.log(slug)
</script>
<template>
  <div class="details">This is the details view</div>
</template>
<style scoped>
</style>