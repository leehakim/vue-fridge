<template>
  <section class="section benefit">
    <div class="section_container">
      <p class="title">런칭 구매 혜택</p>
      <div class="benefit_swiper">
        <swiper
          :navigation="{
            nextEl: `.benefit_swiper_next`,
            prevEl: `.benefit_swiper_prev`,
          }"
          :slides-per-view="'auto'"
          :space-between="24"
          :modules="modules"
          :breakpoints="{ '769': { slidesPerView: 3 } }"
        >
          <SwiperSlide v-for="benefit in benefits" :key="benefit.idx">
            <BenefitListItem :benefit="benefit"></BenefitListItem>
          </SwiperSlide>
        </swiper>
        <button class="benefit_swiper_next">next</button>
        <button class="benefit_swiper_prev">prev</button>
      </div>
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
            <BenefitNotice />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BenefitListItem from "./BenefitListItem.vue";
import BenefitData from "~/json-data/BenefitList.json";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/scss/navigation";
import BenefitNotice from "./BenefitNotice.vue";

export default {
  name: "BenefitList",
  components: { BenefitListItem, Swiper, SwiperSlide, BenefitNotice },
  setup() {
    const show = ref(false);
    const benefits = BenefitData.benefit_list;
    return { show, benefits, modules: [Navigation] };
  },
};
</script>
