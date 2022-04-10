<template>
  <div>
    <!-- Home Section 1 Starts  -->
    <section id="home">
      <div class="container">
        <div class="row align-item-center">
          <div class="col-sm-12 col-md-6 firsthalf">
            <div class="home-text">
              <h1>TAPME Say's</h1>
              <p>first impression is the last impression</p>
              <div class="home-download-btn d-flex">
                <BtnBrown
                  href="https://bootstrap-vue.org/docs/components/navbar"
                  btnbrownText="Shop Now"
                  class="home-btn1 me-2"
                />

                <BtnBlack
                  href="#subscribeSec"
                  btnText="subscribe"
                  class="home-btn2"
                />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 home-img-sec">
            <div class="home-img">
              <img
                src="@/assets/images/heroseccards.png"
                alt="sec-1-home"
                class="img-fluid heroimgfront"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home Section 1 Ends  -->

    <!-- Home Features Section 3 Starts  -->

    <section id="features">
      <div class="title">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 offset-md-1 d-flex align-items-end">
              <div class="feature_middle">
                <img
                  src="@/assets/images/horizontal-card.png"
                  alt="feature_horizontal_img"
                  class="feature_horizontal_img"
                />
                <h4>Simply Awesome <span></span></h4>
                <h2>Our Special Feature's</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, laudantium soluta. Odit dignissimos vero corporis
                  quibusdam, a eaque consectetur eligendi.
                </p>
              </div>
            </div>
            <div class="col-md-5 d-flex justify-content-end feature_img-box">
              <img
                src="@/assets/icons/mobile.svg"
                alt="feature_img"
                class="feature_img"
              />
            </div>
          </div>
          <div class="container-fluid margin-_top_up ipad-px-30">
            <div class="row pb-5">
              <div class="col-sm-12 col-lg-6 col-md-6 offset-lg-1">
                <div class="row">
                  <div
                    class="col-sm-6 col-lg-6"
                    v-for="(item, index) in features"
                    :key="index"
                  >
                    <div class="single_feature me-3">
                      <h4>{{ item.title }}</h4>
                      <p>
                        {{ item.description }}
                      </p>
                      <!-- feature-icon -->
                      <div class="feature_icon">
                        <b-icon :icon="item.icon"></b-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Home Features Section 3 ends  -->
    <!-- Home Section 2 Starts  -->
    <section class="section2">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <div class="position-relative d-flex justify-content-center">
              <img
                src="@/assets/images/cardsec2back.png"
                class="sec2imgfront"
                alt="cardfront"
              />
              <img src="@/assets/icons/nfc.png" class="sec2nfc" alt="nfc" />
            </div>
          </div>
          <div
            class="col-sm-12 col-md-8 d-flex justify-content-center flex-column ps-5 sec3tap"
          >
            <h4>Contact Is Just Now Tap Away <span></span></h4>
            <h1>Tapme Change the way to share the contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              earum optio asperiores, vitae sunt suscipit animi totam unde,
              autem fugiat ab atque voluptates architecto quisquam est expedita
              molestias odio nam!
            </p>
            <BtnBlack
              href="https://bootstrap-vue.org/docs/components/navbar"
              btnText="Buy Now"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Home Section 2 Ends  -->
  </div>
</template>

<script>
import BtnBrown from "../components/BtnBrown.vue";

import BtnBlack from "../components/BtnBlack.vue";
export default {
  name: "HomeView",
  components: { BtnBrown, BtnBlack },
  data() {
    return {
      features: [
        { title: "Beautiful Design", description: "Lorem Ipsum", icon: "plus" },
        {
          title: "Pure and Simple",
          description: "Lorem Ipsum",
          icon: "check2-square",
        },
        {
          title: "Color Schemes",
          description: "Lorem Ipsum",
          icon: "circle-square",
        },
        {
          title: "Wow Animations",
          description: "Lorem Ipsum",
          icon: "emoji-dizzy",
        },
        {
          title: "Excellent Everything",
          description: "Lorem Ipsum",
          icon: "bullseye",
        },
        {
          title: "Easy To Customize",
          description: "Lorem Ipsum",
          icon: "card-checklist",
        },
      ],
    };
  },
};
</script>
<!-- Home Section 1 style Starts  -->
<style scoped lang="scss">
/* Home Section 1 style Starts*/
p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem !important;
  text-transform: capitalize;
  font-weight: 300;
  letter-spacing: 2px;
}

#home {
  background-image: url("../assets/images/HomeBack.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
}

.home-text h1 {
  font-size: 74px;
  color: var(--black-secondary);
  font-family: var(--font-heading);
}
.home .firssthalf {
  margin-top: 100px !important;
}

.firsthalf {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home-img {
  position: relative;
  height: 100vh;
  justify-content: end;
  display: flex;
}

img.img-fluid.heroimgfront {
  position: absolute;
  z-index: 12;
}

img.img-fluid.heroimgback {
  position: absolute;
  z-index: 11;
}

img.img-fluid.heroimgfront {
  position: absolute;
  z-index: 12;
  height: 600px;
  top: 50%;
  transform: translate(0, -50%);
}

img.img-fluid.heroimgback {
  position: absolute;
  z-index: 11;
  height: 100vh;
  right: 0px;
}

.heroimgfront {
  animation: levitation 1s infinite;
  animation-direction: alternate-reverse;
  transform: translate(0, -50%);
  right: 10px;
}

@keyframes levitation {
  from {
    transform: translate(0, -50%);
  }
  to {
    transform: translate(0, -53%);
  }
}

/* Home Section 1 style ends*/
.section2 {
  background: url("@/assets/images/sec2back.png");
  background-position: center top;
  background-size: cover;
  z-index: -1;
  margin: 50px 0px 0px 0px;
  height: calc(100vh - 95px);
  display: flex;
  align-items: center;
}

.position-relative {
  position: relative !important;
  height: 60vh;
}
img.sec2imgfront {
  position: absolute;
  top: 0;
  height: 60vh;
}
img.sec2nfc {
  position: absolute;
  height: 50px;
  width: auto;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 150px;
}

.sec2nfc {
  animation: nfcanimation 1s infinite;
  animation-direction: alternate-reverse;
  transform: translate(0, -50%);
}

@keyframes nfcanimation {
  from {
    height: 50px;
  }
  to {
    height: 70px;
  }
}

/* Home Section 1 style Starts*/

/* Home Features style Starts*/

#features .title {
  min-height: 100vh;
  text-align: left;
  margin-top: 0;

  padding-top: 100px;
  background: url(@/assets/images/Lines.png) no-repeat center center;

  background-color: var(--black-secondary);
  background-size: cover !important;
  -webkit-background-size: cover;
}
#features .title h2 {
  margin-bottom: 0.813rem;
  font-family: var(--font-heading);
  color: var(--brown-primary);
  font-size: 2.5rem;
}

#features .feature_middle h4 {
  font-family: var(--font-primary);
  color: var(--text-white);
}
#features .feature_middle p {
  color: var(--text-white);
}
.feature_img {
  text-align: right;
  max-width: 45% !important;
}
.feature_img img {
  max-width: 60% !important;
}
.margin_top_up {
  margin-top: -30rem;
  height: 92vh;
}
.single_feature {
  background: var(--bg-white);
  margin-top: 1.875rem;
  padding: 2.5rem 2.5rem 2.438rem 3.125rem;
  position: relative;
  border-radius: 1.563rem;
  box-shadow: 0 0.938rem 2.5rem 0 rgb(0 0 0 / 20%);
  transition: all 0.2s ease-in;
  min-height: 250px;

  cursor: pointer;
  &:hover .feature_icon {
    background: var(--black-secondary) !important;
  }
  &:hover {
    background: var(--bg-gradient) !important;
  }
  &:hover h4 {
    color: var(--text-white);
  }
}
.single_feature h4 {
  color: var(--brown-primary);
}
.feature_icon {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  margin-left: 3px;
  color: var(--text-white);
  font-size: 23px;
  border-bottom-left-radius: 25px;
  background: var(--brown-primary);
  transition: all 0.2s ease-in;
}

svg:not(:root).svg-inline--fa {
  overflow: visible;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.single_feature:hover {
  color: var(--text-white);
  background: var(--bg-gradient);
  box-shadow: 0 0.938rem 3.5rem 2px rgb(0 0 0 / 60%);
}

// .down-icon-call-box svg {
//   font-size: 40px;
//   height: 40px;
//   margin-top: -50px;
//   z-index: 100;
//   animation: levitate 1s infinite;
//   animation-direction: alternate-reverse;
// }

// @keyframes levitate {
//   from {
//     margin-top: -20px;
//   }
//   to {
//     margin-top: 20px;
//   }
// }

/* Home Features style ends*/

@media (max-width: 450px) {
  .heroimgfront {
    right: initial !important;
  }
}
</style>
