<template>
  <b-container fluid class="footer-main">
    <div class="row justify-content-center my-3">
      <img src="@/assets/images/white-orange.svg" alt="Logo Brand" />
    </div>
    <div class="row text-center my-3">
      <h2>Subscribe Our Newsletter</h2>
    </div>

    <div class="row justify-content-center my-3">
      <div class="input-group footer-btn m-75">
        <input
          type="email"
          class="form-control"
          placeholder="Enter your email"
        />
        <span class="input-group-btn">
          <button class="btn btn-theme" type="submit">Subscribe</button>
        </span>
      </div>
    </div>
    <div class="row my-3">
      <div
        style="font-size: 3rem"
        class="d-flex justify-content-center footer-icons"
      >
        <b-icon icon="facebook" class="rounded p-2 s-icon"></b-icon>
        <b-icon icon="twitter" class="rounded p-2 s-icon"></b-icon>
        <b-icon icon="instagram" class="rounded p-2 s-icon"></b-icon>
        <b-icon icon="linkedin" class="rounded p-2 s-icon"></b-icon>
      </div>
    </div>
    <div class="row nav-links my-3">
      <b-navbar-nav class="d-flex flex-row justify-content-center">
        <router-link to="/" tag="b-nav-item" exact>Home</router-link>
        <router-link to="shop" tag="b-nav-item">Shop</router-link>
        <router-link to="contact" tag="b-nav-item">Contact Us</router-link>
        <router-link to="about" tag="b-nav-item">About Us</router-link>
      </b-navbar-nav>
    </div>

    <div class="row bg-black text-center mt-5">
      <div class="copyright">
        <span>Copyright © 2022 Tapme. All Rights Reserved</span>
      </div>
    </div>
  </b-container>
</template>

<style scoped>
h2 {
  color: var(--black-secondary) !important;
}
a.nav-link {
  color: var(--white-third) !important;
}

.footer-btn .btn {
  position: relative;
  z-index: 2;
  background-color: var(--black-secondary);
  color: white !important;
  width: 10rem;
  border: 1px solid black;
}
.footer-btn input.form-control {
  border: 1px solid black;
}

.footer-main img {
  width: 150px !important;
}

.s-icon {
  margin-right: 30px !important;
}

.nav-links li.nav-item {
  padding-right: 50px;
  border-right: 1px solid var(--brown-primary) !important;
  margin-right: 50px;
}

li.nav-item:nth-child(4) {
  border: none !important;
  margin-right: 0px !important;
  padding-right: 0px !important;
}

.copyright {
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  height: 50px;
}

.copyright span {
  color: var(--brown-primary);
}

.footer-main {
  background-image: url("@/assets/images/Lines.png");
  background-color: var(--brown-primary);
  background-size: contain;
  background-position: center center;
  z-index: -1;

  background-size: cover;
  height: 600px;
  background-position: center top;

  justify-content: end;
  display: flex;
  flex-direction: column;
}

.nav-links a.nav-link {
  padding: 10px !important;
}

.footer-main .navbar-nav .nav-link {
  padding-right: 10px !important;
  padding-left: 10px !important;
}
</style>
<style lang="scss">
.footer-main {
  .navbar-nav .nav-link {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
  a.nav-link {
    color: #fff !important;
  }
}
.footer-icons svg {
  fill: var(--black-secondary);
}

.footer-main .router-link-active a {
  background: #000000 !important;
  color: #fff !important;
}

.footer-btn.input-group {
  width: 75%;
}
</style>

<style lang="scss" scoped>
@media (max-width: 450px) {
  .footer-btn .btn {
    width: 6rem;
  }
  .footer-main .nav-links li.nav-item {
    padding-right: 5px;
    border-right: 1px solid var(--brown-primary) !important;
    margin-right: 5px;
  }
}
</style>
