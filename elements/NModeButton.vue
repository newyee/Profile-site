<template>
  <button class="px-2" @click.prevent="changeMode">
    <font-awesome-icon v-if="`light` == state.mode" icon="sun" size="lg" />
    <font-awesome-icon v-if="`dark` == state.mode" icon="moon" size="lg" />
  </button>
</template>

<script>
import { reactive } from '@vue/composition-api'

export default {
  props: {
    default: {
      type: String,
      required: false,
      default: 'light'
    }
  },
  setup(props, context) {
    const state = reactive({
      mode: props.default
    })
    const changeMode = () => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
      context.emit('on-change-mode', state.mode)
    }

    return {
      state,
      changeMode
    }
  }
}
</script>
