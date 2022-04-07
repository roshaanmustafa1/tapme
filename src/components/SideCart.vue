<template>
  <div id="cartmain">
    <div class="b-sidebar-s">
      <b-sidebar id="sidebar-right" no-header right shadow backdrop>
        <template #default="{ hide }">
          <div
            class="d-flex justify-content-between align-items-baseline mt-4 mb-4 px-2 close-icon"
          >
            <h5 class="text-dark">Cart</h5>
            <button class="btn p-0" @click="hide">
              <b-icon icon="x" aria-hidden="true"></b-icon>
            </button>
          </div>
          <div class="row px-2 product-cart pt-4">
            <div class="col-sm-12 col-md-4 cart-img">
              <img src="@/assets/images/products/product-1.jpg" alt="s" />
            </div>
            <div class="col-sm-12 col-md-8 cart-heading pe-3">
              <h4
                class="pb-2 d-flex justify-content-between align-items-baselineF"
              >
                Product Title
                <b-icon icon="x-circle" aria-hidden="true"></b-icon>
              </h4>

              <product-quantity />
            </div>

            <div class="view-cart-checkout row">
              <div class="col-sm-12 col-md-6">
                <h5>Total:</h5>
              </div>
              <div class="col-sm-12 col-md-6">
                <p class="text-end">
                  Rs<span>0.00</span><span>(Including Tax)</span>
                </p>
              </div>

              <div class="col-sm-12 col-md-12">
                <router-link
                  to="checkout"
                  tag="button"
                  class="btn btn-dark w-100 checkout-btn btn-square"
                  >Check Out</router-link
                >
              </div>
            </div>
          </div>
        </template>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import ProductQuantity from "@/components/ProductQuantity.vue";
export default {
  components: { ProductQuantity },
};
</script>

<style lang="scss">
div#sidebar-right {
  width: 500px;
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
  padding: 0px 20px;
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
