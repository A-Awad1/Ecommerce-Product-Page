<template>
  <nav>
    <div class="container">
      <img src="../assets/images/logo.svg" alt="logo" />
      <ul>
        <router-link to="/" custom v-slot="{ navigate }"
          ><li @click="navigate">Collections</li></router-link
        >
        <router-link to="/Men" custom v-slot="{ navigate }"
          ><li @click="navigate">Men</li></router-link
        >
        <router-link to="/Women" custom v-slot="{ navigate }"
          ><li @click="navigate">Women</li></router-link
        >
        <router-link to="/About" custom v-slot="{ navigate }"
          ><li @click="navigate">About</li></router-link
        >
        <router-link to="/Contact" custom v-slot="{ navigate }"
          ><li @click="navigate">Contact</li></router-link
        >
      </ul>
      <div>
        <img src="../assets/images/icon-cart.svg" alt="icon-cart" />
        <img src="../assets/images/image-avatar.png" alt="avatar" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped lang="scss">
nav {
  .container {
    > img {
      margin-top: -13px;
    }
    padding: 0;
    position: relative;
    border-bottom: 1px solid $grayish-blue-color;
    display: flex;
    align-items: center;
    gap: 50px;
    ul {
      flex: 1;
      display: flex;
      gap: 30px;
      li {
        color: $main-text-color;
        cursor: pointer;
        position: relative;
        padding: 40px 0 44px;
        border-bottom: 4px solid transparent;
        &:hover {
          color: $important-text-color;
          border-bottom-color: $orange-color;
          &::after {
            content: "";
            position: absolute;
          }
        }
      }
    }
    div {
      display: flex;
      align-items: center;
      gap: 50px;
      img:last-of-type {
        width: 50px;
      }
    }
  }
}
</style>
