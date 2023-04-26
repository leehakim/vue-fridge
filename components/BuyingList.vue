<template>
  <section class="section buying">
    <div class="section_container">
      <div class="section_top">
        <p class="title">
          나에게 딱 맞는 컬러와 소재를 <br class="m_show" />골라 조합해보세요
        </p>
        <button type="button" class="common_button black_bg btn_custom">
          나만의 와인냉장고 조합하기
        </button>
      </div>
      <div class="buying_swiper">
        <swiper
          :modules="modules"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :slides-per-view="'auto'"
          :pagination="{
            el: `.buying .swiper-pagination`,
            clickable: true,
          }"
          :navigation="{
            prevEl: `.buying .swiper-button-prev`,
            nextEl: `.buying .swiper-button-next`,
          }"
          :breakpoints="{ '769': { autoplay: false } }"
          class="buyingSwiper"
          @swiper="setBuyingSwiper"
        >
          <SwiperSlide v-for="(data, idx) in BuyingData" :key="idx">
            <BuyingListItem :item="data" />
          </SwiperSlide>
        </swiper>
        <p class="add_txt">
          *본 혜택가는 한정수량으로 제공되며 해당 물량 소진 시 혜택가가 변동될
          수 있습니다
        </p>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="buying_pagination" :class="{ paused: !isPlaying }">
          <div class="swiper-pagination"></div>
          <button type="button" class="btn_play" @click="buttonEvt">
            <span class="hidden">play / pause</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BuyingData from "~/json-data/BuyingList.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import BuyingListItem from "./BuyingListitem.vue";
import { ref } from "vue";

export default {
  components: { Swiper, SwiperSlide, BuyingListItem },
  setup() {
    const isPlaying = ref(true);
    const buyingSwiper = ref();

    const setBuyingSwiper = swiper => {
      buyingSwiper.value = swiper;
    };

    const buttonEvt = () => {
      if (isPlaying.value) {
        buyingSwiper.value.autoplay.pause();
        isPlaying.value = !isPlaying.value;
      } else {
        buyingSwiper.value.autoplay.start();
        isPlaying.value = !isPlaying.value;
      }
    };

    return {
      BuyingData,
      modules: [Pagination, Navigation, Autoplay],
      buttonEvt,
      isPlaying,
      buyingSwiper,
      setBuyingSwiper,
    };
  },
};
</script>
