<template>
  <section class="tabs">
    <div class="section_container">
      <swiper :slides-per-view="4" @swiper="onSwiper">
        <SwiperSlide>
          <button class="tab">
            <div class="tab_text">
              <p class="tit">
                <span class="en_b">The Freestyle</span><br />예약판매 중
              </p>
              <p class="date">
                <span class="en_m">22.01.17</span> ~
                <span class="en_m">22.02.28</span>
              </p>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button class="tab">
            <div class="tab_text">
              <p class="tit">BESPOKE 제트 | 제트 봇<br />런칭</p>
              <p class="date">
                <span class="en_m">22.02.22</span> ~
                <span class="en_m">22.02.28</span>
              </p>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button class="tab">
            <div class="tab_text">
              <p class="tit">BESPOKE 그랑데AI<br />런칭</p>
              <p class="date">
                <span class="en_m">22.01.17</span> ~
                <span class="en_m">22.02.28</span>
              </p>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button class="tab current">
            <div class="tab_text">
              <p class="tit">BESPOKE 1도어<br />와인냉장고 런칭</p>
              <p class="date"><span class="en_m">22.02.28</span> ~</p>
            </div>
          </button>
        </SwiperSlide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    return {
      onSwiper,
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: center;
  position: relative;
  height: vw-pc(120);
  border-bottom: vw-pc(3) solid #000;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: vw-pc(13);
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
  .tab {
    display: flex;
    position: relative;
    width: vw-pc(327);
    height: 100%;
    &.current {
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: vw-pc(10);
        right: 0;
        width: vw-pc(10);
        height: 100%;
        background-color: #ddd;
        transform: skewY(45deg);
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: vw-pc(318);
        height: 100%;
        border-radius: vw-pc(6) vw-pc(6) 0 0;
        background-color: #000;
      }
      .tab-text {
        color: #fff;
      }
    }
  }
  .tab-text {
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    width: 100%;
    height: vw-pc(120);
    padding: vw-pc(28) vw-pc(32) 0;
    text-align: left;
  }
  .tit {
    font-size: vw-pc(21);
    line-height: vw-pc(28);
  }
  .date {
    margin-top: vw-pc(15);
    font-size: vw-pc(14);
  }
}
</style>
