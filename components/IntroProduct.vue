<template>
	<section class="sec_intro">
		<div class="section-container">
			<div class="title_box">
				<p><strong>BESPOKE,</strong> 와인 전문 냉장고를 소개합니다</p>
				<a href="javascript:;" class="detail_btn">제품 자세히 보기</a>
			</div>
			<swiper slidesPerView="auto" class="swiper">
				<SwiperSlide  v-for="(group, idx) in groupList" :key="idx">
					{{ group.item }}
					<div class="slide_list">
						<picture>
							<img :src="'/intro_slide' + idx + '_pc.png'">
						</picture>
						<div class="contents_area">
							<picture>
								<img :src="'/intro_slide_ico' + idx + '_pc.png'">
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
		</div>
	</section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import JasonData from '/json-data/IntroData.json';

var groupList = JasonData;


export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	methods : {
		
	},
	setup() {
		return {
			groupList,
		};
	},
};
</script>

<style lang="scss">
@import '@/assets/style/intro-product.scss';
</style>
