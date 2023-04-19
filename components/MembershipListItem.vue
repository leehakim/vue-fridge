<template>
	<div class="membership_list_item">
		<picture>
			<source
				:srcset="'/membership_bg_0' + idx + '_pc.png'"
				media="all and (min-width: 769px)"
			/>
			<img :src="'/membership_bg_0' + idx + '_mo.png'" alt="" />
		</picture>
		<div class="text_box">
			<p class="tit"><slot name="tit"></slot></p>
			<p class="copy">
				<slot name="copy"></slot>
			</p>
			<a v-if="$slots.cta" href="#" class="cta"><slot name="cta"></slot></a>
			<p v-if="$slots.disclaimer" class="disclaimer">
				<slot name="disclaimer"></slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		idx: {
			type: String,
			default: '1',
		},
	},
	setup(props) {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/membership.scss';
</style>
