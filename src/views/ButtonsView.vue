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
          <pre>
            <code>

              <div class="html code">{{ parseVueSource(btn.source).template }}</div>
            </code>
          </pre>
          <pre>
              <code>

                <div class="css code">{{ parseVueSource(btn.source).styles }}</div>
              </code>
          </pre>
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