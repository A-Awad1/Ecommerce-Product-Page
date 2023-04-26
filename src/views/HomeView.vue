<template>
  <div class="container">
    <section class="main-section">
      <div class="product-imgs">
        <div class="displayed-image">
          <img
            :src="
              require(`../assets/images/products/${productData.id}/${productData.images[0]}`)
            "
            :alt="`product-${productData.id}-main-image`"
          />
        </div>
        <div class="all-imgs-box">
          <div v-for="img in productData.images" :key="img">
            <img
              class="chosen-img"
              :src="
                require(`../assets/images/products/${productData.id}/${img}`)
              "
              :alt="`product-${productData.id}-extra-image`"
            />
          </div>
        </div>
      </div>
      <div class="product-info">
        <span class="company-name" v-text="productData.company"></span>
        <span class="product-name" v-text="productData.name"></span>
        <p class="product-description" v-text="productData.description"></p>
        <div class="price-box">
          <div>
            <span class="after-discount">{{
              productData.priceAfterDiscount.toFixed(2)
            }}</span>
            <span
              class="discount-rate"
              v-text="productData.discountRate"
            ></span>
          </div>
          <span class="before-discount">{{
            productData.priceBeforeDiscount.toFixed(2)
          }}</span>
        </div>
        <div class="btns-box">
          <div class="items-number-box">
            <button class="decrease"></button>
            <span v-text="itemsNumber"></span>
            <button class="increase"></button>
          </div>
          <button class="add-cart"></button>
        </div>
      </div>
    </section>
  </div>
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

<style lang="scss">
section.main-section {
  padding: 80px 113px 10px 50px;
  display: flex;
  gap: 100px;
  .product-imgs {
    width: min-content;
    .displayed-image {
      width: 380px;
      margin-bottom: 25px;
      img {
        max-width: 100%;
        border-radius: 15px;
      }
    }
    .all-imgs-box {
      display: flex;
      gap: 25px;
      height: min-content;
      div {
        aspect-ratio: 1/1;
        border-radius: 10px;
        border: 2px solid transparent;
        overflow: hidden;
        // border-color: $orange-color;
        img {
          transition: $main-transition;
          max-width: 100%;
          height: 100%;
          cursor: pointer;
          user-select: none;
          &:hover {
            opacity: 0.5;
          }
          // opacity: 0.3;
        }
      }
    }
  }
  .product-info {
    display: flex;
    flex-direction: column;
    .company-name {
      text-transform: uppercase;
      color: $orange-color;
      font-size: 14px;
      letter-spacing: 1px;
    }
    .product-name {
      color: $important-text-color;
      line-height: 1;
      margin: 15px 0 30px;
      font: {
        weight: 700;
        size: 40px;
      }
    }
    .product-description {
      color: $main-text-color;
      line-height: 1.4;
    }
    .price-box {
      margin: 20px 0;
      div {
        .after-discount {
          color: $important-text-color;
          font: {
            weight: 700;
            size: 23px;
          }
          &::before {
            content: "$";
          }
        }
        .discount-rate {
          &::after {
            content: "%";
          }
        }
      }
      .before-discount {
        text-decoration-line: line-through;
        &::before {
          content: "$";
        }
      }
    }
    .btns-box {
      .items-number-box {
        .decrease {
        }
        .increase {
        }
      }
      .add-cart {
      }
    }
  }
}
</style>
