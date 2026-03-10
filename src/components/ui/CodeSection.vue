<script setup>
import { computed, ref } from 'vue'
import parseVueSource from '@/utils/parseVueSource.js'

const props = defineProps({
  source: String,
})

const parsed = computed(() => parseVueSource(props.source))

const isHTML = ref(true)
const isCSS = ref(false)
const showHTML = () => {
  isHTML.value = true
  isCSS.value = false
}

const showCSS = () => {
  isHTML.value = false
  isCSS.value = true
}
</script>

<template>
  <div class="code-container">
    <div class="code-header">
      <button @click="showHTML">HTML</button>
      <button @click="showCSS">CSS</button>
    </div>
    <pre class="code" v-show="isHTML">{{ parsed.template }}</pre>

    <pre class="code" v-show="isCSS">{{ parsed.styles }}</pre>
  </div>
</template>

<style scoped>
.code-container {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.code {
  flex: 1;
  overflow: auto;
  white-space: pre;
}
</style>