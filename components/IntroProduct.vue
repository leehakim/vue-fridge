<template>
	<section class="sec_info">
		<div class="inner_1320">
			<div class="title_box">
				<p><strong>BESPOKE,</strong> 와인 전문 냉장고를 소개합니다</p>
				<a href="javascript:;" class="detail_btn">제품 자세히 보기</a>
			</div>
			<swiper class="swiper" :options="swiperOption">
				<SwiperSlide  v-for="(group, idx) in groupList" :key="idx">
					{{ group.item }}
					<div class="slide_list">
						<picture>
							<img :src="'/intro_slide' + index + '_pc.png'">
						</picture>
						<div class="contents_area">
							<picture>
								<img :src="'/intro_slide_ico' + index + '_pc.png'">
							</picture>
							<div class="txt_box">
								<p class="main_txt">
									{{ group.MainTxt }}
								</p>
								<p class="sub_txt">
									{{ group.SubTxt }}
								</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</swiper>
		</div>
	</section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import JasonData from '/json-data/IntroData.json';

var groupList = JasonData;


export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	methods : {
		index: {
			type: String,
			default: '1',
		},
	},
	setup() {
		return {
			groupList,
		};
	},
};
</script>

<style lang="scss">
.sec_info {
	nuxt-link {width: 100%;}
	.title_box {
		display: flex;
		align-items: center;
		margin-bottom: vw-pc(35);
		p {
			margin-right: vw-pc(20);
			font-size: vw-pc(26);
			line-height: vw-pc(36);
		}
		.detail_btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: vw-pc(158);
			height: vw-pc(38);
			background-color: #000;
			font-size: vw-pc(18);
			line-height: vw-pc(32);
			border-radius: vw-pc(19);
			color: #fff;
			font-weight: 700;
			letter-spacing: vw-pc(-1);
		}
	}
	.swiper-slide {
		width: vw-pc(536) !important;
		margin-right: vw-pc(24);
		.slide_list {
			> picture {
				margin-bottom: vw-pc(25);
			}
			.contents_area {
				display: flex;
				> picture {
					margin-right: vw-pc(20);
				}
				.txt_box {
					.main_txt {
						margin-bottom: vw-pc(10);
						font-size: vw-pc(24);
						line-height: vw-pc(26);
						letter-spacing: vw-pc(-1);
						font-weight: 700;
					}
					.sub_txt {
						margin-bottom: vw-pc(20);
						font-size: vw-pc(16);
						line-height: vw-pc(26);
						letter-spacing: vw-pc(-1);
					}
					.add_txt {
						font-size: vw-pc(14);
						line-height: vw-pc(22);
						letter-spacing: vw-pc(-2.5);
						color: #717171;
					}
				}
			}
		}
		&:nth-child(1) .contents_area picture {
			width: vw-pc(32);
		}
		&:nth-child(2) .contents_area picture {
			width: vw-pc(15);
		}
		&:nth-child(3) .contents_area picture {
			width: vw-pc(22);
		}
		&:nth-child(4) .contents_area picture {
			width: vw-pc(55);
		}
		&:nth-child(5) .contents_area picture {
			width: vw-pc(15);
		}
		&:nth-child(6) .contents_area picture {
			width: vw-pc(44);
		}
		&:nth-child(7) .contents_area picture {
			width: vw-pc(50);
		}
	}
}
</style>
