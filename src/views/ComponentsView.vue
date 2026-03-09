<script setup>
import CardComponent from '@/components/ui/CardComponent.vue'
import CodeSection from '@/components/ui/CodeSection.vue'
import cards from '@/data/cards.js'
</script>

<template>
  <div class="components">
    This is the components vie
    <div class="cards-grid">
      <CardComponent v-for="card in cards" :key="card.id" :title="card.name">
        <component :is="card?.component"></component>

        <template>
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
