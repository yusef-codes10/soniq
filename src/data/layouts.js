import WidowNavbar from '@/layouts/WidowNavbar.vue'
import WidowNavbarSource from '@/layouts/WidowNavbar.vue?raw'

import { markRaw } from 'vue'

const layouts = [
  {
    id: 1,
    name: 'widow navbar',
    slug: 'widow-navbar',
    component: markRaw(WidowNavbar),
    source: WidowNavbarSource,
  },
]

export default layouts
