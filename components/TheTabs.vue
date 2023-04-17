<template>
	<section class="tabs">
		<swiper :slides-per-view="4" @swiper="onSwiper">
			<SwiperSlide>
				<div class="tab">
					<p class="tit">
						<span class="en-b">The Freestyle</span><br />예약판매 중
					</p>
					<p class="date">22.01.17 ~ 22.02.28</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div class="tab">
					<p class="tit">BESPOKE 제트 | 제트 봇<br />런칭</p>
					<p class="date">22.02.22 ~ 22.02.28</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div class="tab">
					<p class="tit">BESPOKE 그랑데AI<br />런칭</p>
					<p class="date">22.01.17 ~ 22.02.28</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div class="tab">
					<p class="tit">BESPOKE 1도어<br />와인냉장고 런칭</p>
					<p class="date">22.02.28 ~</p>
				</div>
			</SwiperSlide>
		</swiper>
	</section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

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
	border-bottom: vw-pc(3) solid #000;
	.tab {
		width: vw-pc(327);
	}
}
</style>
