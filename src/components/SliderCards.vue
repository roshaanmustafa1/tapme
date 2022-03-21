<template>
  <section id="slider-cards" class="ptb_100">
    <div class="container">
      <div class="row justify-content-center">
        <h4>Contact Is Just Now Tap Away <span></span></h4>
        <h1>Tapme Change the way to share the contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum
          optio asperiores, vitae sunt suscipit animi totam unde, autem fugiat
          ab atque voluptates architecto quisquam est expedita molestias odio
          nam!
        </p>
      </div>
    </div>
    <div class="swiper_container slider-screen">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/cardsec2.png" alt="slider-img" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/cardsec2back.png" alt="slider-img" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/cardsec2.png" alt="slider-img" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/cardsec2back.png" alt="slider-img" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-img">
            <img src="@/assets/images/cardsec2.png" alt="slider-img" />
          </div>
        </div>
      </div>
    </div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    // const swiper = new Swiper(".mySwiper", {
    //   effect: "coverflow",
    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    //   coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });
    return {
      swiper: "swiper",
    };
  },
};
</script>

<style lang="scss">
@import url("https://unpkg.com/swiper/swiper-bundle.min.css");
</style>
