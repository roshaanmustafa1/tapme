<template>
  <section>
    <div id="aboutus">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
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
          <div class="col-sm-12 col-md-6">
            <div class="aboutdata">
              <h4>Who We Are <span>------</span></h4>
              <h2>The Best Contact Sharing Experience</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem non modi incidunt laboriosam rerum animi quasi nobis?
                Neque, similique amet?
              </p>
              <BtnBlack
                href="https://bootstrap-vue.org/docs/components/navbar"
                btnText="Shop Now"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="aboutcardmain">
      <h5>YOUR RIDE START HERE.</h5>
      <h2>Our Facilities & Features</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci
        sunt qui facere quia dignissimos, praesentium quisquam molestias natus
        quam?
      </p>
      <div class="aboutcard d-flex justify-content-center">
        <div class="row d-flex justify-content-center">
          <div class="col-sm-12 col-md-4 aboutcardbox">
            <div class="svg-icon">
              <b-icon icon="credit-card2-front" aria-hidden="true"></b-icon>
            </div>
            <h3>Complete Overhaul</h3>
            <p>
              Vel illum dolore eu feugiat nulla facilisis at vero eros et accu
              qui blandit praesent luptatum
            </p>
          </div>

          <div class="col-sm-12 col-md-4 aboutcardbox">
            <div class="svg-icon">
              <b-icon icon="credit-card2-front" aria-hidden="true"></b-icon>
            </div>
            <h3>Complete Overhaul</h3>
            <p>
              Vel illum dolore eu feugiat nulla facilisis at vero eros et accu
              qui blandit praesent luptatum
            </p>
          </div>

          <div class="col-sm-12 col-md-4 aboutcardbox">
            <div class="svg-icon">
              <b-icon icon="credit-card2-front" aria-hidden="true"></b-icon>
            </div>
            <h3>Complete Overhaul</h3>
            <p>
              Vel illum dolore eu feugiat nulla facilisis at vero eros et accu
              qui blandit praesent luptatum
            </p>
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
  margin: rem 0rem 2rem 0rem;
  background: url("@/assets/images/Lines.png");
  background-position: center top;
  background-size: cover;
  padding-top: 150px;
  z-index: -3 !important;
  height: 80vh;
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
  height: 60vh;
  transition: 2s all ease-in;
  display: flex;
  align-items: center;
}

img.about-img1 {
  position: absolute;
  height: 500px;
  z-index: 3;
}
img.about-img2 {
  position: absolute;
  height: 450px;
  z-index: 2;
  left: 60px;
  transition: all 1s ease-in;
}

.aboutdata {
  height: 60vh;
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
}

.aboutcardmain h2 {
  font-family: var(--font-heading) !important;
  font-size: 60px !important;
  padding: 10px;
  color: var(--brown-primary);
}
.aboutcardmain p {
  padding-bottom: 30px;
}

.aboutcard {
  padding: 20px 200px;

  svg.bi-credit-card2-front.b-icon.bi {
    font-size: 4rem;
  }
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
