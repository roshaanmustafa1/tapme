<template>
  <div class="HeaderMain">
    <div>
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand href="#"
          ><img src="@/assets/images/logo-brand.png" width="100px" alt=""
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/" tag="b-nav-item" exact>Home</router-link>
            <router-link to="shop" tag="b-nav-item">Shop</router-link>
            <router-link to="contact" tag="b-nav-item">Contact Us</router-link>
            <router-link to="about" tag="b-nav-item">About Us</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ms-auto">
            <b-nav-item-dropdown
              
              class="ms-auto searchDropdown"
              right
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
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMain",
};
</script>

<style scoped>
nav.navbar {
  padding: 10px 35px;
}
.form-inline {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style>
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

.dropdown-toggle::after{
  display:none !important;
}


</style>
