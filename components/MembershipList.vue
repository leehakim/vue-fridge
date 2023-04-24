<template>
  <section class="section membership">
    <div class="section_container">
      <p class="title">삼성닷컴 회원 혜택 모두보기</p>
      <div class="btn_wrap">
        <a href="#" class="sign_up common_button black_bg btn_custom"
          >회원 가입하기</a
        >
        <a href="#" class="more">더 많은 혜택 보러가기</a>
      </div>
      <ul>
        <li v-for="membership in memberships" :key="membership.idx">
          <MembershipListItem :membership="membership"></MembershipListItem>
        </li>
      </ul>
      <div class="center_box">
        <button
          class="toggle_arrow toggle_btn"
          :class="{ open: show }"
          @click="show = !show"
        >
          혜택 유의사항을 꼭 확인하세요
        </button>
        <div v-if="show">
          <div class="toggle_contents">
            <MembershipNotice />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MembershipListItem from "./MembershipListItem.vue";
import MembershipData from "~/json-data/MembershipList.json";

import MembershipNotice from "./MembershipNotice.vue";
export default {
  name: "MembershipList",
  components: { MembershipListItem, MembershipNotice },
  setup() {
    const show = ref(false);
    const memberships = MembershipData.membership_list;
    return { show, memberships };
  },
};
</script>
