<template>
  <div class="container">
    <button class="btn btn2">Click Me</button>
  </div>
</template>

<style scoped>
.btn {
  border: 1px solid var(--brown-primary);
  background: none;
  padding: 8px 20px;
  font-size: 14px;
  font-family: var(--font-primary);
}

.btn2 {
  color: var(--black-secondary);
}

.btn2:hover {
  color: var(--brown-primary);
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

.btn2::before {
  top: 0;
  border-radius: 50% 50% 0 0;
}

.btn2::before {
  height: 0%;
}

.btn2:hover::before {
  height: 180%;
}
</style>
