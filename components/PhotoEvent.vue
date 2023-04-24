<template>
  <section class="section sec_photo">
    <div class="section_container">
      <div class="aling_box">
        <div class="info_area">
          <div class="txt_box">
            <div class="title_box">
              <p class="main_txt">포토 상품평 이벤트</p>
              <p class="sub_txt">
                <strong>BE</strong>SPOKE 1도어 와인냉장고의 리얼 후기를<br class="m_show"> 삼성닷컴
                포토상품평으로<br class="m_hide">
                남긴 후 <br class="m_show">이벤트 응모 시 <strong>전원 올리브영 3만원</strong> 상품권을 드립니다!
              </p>
            </div>
            <dl>
              <dt>구매 기간</dt>
              <dd>2022.02.17(목) ~ 2022.02.27(일)</dd>
            </dl>
            <dl>
              <dt>작성 기간</dt>
              <dd>2022.02.28(월) ~ 2022.03.31(목)</dd>
            </dl>
            <dl>
              <dt>혜택 지급</dt>
              <dd>2022.04.01(금) 부터 순차 배송</dd>
            </dl>
            <dl>
              <dt>혜택 내용</dt>
              <dd>올리브영 3만원 모바일 상품권(전원 증정)</dd>
            </dl>
            <dl>
              <dt></dt>
              <dd>
                ※ 본본 혜택은 22.2.17~22.2.27 기간 내<br />
                삼성닷컴에서 BESPOKE 1도어 와인냉장고<br />
                사전 구매 후 이벤트 참여 시 전원 증정합니다
              </dd>
            </dl>
            <div class="btn_box">
              <nuxt-link to="#" class="common_button black_bg">응모하기</nuxt-link>
              <button
              class="toggle_arrow toggle_btn"
              :class="{ open: show }"
              @click="show = !show"
              >
              포토 상품평 유의사항 보기
				      </button>
            </div>
          </div>
          <picture>
            <source
              :srcset="'/event_olive_pc.png'"
              media="all and (min-width: 769px)"
            />
            <img :src="'/event_olive_mo.png'" alt="" />
          </picture>
        </div>
        <div class="way_area">
          <p class="small_title">이벤트 응모방법</p>
          <ul>
            <li>
              <picture>
                <source
                :srcset="'/event_way01_pc.png'"
                media="all and (min-width: 769px)"
                />
                <img :src="'/event_way01_mo.png'" alt="" />
              </picture>
              <p class="contents_txt">
                구매한 제품의<br />
                인증샷 <br class="m_show">촬영하기
              </p>
            </li>
            <li>
              <picture>
                <source
                :srcset="'/event_way02_pc.png'"
                media="all and (min-width: 769px)"
                />
                <img :src="'/event_way02_mo.png'" alt="" />
              </picture>
              <p class="contents_txt">
                <strong>[#삼성전자이벤트]</strong>와 함께<br class="m_hide"/>
                제품 페이지에서<br />
                포토 상품평 남기기
              </p>
              <p class="line_txt">상품평 쓰러가기 ></p>
            </li>
            <li>
              <picture>
                <source
                :srcset="'/event_way03_pc.png'"
                media="all and (min-width: 769px)"
                />
                <img :src="'/event_way03_mo.png'" alt="" />
              </picture>
              <p class="contents_txt">
                개인정보 입력과 함께<br />
                <strong>[응모하기]</strong> 버튼 클릭
              </p>
              <p class="apply_txt">응모하기</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn_box_mo">
        <nuxt-link to="#" class="common_button black_bg">응모하기</nuxt-link>
        <button
        class="toggle_arrow toggle_btn"
        :class="{ open: show }"
        @click="show = !show"
        >
        포토 상품평 유의사항 보기
        </button>
      </div>
      <div v-if="show">
        <div class="toggle_contents">
          <PhotoEventNotice />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoEventNotice from "./PhotoNotice.vue";

export default {
  
  components: {PhotoEventNotice},

  setup() {
	const show = ref(false);
    return {show};
  },
};
</script>

