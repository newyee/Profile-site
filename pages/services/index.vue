<template>
  <services-container />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Services',
  components: {
    servicesContainer: () => import('@/containers/servicesContainer.vue')
  },
  head() {
    return {
      title: 'Services'
    }
  }
})
</script>
