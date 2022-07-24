<template>
  <div>
    <n-services-section />
  </div>
</template>

<script>
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NServicesSection from '~/components/NServicesSection.vue'

export default {
  components: {
    NServicesSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-bland-500' },
      { to: null, name: 'Services' }
    ])
    return {}
  }
}
</script>
