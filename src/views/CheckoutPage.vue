<template>
  <div>
    <div class="checkoutmain">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 mb-5">
            <h2>Checkout</h2>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 form-side">
              <h5>Billing Details</h5>

              <div class="container message-form-checkout">
                <div class="row">
                  <div class="col-sm-12 col-md-6 fname">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="Enter Your First Name"
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12 col-md-6 lname">
                    <b-form
                      ><b-form-input
                        type="text"
                        class
                        placeholder="Enter Your Last Name"
                        required
                      ></b-form-input
                    ></b-form>
                  </div>

                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="Company Name"
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12">
                    <div class="input-group">
                      <div class="input-group-prepend"></div>
                      <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="Address:1 House Number  and Street Number  
"
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="Apartment Suite Unit etc (Optional) 
"
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="TOWN / CITY "
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="COUNTY (OPTIONAL)"
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="POSTCODE "
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="PHONE"
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="EMAIL ADDRESS "
                        required
                      ></b-form-input
                    ></b-form>
                  </div>
                  <div class="col-sm-12">
                    <b-form
                      ><b-form-input
                        type="text"
                        placeholder="ORDER NOTES (OPTIONAL)"
                        required
                      ></b-form-input
                    ></b-form>
                  </div>

                  <div class="col-sm-12 col-md-12 mb-3">
                    <label for="text" class="ps-3"
                      ><B>ADDIOTIONAL INFORMATION</B></label
                    >
                    <b-form-textarea
                      id="textarea"
                      placeholder="Notes About Your Order"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>

                  <div class="button">
                    <BtnBlack
                      href="https://bootstrap-vue.org/docs/components/navbar"
                      btnText="Submit"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 your-order-main">
              <h5>YOUR ORDER</h5>
              <div class="row your-order-heading">
                <div class="col-sm-8">
                  <p>Product</p>
                </div>
                <div class="col-sm-4">
                  <p>Subtotal</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8 your-order-details d-flex">
                  <img src="@/assets/images/products/product-1.jpg" alt="p1" />
                  <div
                    class="pro-name-counter d-flex justify-content-center flex-column"
                  >
                    <p>Product Name</p>
                    <product-quantity />
                  </div>
                </div>
                <div class="col-sm-4 your-order-details">
                  <p>Price</p>
                </div>
              </div>
              <div class="row your-order-heading">
                <div class="col-sm-8">
                  <p>Total</p>
                </div>
                <div class="col-sm-4">
                  <p>Total Price</p>
                </div>
              </div>
              <div class="row payment-method">
                <div class="col-sm-12 payment-box">
                  <h2>Payment Method</h2>
                  <div class="checkout-privacy text-center">
                    <p>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                    <b-button
                      to="checkout"
                      tag="button"
                      @click="placeOrder"
                      class="btn btn-dark w-100 checkout-btn btn-square"
                      >Place Order</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnBlack from "@/components/BtnBlack.vue";
import ProductQuantity from "@/components/ProductQuantity";
import { doc, setDoc } from "firebase/firestore";
import { mapState } from "vuex";
export default {
  components: {
    BtnBlack,
    ProductQuantity,
  },
  computed: {
    ...mapState(["user", "products"]),
  },
  methods: {
    placeOrder() {
      setDoc(doc(this.$db, "orders", this.user.uid), {
        name: this.user.displayName,
        email: this.user.email,
        products: this.products,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.checkoutmain {
  height: auto;
  padding-top: 200px;
  padding-bottom: 200px;
}

#inputGroupSelect01 {
  margin-left: 0px;
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #ced4da;
}

/*Form Checkout*/

.message-form-checkout input {
  margin: 15px 0px;
}

.fname {
  padding-right: 15px;
}

.input-group {
  padding: 10px 0px;
}

.form-side {
  padding: 60px 40px;
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 10%);
}

/*Your Order*/

.your-order-main {
  padding: 60px;
}

.your-order-details img {
  width: 40%;
  padding-right: 20px;
}

.row.your-order-heading {
  background-color: #eb8d2b;
  margin-bottom: 20px;
  margin-top: 20px;
}

.your-order-main p {
  margin: 0px;
}

.your-order-heading .col-sm-8 {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.your-order-heading .col-sm-4 {
  padding: 10px 0px;
  display: flex;
  align-items: center;
}
.your-order-details {
  display: flex;
  align-items: center;
}

/*payment method*/

.payment-method {
  margin-top: 50px;
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 10%);
  height: 200px;
}
.col-sm-12.payment-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}
.checkout-privacy p {
  font-size: 12px !important;
  padding: 5px 15px;
}
</style>
