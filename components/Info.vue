<template>
	<section class="sec_info">
        <div class="inner_1320">
            <div class="title_box">
                <p><strong>BESPOKE,</strong> 와인 전문 냉장고를 소개합니다</p>
                <a href="javascript:;" class="detail_btn">제품 자세히 보기</a>
            </div>
            <swiper class="swiper" :options="swiperOption">
                <SwiperSlide>
                    <div class="slide_list">
                        <picture>
                            <img src="/info_slide01_pc.png" alt="와인냉장고 앞면 107cm, 옆면 70cm 핏 설명">
                        </picture>
                        <div class="contents_area">
                            <picture>
                                <img src="/info_slide_ico01_pc.png" alt="비스포크 냉장고 아이콘">
                            </picture>
                            <div class="txt_box">
                                <p class="main_txt">BESPOKE 디자인&오리지널 키친핏</p>
                                <p class="sub_txt">
                                    다양한 소재와 컬러의 도어 패널 그리고 딱 맞는 키친핏까지,<br>
                                    덕분에 바라만 보아도 행복한 공간을 선사합니다
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide_list">
                        <picture>
                            <img src="/info_slide02_pc.png" alt="상칸 4~18도, 하칸 1~18도 설명">
                        </picture>
                        <div class="contents_area">
                            <picture>
                                <img src="/info_slide_ico02_pc.png" alt="온도계 아이콘">
                            </picture>
                            <div class="txt_box">
                                <p class="main_txt">2개존 개별 온도 설정을 통한 최적의 와인 보관</p>
                                <p class="sub_txt">
                                    상칸 4℃에서 18℃까지, 하칸 1℃에서 18℃까지 설정 가능합니다<br>
                                    약 70병의 와인을 각각 최적의 온도로 보관하세요!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide_list">
                        <picture>
                            <img src="/info_slide03_pc.png" alt="코르코마개 4개">
                        </picture>
                        <div class="contents_area">
                            <picture>
                                <img src="/info_slide_ico03_pc.png" alt="물방울 온도 아이콘">
                            </picture>
                            <div class="txt_box">
                                <p class="main_txt">와인에 최적화된 적정 습도 유지</p>
                                <p class="sub_txt">
                                    와인에 최적화된 70% 적정 습도를 유지해줍니다.<br>
                                    빛이 차단되는 불투명 도어패널로 와인을 더욱 효과적으로 보관해보세요
                                </p>
                                <p class="add_txt">
                                    *70% 습도유지주위온도 32도, 고내 Notch 11℃ - 11℃ setting 조건이며,<br>
                                    환경에 따라 달라질 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide_list">
                        <picture>
                            <img src="/info_slide04_pc.png" alt="와인냉장고 설계 설명">
                        </picture>
                        <div class="contents_area">
                            <picture>
                                <img src="/info_slide_ico04_pc.png" alt="음소거 아이콘">
                            </picture>
                            <div class="txt_box">
                                <p class="main_txt">와인의 맛을 오랫동안 유지하는 저소음 · 저진동 설계</p>
                                <p class="sub_txt">
                                    와인의 맛을 오랫동안 유지해줄 뿐만 아니라<br>
                                    저소음, 저진동 설계로 조용하고 편안한 환경을 누려보세요
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide_list">
                        <picture>
                            <img src="/info_slide05_pc.png" alt="상칸 4~18도, 하칸 1~18도 설명">
                        </picture>
                        <div class="contents_area">
                            <picture>
                                <img src="/info_slide_ico05_pc.png" alt="온도계 아이콘">
                            </picture>
                            <div class="txt_box">
                                <p class="main_txt">2개존 개별 온도 설정을 통한 최적의 와인 보관</p>
                                <p class="sub_txt">
                                    상칸 4℃에서 18℃까지, 하칸 1℃에서 18℃까지 설정 가능합니다<br>
                                    약 70병의 와인을 각각 최적의 온도로 보관하세요!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide_list">
                        <picture>
                            <img src="/info_slide06_pc.png" alt="와인 정보 및 smartThings 설명">
                        </picture>
                        <div class="contents_area">
                            <picture>
                                <img src="/info_slide_ico06_pc.png" alt="메뉴 아이콘">
                            </picture>
                            <div class="txt_box">
                                <p class="main_txt">소믈리에 앳 홈 (와인 정보 기록,관리,음식 페어링까지)</p>
                                <p class="sub_txt">
                                    와인의 정보부터 기록과 보관까지 편리하게~<br>
                                    어울리는 요리 추천까지 SmartThings가 도와드려요
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide_list">
                        <picture>
                            <img src="/info_slide07_pc.png" alt="도어 센서부 설명">
                        </picture>
                        <div class="contents_area">
                            <picture>
                                <img src="/info_slide_ico07_pc.png" alt="손바닥 오토 아이콘">
                            </picture>
                            <div class="txt_box">
                                <p class="main_txt">오토 오픈 도어</p>
                                <p class="sub_txt">
                                    한 번의 간편한 터치로 냉장고 문을 보다 편하게~<br>
                                    편리함을 위한 오토 오픈 도어 기능이 적용되었습니다
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

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
    
	setup() {
		return {
            swiperOption: {
                autoplay: {
                  delay: 1000,
                },
            }
		};
	},
};
</script>

<style lang="scss" scoped>
.sec_info {
    .title_box {
        display: flex; align-items: center; margin-bottom: vw-pc(35);
        p {margin-right: vw-pc(20);font-size: vw-pc(26);line-height: vw-pc(36); }
        .detail_btn {display: flex;align-items: center;justify-content: center;width: vw-pc(158); height: vw-pc(38); background-color: #000; font-size: vw-pc(18); line-height: vw-pc(32); border-radius: vw-pc(19); color: #fff; font-weight: 700; letter-spacing: vw-pc(-1);}
    }
    .swiper-slide {
        width: vw-pc(536)!important;margin-right: vw-pc(24); 
        .slide_list {
            > picture {margin-bottom:vw-pc(25)}
            .contents_area {
                display: flex;
                > picture {margin-right: vw-pc(20);}
                .txt_box {
                    .main_txt {margin-bottom: vw-pc(10);font-size: vw-pc(24); line-height: vw-pc(26); letter-spacing: vw-pc(-1); font-weight: 700;}
                    .sub_txt {margin-bottom: vw-pc(20);font-size: vw-pc(16); line-height: vw-pc(26); letter-spacing: vw-pc(-1);}
                    .add_txt {font-size: vw-pc(14); line-height: vw-pc(22); letter-spacing: vw-pc(-2.5); color: #717171}
                }
            }
        }
        &:nth-child(1) .contents_area picture {width: vw-pc(32);}
        &:nth-child(2) .contents_area picture {width: vw-pc(15);}
        &:nth-child(3) .contents_area picture {width: vw-pc(22);}
        &:nth-child(4) .contents_area picture {width: vw-pc(55);}
        &:nth-child(5) .contents_area picture {width: vw-pc(15);}
        &:nth-child(6) .contents_area picture {width: vw-pc(44);}
        &:nth-child(7) .contents_area picture {width: vw-pc(50);}
    }
}
</style>
