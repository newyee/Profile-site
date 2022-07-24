<template>
  <thanks-contact-container />
</template>

<script>
export default {
  name: 'ContactThanks',
  components: {
    thanksContactContainer: () =>
      import('@/containers/thanksContactContainer.vue')
  },
  head() {
    return {
      title: 'Thanks for contacting'
    }
  }
}
</script>
