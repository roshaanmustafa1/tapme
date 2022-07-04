<template>
  <div id="cartmain">
    <div class="b-sidebar-s">
      <b-sidebar id="sidebar-right" no-header right shadow backdrop>
        <template #default="{ hide }">
          <div
            class="d-flex justify-content-between align-items-baseline mt-4 mb-4 px-2 close-icon"
          >
            <h5 class="text-dark">Items In Your Cart</h5>
            <button class="btn p-0" @click="hide">
              <b-icon icon="x" aria-hidden="true"></b-icon>
            </button>
          </div>
          <div class="pb-5" style="margin-bottom: 70px">
            <div
              class="row px-2 product-cart pt-4"
              v-for="(product, index) in products"
              :key="index"
            >
              <div class="col-sm-12 col-md-4 cart-img">
                <img
                  src="@/assets/images/products/product-1.jpg"
                  alt="s"
                  width="130"
                />
              </div>
              <div class="col-sm-12 col-md-8 cart-heading px-3">
                <h4
                  class="pb-2 d-flex justify-content-between align-items-baselineF"
                >
                  {{ product.PTitle }}
                  <b-icon
                    icon="x-circle"
                    aria-hidden="true"
                    @click="deleteProduct(index)"
                  ></b-icon>
                </h4>

                <div class="text-dark">
                  {{ product.PPrice }} x 1 = {{ product.PPrice }}
                </div>
              </div>
            </div>
          </div>
          <div class="view-cart-checkout row bg-white py-2">
            <div class="col-sm-12 col-md-6">
              <h5>Total:</h5>
            </div>
            <div class="col-sm-12 col-md-6">
              <p class="text-end">
                Rs<span>{{ getTotalAmount }}</span
                ><span>(Including Tax)</span>
              </p>
            </div>

            <div class="col-sm-12 col-md-12">
              <router-link
                to="/checkout"
                tag="button"
                class="btn btn-dark w-100 checkout-btn btn-square"
                >Check Out</router-link
              >
            </div>
          </div>
        </template>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      cartItems: [],
    }
  },
  computed: {
    ...mapState(['products']),
    getTotalAmount() {
      let total = 0
      this.products.forEach((product) => {
        total += product.PPrice
      })
      return total
    },
  },
  methods: {
    deleteProduct(index) {
      this.$store.dispatch('deleteProduct', index)
    },
  },
}
</script>

<style lang="scss">
div#sidebar-right {
  width: 400px;
}
</style>

<style lang="scss" scoped>
.close-icon h5 {
  font-size: 26px;
}

.checkout-btn:hover {
  background-color: white;
  color: black;
  border: 1px solid black !important;
}
.checkout-btn {
  margin-top: 5px;
}

.viewcart-btn {
  background-color: #eb8d2b;
  margin-top: 20px;
}
.view-cart-checkout.row {
  position: absolute;
  bottom: 0px;
  padding: 0px 20px 20px 20px;
}

.viewcart-btn:hover {
  background-color: white;
  color: black;
  border: 1px solid black !important;
}

.cart-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-cart svg {
  font-size: 16px;
}
.close-icon {
  margin: 0px 20px;
  display: flex;
  align-items: center !important;
}

.close-icon svg {
  font-size: 28px;
}
</style>
