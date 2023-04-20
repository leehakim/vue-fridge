<template>
  <section class="section sec_intro">
    <div class="section_container">
      <div class="title_box">
        <p><strong>BESPOKE,</strong> 와인 전문 냉장고를 소개합니다</p>
        <nuxt-link to="#" class="detail_btn">제품 자세히 보기</nuxt-link>
      </div>
      <swiper slidesPerView="auto" class="swiper" v-bind="swiperOptions">
        <SwiperSlide v-for="(group, idx) in groupList" :key="idx">
          {{ group.item }}
          <div class="slide_list">
            <picture>
              <img :src="'/intro_slide' + idx + '_pc.png'" />
            </picture>
            <div class="contents_area">
              <picture>
                <img :src="'/intro_slide_ico' + idx + '_pc.png'" />
              </picture>
              <div class="txt_box">
                <p class="main_txt">
                  {{ group.MainTxt }}
                </p>
                <p class="sub_txt">
                  {{ group.SubTxt }}
                </p>
                <p class="add_txt">
                  {{ group.AddTxt }}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </swiper>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
SwiperCore.use([Pagination, Navigation]);

import JasonData from "/json-data/IntroData.json";

let groupList = JasonData;

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {},
  setup() {
    return {
      groupList,
      swiperOptions: {
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      },
    };
  },
};
</script>
