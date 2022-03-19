<template>
  <div>
    <!-- Home Section 1 Starts  -->
    <section id="home">
      <div class="container">
        <div class="row align-item-center">
          <div class="col-sm-12 col-lg-6">
            <div class="home-text">
              <h2>Lorem ipsum dolor</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                nemo fugiat accusamus amet ad perferendis natus excepturi error,
                tempore quae aliquid harum labore? Consequuntur non
                reprehenderit quaerat iusto iste illum ex totam porro explicabo
                facilis inventore nihil pariatur ad eligendi nobis culpa hic,
                laudantium dolorem quibusdam. Rerum accusamus magnam repellat?
              </p>
              <div class="home-download-btn">
                <ButtonStyle1 />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div class="home-img">
              <img
                src="@/assets/images/sec-1-home.jpg"
                alt="sec-1-home"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home Section 1 Ends  -->
  </div>
</template>

<script>
import ButtonStyle1 from "../components/ButtonStyle1.vue";
// import ButtonStyle2 from "../components/ButtonStyle2.vue";
export default {
  name: "HomeView",
  components: { ButtonStyle1 },
};
</script>
