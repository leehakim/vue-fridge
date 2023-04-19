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
						<template #tit>삼성전자 멤버십<br />최대 26만 포인트 적립</template>
					</MembershipListItem>
				</li>
				<li>
					<MembershipListItem idx="2">
						<template #tit
							>삼성닷컴 회원 제휴카드<br />결제 시 최대 3% 할인</template
						>
					</MembershipListItem>
				</li>
				<li>
					<MembershipListItem idx="3">
						<template #tit> 고객이 원하는 배송일<br />지정 서비스</template>
						<template #disclaimer> 일부 제품 제외 </template>
					</MembershipListItem>
				</li>
				<li>
					<MembershipListItem idx="4">
						<template #tit>
							삼성닷컴 제품 구매 시<br />전제품 배송비 무료</template
						>
					</MembershipListItem>
				</li>
				<li>
					<MembershipListItem idx="5">
						<template #tit>#YouMake 프로젝트</template>
						<template #copy>
							내 라이프스타일에 딱 맞는 나만의 제품을 만나보세요<br />오직
							당신만을 위한 새로운 경험이 펼쳐집니다
						</template>
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
@import '@/assets/style/membership.scss';
</style>
