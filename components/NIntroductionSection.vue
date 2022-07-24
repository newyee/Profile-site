/* eslint-disable vue/no-parsing-error */
<template>
  <div class="m-auto h-full items-center flex justify-center">
    <div
      class="px-6 py-10 flex flex-col lg:flex-row w-full justify-center items-center mb-6"
    >
      <!-- <transition appear name="delay-appear-logo">
        <img
          src="~assets/images/icon/profile.jpg"
          class="w-40 shadow-xl mb-5 rounded-full text-left mr-0 lg:w-56 lg:mb-0 lg:text-2xl lg:mr-10"
        />
      </transition> -->

      <div class="flex flex-col">
        <p
          class="font-semibold text-3xl text-center mb-2 lg:mb-5 lg:text-5xl lg:text-left"
        >
          I'm a<span class="text-bland-500">&nbsp;Web developer!!!</span>
        </p>
        <p class="text-sm lg:text-base">
          フリーランスエンジニアとして活動している高木新也です<br />
          VueやLaravelを用いたWEBアプリ開発を中心としたお仕事をしています<br
            class="inline lg:hidden"
          />
        </p>
        <p class="mt-1 mb-5 text-sm lg:text-base">
          現在はリモート開発にて、各企業様の支援を行なっております。
        </p>
        <div class="w-full flex justify-center lg:justify-start lg:w-3/4">
          <n-round-button
            :tag-name="'nuxt-link'"
            to="/about"
            class="shadow-bland-500 bg-gradient-red-to-orange text-white mr-2 hover:opacity-75 hover:border-bland-500 hover:shadow-xl"
            text="About Me"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NRoundButton from '~/elements/NRoundButton.vue'
export default {
  components: {
    NRoundButton
  },
  setup() {
    return {
      transition: 'delay-appear-logo',
      mode: 'out-in'
    }
  }
}
</script>

<style scoped>
.shadow-bland-500:hover {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
}

/* .delay-appear-logo-enter {
  opacity: 0;
}

.delay-appear-logo-enter-active {
  transition: 4s;
} */
</style>
