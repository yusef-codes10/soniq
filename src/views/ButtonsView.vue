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
        <div class="code-container">
          <div class="code-header">HTML</div>

          <pre class="code"
            >{{ parseVueSource(btn.source).template }}
  </pre
          >

          <div class="code-header">CSS</div>

          <pre class="code"
            >{{ parseVueSource(btn.source).styles }}
  </pre
          >
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