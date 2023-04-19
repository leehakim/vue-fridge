<template>
	<section class="section benefit">
		<div class="section-container">
			<p class="title">런칭 구매 혜택</p>
			<swiper :slides-per-view="3">
				<SwiperSlide v-for="benefit in benefits" :key="benefit.idx">
					<BenefitListItem :benefit="benefit"></BenefitListItem>
				</SwiperSlide>
			</swiper>
			<div class="center-box">
				<button class="toggle-btn" @click="show = !show">
					혜택 유의사항을 꼭 확인하세요
				</button>
				<div v-if="show" class="toggle-contents">
					<p>혜택 유의 사항</p>
				</div>
			</div>
		</div>
		{{ benefitData }}
	</section>
</template>

<script>
import BenefitListItem from './BenefitListItem.vue';
import benefitData from '~/json-data/BenefitList.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
	name: 'BenefitList',
	components: { BenefitListItem, Swiper, SwiperSlide },
	setup() {
		const show = ref(false);
		const benefits = benefitData.benefit_list;
		return { show, benefits };
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/benefit.scss';
</style>
