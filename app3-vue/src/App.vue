<template>
  <div class="app3">
    <h1 class="app3-title">
      {{ message }}
    </h1>
    <img class="vue-logo" src="https://es.vuejs.org/images/logo.png" alt="" />
    <div class="app3-counter">
      <h2>Counter Vue App</h2>
      <span>{{ count }}</span>
      <div class="app3-counter__buttons">
        <button @click.prevent="count++">Increment</button>
        <button @click.prevent="count = 0">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { message: 'Hello from Vue App!', count: 0 };
  },
};
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after  {
  box-sizing: inherit;
}

.app3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vue-logo {
  height: 100px;
  width: 100px;
  margin: 2rem;
}

.app3-title {
  font-size: 36px;
  font-family: inherit;
}

.app3-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.app3-counter > span {
  font-size: 4rem;
}

.app3-counter__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  width: 100%;
}

.app3-counter__buttons > button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #1f1f1f;
  color: #fefefe;
  padding: 0.75rem 1.5rem;
  border: none;
  margin: 0.5rem;
  border-radius: 6px;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: inherit;
  flex: 1;
}
</style>
