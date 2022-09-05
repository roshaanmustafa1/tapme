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
                <router-link to="/shop"
                  ><BtnBrown btnbrownText="Shop Now" class="home-btn1 me-2"
                /></router-link>

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
        <div class="container">
          <div class="row position-relative">
            <div class="col-md-6 d-flex align-items-end position-relative">
              <div class="feature_middle">
                <img
                  src="@/assets/images/horizontal-card.png"
                  alt="feature_horizontal_img"
                  class="feature_horizontal_img"
                  width="400px"
                />
                <h4>Simply Awesome <span></span></h4>
                <h2>Our Special Feature's</h2>
                <p>
                  If you would like to change the exterior design of this card
                  with your picture, logo, or any other design. Discuss your
                  design requirements on WhatsApp "03134781894"
                </p>
              </div>
            </div>
            <div
              class="col-md-6 d-flex justify-content-end feature_img-box align-items-baseline"
            >
              <img
                src="@/assets/icons/mobile.svg"
                alt="feature_img"
                class="feature_img position-absolute"
              />
              <img
                src="@/assets/images/profile.png"
                alt="feature_img"
                class="feature_profile_img position-absolute"
              />
            </div>
          </div>
          <div class="container margin-_top_up ipad-px-30">
            <div class="row pb-5">
              <div
                class="col-sm-12 col-lg-12 col-md-12 d-flex justify-content-center"
              >
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
              Simply tap or scan your card using any smartphone, with no app or
              installation required. It’s really that simple! Using NFC
              technology, the Tapme Contact Card can share all of your
              information when tapped against a smartphone. No more messing
              around with old paper business cards, put all the information
              right where people spend most of their time - their phone!
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
        {
          title: "Beautiful Design",
          description:
            "Don’t just blend in when networking, stand out and make a good first impression. Convert more enquiries by saving your details onto somewhere people spend most of their time…their phone!",
          icon: "plus",
        },
        {
          title: "Pure and Simple",
          description:
            "Reduce paper waste, printing business cards again & again. Just one card that’s all you need.",
          icon: "check2-square",
        },
        {
          title: "Color Schemes",
          description:
            "As long as the contrast is over 30% between the QR Code color and the background, you can choose any color.",
          icon: "circle-square",
        },
        {
          title: "Pick a Shape",
          description: "We can create QR Codes in a square or round shape.",
          icon: "emoji-dizzy",
        },
        {
          title: "Add company logo",
          description:
            "Either in the center or covering the full background, we can add your logo to the QR Code.",
          icon: "bullseye",
        },
        {
          title: "DCC TAP",
          description:
            "Tap digital contact card with nfc compatible smartphone. Open the browser notification.",
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
  margin: 50px 0px 50px 0px;
  height: calc(100vh - 95px);
  display: flex;
  align-items: center;
}

.position-relative {
  position: relative !important;
  height: 60vh;
  padding-bottom: 50px;
}
img.sec2imgfront {
  position: absolute;
  top: 0;
  height: 650px;
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
  max-width: 300px !important;
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

.feature_horizontal_img {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9;
  transition: all 0.5s ease-in;
}

img.feature_profile_img {
  z-index: 11;
  width: 258px;
  right: 21px;
  top: 19px;
  border-radius: 20px;
  opacity: 0;
  transition: all 0.3s ease-in;
  transition-delay: 0.5s;
}

.feature_img {
  z-index: 10;
}
section#features {
  &:hover {
    .feature_horizontal_img {
      left: calc(100% + 20px);
    }
    img.feature_profile_img {
      opacity: 1;
    }
  }
}
</style>
