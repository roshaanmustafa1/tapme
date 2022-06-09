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

            <div class="s-pro-img d-flex justify-content-center my-5 w-75">
              <div
                class="imgWrapper justify-content-end d-flex position-relative"
              >
                <img
                  src="@/assets/images/products/blankfrontcard.png"
                  alt="img-1"
                  width="300px"
                />
                <div class="name-field-box">
                  <p class="position-absolute sin-p-text name-field">
                    {{ cardDetails.name }}
                  </p>
                </div>
                <div class="phone-field-box">
                  <p class="position-absolute sin-p-text phone-field">
                    {{ cardDetails.phoneNo }}
                  </p>
                </div>
                <div class="email-field-box">
                  <p class="position-absolute sin-p-text email-field">
                    {{ cardDetails.email }}
                  </p>
                </div>
              </div>
              <div class="imgWrapper">
                <img
                  src="@/assets/images/products/productcardback.png"
                  alt="img-2"
                  width="300px"
                />
              </div>
            </div>

            <span class="horizontalline"></span>

            <div class="mt-5 w-50 my-4">
              <h4 class="text-center text-capitalize mb-4">
                enter your details
              </h4>
              <b-form-input
                v-model="cardDetails.name"
                placeholder="Enter your name"
                class="mb-2"
                maxlength="25"
                block
              ></b-form-input>
              <b-form-input
                v-model="cardDetails.phoneNo"
                placeholder="Enter your Phone"
                class="mb-2"
                type="number"
                block
              ></b-form-input>
              <b-form-input
                v-model="cardDetails.email"
                placeholder="Enter your Email"
                type="email"
                block
              ></b-form-input>
            </div>

            <p class="s-pro-des mt-5 w-50 text-center">
              Digital Contact Card is the easiest way to share your, email
              social media, contact info, website, google map and much more in a
              contactless way. With Just a Simple “Tap or Scan” , you can
              instantly share your contact info with everyone you meet, comes
              with integrated nfc technology, which enables you to transmit your
              contact details, socials & so much more into any smartphone with
              no app needed.
            </p>
            <div class="product-buttons d-flex justify-content-center my-3">
              <btn-brown
                @click.native="toggleBtn"
                btnbrownText="Add To Cart"
                Class="me-2"
              />

              <btn-brown
                v-b-toggle.sidebar-right
                v-if="isAdded === true"
                btnbrownText="View Cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="mt-5">
      <div class="container">
        <div class="row">
          <div class="pro-model-details text-center">
            <div>
              <b-tabs content-class="mt-3" align="center">
                <b-tab title="Description" active
                  ><p>
                    1. Tap Digital Contact card to NFC enabled phone. 2. Open
                    the notification.
                  </p></b-tab
                >
                <b-tab title="Additional information"
                  ><p>
                    No Special Apps Required on Compatible Smartphones. Move
                    your contact information to well-suited smartphones in only
                    a few seconds. Most Importantly, update your contacts
                    information in real time.
                  </p></b-tab
                >
                <b-tab title="Shipping &amp; Delivery"
                  ><p>
                    Share and promote your Business. All your contacts
                    information in one place. Grow your network.
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
import BtnBrown from "@/components/BtnBrown.vue";

export default {
  components: { BtnBrown },
  data() {
    return {
      isAdded: false,
      cardDetails: { name: "", email: "", phoneNo: "" },
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
  min-height: 1200px;
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

.sin-p-text {
  z-index: 999;
  top: 455px;
  left: 78px;
  color: white;
}

.name-field {
  z-index: 999;
  top: 85px;
  left: 50%;
  color: #252525;
  font-size: 28px !important;
  font-weight: 800;
  max-width: 180px;
  overflow: hidden;
  overflow-wrap: break-word;
  line-height: 32px;
  text-align: center;
  transform: translate(-50%, 0px);
}

.phone-field {
  z-index: 999;
  top: 305px;
  left: 50%;
  color: white;
  font-weight: 400;
  transform: translate(-50%);
  font-size: 14px !important;
}

.email-field {
  z-index: 999;
  top: 338px;
  left: 50%;
  color: white;
  font-weight: 400;
  transform: translate(-50%);
  max-width: 300px;
  overflow: hidden;
  overflow-wrap: break-word;
  font-size: 14px !important;
}

.form-control {
  text-align: center;
}

.form-control::placeholder {
  text-align: center;
  text-transform: capitalize;
  color: #000000a3 !important;
}
</style>
