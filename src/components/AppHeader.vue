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
        <svg
          class="icon-cart"
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
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
      svg.icon-cart {
        cursor: pointer;
        &:hover {
          path {
            fill: #000;
          }
        }
      }
      img:last-of-type {
        cursor: pointer;
        width: 50px;
        border-radius: 50%;
        &:hover {
          box-shadow: 0px 0px 0px 2px $orange-color;
        }
      }
    }
  }
}
</style>
