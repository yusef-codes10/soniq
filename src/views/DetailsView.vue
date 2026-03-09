<script setup>
import { defineProps, computed } from 'vue'

const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

import { componentsStore } from '@/stores/componentStore.js'

const myStore = componentsStore()

const card = computed(() => {
  const cards = [...myStore.buttonsArray, ...myStore.cardsArray]
  return cards.find((el) => el.slug === slug)
})

console.log(myStore.buttonsArray)
console.log(myStore.cardsArray)
console.log(card.value)
</script>
<template>
  <div class="details">
    This is the details view
    <h1>{{ slug }}</h1>
    <h2>{{ card?.name }}</h2>
  </div>
</template>
<style scoped>
</style>