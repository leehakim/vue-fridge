<template>
  <div id="fridge">
    <TheTitle />
    <TheTabs />
    <KeyVisual />
    <BenefitList />
    <BuyingList />
    <IntroProduct />
    <PhotoEvent />
    <MembershipList />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import BuyingList from "../../components/BuyingList.vue";

export default defineComponent({
  components: { BuyingList },
  setup() {},
});
</script>

<style lang="scss">
@import "@/assets/style/collectionWine.scss";
</style>
