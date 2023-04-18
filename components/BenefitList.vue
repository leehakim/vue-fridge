<template>
	<section class="section benefit">
		<div class="section-container">
			<p class="title">런칭 구매 혜택</p>
			<ul>
				<li>
					<BenefitListItem idx="1">
						<template #tag> 런칭<br />혜택 </template>
						<template #tit> 4만P 지급 </template>
						<template #copy>
							삼성전자 멤버 십 포인트<br /><span class="en-b">40,000 P</span>
							증정
						</template>
						<template #cta>자세히 보기</template>
						<template #disclaimer>
							삼성전자 멤버십 구매 금액대별<br />포인트 적립 기준
						</template>
					</BenefitListItem>
				</li>
				<li>
					<BenefitListItem idx="2">
						<template #tag> 전문<br />설치 </template>
						<template #tit> 삼성닷컴 혜택 </template>
						<template #copy> 고객이 원하는 배송일<br />지정 서비스 </template>
						<template #disclaimer> 일부 제품 제외 </template>
					</BenefitListItem>
				</li>
				<li>
					<BenefitListItem idx="3">
						<template #tag> 배송<br />무료 </template>
						<template #tit> 삼성닷컴 혜택 </template>
						<template #copy>
							삼성닷컴 제품 구매 시<br />전제품 배송 무료
						</template>
					</BenefitListItem>
				</li>
			</ul>
			<div class="center-box">
				<button class="toggle-btn" @click="show = !show">
					혜택 유의사항을 꼭 확인하세요
				</button>
				<div v-if="show" class="toggle-contents">
					<p>혜택 유의 사항</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import BenefitListItem from './BenefitListItem.vue';
export default {
	components: { BenefitListItem },
	setup() {
		const show = ref(false);
		return { show };
	},
};
</script>

<style lang="scss" scoped>
.benefit {
	margin: vw-pc(100) auto vw-pc(92);
	.section-container {
		padding: 0 vw-pc(60);
	}
	.title {
		font-size: vw-pc(40);
		font-weight: 700;
		letter-spacing: -0.025em;
	}
	ul {
		display: flex;
		justify-content: space-between;
		margin-top: vw-pc(40);
	}
	.center-box {
		margin-top: vw-pc(40);
		text-align: center;
	}
	.toggle-btn {
		display: inline-block;
		border-bottom: 1px solid #000;
		color: #000;
		font-size: vw-pc(18);
		font-weight: 700;
		letter-spacing: -0.025em;
		line-height: vw-pc(29);
		&::after {
			content: '>';
		}
	}
}
</style>
