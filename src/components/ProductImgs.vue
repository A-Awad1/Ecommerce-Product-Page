<template>
  <div class="product-imgs">
    <div class="displayed-image">
      <img
        @click="toggleImgsPopup()"
        :src="
          require(`../assets/images/products/${productData.id}/${productData.images[displayedImageIndex]}`)
        "
        :alt="`product-${productData.id}-main-image`"
      />
      <div class="arrows">
        <div @click="--displayedImageIndex">
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" fill-rule="evenodd" />
          </svg>
        </div>
        <div @click="++displayedImageIndex">
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" fill-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div class="all-imgs-box">
      <div
        v-for="(img, index) in productData.images"
        :key="img"
        :class="index === displayedImageIndex ? 'chosen-img' : ''"
        @click="displayedImageIndex = index"
      >
        <img
          :src="require(`../assets/images/products/${productData.id}/${img}`)"
          :alt="`product-${productData.id}-extra-image`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ProductImgs",
  data: function () {
    return {
      itemsNumber: 0,
      displayedImageIndex: 0,
    };
  },
  computed: {
    ...mapState(["productData"]),
  },
  methods: {
    ...mapMutations(["toggleImgsPopup"]),
  },
  watch: {
    displayedImageIndex: function (v) {
      let lastId = this.productData.images.length - 1;
      if (v < 0) {
        this.displayedImageIndex = lastId;
      } else if (v > lastId) {
        this.displayedImageIndex = 0;
      }
    },
  },
};
</script>

<style lang="scss">
.product-imgs {
  width: min-content;
  @include underTablet {
    overflow: hidden;
  }
  @include underLargeMobile {
    width: 100%;
  }
  .displayed-image {
    cursor: pointer;
    margin-bottom: 25px;
    position: relative;
    @include underTablet {
      margin-bottom: 0;
    }
    img {
      width: 375px;
      border-radius: 15px;
      @include underTablet {
        border-radius: 0;
        margin: -40px 0;
      }
      @include underLargeMobile {
        width: 100%;
      }
    }
    .arrows {
      div {
        @include aboveTablet {
          display: none;
        }
        svg {
          width: 12px;
          height: 18px;
          transform: scale(0.7);
          path {
            stroke-width: 4;
            stroke: hsl(220, 13%, 13%);
            fill: none;
            transition: $main-transition;
          }
        }
        &:hover {
          svg > path {
            stroke: $orange-color;
          }
        }
        position: absolute;
        background-color: #fff;
        border-radius: 50%;
        aspect-ratio: 1/1;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        &:first-of-type {
          left: 20px;
        }
        &:last-of-type {
          right: 20px;
        }
      }
    }
  }
  .all-imgs-box {
    position: relative;
    display: flex;
    gap: 25px;
    height: min-content;
    @include underTablet {
      display: none;
    }
    div {
      aspect-ratio: 1/1;
      border-radius: 10px;
      border: 2px solid transparent;
      overflow: hidden;
      cursor: pointer;
      transition: $main-transition;
      &:hover {
        opacity: 0.5;
      }
      img {
        max-width: 100%;
        height: 100%;
        user-select: none;
      }
      &.chosen-img {
        border-color: $orange-color;
        &:hover {
          opacity: 1;
        }
        img {
          opacity: 0.3;
        }
      }
    }
  }
}
</style>
