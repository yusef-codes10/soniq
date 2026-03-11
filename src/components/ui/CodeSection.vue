<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import parseVueSource from '@/utils/parseVueSource.js'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'

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

const highlight = () => {
  Prism.highlightAll()
}

onMounted(highlight)
watch(() => props.source, highlight)
watch([isHTML, isCSS], () => {
  setTimeout(highlight, 0)
})
</script>

<template>
  <div class="code-container">
    <div class="code-header">
      <div class="tab-bar">
        <button class="tab" :class="{ active: isHTML }" @click="showHTML">
          <span class="tab-icon html-icon">⟨/⟩</span>
          index.html
        </button>
        <button class="tab" :class="{ active: isCSS }" @click="showCSS">
          <span class="tab-icon css-icon">#</span>
          styles.css
        </button>
      </div>
      <div class="header-actions">
        <span class="lang-badge" v-if="isHTML">HTML</span>
        <span class="lang-badge" v-if="isCSS">CSS</span>
      </div>
    </div>

    <div class="code-body">
      <div class="line-numbers" v-if="isHTML">
        <span v-for="n in (parsed.template || '').split('\n').length" :key="n">{{ n }}</span>
      </div>
      <div class="line-numbers" v-if="isCSS">
        <span v-for="n in (parsed.styles || '').split('\n').length" :key="n">{{ n }}</span>
      </div>

      <pre
        v-show="isHTML"
        class="code"
      ><code class="language-html" v-text="parsed.template"></code></pre>
      <pre
        v-show="isCSS"
        class="code"
      ><code class="language-css" v-text="parsed.styles"></code></pre>
    </div>
  </div>
</template>

<style scoped>
/* VS Code Dark+ color variables */
.code-container {
  --vsc-bg: #1e1e1e;
  --vsc-header: #252526;
  --vsc-tab-active: #1e1e1e;
  --vsc-tab-inactive: #2d2d2d;
  --vsc-tab-border: #007acc;
  --vsc-border: #3c3c3c;
  --vsc-text: #d4d4d4;
  --vsc-muted: #858585;
  --vsc-line-num: #858585;
  --vsc-line-num-bg: #1e1e1e;
  --vsc-scrollbar: #424242;
  --vsc-html: #4ec9b0;
  --vsc-css: #ce9178;

  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--vsc-bg);
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, 'Courier New', monospace;
}

/* ── Tab bar ── */
.code-header {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: var(--vsc-header);
  border-bottom: 1px solid var(--vsc-border);
  min-height: 35px;
}

.tab-bar {
  display: flex;
  align-items: stretch;
}

.tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 16px;
  background: var(--vsc-tab-inactive);
  color: var(--vsc-muted);
  border: none;
  border-right: 1px solid var(--vsc-border);
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  position: relative;
}

.tab:hover {
  background: #2a2d2e;
  color: var(--vsc-text);
}

.tab.active {
  background: var(--vsc-tab-active);
  color: var(--vsc-text);
  border-top: 1px solid var(--vsc-tab-border);
  padding-top: 1px;
}

.tab-icon {
  font-size: 0.7rem;
  font-weight: 700;
}

.html-icon {
  color: #e44d26;
}
.css-icon {
  color: #264de4;
}

.tab.active .html-icon,
.tab.active .css-icon {
  filter: brightness(1.3);
}

.header-actions {
  display: flex;
  align-items: center;
  padding: 0 12px;
}

.lang-badge {
  font-size: 0.65rem;
  font-family: inherit;
  color: var(--vsc-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ── Editor body ── */
.code-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  background: var(--vsc-bg);
}

/* Line numbers */
.line-numbers {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px 10px 16px 16px;
  background: var(--vsc-line-num-bg);
  color: var(--vsc-line-num);
  font-size: 0.8rem;
  line-height: 1.6;
  user-select: none;
  border-right: 1px solid var(--vsc-border);
  min-width: 42px;
  overflow: hidden;
}

.line-numbers span {
  display: block;
}

/* Code block — critical: no whitespace between <pre> and <code> */
.code {
  flex: 1;
  margin: 0;
  padding: 16px 20px;
  background: var(--vsc-bg);
  color: var(--vsc-text);
  font-family: inherit;
  font-size: 0.8rem;
  line-height: 1.6;
  overflow: auto;
  white-space: pre;
  tab-size: 2;
}

/* Scrollbar styling */
.code::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.code::-webkit-scrollbar-track {
  background: var(--vsc-bg);
}
.code::-webkit-scrollbar-thumb {
  background: var(--vsc-scrollbar);
  border-radius: 2px;
}
.code::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>