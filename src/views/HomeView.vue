<template>
  <div class="container">
    <section class="main-section">
      <ProductImgs />
      <ProductInfo />
      <ProductImgsPopup v-if="imgsPopup === true" />
    </section>
  </div>
</template>

<script>
import ProductImgs from "@/components/ProductImgs";
import ProductInfo from "@/components/ProductInfo";
import ProductImgsPopup from "@/components/ProductImgsPopup";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  components: {
    ProductImgs,
    ProductInfo,
    ProductImgsPopup,
  },
  computed: {
    ...mapState(["imgsPopup"]),
  },
};
</script>

<style lang="scss">
.container {
  @include underTablet {
    padding: 0;
    margin: 0;
  }
  section.main-section {
    padding: 80px 160px 10px 50px;
    display: flex;
    gap: 100px;
    @include underLarge {
      padding: 80px 80px 10px 50px;
    }
    @include underMedium {
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }
    @include underTablet {
      padding: 0;
      gap: 0;
    }
  }
}
</style>
