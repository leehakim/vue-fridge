<template>
	<div class="benefit-item">
		<div class="tag">
			<p><slot name="tag"></slot></p>
		</div>
		<div class="text-box">
			<p class="tit"><slot name="tit"></slot></p>
			<p class="copy">
				<slot name="copy"></slot>
			</p>
			<slot name="cta"></slot>
			<p class="disclaimer">
				<slot name="disclaimer"></slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/benefit-item.scss';
</style>
