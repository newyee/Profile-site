<template>
  <n-thanks-contact-section />
</template>

<script>
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NThanksContactSection from '~/components/NThanksContactSection.vue'

export default {
  components: {
    NThanksContactSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-bland-500' },
      { to: '/contact', name: 'Contact' },
      { to: null, name: 'Thanks' }
    ])
    return {}
  }
}
</script>
