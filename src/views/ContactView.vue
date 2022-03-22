<template>
  <div id="contactusmain">
    <div class="contactus d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <div class="contacticonbox">
              <div class="contact-icon">
                <b-icon icon="map" aria-hidden="true"></b-icon>
              </div>
              <h2>Address</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div class="col-sm-12 col-md-4">
            <div class="contacticonbox">
              <div class="contact-icon">
                <b-icon icon="mailbox" aria-hidden="true"></b-icon>
              </div>
              <h2>Address</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div class="col-sm-12 col-md-4">
            <div class="contacticonbox">
              <div class="contact-icon">
                <b-icon icon="telephone-inbound" aria-hidden="true"></b-icon>
              </div>
              <h2>Address</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-container text-center">
      <h2>Have Any Question?</h2>
      <p>
        It is a long established fact that a reader will be distracted content
        of a page when looking.
      </p>
      <div class="container message-form">
        <div class="row p-5">
          <div class="col-sm-12 col-md-6">
            <b-form
              ><b-form-input
                type="text"
                placeholder="Enter Your First Name"
                required
              ></b-form-input
            ></b-form>
          </div>
          <div class="col-sm-12 col-md-6">
            <b-form
              ><b-form-input
                type="text"
                placeholder="Enter Your Last Name"
                required
              ></b-form-input
            ></b-form>
          </div>

          <div class="col-sm-12 col-md-6">
            <b-form
              ><b-form-input
                type="text"
                placeholder="Enter Email"
                required
              ></b-form-input
            ></b-form>
          </div>
          <div class="col-sm-12 col-md-6">
            <b-form
              ><b-form-input
                type="text"
                placeholder="Enter Subject"
                required
              ></b-form-input
            ></b-form>
          </div>

          <div class="col-sm-12 col-md-12">
            <b-form-textarea
              id="textarea"
              placeholder="Enter something..."
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

    <div class="map-sec">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5720.330628506837!2d74.33635409690815!3d31.51512427361496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045f0de514f7%3A0x225ffefa1e47f17!2sNational%20College%20of%20Business%20Administration%20%26%20Economics%20(NCBAE)%20Main%20Campus!5e0!3m2!1sen!2s!4v1647955847188!5m2!1sen!2s"
        width="1920"
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
};
</script>

<style lang="scss" scoped>
.contactus {
  height: 50vh;
  padding-top: 20rem;
  padding-bottom: 100px;
}

.contacticonbox {
  text-align: center;
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 10%);
  padding: 40px;
  margin: 0px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 10px 0px;
  color: var(--brown-primary);
}
.form-container p {
  margin-bottom: 50px;
}

form input {
  padding: 10px !important;
  border-radius: 0px !important;
  border: 1px solid #0000001f;
}
.col-sm-12,
.col-md-6 {
  padding: 20px;
}
.message-form {
  box-shadow: 0px 1px 15px 0px rgb(62 65 159 / 10%);
  background-color: #fff;
}

.button {
  margin: 0px 20px 20px 20px;
  text-align: start;
}

input::placeholder {
  color: #00000078 !important;
}

.map-sec {
  z-index: -1;
  margin-top: -100px;
  position: relative;
}
</style>
