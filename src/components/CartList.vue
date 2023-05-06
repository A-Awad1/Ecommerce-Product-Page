<template>
  <section class="cart-list">
    <span>Cart</span>
    <div v-if="cart.length === 0" class="empty">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div>
        <div v-for="product in cart" :key="product.id">
          <img
            :src="
              require(`../assets/images/products/${product.id}/image-product-1-thumbnail.jpg`)
            "
            :alt="product.name"
          />
          <div>
            <span v-text="product.name"></span>
            <span>
              <span class="price">{{ product.price.toFixed(2) }}</span>
              <template v-if="product.quantity > 1">
                <span class="quantity"> x {{ product.quantity }} </span>
                <span class="full-price">{{
                  (product.price * product.quantity).toFixed(2)
                }}</span>
              </template>
            </span>
          </div>
          <img
            class="icon-delete"
            src="../assets/images/icon-delete.svg"
            alt="icon-delete"
            @click="removeProduct(product.id)"
          />
        </div>
      </div>
      <button>Checkout</button>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CartList",
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    ...mapActions(["removeProduct"]),
  },
};
</script>

<style lang="scss">
section.cart-list {
  z-index: 999;
  user-select: none;
  border-radius: $main-border-radius;
  box-shadow: 0px 10px 20px 0px $grayish-blue-color;
  background-color: #fff;
  position: absolute;
  top: calc(100% + 15px);
  right: -60px;
  min-height: 155px;
  min-width: 360px;
  @include underTablet {
    right: auto;
    top: 95px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    width: 360px;
  }
  @include underLargeMobile {
    width: auto;
  }
  > span {
    user-select: none;
    display: block;
    font-weight: 700;
    color: $important-text-color;
    padding: $main-padding;
    border-bottom: 1px solid $grayish-blue-color;
  }
  > div.empty {
    height: 155px;
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
      color: $main-text-color;
      font-weight: 700;
    }
  }
  > div:not(.empty) {
    padding: $main-padding;
    padding-bottom: $main-padding + 5px;
    > div {
      > div {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 10px;
        img:first-of-type {
          width: 40px;
          border-radius: 4px;
        }
        div {
          color: $main-text-color;
          display: flex;
          flex-direction: column;
          gap: 3px;
          white-space: nowrap;

          > span {
            .full-price {
              font-weight: 700;
              color: $important-text-color;
              margin-left: 6px;
            }
            .price,
            .full-price {
              &::before {
                content: "$";
              }
            }
          }
        }
        .icon-delete {
          cursor: pointer;
          margin-left: auto;
        }
      }
    }
    > button {
      width: 100%;
      margin-top: 10px;
      padding: 15px 0;
      background-color: $orange-color;
      border: none;
      border-radius: $main-border-radius;
      color: $light-grayish-blue-color;
    }
  }
}
</style>
