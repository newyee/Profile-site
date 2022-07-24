<template>
  <experiences-container />
</template>

<script>
export default {
  name: 'WorkExperices',
  components: {
    experiencesContainer: () => import('@/containers/experiencesContainer.vue')
  },
  head() {
    return {
      title: 'Projects and Works'
    }
  }
}
</script>
