<script setup>
import CardComponent from '@/components/ui/CardComponent.vue'
import buttons from '@/data/buttons.js'
</script>

<template>
  <div class="buttons">
    <div class="cards-grid">
      <CardComponent v-for="btn in buttons" :key="btn.id" :title="btn.name">
        <component :is="btn?.component"></component>
        <pre class="code-block">
  <code>{{ btn.source }}</code>
</pre>
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