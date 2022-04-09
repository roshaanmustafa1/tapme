<template>
  <div>
    <div class="loginmain">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 b-height">
            <div
              class="row b-wrapper position-relative authenticationPanel"
              :class="[showLogin === true ? 'showLogin' : '']"
            >
              <div class="col-md-5 b-min-height position-absolute infoPanel">
                <div class="b-logo swift_logo mb-5">
                  <a href="" target="_blank">
                    <img
                      src="@/assets/images/black-logo.svg"
                      alt="login-logo"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="b_title text-center">
                  <h1 class="user_title" v-if="showLogin === true">
                    Create New <br />
                    Account
                  </h1>
                  <h1 class="user_title" v-else>Login To Your Account</h1>
                  <p class="user_subTitle px-5 py-0">
                    to Keep Connected with us<b>
                      Login with your Personal Information
                    </b>
                  </p>
                  <p
                    class="mb-0"
                    @click="showLogin = false"
                    v-if="showLogin == true"
                  >
                    <u> Don't have account? Sign Up </u>
                  </p>
                  <p class="mb-0" @click="showLogin = true" v-else>
                    <u> Already have account? Login </u>
                  </p>
                </div>
              </div>
              <div class="col-sm-7 col-md-7 position-absolute inputPanel">
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
                  <div class="b-form-title mb-4">
                    <h1 class="form_title" v-if="showLogin === true">
                      Login to your <br />
                      Account
                    </h1>
                    <h1 class="form_title" v-else>Create Account</h1>
                  </div>
                  <form action="" method="post" class="authForm">
                    <div class="form-group username">
                      <input
                        v-if="showLogin == false"
                        type="text"
                        name=""
                        class="form-control mb-0"
                        placeholder="Name"
                      />
                      <b-icon icon="person-fill" aria-hidden="true"></b-icon>
                    </div>
                    <div class="form-group username">
                      <input
                        type="Email"
                        name=""
                        class="form-control mb-0"
                        placeholder="Email"
                      />
                      <b-icon icon="envelope-fill" aria-hidden="true"></b-icon>
                    </div>
                    <div class="form-group username mb-3">
                      <input
                        type="password"
                        name=""
                        class="form-control mb-0"
                        placeholder="Password"
                      />
                      <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                    </div>
                    <div class="form-group">
                      <span class="b_forgot">Forgot Your Password </span>
                    </div>

                    <div class="right-btn">
                      <btn-brown
                        @click="showLogin = false"
                        v-if="showLogin === true"
                        Class="w-50 me-0"
                        btnbrownText="Login"
                      />
                      <btn-brown
                        @click="showLogin = false"
                        v-else
                        Class="w-50 me-0"
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
import BtnBrown from "./BtnBrown.vue";
export default {
  components: {
    BtnBrown,
  },
  data() {
    return {
      showLogin: true,
    };
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

.authenticationPanel {
  .infoPanel {
    width: 40%;
    left: 0;
    z-index: 999;
    transition: 0.3s all ease-in;
  }
  .inputPanel {
    width: 60%;
    left: 40%;
    transition: 0.3s all ease-in;
  }
  &.showLogin {
    .infoPanel {
      left: 60% !important;
      width: 40%;
    }
    .inputPanel {
      left: 0 !important;
    }
  }
}

u {
  cursor: pointer;
}

// .authForm {
//   width: 80%;
//   margin: 0 auto;
// }
</style>
