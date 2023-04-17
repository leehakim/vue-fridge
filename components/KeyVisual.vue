<template>
	<section class="section kv">
		<picture>
			<source srcset="/kv_bg_pc.png" media="all and (min-width: 769px)" />
			<img src="/kv_bg_mo.png" alt="" />
		</picture>
		<div class="text-box">
			<p class="tit">BESPOKE 와인냉장고<br />런칭</p>
			<p class="desc">와인 보관부터 관리, 푸드 페어링까지 전문적이고 쉽게</p>
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
.kv {
	.text-box {
		position: absolute;
		top: 50%;
		left: vw-pc(296);
		transform: translateY(-50%);
		color: #fff;
	}
	.tit {
		font-size: vw-pc(54);
		line-height: vw-pc(55);
		font-weight: 700;
	}
	.desc {
		margin-top: vw-pc(35);
		font-size: vw-pc(24);
		letter-spacing: -0.025em;
		line-height: vw-pc(35);
	}
}

@media (max-width: 768px) {
	.kv {
		.text-box {
			top: vw-mo(133);
			left: 0;
			transform: none;
			width: 100%;
			text-align: center;
		}
		.tit {
			font-size: vw-mo(64);
			line-height: vw-mo(70);
		}
		.desc {
			margin-top: vw-mo(38);
			font-size: vw-mo(26);
			letter-spacing: -0.02em;
			line-height: vw-mo(34);
		}
	}
}
</style>
