<template>
  <component
    :is="tagName"
    :type="type"
    :href="href"
    :to="to"
    :target="target"
    :rel="rel"
    class="rounded-full px-6 py-2 font-bold no-underline cursor-pointer"
  >
    <!-- ボタンに表示する文 -->
    {{ text }}
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      required: false,
      default: 'button'
    },
    type: {
      type: String,
      required: false,
      default: null
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    to: {
      type: String,
      required: false,
      default: null
    },
    target: {
      type: String,
      required: false,
      default: null
    },
    rel: {
      type: String,
      required: false,
      default: null
    },
    text: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
