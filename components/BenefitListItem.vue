<template>
  <div class="benefit_list_item">
    <picture class="img_box">
      <source
        :srcset="'/benefit_bg_0' + benefit.idx + '_pc.png'"
        media="all and (min-width: 769px)"
      />
      <img :src="'/benefit_bg_0' + benefit.idx + '_mo.png'" alt="" />
    </picture>
    <div class="tag">
      <p>{{ benefit.tag }}</p>
    </div>
    <div class="text_box">
      <p class="tit">{{ benefit.title }}</p>
      <p class="copy">{{ benefit.copy }}</p>
      <a v-if="benefit.cta" href="/" class="cta">{{ benefit.cta }}</a>
      <p v-if="benefit.disclaimer" class="disclaimer">
        {{ benefit.disclaimer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    benefit: {
      type: Object,
      default() {
        return {
          idx: 1,
          tag: "tag",
          title: "title",
          copy: "copy",
          cta: "cta",
          disclaimer: "disclaimer",
        };
      },
    },
  },
  setup(props) {
    return {};
  },
};
</script>
