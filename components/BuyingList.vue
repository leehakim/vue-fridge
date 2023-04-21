<template>
  <section class="section buying">
    <div class="section_container">
      <div class="section_top">
        <p class="title">나에게 딱 맞는 컬러와 소재를 골라 조합해보세요</p>
        <button type="button" class="common_button black_bg btn_custom">
          나만의 와인냉장고 조합하기
        </button>
      </div>
      <div class="buying_swiper">
        <swiper
          :navigation="{
            nextEl: `.benefit_swiper_next`,
            prevEl: `.benefit_swiper_prev`,
          }"
          pagination
          :slides-per-view="2"
          :space-between="24"
          :modules="modules"
          :breakpoints="{ '769': { slidesPerView: 'auto' } }"
        >
          <SwiperSlide v-for="(data, idx) in BuyingData" :key="idx">
            <BuyingListItem :item="data" />
          </SwiperSlide>
        </swiper>
        <button class="benefit_swiper_next">next</button>
        <button class="benefit_swiper_prev">prev</button>
      </div>
    </div>
  </section>
</template>

<script>
import BuyingData from "~/json-data/BuyingList.json";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import BuyingListItem from "./BuyingListItem.vue";

export default {
  components: { Swiper, SwiperSlide, BuyingListItem },
  setup() {
    return { BuyingData, modules: [Navigation, Pagination] };
  },
};
</script>
