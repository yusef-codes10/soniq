<script setup>
import CardComponent from '@/components/ui/CardComponent.vue'
import buttons from '@/data/buttons.js'
import parseVueSource from '@/utils/parseVueSource.js'
</script>

<template>
  <div class="buttons">
    <div class="cards-grid">
      <CardComponent v-for="btn in buttons" :key="btn.id" :title="btn.name">
        <component :is="btn?.component"></component>
        <div class="code-block">
          <div class="html">{{ parseVueSource(btn.source).template }}</div>
          <div class="css">{{ parseVueSource(btn.source).styles }}</div>
        </div>
      </CardComponent>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  </div>
</template>

<style scoped>
.buttons {
  height: 90dvh;
  background-color: springgreen;
}
</style>