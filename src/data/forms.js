import RetroForm from '@/components/forms/RetroForm.vue'
import RetroFormSource from '@/components/forms/RetroForm.vue?raw'

import { markRaw } from 'vue'

// buttons array
const forms = [
  {
    id: 1,
    name: 'Retro Form',
    slug: 'retro-form',
    component: markRaw(RetroForm),
    source: RetroFormSource,
  },
]

export default forms
