<template>
  <div id="shopusmain">
    <div class="shopus">
      <div class="container">
        <span class="shop-heading">
          <h2 class="text-center display-2">Shop Your Choice</h2></span
        >
        <div class="row">
          <div
            class="col-sm-12 col-md-4 product-details"
            v-for="(item, index) in shopProduct"
            :key="index"
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
                    {{ item.PPrice }}</bdi
                  >
                </div>
              </div>
            </div>
            <div class="product-title">
              <h4><a href="#"></a>{{ item.PTitle }}</h4>
            </div>
            <div class="product-description text-center">
              <p>
                A semi transparent card with exquisite design that gives a
                lasting impression and allow you to Instantly share your
                contacts information with just a touch to a smartphone.
              </p>
            </div>
            <div class="product-detaild-button d-flex">
              <BtnBlack
                btnText="Add to cart"
                Class="me-2"
                @click.native="updataCart(index)"
              />
              <router-link :to="'/shop/' + index">
                <BtnBrown
                  href="https://bootstrap-vue.org/docs/components/navbar"
                  btnbrownText="Quick View"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnBrown from "../components/BtnBrown.vue";
import BtnBlack from "../components/BtnBlack.vue";

export default {
  components: {
    BtnBrown,
    BtnBlack,
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
          PTitle: "Product2",
          PPrice: 200,
          PDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente?",
        },
        {
          PTitle: "Product3",
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
  methods: {
    updataCart(index) {
      console.log("klfsj");
      this.$store.dispatch("updateCart", 1);
      this.$store.dispatch("updateProducts", this.shopProduct[index]);
    },
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
