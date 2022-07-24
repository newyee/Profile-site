<template>
  <n-contact-section />
</template>

<script>
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NContactSection from '~/components/NContactSection.vue'

export default {
  components: {
    NContactSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-bland-500' },
      { to: null, name: 'Contact' }
    ])
    return {}
  }
}
</script>
