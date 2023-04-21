<template>
  <div class="notice">
    <div class="notice_container">
      <div class="text_box">
        <NoticeItem :notice-data="NoticeData[0]" />
        <NoticeItem :notice-data="NoticeData[1]" />
      </div>
      <div class="text_box">
        <NoticeItem :notice-data="NoticeData[2]" />
        <NoticeItem :notice-data="NoticeData[3]" />
        <NoticeItem :notice-data="NoticeData[4]" />
      </div>
    </div>
  </div>
</template>

<script>
import NoticeData from "~/json-data/MembershipNotice.json";
import NoticeItem from "./NoticeItem.vue";
export default {
  components: { NoticeItem },
  setup() {
    return { NoticeData };
  },
};
</script>
