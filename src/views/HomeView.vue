<template>
  <section>
    <div class="container">
      <div class="product-imgs">
        <img
          class="main-img"
          :src="
            require(`../assets/images/products/${productData.id}/${productData.images.main}`)
          "
          :alt="`product-${productData.id}-main-image`"
        />
        <div class="extra-imgs-box">
          <img
            v-for="img in productData.images.extra"
            :key="img"
            :src="require(`../assets/images/products/${productData.id}/${img}`)"
            :alt="`product-${productData.id}-extra-image`"
          />
        </div>
      </div>
      <div class="product-info">
        <span class="company-name" v-text="productData.company"></span>
        <span class="product-name" v-text="productData.name"></span>
        <p class="product-description" v-text="productData.description"></p>
        <div class="price-box">
          <span
            class="before-discount"
            v-text="productData.priceBeforeDiscount"
          ></span>
          <span class="discount-rate" v-text="productData.discountRate"></span>
          <span
            class="after-discount"
            v-text="productData.priceAfterDiscount"
          ></span>
        </div>
        <div>
          <div class="items-number-box">
            <button class="decrease"></button>
            <span v-text="itemsNumber"></span>
            <button class="increase"></button>
          </div>
          <button class="add-cart"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeView",
  data: function () {
    return {
      itemsNumber: 0,
    };
  },
  computed: {
    ...mapState(["productData"]),
  },
};
</script>

<style></style>
