<template>
  <section class="section tabs">
    <div class="section_container">
      <swiper
        :slides-per-view="'auto'"
        :breakpoints="{ '769': { slidesPerView: 4 } }"
      >
        <SwiperSlide v-for="(data, idx) in TabData" :key="idx">
          <button
            class="tab"
            type="button"
            :class="{ active: activeNum == idx + 1 }"
            @click="activeNum = idx + 1"
          >
            <div class="tab_text">
              <p class="tit">{{ data.title }}</p>
              <p class="date">
                <span class="en_m">{{ data.date_start }}</span> ~
                <span class="en_m">{{ data.date_end }}</span>
              </p>
            </div>
          </button>
        </SwiperSlide>
      </swiper>
    </div>
  </section>
</template>

<script>
import TabData from "~/json-data/TabData.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const activeNum = ref(4);

    return {
      TabData,
      activeNum,
    };
  },
};
</script>
