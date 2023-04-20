<template>
  <dl>
    <dt>{{ noticeData.title }}</dt>
    <dd v-for="(text, idx) in noticeData.text" :key="idx">
      {{ text }}
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    noticeData: {
      type: Object,
      default() {
        return {
          title: "title",
          text: ["text"],
        };
      },
    },
  },
  setup(props) {
    return {};
  },
};
</script>
