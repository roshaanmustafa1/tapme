<template>
  <div id="shopusmain">
    <div class="shopus">
      <div class="container">
        <div class="row">
          <router-link
            class="col-sm-12 col-md-4 product-details"
            v-for="(item, index) in shopProduct"
            :key="index"
            :to="'/shop/' + index"
          >
            <div class="product-img">
              <img
                src="@/assets/images/products/product-1.jpg"
                class="p-img-1"
                alt="img-1"
                width="400px"
              />
              <img
                src="@/assets/images/products/product-2.jpg"
                class="p-img-2"
                alt="img-2"
                width="400px"
              />
            </div>

            <div class="product-price">
              <div class="price">
                <div class="woocommerce-Price-amount amount">
                  <bdi>
                    <span class="woocommerce-Price-currencySymbol">Rs.</span>
                    1500.00</bdi
                  >
                </div>
              </div>
            </div>
            <div class="product-title">
              <h4><a href="#"></a>{{ item.PTitle }}</h4>
            </div>
            <div class="product-description text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, sapiente?
              </p>
            </div>
            <div class="product-detaild-button">
              <BtnBrown
                href="https://bootstrap-vue.org/docs/components/navbar"
                btnbrownText="Shop Now"
              />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnBrown from "../components/BtnBrown.vue";

export default {
  components: {
    BtnBrown,
  },
  data() {
    return {
      shopProduct: [
        {
          PTitle: "Black & White Premium Card",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product1",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product1",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product1",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product1",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product1",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product1",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product1",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product1",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
      ],
    };
  },
};
</script>

<style scoped>
.shopus {
  min-height: 1200px;
  padding: 200px 0px 0px 0px;
  margin-bottom: 200px;
}

.product-details {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.product-img img {
  border-radius: 5px;
}

.amount {
  font-size: 18px;
  font-weight: 300;
  font-family: var(--font-primary);
  padding: 10px 0px;
}
.product-title h4 {
  font-family: var(--font-heading);
  font-size: 24px;
  text-align: center;
  color: var(--brown-primary);
}
.product-description p {
  line-height: 18px;
  padding: 0px 10px;
  font-family: "Poppins";
  font-size: 14px !important;
}

.product-img {
  position: relative;
}

img.p-img-1 {
  position: absolute;
  transition: 0.2s all ease-in;
}

img.p-img-1:hover {
  opacity: 0;
  transition: 0.2s all ease-in;
}
</style>
