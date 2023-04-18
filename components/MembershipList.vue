<template>
	<section class="section membership">
		<div class="section-container">
			<p class="title">삼성닷컴 회원 혜택 모두보기</p>
			<div class="btn-wrap">
				<a href="javascript:;" class="sign-up">회원 가입하기</a>
				<a href="javascript:;" class="more">더 많은 혜택 보러가기</a>
			</div>
			<ul>
				<li>
					<MembershipListItem idx="1">
						<template #tit> 삼성전자 멤버십<br />최대 26만 포인트 적립</template>
					</MembershipListItem>
				</li>
				<li>
					<MembershipListItem idx="2">
						<template #tit> 삼성닷컴 회원 제휴카드<br />결제 시 최대 3% 할인 </template>
					</MembershipListItem>
				</li>
				<li>
					<MembershipListItem idx="3">
						<template #tit> 고객이 원하는 배송일<br />지정 서비스</template>
						<template #disclaimer>
							일부 제품 제외
						</template>
					</MembershipListItem>
				</li>
				<li>
					<MembershipListItem idx="4">
						<template #tit> 삼성닷컴 제품 구매 시<br />전제품 배송비 무료</template>
					</MembershipListItem>
				</li>
			</ul>
			<div class="center-box">
				<a class="btn-toggle" href="#">혜택 유의사항을 꼭 확인하세요</a>
			</div>
		</div>
	</section>
</template>

<script>
import MembershipListItem from './MembershipListItem.vue';
export default {
	components: { MembershipListItem },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.membership {
	margin: vw-pc(100) auto vw-pc(92);
	padding: vw-pc(130) 0 vw-pc(150) 0;
	background: #f5f5f5;
	.section-container {
		padding: 0 vw-pc(60);
	}
	.title {
		margin-bottom: vw-pc(48);
		font-size: vw-pc(42);
		font-weight: 700;
		letter-spacing: -0.025em;
		text-align: center;
	}
	.btn-wrap{
		display: flex;
		align-items: center;
		justify-content: center;
		.sign-up{
			display: flex;
			align-items: center;
			justify-content: center;
			width:vw-pc(138);
			height: vw-pc(38);
			margin-right: vw-pc(32);
			border-radius:vw-pc(19);
			background: #000000;
			font-size: vw-pc(16);
			font-weight: 700;
			color: #ffffff;
		}
		.more{
			position: relative;
			padding-bottom: vw-pc(5);
			padding-right: vw-pc(17);
			border-bottom: 1px solid #000;
			font-size: vw-pc(18);
			font-weight: 700;
			letter-spacing: -0.025em;
			&::after{
				content:'';
				position: absolute;
				right: 0;
				bottom: vw-pc(9);
				width:6px;
				height: 10px;
				background: url('/public/arrow_right_pc.png') no-repeat center;
			}
		}
	}
	ul {
		display: flex;
		justify-content: space-between;
		margin-top: vw-pc(40);
		li{
			border-radius: vw-pc(10);
			&:nth-child(1){
				background: #efdfbb;
			}
			&:nth-child(2){
				background: #c6e3f1;
			}
			&:nth-child(3){
				background: #bfede2;
			}
			&:nth-child(4){
				background: #c0d6f4;
			}
		}
	}
	.center-box {
		margin-top: vw-pc(40);
		text-align: center;
	}
	.btn-toggle {
		display: inline-block;
		border-bottom: 1px solid #000;
		color: #000;
		font-size: vw-pc(18);
		font-weight: 700;
		letter-spacing: -0.025em;
		line-height: vw-pc(29);
	}
}
</style>
