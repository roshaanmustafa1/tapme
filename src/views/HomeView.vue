<template>
  <div>
    <!-- Home Section 1 Starts  -->
    <section id="home">
      <div class="container-fluid">
        <div class="row align-item-center">
          <div class="col-sm-12 col-lg-6 firsthalf">
            <div class="home-text">
              <h1>Lorem ipsum dolor</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                nemo fugiat accusamus amet ad perferendis natus excepturi error,
                tempore quae aliquid harum labore? Consequuntur non
                reprehenderit quaerat iusto iste illum ex totam porro explicabo
                facilis inventore nihil pariatur ad eligendi nobis culpa hic,
                laudantium dolorem quibusdam. Rerum accusamus magnam repellat?
              </p>
              <div class="home-download-btn d-flex">
                <BtnBrown
                  href="https://bootstrap-vue.org/docs/components/navbar"
                  btnbrownText="Shop Now"
                />

                <BtnBlack
                  href="https://bootstrap-vue.org/docs/components/navbar"
                  btnText="subscribe"
                />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 home-img-sec">
            <div class="home-img">
              <img
                src="@/assets/images/HomeBack.png"
                alt="sec-1-home"
                class="img-fluid heroimgback"
              />
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

    <section class="section2">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
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
            class="col-sm-12 col-md-6 d-flex justify-content-center flex-column"
          >
            <h4>Simply Awesome <span></span></h4>
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
  </div>
</template>

<script>
import BtnBrown from "../components/BtnBrown.vue";

import BtnBlack from "../components/BtnBlack.vue";
export default {
  name: "HomeView",
  components: { BtnBrown, BtnBlack },
};
</script>
<!-- Home Section 1 style Starts  -->
<style scoped>
/* Home Section 1 style Starts*/
.home-text h1 {
  font-size: 74px;
  color: var(--brown-primary);
  font-family: var(--font-heading);
}
.home .firssthalf {
  margin-top: 100px !important;
}

.col-sm-12.col-lg-6.firsthalf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
}

.home-img {
  position: relative;
  height: 96vh;
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
  height: 65vh;
  top: 50%;
  transform: translate(0, -50%);
  right: 140px;
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
  background-color: var(--brown-primary);
  margin: 100px 0px;
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
</style>
