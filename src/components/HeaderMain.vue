<template>
  <div class="HeaderMain" :class="{ scrolled: scrollPosition > 50 }">
    <b-navbar toggleable="sm" type="light" class="mainheader">
      <div class="container">
        <router-link to="/" tag="b-navbar-brand">
          <svg class="logo">
            <use xlink:href="@/assets/images/whitelogo.svg#logo"></use>
          </svg>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/" tag="b-nav-item" exact>Home</router-link>
            <router-link to="/shop" tag="b-nav-item">Shop</router-link>
            <router-link to="/contact" tag="b-nav-item">Contact Us</router-link>
            <router-link to="/about" tag="b-nav-item">About Us</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ms-auto">
            <b-nav-item-dropdown class="ms-auto searchDropdown" right
              ><template #button-content>
                <span><b-icon icon="Search"></b-icon></span>
              </template>
              <div class="d-flex">
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Search</b-button
                >
              </div>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <span><b-icon icon="person-fill"></b-icon></span>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item
              ><b-icon icon="cart-fill" v-b-toggle.sidebar-right></b-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <SideCart />
  </div>
</template>

<script>
import SideCart from "@/components/SideCart";
export default {
  name: "HeaderMain",
  components: { SideCart },
  data() {
    return { scrollPosition: null };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
nav.navbar {
  padding: 0px 35px;
}
.form-inline {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style lang="scss">
.router-link-active a {
  background: var(--brown-primary) !important;
  color: #fff !important;
}

.searchDropdown ul.dropdown-menu {
  width: 500px !important;
  padding: 0;
}

.searchDropdown button.btn.my-2.my-sm-0.btn-secondary.btn-sm {
  background-color: #eb8d2b !important;
  padding: 5px 25px;
  color: var(--black-secondary);
}

.searchDropdown input {
  border: 1px solid black !important;
}

input::placeholder {
  color: black !important;
}

.dropdown-toggle::after {
  display: none !important;
}

.HeaderMain {
  position: sticky;
  top: 0;
  background-color: transparent !important;
  z-index: 20 !important;
  margin-bottom: -95px;
  transition: 0.2s all ease-in;
  a.nav-link {
    margin-right: 10px;
  }
}
.mainheader a.nav-link {
  color: rgb(0, 0, 0) !important;
}

.logo {
  width: 90px;
  height: 65px;
  use {
    transition: all 0.2s ease-in;
  }
}

.scrolled .mainheader {
  background-color: rgb(0, 0, 0) !important;
  a.nav-link {
    color: white !important;
  }
  svg {
    color: #fff !important;
    font-size: 22px;
  }
  .logo use {
    fill: #fff !important;
  }
}
</style>
