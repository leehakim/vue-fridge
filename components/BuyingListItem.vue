<template>
  <div class="buying_item">
    <div class="buying_item_container">
      <picture class="img_box buying_img">
        <source
          :srcset="'/product/buying_' + item.prd_num + '_pc.png'"
          media="all and (min-width: 769px)"
        />
        <img :src="'/product/buying_' + item.prd_num + '_mo.png'" alt="" />
      </picture>
      <div class="text_box">
        <p class="color">{{ item.color }}</p>
        <p class="prd_num">{{ item.prd_num }}</p>
        <hr class="divider" />
        <dl class="price_box">
          <dt>판매가</dt>
          <dd>
            <span class="en_b">{{ item.price }}</span>원
          </dd>
        </dl>
        <dl class="benefit_box">
          <dt>혜택가</dt>
          <dd>
            <span class="en_b">{{ item.benefit }}</span>원
          </dd>
        </dl>
      </div>
    </div>
    <div v-if="item.new" class="tag new">
      <p><span class="en_b">NEW</span>컬러</p>
    </div>
    <div v-if="item.best" class="tag best">
      <p><span class="en_b">BEST</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          color: "color",
          prd_num: "prd_num",
          price: "2,000,000",
          benefit: "1,000,000",
          new: false,
          best: false,
        };
      },
    },
  },
  setup(props) {
    return {};
  },
};
</script>
