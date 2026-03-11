<script setup>
import CardComponent from '@/components/ui/CardComponent.vue'

import { componentsStore } from '@/stores/componentStore.js'

const myStore = componentsStore()
</script>

<template>
  <div class="layouts">
    <div class="cards-grid">
      <CardComponent v-for="layout in myStore.layoutsArray" :key="layout.id" :comp="layout">
        <!-- preview -->
        <component :is="layout.component" />

        <!-- code -->
        <!-- <template #code>
          <CodeSection :source="btn.source" />
        </template> -->
      </CardComponent>
    </div>
  </div>
</template>

<style scoped>
.layouts {
  height: 90dvh;
  background-color: aquamarine;
}
</style>