<template>
  <about-container />
</template>

<script>
export default {
  name: 'About',
  components: {
    aboutContainer: () => import('@/containers/aboutContainer.vue')
  },
  head() {
    return {
      title: 'About me'
    }
  }
}
</script>
