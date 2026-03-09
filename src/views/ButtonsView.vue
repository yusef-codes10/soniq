<script setup>
import CardComponent from '@/components/ui/CardComponent.vue'
import CodeSection from '@/components/ui/CodeSection.vue'
import buttons from '@/data/buttons.js'
</script>

<template>
  <div class="buttons">
    <div class="cards-grid">
      <CardComponent v-for="btn in buttons" :key="btn.id" :title="btn.name">
        <!-- preview -->
        <component :is="btn.component" />

        <!-- code -->
        <template #code>
          <CodeSection :source="btn.source" />
        </template>
      </CardComponent>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  height: 90dvh;
  background-color: springgreen;
}
</style>