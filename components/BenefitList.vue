<template>
  <section class="section benefit">
    <div class="section_container">
      <p class="title">런칭 구매 혜택</p>
      <swiper
        navigation
        :slides-per-view="'auto'"
        :space-between="24"
        :modules="modules"
        :free-mode="true"
        :breakpoints="{ '769': { slidesPerView: 3, freeMode: false } }"
        class="benefit_swiper"
      >
        <SwiperSlide v-for="benefit in benefits" :key="benefit.idx">
          <BenefitListItem :benefit="benefit"></BenefitListItem>
        </SwiperSlide>
      </swiper>

      <div class="center_box">
        <button
          class="toggle_arrow toggle_btn"
          :class="{ open: show }"
          @click="show = !show"
        >
          혜택 유의사항을 꼭 확인하세요
        </button>
        <div v-if="show">
          <div class="toggle_contents">
            <p>혜택 유의 사항</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BenefitListItem from "./BenefitListItem.vue";
import BenefitData from "~/json-data/BenefitList.json";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/scss/navigation";
import { Navigation } from "swiper";

export default {
  name: "BenefitList",
  components: { BenefitListItem, Swiper, SwiperSlide },
  setup() {
    const show = ref(false);
    const benefits = BenefitData.benefit_list;
    return { show, benefits, modules: [Navigation] };
  },
};
</script>
