<template>
	<section class="section title">
		<picture>
			<source srcset="/title_bg_pc.png" media="all and (min-width: 769px)" />
			<img src="/title_bg_mo.png" alt="" />
		</picture>
		<div class="text-box">
			<p class="tit">
				<span class="en-b">2022</span> 삼성전자 <br class="m-show" />신상 컬렉션
			</p>
			<p class="desc">
				올해 새롭게 선보이는 삼성 TV부터 BESPOKE 주방가전, 생활가전까지
				<br />
				모든 신제품을 삼성닷컴 특별 혜택으로 가장 먼저 만나보세요
			</p>
		</div>
	</section>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/title.scss';
</style>
