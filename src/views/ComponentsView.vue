<script setup>
import CardComponent from '@/components/ui/CardComponent.vue'
import CodeSection from '@/components/ui/CodeSection.vue'

import { componentsStore } from '@/stores/componentStore.js'

const myStore = componentsStore()
</script>

<template>
  <div class="components">
    This is the components vie
    <div class="cards-grid">
      <CardComponent v-for="card in myStore.cardsArray" :key="card.id" :title="card.name">
        <component :is="card?.component"></component>

        <template #code>
          <CodeSection :source="card.source" />
        </template>
      </CardComponent>
    </div>
  </div>
</template>

<style scoped>
.components {
  min-height: 90dvh;
  background-color: tomato;
}
</style>
