<template>
  <n-experiences-section />
</template>

<script>
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NExperiencesSection from '~/components/NExperiencesSection.vue'

export default {
  components: {
    NExperiencesSection
  },
  setup() {
    setBreadcrumbs([
      { to: '/', icon: ['fas', 'fire'], color: 'text-bland-500' },
      { to: null, name: 'Work Experience' }
    ])
    return {}
  }
}
</script>
