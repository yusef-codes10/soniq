import ButtonComp1 from '@/components/buttons/ButtonComp1.vue'
import ButtonComp1Source from '@/components/buttons/ButtonComp1.vue?raw'
import { markRaw } from 'vue'

// buttons array
const buttons = [
  {
    id: 1,
    name: 'Retro Button',
    component: markRaw(ButtonComp1),
    source: ButtonComp1Source,
  },
]

export default buttons
