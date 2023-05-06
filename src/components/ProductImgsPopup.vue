<template>
  <div class="product-imgs-popup">
    <div class="overlay"></div>
    <div class="content">
      <div class="svg-box">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <ProductImgs />
    </div>
  </div>
</template>

<script>
import ProductImgs from "@/components/ProductImgs";
export default {
  name: "ProductImgsPopup",
  components: {
    ProductImgs,
  },
};
</script>

<style lang="scss">
.product-imgs-popup {
  display: none;
  @include underMedium {
    display: none;
  }
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  @extend %center-flex;
  .overlay {
    @include overlay;
  }
  .content {
    .svg-box {
      cursor: pointer;
      padding: 60px 0 20px;
      text-align: right;
      svg {
        transform: scale(1.2);
        path {
          fill: $light-grayish-blue-color;
          transition: $main-transition;
        }
      }
      &:hover {
        path {
          fill: $orange-color;
        }
      }
    }
    .displayed-image {
      img {
        width: 450px;
      }
    }
    .all-imgs-box {
      width: 375px;
      margin: auto;
      div {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          opacity: 0;
          // opacity: 0.7;
        }
        &:hover::after {
          opacity: 0.5;
        }
        // border-color: $orange-color;
      }
    }
    .arrows {
      div {
        display: flex;
        width: 44px;
        &:first-of-type {
          left: -22px;
        }
        &:last-of-type {
          right: -22px;
        }
      }
    }
  }
}
</style>
