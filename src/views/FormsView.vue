<script setup>
import CardComponent from '@/components/ui/CardComponent.vue'
// import CodeSection from '@/components/ui/CodeSection.vue'

import { componentsStore } from '@/stores/componentStore.js'

const myStore = componentsStore()
</script>

<template>
  <div class="forms">
    <div class="cards-grid">
      <CardComponent v-for="form in myStore.formsArray" :key="form.id" :comp="form">
        <!-- preview -->
        <component :is="form.component" />
      </CardComponent>
    </div>
  </div>
</template>

<style scoped>
.forms {
  height: 90dvh;
  /* background-color: sienna; */
}
</style>