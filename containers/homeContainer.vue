<template>
  <n-introduction-section />
</template>

<script>
import { setBreadcrumbs } from '@/store/modules/breadcrumbs'
import NIntroductionSection from '~/components/NIntroductionSection.vue'

export default {
  components: {
    NIntroductionSection
  },
  setup() {
    setBreadcrumbs([])
    return {}
  }
}
</script>
