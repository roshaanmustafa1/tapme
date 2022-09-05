<template>
  <section>
    <div id="aboutus">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <div class="aboutimg">
              <img
                src="@/assets/images/cardsec2.png"
                alt="about-img1"
                class="about-img1"
              />
              <img
                src="@/assets/images/cardsec2back.png"
                alt="about-img2"
                class="about-img2"
              />
            </div>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div class="aboutdata">
              <h4>Who We Are <span>------</span></h4>
              <h2>The Best Contact Sharing Experience</h2>
              <p>
                Where do you think the majority of your printed cards end up?
                They may sit in the pocket, pack or vehicle, or best-case
                scenario, they land on your new contacts desk (for some time)
                Unfortunately, the larger part ends up in the receptacle.
              </p>
              <div class="aboutsec-btn">
                <router-link to="/shop"
                  ><BtnBlack btnText="Shop Now"
                /></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="aboutcardmain">
      <div class="card-sec2-data">
        <h5>YOUR RIDE START HERE.</h5>
        <h2>Our Facilities & Features</h2>
        <p>
          Mobilo is the smartest business card on the block. Turn meetings into
          leads and share your contact details without contact. <br />Our
          cutting-edge technology and integrations reshape how the business
          world connects.
        </p>
      </div>
      <div class="aboutcard d-flex justify-content-center">
        <div class="container">
          <div class="row d-flex justify-content-center about-card-bottom">
            <div class="col-sm-12 col-md-4 aboutcardbox">
              <div class="svg-icon">
                <b-icon icon="share-fill" aria-hidden="true"></b-icon>
              </div>
              <h3>Share</h3>
              <p>Share and promote your Business.</p>
            </div>

            <div class="col-sm-12 col-md-4 aboutcardbox">
              <div class="svg-icon">
                <b-icon icon="diagram2-fill" aria-hidden="true"></b-icon>
              </div>
              <h3>Contact</h3>
              <p>All your contacts information in one place.</p>
            </div>

            <div class="col-sm-12 col-md-4 aboutcardbox">
              <div class="svg-icon">
                <b-icon icon="people-fill" aria-hidden="true"></b-icon>
              </div>
              <h3>Network</h3>
              <p>Grow your network.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BtnBlack from "../components/BtnBlack.vue";

export default {
  components: { BtnBlack },
};
</script>
<style lang="scss" scoped>
#aboutus {
  margin: 0rem 0rem 2rem 0rem;
  background: url("@/assets/images/Lines.png");
  background-position: center top;
  background-size: cover;
  padding-top: 150px;
  z-index: -3 !important;
  height: 800px;
  transition: 1s all ease-in;
  background-color: #eb8d2b;
  &:hover .about-img2 {
    left: 310px;
    transition: all 0.8s ease-in;
  }
}

#aboutus .aboutdata h2 {
  font-size: 60px !important;
  font-family: var(--font-heading);
}
#aboutus .aboutdata p,
h4 {
  color: white;
}

.aboutimg {
  position: relative;
  height: 600px;
  transition: 2s all ease-in;
  display: flex;
  align-items: center;
}

img.about-img1 {
  position: absolute;
  height: 500px;
  z-index: 3;
  border-radius: 6px;
}
img.about-img2 {
  position: absolute;
  height: 450px;
  z-index: 2;
  left: 60px;
  transition: all 1s ease-in;
  border-radius: 6px;
}

.aboutdata {
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.aboutcardmain {
  text-align: center;
  height: 50vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
  margin-bottom: 200px;
}

.aboutcardmain h2 {
  font-family: var(--font-heading) !important;
  font-size: 60px !important;
  margin-bottom: 0px;
  color: var(--brown-primary);
}
.aboutcardmain p {
  padding-bottom: 50px;
}

.aboutcard {
  padding: 20px 0px;

  svg.bi-credit-card2-front.b-icon.bi {
    font-size: 18px;
  }
}
.svg-icon svg {
  font-size: 50px;
}
.aboutcardbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-right: 2px solid #eb8d2b;
}
.aboutcardbox:nth-child(3) {
  border: none;
}

svg.bi-credit-card2-front.b-icon.bi {
  transition: 0.1s all ease-out;
}

.svg-icon {
  width: 130px;
  height: 130px;
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  transform: rotate(0deg);
  transition: 0.2s all ease-in;

  .svg-icon:hover {
    transform: rotate(45deg);
    transition: 0.2s all ease-in;
    background-color: #eb8d2b !important;
    fill: white !important;
  }
}

.svg-icon::before {
  content: "";
  width: 130px;
  height: 130px;
  border: 2px solid #eb8d2b !important;
  position: absolute;
  z-index: -1;
  transform: rotate(0deg);
  transition: 0.2s all ease-in;
}

.aboutcardbox:hover .svg-icon:before {
  transform: rotate(45deg);
  transition: 0.2s all ease-in;
  background-color: #eb8d2b;
}

.aboutcardbox:hover .svg-icon {
  color: #fff;
}

.feature_para {
  width: 300px;
  text-align: center;
}
.aboutcardmain .aboutcardbox p {
  padding: 10px 30px;
}
</style>

<style lang="scss" scoped>
@media (max-width: 768px) {
  #aboutus {
    height: auto;
  }
  img.about-img2 {
    left: initial;
  }
}
@media (max-width: 450px) {
}
</style>
