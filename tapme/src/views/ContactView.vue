<template>
  <div id="contactusmain">
    <div class="contactus d-flex align-items-center">
      <div class="container">
        <div class="row address-box d-flex justify-content-center">
          <div class="col-sm-12 col-md-4 contacticonbox">
            <div class="contact-icon">
              <b-icon icon="map" aria-hidden="true"></b-icon>
            </div>
            <h2>Address</h2>
            <p>
              40 E 1 Shahrah-e-Hazrat Imam Hussain, Block E1 Block E 1 Gulberg
              III, Lahore, Punjab 54660
            </p>
          </div>

          <div class="col-sm-12 col-md-4 contacticonbox">
            <div class="contact-icon">
              <b-icon icon="mailbox" aria-hidden="true"></b-icon>
            </div>
            <h2>Email</h2>
            <p>2193257@ncbae.edu.pk</p>
          </div>

          <div class="col-sm-12 col-md-4 contacticonbox">
            <div class="contact-icon">
              <b-icon icon="telephone-inbound" aria-hidden="true"></b-icon>
            </div>
            <h2>Mobile No</h2>
            <p>+92 313 4781 894</p>
          </div>
        </div>
      </div>
    </div>

    <div class="form-container text-center">
      <div class="container message-form">
        <div class="row p-5 message-form-subbox">
          <h2>Have Any Question?</h2>
          <p>
            It is a long established fact that a reader will be distracted
            content of a page when looking.
          </p>

          <div class="col-sm-12 col-md-6">
            <b-form>
              <b-form-input
                type="text"
                placeholder="Enter Your First Name"
                required
                v-model="contactForm.firstName"
              ></b-form-input
            ></b-form>
          </div>
          <div class="col-sm-12 col-md-6">
            <b-form
              ><b-form-input
                type="text"
                placeholder="Enter Your Last Name"
                required
                v-model="contactForm.lastName"
              ></b-form-input
            ></b-form>
          </div>

          <div class="col-sm-12 col-md-6">
            <b-form
              ><b-form-input
                type="text"
                placeholder="Enter Email"
                required
                v-model="contactForm.email"
              ></b-form-input
            ></b-form>
          </div>
          <div class="col-sm-12 col-md-6">
            <b-form
              ><b-form-input
                type="text"
                placeholder="Enter Subject"
                required
                v-model="contactForm.subject"
              ></b-form-input
            ></b-form>
          </div>

          <div class="col-sm-12 col-md-12">
            <b-form-textarea
              id="textarea"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
              v-model="contactForm.message"
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

    <div class="map-sec w-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5720.330628506837!2d74.33635409690815!3d31.51512427361496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045f0de514f7%3A0x225ffefa1e47f17!2sNational%20College%20of%20Business%20Administration%20%26%20Economics%20(NCBAE)%20Main%20Campus!5e0!3m2!1sen!2s!4v1647955847188!5m2!1sen!2s"
        width="100%"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
import BtnBlack from "../components/BtnBlack.vue";
export default {
  components: { BtnBlack },
  data() {
    return {
      contactForm: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.contactus {
  height: 600px;
  padding-top: 20rem;
  padding-bottom: 100px;
  z-index: 22;
}

.address-box {
  flex-wrap: nowrap !important;
  column-gap: 20px;
}

.contacticonbox {
  text-align: center;
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 10%);
  padding: 40px !important;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #eb8d2b !important;
}

.contact-icon svg {
  font-size: 48px;
  margin: 20px;
}

.contact-icon {
  width: 100px;
  height: 100px;
  background-color: #eb8d2b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contacticonbox h2 {
  padding: 20px 0px 0px 0px;
}

/*Form Setting*/

.form-container {
  margin-top: 100px;
  z-index: 2;
  position: relative;
}
.form-container h2 {
  font-size: 60px;
  font-family: var(--font-heading);
  padding: 0px 0px;
  color: var(--brown-primary);
  margin-bottom: 0px;
}
.form-container p {
  margin-bottom: 50px;
}

form input {
  padding: 10px !important;
  border-radius: 0px !important;
  border: 1px solid #eb8d2b;
}
textarea.form-control {
  min-height: calc(1.5em + 0.75rem + 2px);
  border: 1px solid #eb8d2b;
}
.col-sm-12,
.col-md-6 {
  padding: 20px;
}
.message-form {
  box-shadow: 0px 1px 15px 0px rgb(62 65 159 / 10%);
  background-color: #fff;
  border: 1px solid #eb8d2b;
}

.button {
  margin: 0px 20px 20px 20px;
  text-align: start;
}

input::placeholder {
  color: #00000078 !important;
}

.map-sec {
  z-index: 0;
  margin-top: -100px;
  position: relative;
}

#contactusmain {
  background: url("@/assets/images/lineslight.png");
  z-index: -1 !important;
  background-size: contain;
  background-position: center center;
}
</style>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .address-box {
    flex-wrap: nowrap !important;

    column-gap: 20px;
    padding: 30px;
  }
}
@media (max-width: 450px) {
  .contacticonbox[data-v-13b6e01b] {
    margin: 0;
  }

  .contactus {
    height: 1200px;
  }

  .message-form-subbox {
    padding: 1rem !important;
  }

  .address-box {
    flex-wrap: wrap !important;

    row-gap: 20px;
    padding: 30px;
  }
}
</style>
