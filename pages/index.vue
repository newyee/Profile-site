<template>
  <homeContainer />
</template>

<script>
import homeContainer from '@/containers/homeContainer.vue'

export default {
  name: 'Home',
  components: {
    homeContainer
  },
  head() {
    return {
      title: 'プロフィール紹介'
    }
  }
}
</script>
