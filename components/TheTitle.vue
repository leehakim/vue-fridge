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
.title {
	.text-box {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 100%;
		text-align: center;
	}
	.tit {
		font-size: vw-pc(48);
		letter-spacing: -0.05em;
	}
	.desc {
		margin-top: vw-pc(39);
		color: #666;
		font-size: vw-pc(22);
		line-height: vw-pc(38);
		letter-spacing: -0.025em;
	}
}

@media (max-width: 768px) {
	.title {
		.tit {
			font-size: vw-mo(72);
			line-height: vw-mo(86);
		}
		.desc {
			margin-top: vw-mo(68);
			font-size: vw-mo(24);
			line-height: vw-mo(38);
			letter-spacing: -0.05em;
		}
	}
}
</style>
