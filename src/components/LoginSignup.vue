<template>
  <div>
    <div class="loginmain">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 b-height">
            <div class="row b-wrapper">
              <div class="col-md-5 b-min-height">
                <div class="b-logo swift_logo">
                  <a href="" target="_blank">
                    <img
                      src="@/assets/images/black-logo.svg"
                      alt="login-logo"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="b_title text-center">
                  <h1 class="user_title">Login To Your Account</h1>
                  <p class="user_subTitle px-5 py-0">
                    to Keep Connected with us<b>
                      Login with your Personal Information
                    </b>
                  </p>
                  <btn-black
                    href="https://bootstrap-vue.org/docs/components/navbar"
                    btnText="Sign In"
                  />
                </div>
              </div>
              <div class="col-sm-7 col-md-7">
                <div class="b-logo swift_right">
                  <a href="" target="_blank">
                    <img
                      src="@/assets/images/black-logo.svg"
                      alt="login-logo"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="c-form text-center">
                  <div class="b-form-title">
                    <h1 class="form_title">Create Account</h1>
                    <p class="b-subtext">Or Sign up with</p>
                    <p class="social-icons">
                      <b-icon icon="facebook" aria-hidden="true"></b-icon>
                      <b-icon icon="instagram" aria-hidden="true"></b-icon>
                      <b-icon icon="google" aria-hidden="true"></b-icon>
                    </p>
                  </div>
                  <form action="" method="post">
                    <div class="form-group username">
                      <input
                        type="text"
                        name=""
                        class="form-control"
                        placeholder="Name"
                      />
                      <b-icon icon="person-fill" aria-hidden="true"></b-icon>
                    </div>
                    <div class="form-group username">
                      <input
                        type="Email"
                        name=""
                        class="form-control"
                        placeholder="Email"
                      />
                      <b-icon icon="envelope-fill" aria-hidden="true"></b-icon>
                    </div>
                    <div class="form-group username mb-3">
                      <input
                        type="password"
                        name=""
                        class="form-control"
                        placeholder="Password"
                      />
                      <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                    </div>
                    <div class="form-group">
                      <span class="b_forgot">Forgot Your Password </span>
                    </div>

                    <div class="right-btn">
                      <btn-brown
                        href="https://bootstrap-vue.org/docs/components/navbar"
                        btnbrownText="Sign Up"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnBlack from "@/components/BtnBlack.vue";
import BtnBrown from "./BtnBrown.vue";
export default {
  components: {
    BtnBlack,
    BtnBrown,
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.loginmain {
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/images/Lines.png");
  background-size: cover;
  background-position: center center;
}
.loginmain .b-height {
  position: relative;
  padding: 35px 0px 0px;
}

.loginmain .b-wrapper {
  display: flex;
  align-items: center;
  min-height: 650px;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}

.b-min-height {
  height: 650px;
  background-color: #eb8d2b;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.loginmain .b-logo {
  width: 100px !important;
  margin: 0px auto;
}

.b_title h1 {
  color: #fff;
  font-weight: 600px;
  font-size: 50px;
}
.b_title p {
  color: black;
  margin: 30px 0px 40px;
}

.b-form {
  width: 60%;
  margin: auto;
}
.b-form-title h1 {
  color: #eb8d2b;
  font-size: 50px;
  font-weight: 500;
}
.b-form-title svg {
  width: 50px;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 36px;
  line-height: 42px;
  font-size: 20px;
  margin: 13px 5px;
  color: #eb8d2b;
  cursor: pointer;
  padding: 10px;
}

.b-subtext {
  color: rgba(0, 0, 0, 0.514);
  font-size: 14px;
}

.b-form .form-control {
  font-size: 14px;
  height: 50px;
  padding-left: 45px;
  background-color: rgb(207, 207, 207);
  border-color: #ddd;
  color: black;
  width: 50% !important;
}
.form-group .form-control::placeholder {
  color: #00000099 !important;
}
form .form-control {
  width: 50% !important;
}
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.form-group .bi {
  position: absolute;
  top: 22px;
  left: 23px;
  z-index: 10;
  color: black;
  font-size: 14px;
  width: 50%;
  transition: 0.3s ease-in-out;
}
.form-group .form-control {
  padding-left: 40px !important;
  margin: 10px 0px;
}

.form-group .b_forgot {
  border-bottom: 1px solid black;
  padding-bottom: 2px;
  color: #eb8d2b;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  display: none;
}

.swift_right {
  display: none;
}
.swift_element {
  display: flex;
  align-items: unset;
  flex-direction: row-reverse;
  transition: 0.3s ease-in-out;
}

.b-form-title svg:hover {
  color: black;
  transition: 0.2s all ease-in;
}
</style>
