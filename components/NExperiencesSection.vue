<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full px-2 lg:px-0 lg:w-4/5">
        <n-title :title="title" class="text-center mb-1" />
        <p class="text-center text-sm text-secondary mb-4">
          今までの経歴を時系列でご紹介します
        </p>
        <!-- timeline start point -->
        <div class="p-2 lg:flex lg:flex-wrap lg:p-6" />
        <section class="timeline py-10">
          <div class="timeline-item">
            <div class="timeline-img" />
            <div class="timeline-content">
              <div class="date bg-gradient-gray">
                2021.10 ~ 現在
              </div>
              <p class="p-2 text-gray-900 pt-12">
                シェアストックを退社しフリーランスとして活動していくこととなる
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img" />
            <div class="timeline-content">
              <img
                src="~/assets/images/work_experiences/share-stock.png"
                class="w-full mb-2"
                alt="合同会社シェアストック"
              />
              <p class="font-bold text-gray-700 text-sm px-2">
                合同会社シェストック
              </p>
              <div class="date bg-gradient-gray">
                2020.2 ~ 2022.3
              </div>
              <p class="p-2 text-gray-900">
                専門学校へ通う傍ら、アルバイトとして入社し受託・自社サービス開発を行うこととなる。<br />
                要件定義から実装、リリースまでを担当。
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img" />
            <div class="timeline-content">
              <img
                src="~/assets/images/work_experiences/yse.png"
                class="w-full mb-2"
                alt="横浜システム工学院専門学校"
              />
              <p class="font-bold text-gray-700 text-sm px-2">
                横浜システム工学院専門学校
              </p>
              <div class="date bg-gradient-gray">
                2018.3 ~ 2020.3
              </div>
              <p class="p-2 text-gray-900">
                ネットワークやデータベース、WEBアプリケーションを開発する上での脆弱性への対策、AWSを利用したアプリケーションデプロイの方法などを学ぶ
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img" />
            <div class="timeline-content">
              <p class="font-bold text-gray-700 text-sm px-2 mt-12">
                CodeCamp
              </p>
              <div class="date bg-gradient-gray">
                2017~2018
              </div>
              <p class="p-2 text-gray-900">
                プラグミングの基礎を学ぶ為、オンラインのプログラミングスクールへ入塾する
              </p>
            </div>
          </div>
        </section>
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
    const title = 'WorkExperiences'
    return {
      title
    }
  }
}
</script>

<style lang="postcss" scoped>
.timeline {
  @apply relative;

  &::before {
    @apply absolute;
    content: '';
    width: 5px;
    height: 95%;
    left: 25px;
    transform: translateX(-50%);
    background-image: linear-gradient(to right, #993939, #ff5f5f);
  }
  & > .timeline-item {
    @apply w-full mb-10;

    &::after {
      @apply block clear-both;
      content: '';
    }

    &:nth-child(even) {
      & > .timeline-content {
        @apply float-none;

        & > .date {
          @apply right-auto left-0;
        }
      }
    }

    & > .timeline-img {
      @apply absolute rounded-full;
      background-color: #ff5f5f;
      width: 30px;
      height: 30px;
      left: 25px;
      margin-top: 25px;
      margin-left: -15px;
    }

    & > .timeline-content {
      @apply relative shadow-lg max-w-full w-auto bg-white;
      border-radius: 4px;
      margin-left: 60px;

      &::after {
        content: '';
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 30px;
        left: -15px;
        border-width: 10px 15px 10px 0;
        border-color: #transparent #fff transparent transparent;
      }
    }

    & .date {
      @apply inline-block absolute top-0 right-0 text-white;
      padding: 10px;
    }
  }
}

@screen lg {
  .timeline {
    &::before {
      left: 50%;
    }

    & > .timeline-item {
      &:nth-child(even) {
        & > .timeline-content {
          @apply float-right;

          &::after {
            left: -15px;
            border-width: 10px 15px 10px 0;
            border-color: #transparent #fff transparent transparent;
          }
        }
      }
      & > .timeline-img {
        left: 50%;
      }
      & > .timeline-content {
        width: 45%;
        margin-left: 0;

        &::after {
          right: -15px;
          left: auto;
          border-width: 10px 0 10px 15px;
          border-color: #transparent transparent transparent #fff;
        }
      }
    }
  }
}
</style>
