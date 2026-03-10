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

.code {
  font-family: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', Consolas, Monaco, monospace;

  font-size: 0.85rem;
  line-height: 1.5;

  background: #0f172a;
  color: #e2e8f0;

  padding: 16px;
  border-radius: 0px;

  overflow-x: auto;
  white-space: pre;

  border: 1px solid #1e293b;
  overflow-y: auto;
}

.code-header {
  background: #0f172a;
  padding: 8px 12px;
  border-bottom: 1px solid #1e293b;
  font-size: 0.75rem;
  color: #94a3b8;
}
</style>