<template>
  <section class="section buying">
    <div class="section_container">
      <div class="section_top">
        <p class="title">나에게 딱 맞는 컬러와 소재를 <br class="m_show">골라 조합해보세요</p>
        <button type="button" class="common_button black_bg btn_custom">
          나만의 와인냉장고 조합하기
        </button>
      </div>
      <div class="buying_swiper">
        <swiper v-bind="swiperOptions" @slideChange="onSlideChange" @buyingSwiper="buyingSwiper">
          <SwiperSlide v-for="(data, idx) in BuyingData" :key="idx">
            <BuyingListItem :item="data" />
          </SwiperSlide>
        </swiper>
        <p class="add_txt">
          *본 혜택가는 한정수량으로 제공되며 해당 물량 소진 시 혜택가가 변동될 수 있습니다 
        </p>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
import BuyingData from "~/json-data/BuyingList.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import $ from 'jquery'
SwiperCore.use([Pagination, Navigation, Autoplay]);

import BuyingListItem from "./BuyingListitem.vue"
export default {
  components: { Swiper, SwiperSlide, BuyingListItem },
  setup() {
    return { 
      BuyingData,
      swiperOptions: {
        slidesPerView: 'auto',
        navigation: {
          prevEl: ".buying .swiper-button-prev",
          nextEl: ".buying .swiper-button-next",
        },
        autoplay: {
          delay:2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".buying .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          769: {
            autoplay: false,
          }
        }
      },
    };
  },
  methods: {
    onSlideChange: () => {
      var $bulletActive = $('.buying .swiper-pagination-bullet-active');
      $bulletActive.append('<span></span>').siblings().children().remove()
      console.log('시작');
    },
    slidePlayButton: () => {
      $('.play_btn').on('click', function() {
        var isSwiperPlay = 0;
       
        if(isSwiperPlay==0){
            $('.play_btn').addClass('stop').removeClass('play');
            Swiper.autoplay.stop();
            $('.swiper-pagination-bullet-active span').css('animation-play-state', 'paused')
            isSwiperPlay = 1;
            console.log(isSwiperPlay);
        }else {
            $('.play_btn').addClass('play').removeClass('stop');
            Swiper.autoplay.start();
            $('.swiper-pagination-bullet-active span').css('animation-play-state', 'running')
            isSwiperPlay = 0;
            console.log(isSwiperPlay);
        }
      })
    },
  },
  mounted() {
    var swiperPaination = $('.swiper-pagination')
    swiperPaination.append('<span class="play_btn play"></span>');
    this.slidePlayButton()
  }
}
</script>
