<template>
	<div class="membership-list-item">
		<picture>
			<source
				:srcset="'/membership_bg_0' + idx + '_pc.png'"
				media="all and (min-width: 769px)"
			/>
			<img :src="'/membership_bg_0' + idx + '_mo.png'" alt="" />
		</picture>
		<div class="text-box">
			<p class="tit"><slot name="tit"></slot></p>
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
			type: string,
			default: 1,
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
