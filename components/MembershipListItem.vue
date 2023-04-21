<template>
  <div class="membership_list_item">
    <picture>
      <source
        :srcset="'/membership_bg_0' + membership.idx + '_pc.png'"
        media="all and (min-width: 769px)"
      />
      <img :src="'/membership_bg_0' + membership.idx + '_mo.png'" alt="" />
    </picture>
    <div class="text_box">
      <p class="tit">{{ membership.title }}</p>
      <p class="copy">{{ membership.copy }}</p>
      <a v-if="membership.cta" href="/" class="cta">{{ membership.cta }}</a>
      <p v-if="membership.disclaimer" class="disclaimer">
        {{ membership.disclaimer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    membership: {
      type: Object,
      default() {
        return {
          idx: 1,
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
