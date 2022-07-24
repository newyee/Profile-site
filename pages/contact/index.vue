<template>
  <contact-container />
</template>
<script>
export default {
  name: 'Contact',
  components: {
    contactContainer: () => import('@/containers/contactContainer.vue')
  },
  head() {
    return {
      title: 'Contact'
    }
  }
}
</script>
