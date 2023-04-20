<template>
  <!-- <teleport to="#main-nav"> -->
  <section>
    <span>Cart</span>
    <div>
      <div>
        <div>
          <img
            src="../assets/images/image-product-1-thumbnail.jpg"
            alt="product-1"
          />
          <div>
            <span>Fall Limited Edition Sneakers</span>
            <span>$125.00 x 3 <span class="full-price">$375.00</span></span>
          </div>
          <img src="../assets/images/icon-delete.svg" alt="icon-delete" />
        </div>
      </div>
      <button>Checkout</button>
    </div>
  </section>
  <!-- </teleport> -->
</template>

<script>
export default {
  name: "CartList",
};
</script>

<style scoped lang="scss">
section {
  position: absolute;
  right: 0;
  top: 100%;
  border-radius: $main-border-radius;
  box-shadow: 0px 0px 13px 1px $grayish-blue-color;
  > span {
    display: block;
    font-weight: 700;
    color: $important-text-color;
    padding: $main-padding;
    border-bottom: 1px solid $grayish-blue-color;
  }
  > div {
    padding: $main-padding;
    > div {
      > div {
        display: flex;
        align-items: center;
        gap: 10px;
        img:first-of-type {
          width: 40px;
          border-radius: 4px;
        }
        div {
          color: $main-text-color;
          display: flex;
          flex-direction: column;
          gap: 3px;
          > span > span {
            font-weight: 700;
            color: $important-text-color;
          }
        }
      }
    }
    > button {
    }
  }
}
</style>
