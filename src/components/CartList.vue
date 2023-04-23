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
              <span class="quantity"> x {{ product.quantity }} </span>
              <span class="full-price">{{
                (product.price * product.quantity).toFixed(2)
              }}</span>
            </span>
          </div>
          <img
            class="icon-delete"
            src="../assets/images/icon-delete.svg"
            alt="icon-delete"
          />
        </div>
      </div>
      <button>Checkout</button>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CartList",
  computed: {
    ...mapState(["cart"]),
  },
};
</script>

<style lang="scss">
section.cart-list {
  position: absolute;
  top: calc(100% + 15px);
  right: -60px;
  border-radius: $main-border-radius;
  box-shadow: 0px 10px 20px 0px $grayish-blue-color;
  background-color: #fff;
  > span {
    user-select: none;
    display: block;
    font-weight: 700;
    color: $important-text-color;
    padding: $main-padding;
    border-bottom: 1px solid $grayish-blue-color;
  }
  > div.empty {
    min-height: 155px;
    min-width: 330px;
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
            .quantity {
            }
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
