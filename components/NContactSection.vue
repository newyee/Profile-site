<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full lg:w-3/5">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-secondary mb-4">
          開発依頼はこちらまで！!
        </p>
        <client-only>
          <validation-observer v-slot="{ invalid }">
            <form
              autocomplete="off"
              name="contact"
              action="/contact/thanks"
              method="POST"
              class="bg-white shadow-xl leading-normal p-4 lg:p-6"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div class="px-1 mb-2 text-center">
                <label
                  for="name"
                  class="required block mt-6 mb-2 font-semibold text-gray-800"
                >
                  お名前
                </label>
                <validation-provider
                  v-slot="{ errors }"
                  name="お名前"
                  rules="required|max:50"
                >
                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    name="name"
                    class="w-full bg-gray-100 border border-bland-500 rounded-full p-4 text-gray-800"
                    placeholder="山田 太郎"
                  />
                  <span class="block mt-2 text-red-700 font-bold">
                    {{ errors[0] }}
                  </span>
                </validation-provider>
              </div>

              <div class="px-1 mb-2 text-center">
                <label
                  for="email"
                  class="required block mt-6 mb-2 font-semibold text-gray-800"
                >
                  メールアドレス
                </label>
                <validation-provider
                  v-slot="{ errors }"
                  name="メールアドレス"
                  rules="required|max:255"
                >
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    class="w-full bg-gray-100 border border-bland-500 rounded-full p-4 text-gray-800"
                    placeholder="yamada@example.com"
                  />
                  <span class="block mt-2 text-red-700 font-bold">
                    {{ errors[0] }}
                  </span>
                </validation-provider>
              </div>

              <div class="px-1 mb-2 text-center">
                <label
                  for="content"
                  class="required block mt-6 mb-2 font-semibold text-gray-800"
                >
                  お問い合わせ内容
                </label>
                <validation-provider
                  v-slot="{ errors }"
                  name="お問い合わせ内容"
                  rules="required"
                >
                  <textarea
                    id="content"
                    v-model="content"
                    name="content"
                    class="w-full bg-gray-100 border border-bland-500 rounded-full rounded-lg p-4 text-gray-800"
                    col="4"
                    row="10"
                    placeholder=""
                  />
                  <span class="block mt-1 text-red-700 font-bold">
                    {{ errors[0] }}
                  </span>
                </validation-provider>
              </div>
              <validation-provider>
                <div class="max-w-md mx-auto px-1 mb-2">
                  <button
                    type="submit"
                    class="mx-auto w-full py-5 px-2 rounded-full mt-10 font-bold"
                    :class="{
                      'text-white bg-bland-200 cursor-not-allowed': invalid,
                      'text-white bg-bland-500 cursor-pointer hover:opacity-75 hover:shadow-2xl': !invalid
                    }"
                    :disabled="invalid"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'envelope']"
                      class="mr-2"
                    />
                    お問い合わせ
                  </button>
                </div>
              </validation-provider>
            </form>
          </validation-observer>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import NTitle from '~/elements/NTitle.vue'

export default {
  components: {
    NTitle
  },
  setup() {
    const title = 'Contact'
    const name = ''
    const email = ''
    const content = ''

    return {
      title,
      name,
      email,
      content
    }
  }
}
</script>

<style scoped>
input:focus {
  box-shadow: 0px 0px 5px 0px theme('colors.red.500');
  @apply bg-white border;
}

::placeholder {
  @apply text-center;
}

*:focus {
  @apply outline-none;
}
.bg-bland-200 {
  background-color: #ffd7d7;
}
</style>
