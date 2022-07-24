<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full lg:w-3/5">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-secondary mb-4">
          フリーランスエンジニアとして活動する自分について
        </p>
        <div class="bg-white text-gray-800 shadow-xl leading-normal p-4 lg:p-6">
          <p>
            初めまして、高木新也と申します。<br />
            <br />
            プログラミング歴は凡そ５年になります。実務経験としては２年半程です。<br />
            自由度の高いプログラマーという職業に憧れ、プログラミングを始めました。<br />
            <br />
            <span class="font-semibold font-quicksand">&lt; 経歴 &gt;</span>
            <br />
            2017年からプログラミングを学ぶ為、プログラミングスクールに通い始め、約1年かけてWeb開発の基礎を学んで参りました。<br />
            2018年からは専門学校に進学し、データベースやセキュリティ、ネットワークの基礎を学んだ後、独学でLaravelを利用したWebアプリケーション開発とAWSを利用した
            サーバー構築・アプリケーションデプロイができるようになるまで成長することが出来ました。<br />
            <br />
            専門学校を卒業後、合同会社シェアストックへ入社し、クローリング開発やWEBアプリケーション開発に携わって参りました。<br />
            フロントエンドではVue/Nuxt、バックエンドではPython/Djangoを使用し開発を行っておりました。<br />
            フロントエンド、バックエンドいずれの開発も経験し、双方の連携をRest
            APIで実現したことによって一連の開発、実装のスキルを身に付けることができました。
            <br />
            少人数での開発が多く要件定義から詳細設計、実装、サーバーへのデプロイまで一連の開発業務を担当してまいりました。<br />
          </p>
          <n-title title="Knowledge Base" tag-name="h3" class="mt-6 mb-2" />
          <div class="lg:flex">
            <div class="flex-1">
              <n-title title="Frontend" tag-name="h5" class="mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>Bootstrap 4/5</li>
                <li>Tailwind CSS</li>
                <li>Sass</li>
                <li>PostCSS</li>
              </ul>
              <n-title title="Javascript" tag-name="h5" class="mt-6 mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>Nuxt.js</li>
                <li>Vue.js</li>
                <li>Node.js</li>
              </ul>
              <n-title title="Tools" tag-name="h5" class="mt-6 mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>Visual Studio Code</li>
                <li>PhpStorm</li>
              </ul>
            </div>
            <div class="flex-1 mt-6 lg:mt-0">
              <n-title title="Backend" tag-name="h5" class="mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>PHP - Laravel</li>
                <li>Python - Django</li>
                <li>Java - Spring Boot</li>
                <li>RDB - MySQL/PostgreSQl</li>
                <li>Redis/Memcache</li>
              </ul>
              <n-title title="Infrastructure" tag-name="h5" class="mt-6 mb-2" />
              <ul class="list-disc ml-4 text-gray-900">
                <li>AWS</li>
                <li>Netlify</li>
                <li>XServer/お名前.com</li>
              </ul>
              <n-title
                title="Currentry learning"
                tag-name="h5"
                class="mt-6 mb-2"
              />
              <ul class="list-disc ml-4 text-gray-900">
                <li>Typescript</li>
              </ul>
            </div>
          </div>
        </div>
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
    const title = 'About Me'
    return {
      title
    }
  }
}
</script>
