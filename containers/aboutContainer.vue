<template>
  <n-about-section />
</template>

<script>
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NAboutSection from '~/components/NAboutSection.vue'

export default {
  components: {
    NAboutSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-bland-500' },
      { to: null, name: 'About' }
    ])
    return {}
  }
}
</script>
