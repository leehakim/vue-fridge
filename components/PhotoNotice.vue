<template>
  <div class="notice">
    <div class="notice_container">
      <div class="text_box">
        <NoticeItem :notice-data="NoticeData[0]" />
      </div>
      <div class="text_box">
        <NoticeItem :notice-data="NoticeData[1]" />
      </div>
    </div>
  </div>
</template>

<script>
import NoticeData from "~/json-data/PhotoEventNotice.json";
import NoticeItem from "./NoticeItem.vue";
export default {
  components: { NoticeItem },
  setup() {
    return { NoticeData };
  },
};
</script>
