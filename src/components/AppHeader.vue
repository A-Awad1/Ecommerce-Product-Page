<template>
  <nav id="main-nav">
    <div class="overlay" ref="overlay"></div>
    <div class="container">
      <div>
        <div class="logo-menu-box">
          <img
            class="icon-menu"
            src="../assets/images/icon-menu.svg"
            alt="icon-menu"
            @click="showList"
          />
          <img class="logo" src="../assets/images/logo.svg" alt="logo" />
        </div>
        <ul ref="ul">
          <li class="icon-close" @click="closeList">
            <img src="../assets/images/icon-close.svg" alt="icon-close" />
          </li>
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
        <div class="icons-box" :data-products-number="productsNumber">
          <svg
            class="icon-cart"
            xmlns="http://www.w3.org/2000/svg"
            @click="CartList = !CartList"
          >
            <path :d="iconCartD" fill="#69707D" fill-rule="nonzero" />
          </svg>
          <img src="../assets/images/image-avatar.png" alt="avatar" />
          <CartList v-if="CartList" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CartList from "@/components/CartList.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  data: function () {
    return {
      CartList: false,
    };
  },
  computed: {
    ...mapGetters(["productsNumber"]),
    ...mapState(["iconCartD"]),
  },
  methods: {
    showList: function () {
      this.$refs.ul.style.display = "block";
      this.$refs.overlay.style.display = "block";
    },
    closeList: function () {
      this.$refs.ul.style.display = "none";
      this.$refs.overlay.style.display = "none";
    },
  },
  components: {
    CartList,
  },
};
</script>

<style scoped lang="scss">
nav {
  .container {
    > div {
      margin-right: 60px;
      border-bottom: 1px solid $grayish-blue-color;
      display: flex;
      align-items: center;
      gap: 50px;
      @include underMedium {
        gap: 20px;
      }
      @include underTablet {
        margin: 0;
        justify-content: space-between;
        padding: 20px;
        border: none;
      }
      > .logo-menu-box {
        margin-top: -9px;
        @include underTablet {
          white-space: nowrap;
          margin-top: -3px;
        }
        > .icon-menu {
          display: none;
          @include underTablet {
            display: inline-block;
            cursor: pointer;
            margin-right: 15px;
          }
        }
        > img.logo {
          @include underTablet {
            margin-bottom: -1px;
          }
          @include underLargeMobile {
            margin-bottom: 0;
            width: 125px;
          }
        }
      }
      ul {
        @include aboveTablet {
          display: flex !important;
        }
        flex: 1;
        gap: 30px;
        flex-direction: row;
        @include underMedium {
          gap: 15px;
        }
        @include underTablet {
          display: none;
          height: 100%;
          top: 0;
          left: 0;
          flex-direction: column;
          position: absolute;
          background-color: #fff;
          padding: 20px;
          width: 55%;
          max-width: 300px;
          min-width: 200px;
          z-index: 2;
        }
        li.icon-close {
          display: none;
          @include underTablet {
            display: block;
            cursor: pointer;
            margin-bottom: 40px;
          }
        }
        li:not(.icon-close) {
          color: $main-text-color;
          cursor: pointer;
          user-select: none;
          position: relative;
          padding: 40px 0 44px;
          border-bottom: 4px solid transparent;
          transition: $main-transition;
          @include underTablet {
            padding: 0;
            border: none;
            color: $important-text-color;
            font-weight: 700;
            margin-bottom: 20px;
          }
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
      div.icons-box {
        @include aboveTablet {
          position: relative;
        }
        &:not([data-products-number="0"])::after {
          content: attr(data-products-number);
          font-size: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          transform: translate(10px, -10px);
          width: 20px;
          height: 15px;
          border-radius: 25px;
          background-color: $orange-color;
          color: $light-grayish-blue-color;
        }
        display: flex;
        align-items: center;
        gap: 50px;
        @include underLargeMobile {
          gap: 20px;
        }
        svg.icon-cart {
          cursor: pointer;
          width: 22px;
          height: 20px;
          path {
            transition: $main-transition;
          }
          &:hover {
            path {
              fill: $important-text-color;
            }
          }
        }
        img:last-of-type {
          cursor: pointer;
          border-radius: 50%;
          width: 50px;
          transition: $main-transition;
          @include underLargeMobile {
            width: 30px;
          }
          &:hover {
            box-shadow: 0px 0px 0px 2px $orange-color;
          }
          user-select: none;
        }
      }
    }
  }
  .overlay {
    display: none;
    @include underTablet {
      z-index: 1;
      @include overlay;
    }
  }
}
</style>
