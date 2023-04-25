<template>
  <section>
    <div class="product-imgs">
      <img class="main-img" src="" alt="" />
      <div class="extra-imgs-box">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
    <div class="product-info">
      <span class="company-name"></span>
      <span class="product-name"></span>
      <p class="product-description"></p>
      <div class="price-box">
        <span class="before-discount"></span>
        <span class="discount-rate"></span>
        <span class="after-discount"></span>
      </div>
      <div>
        <div class="items-number-box">
          <button class="decrease"></button>
          <span></span>
          <button class="increase"></button>
        </div>
        <button class="add-cart"></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style></style>
