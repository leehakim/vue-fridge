<template>
	<div class="benefit-item">
		<picture>
			<source
				srcset="/benefit_bg_01_pc.png"
				media="all and (min-width: 769px)"
			/>
			<img src="/benefit_bg_01_pc.png" alt="" />
		</picture>
		<div class="tag">
			<p><slot name="tag"></slot></p>
		</div>
		<div class="text-box">
			<p class="tit"><slot name="tit"></slot></p>
			<p class="copy">
				<slot name="copy"></slot>
				{{ bgImg }}
			</p>
			<a v-if="$slots.cta" href="" class="cta"><slot name="cta"></slot></a>
			<p v-if="$slots.disclaimer" class="disclaimer">
				<slot name="disclaimer"></slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		bgImg: {
			type: String,
			default: '',
		},
	},
	setup(props) {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/benefit-item.scss';
</style>
