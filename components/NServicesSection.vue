<template>
  <div>
    <div class="container mx-auto">
      <div class="w-full px-2">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-secondary mb-4">
          個人として提供しているサービスを紹介します。
        </p>
      </div>
    </div>
    <div class="bg-white py-4">
      <n-title title="Web Development" tag-name="h3" class="text-center mb-4" />
      <div class="max-w-md mx-auto mb-10">
        <p class="text-gray-700 text-sm leading-loose">
          Webサービスを展開していきたいお客様に向けて受託開発や業務委託開発を行なっています。
        </p>
      </div>
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full lg:px-2">
            <img
              src="~/assets/images/services/svg/web_developer.svg"
              alt="Web Development"
              class="h-32 mx-auto mb-6"
            />
            <p class="font-semibold text-gray-800 text-center mb-2">
              Web Development
            </p>
            <p
              class="text-gray-700 text-xs leading-loose mb-4 lg:w-1/3 mx-auto"
            >
              Laravel, Vue.jsを利用したWeb開発に従事し、得意としています。
              過去には、WEBサイトの脆弱性を検知するセキュリティツール、教育系のアプリケーション、動物病院の予約システムなどを開発してきました。
              今までの経験を活かして開発業務をサポートしていきます。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-10">
      <div class="flex justify-center">
        <div class="w-full px-2 lg:px-0 lg:w-3/5">
          <div
            class="bg-gradient-gray rounded-lg shadow-xl text-white px-5 py-5 lg:py-10"
          >
            <p class="text-lg mb-2 lg:text-2xl">
              Webサービス開発承っております。
            </p>
            <p class="text-xs mb-10">
              お気軽にご質問・ご相談ください。内容確認後、ご連絡させて頂きます。
            </p>
            <div>
              <n-round-button
                :tag-name="'nuxt-link'"
                to="/contact"
                class="shadow-primary-500 bg-bland-500 text-sm text-white px-10 hover:bg-white hover:bg-bland-600 hover:shadow-xl"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
                お問い合わせ
              </n-round-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NTitle from '~/elements/NTitle.vue'
import NRoundButton from '~/elements/NRoundButton.vue'

export default {
  components: {
    NTitle,
    NRoundButton
  },
  setup() {
    const title = 'Services'
    return {
      title
    }
  }
}
</script>
