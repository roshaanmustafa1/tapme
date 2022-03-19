<template>
  <div class="container">
    <button class="btn btn1">Click Me</button>
  </div>
</template>

<style scoped>
.btn {
  border: 1px solid var(--brown-primary);
  background: none;
  padding: 8px 20px;
  font-size: 14px;
  font-family: var(--font-primary);
  position: relative;
  overflow: hidden;
  transition: 0.8s;
}

.btn1 {
  color: var(--brown-primary);
}

.btn1:hover {
  color: var(--black-secondary);
}

.btn::before {
  content: "";
  position: absolute;
  left: 0%;
  width: 100%;
  height: 0%;
  background: var(--brown-primary);
  z-index: -1;
  transition: 0.8s;
}

.btn1::before {
  top: 0;
  border-radius: 0 0 50% 50%;
}

.btn1:hover::before {
  height: 180%;
}
</style>
