<template>
  <div id="pro-quantity" class="d-flex">
    <div
      class="quantity-counter d-flex justify-content-center align-items-center"
    >
      <button class="minus" @click="decreament">
        <b-icon icon="dash" aria-hidden="true"></b-icon>
      </button>

      <div class="counter">
        <b-form-input v-model="productQuantity" type="number"></b-form-input>
      </div>
      <button class="plus" @click="increament">
        <b-icon icon="plus" aria-hidden="true"></b-icon>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productQuantity: 1,
    };
  },
  methods: {
    increament() {
      this.productQuantity++;
    },
    decreament() {
      if (this.productQuantity == 1) {
        return;
      } else {
        this.productQuantity--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.counter input {
  text-align: center;
  border-radius: 0px;
  border: 2px solid grey;
}

#pro-quantity {
  width: 120px;
  margin-right: 10px;
}

button.plus,
.minus {
  border: 0px;
  height: 100%;
}
</style>
