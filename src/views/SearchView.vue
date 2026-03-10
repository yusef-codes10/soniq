<script setup>
// use Route to read the url and get the search query
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { componentsStore } from '@/stores/componentStore.js'
import CardComponent from '@/components/ui/CardComponent.vue'

const route = useRoute()
const myStore = componentsStore()

const searchQuery = computed(() => {
  return route.query.q?.toLowerCase() || ''
})

// filter the wanted result
const filterCards = computed(() => {
  return myStore.allComponents.filter((card) => card.name.toLowerCase().includes(searchQuery.value))
})

console.log(searchQuery)
</script>

<template>
  <div class="search">
    Search you are looking for {{ $route.query }}
    <div class="result" v-if="filterCards.length">
      <p v-for="card in filterCards" :key="card.id">
        {{ card.name }}
        <CardComponent v-for="card in filterCards" :key="card.id" :comp="card">
          <!-- preview -->
          <component :is="card.component" />
        </CardComponent>
      </p>
    </div>
    <div class="no" v-else>Not found</div>
  </div>
</template>

<style scoped>
</style>