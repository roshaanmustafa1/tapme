<template>
  <div>
    <div class="singleproductmain">
      <div class="container">
        <div class="row">
          <div
            class="col-sm-12 s-product-details d-flex align-items-center flex-column"
          >
            <div class="price">
              <div class="woocommerce-Price-amount amount">
                <bdi>
                  <span class="woocommerce-Price-currencySymbol">Rs.</span>
                  1500.00</bdi
                >
              </div>
            </div>

            <div class="product-title">
              <h4><a href="#"></a>Black &amp; White Premium Card</h4>
            </div>
            <span class="horizontalline"></span>

            <div class="s-pro-img d-flex justify-content-center my-5">
              <div class="imgWrapper">
                <img src="@/assets/images/products/product-1.jpg" alt="img-1" />
              </div>
              <div class="imgWrapper">
                <img src="@/assets/images/products/product-2.jpg" alt="img-2" />
              </div>
              <div class="imgWrapper">
                <img src="@/assets/images/products/product-1.jpg" alt="img-3" />
              </div>
            </div>

            <span class="horizontalline"></span>

            <p class="s-pro-des mt-5 w-50 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              molestias architecto ea cumque odio sed sit, sapiente asperiores
              aliquid minus ratione nobis dolorem inventore necessitatibus
              possimus, voluptates quae eius sunt praesentium placeat. Ab
              deserunt cupiditate eius voluptatem repellat alias aspernatur.
            </p>
            <div class="product-buttons d-flex justify-content-center my-3">
              <product-quantity />
              <btn-brown
                v-if="isAdded === false"
                @click.native="toggleBtn"
                btnbrownText="Add To Cart"
              />

              <btn-brown
                v-b-toggle.sidebar-right
                v-else
                btnbrownText="View Cart"
              />

              <btn-black
                href="https://bootstrap-vue.org/docs/components/navbar"
                btnText="# Wishlist"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="row">
          <div class="pro-model-details text-center">
            <div>
              <b-tabs content-class="mt-3" align="center">
                <b-tab title="Description" active
                  ><p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis quasi, reiciendis modi quisquam dolorem suscipit
                    doloribus autem porro? Fugit accusantium pariatur recusandae
                    est dolor atque explicabo optio consequatur excepturi odit
                    molestiae dolorem laudantium, sapiente hic eos itaque
                    consequuntur repellat eum? Facilis sunt rerum repellat quis
                    consectetur error nesciunt explicabo aliquid.
                  </p></b-tab
                >
                <b-tab title="Additional information"
                  ><p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corporis, dolore! Perferendis obcaecati deleniti saepe quia
                    laboriosam officiis, sunt dolorem incidunt eveniet,
                    doloremque quaerat tempore in possimus nulla voluptatibus
                    quas aperiam accusamus repudiandae excepturi ullam sequi
                    quod aliquam nostrum! Quisquam, nemo!
                  </p></b-tab
                >
                <b-tab title="Shipping &amp; Delivery"
                  ><p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem expedita molestiae aperiam aut accusantium
                    maxime. Odit tempore minus consectetur eos quos aperiam.
                    Beatae dignissimos voluptatibus incidunt quod voluptate
                    itaque in!
                  </p></b-tab
                >
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductQuantity from "@/components/ProductQuantity.vue";
import BtnBlack from "@/components/BtnBlack.vue";
import BtnBrown from "@/components/BtnBrown.vue";

export default {
  components: { ProductQuantity, BtnBlack, BtnBrown },
  data() {
    return {
      isAdded: false,
    };
  },
  methods: {
    toggleBtn() {
      this.isAdded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.singleproductmain {
  height: calc(100vh + 20px);
  padding-top: 200px;
}

.s-product-details h4 {
  font-family: var(--font-heading);
  font-size: 45px;
}

.woocommerce-Price-amount.amount {
  font-size: 28px;
  font-family: var(--font-heading);
}

.horizontalline {
  width: 40%;
  height: 1px;
  background-color: black;
}

.s-pro-img img {
  width: 100%;
  padding: 0px 10px;
}

.quantity-counter svg {
  fill: #eb8d2b;
  font-size: 20px;
}

.quantity-counter {
  background-color: black;
}

.pro-model-details {
  margin-bottom: 150px;
}

.pro-model-details .nav-tabs a {
  background-color: #eb8d2b;
}
.pro-model-details a {
  font-family: var(--font-heading);
}
</style>
