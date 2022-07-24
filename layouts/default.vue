<template>
  <div class="flex flex-col">
    <div class="wrap-parent min-h-screen flex flex-col">
      <default-header />
      <div class="flex flex-grow">
        <div class="w-full overflow-hidden py-4">
          <nuxt />
        </div>
      </div>
      <default-footer />
    </div>
  </div>
</template>
<script>
import DefaultHeader from './DefaultLayout/DefaultHeader.vue'
import DefaultFooter from './DefaultLayout/DefaultFooter.vue'
import provideBreadcrumbs from '@/store/modules/breadcrumbs'

export default {
  components: {
    DefaultHeader,
    DefaultFooter
  },
  setup() {
    console.log('defalt.vue呼び出し')
    // provideした値を読み込む。初期化ではなく、DefaultLayoutディレクトリ下でinjectし利用するために必要？
    provideBreadcrumbs()
  }
}
</script>
