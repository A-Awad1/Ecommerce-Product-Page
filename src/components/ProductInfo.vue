<template>
  <div class="product-info">
    <span class="company-name" v-text="productData.company"></span>
    <span class="product-name" v-text="productData.name"></span>
    <p class="product-description" v-text="productData.description"></p>
    <div class="price-box">
      <div>
        <span class="after-discount">{{
          productData.priceAfterDiscount.toFixed(2)
        }}</span>
        <span class="discount-rate" v-text="productData.discountRate"></span>
      </div>
      <span class="before-discount">{{
        productData.priceBeforeDiscount.toFixed(2)
      }}</span>
    </div>
    <div class="btns-box">
      <div class="items-number-box">
        <button class="decrease">
          <img src="../assets/images/icon-minus.svg" alt="icon-minus" />
        </button>
        <span v-text="itemsNumber"></span>
        <button class="increase">
          <img src="../assets/images/icon-plus.svg" alt="icon-plus" />
        </button>
      </div>
      <button class="add-cart">
        <svg
          class="icon-cart"
          xmlns="http://www.w3.org/2000/svg"
          @click="CartList = !CartList"
        >
          <path :d="iconCartD" fill="#69707D" fill-rule="nonzero" />
        </svg>
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductInfo",
  data: function () {
    return {
      itemsNumber: 0,
    };
  },
  computed: {
    ...mapState(["productData", "iconCartD"]),
  },
};
</script>

<style lang="scss">
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include underTablet {
    padding: 20px;
  }
  .company-name {
    text-transform: uppercase;
    color: $orange-color;
    letter-spacing: 1px;
    font: {
      weight: 700;
      size: 14px;
    }
    @include underMedium {
      font-size: 12px;
    }
  }
  .product-name {
    color: $important-text-color;
    line-height: 1;
    margin: 15px 0 30px;
    font: {
      weight: 700;
      size: 40px;
    }
    @include underMedium {
      font-size: 30px;
      margin: 10px 0 20px;
    }
  }
  .product-description {
    color: $main-text-color;
    line-height: 1.4;
    @include underMedium {
      font-size: 14px;
    }
  }
  .price-box {
    margin: 20px 0;
    font: {
      weight: bold;
      size: 14px;
    }
    @include underMedium {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    div {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 8px;
      @include underMedium {
        margin-bottom: 0;
      }
      .after-discount {
        color: $important-text-color;
        font-size: 23px;
        &::before {
          content: "$";
        }
      }
      .discount-rate {
        color: $orange-color;
        background-color: $pale-orange-color;
        border-radius: $main-border-radius;
        padding: 3px 6px;
        &::after {
          content: "%";
        }
      }
    }
    .before-discount {
      color: $grayish-blue-color;
      position: relative;
      &::before {
        content: "$";
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: $grayish-blue-color;
        bottom: 6px;
        left: 0;
      }
    }
  }
  .btns-box {
    display: flex;
    @include underMedium {
      flex-direction: column;
    }
    gap: 15px;
    .items-number-box {
      background-color: $light-grayish-blue-color;
      border-radius: $main-border-radius;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-basis: 30%;
      font: {
        weight: bold;
        size: 14px;
      }
      button {
        border: none;
        background-color: transparent;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 10px;
        &:hover {
          opacity: 0.5;
          transition: $main-transition;
        }
      }
    }
    .add-cart {
      flex: 1;
      font-size: 14px;
      color: $light-grayish-blue-color;
      background-color: $orange-color;
      flex: 1;
      display: flex;
      gap: 10px;
      justify-content: center;
      border-radius: $main-border-radius;
      border: none;
      padding: 15px;
      svg.icon-cart {
        width: 22px;
        height: 20px;
        transform: scale(0.7);
        margin-top: -3px;
        path {
          fill: $light-grayish-blue-color;
        }
      }
      &:hover {
        opacity: 0.5;
        transition: $main-transition;
      }
    }
  }
}
</style>
