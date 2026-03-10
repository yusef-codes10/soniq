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
  isHTML.value = !isHTML.value
}

const showCSS = () => {
  isCSS.value = !isCSS.value
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
  max-height: 340px;
  overflow: auto;
  width: 50%;
  height: 100%;
}

.code {
  white-space: pre; /* keep this for code formatting */
  overflow-x: auto; /* scroll within the pre, not the page */
  max-width: 100%;
  display: block;
}
</style>