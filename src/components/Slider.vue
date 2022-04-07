<template>
  <div class="sliderMain">
    <div id="example">
      <carousel-3d :controls-visible="true" :clickable="false">
        <slide v-for="(slide, i) in slides" :index="i">
          <figure>
            <img src="https://placehold.it/360x270" />
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide,
  },

  new Ros({
  el: '#example',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': window['carousel-3d'].Carousel3d,
    'slide': window['carousel-3d'].Slide
  }
})
};
</script>

<style lang="scss" scoped>
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
