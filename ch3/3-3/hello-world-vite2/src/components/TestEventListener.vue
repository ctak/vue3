<template>
  <p>{{ counter + counter2 }}</p>
  <p>counter: {{ counter }}, counter2: {{ counter2 }}</p>
  <button @click="counter++">클릭하면 counter 숫자가 올라갑니다.</button>
  <button v-on:click="onClick">클릭하면 숫자가 올라갑니다.</button>
  <br />
  <button @click.ctrl.exact="onClick2">counter2 올리기. @click.ctrl.exact</button>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      counter2: 0,
    }
  },
  setup() {
    let counter = ref(0)

    const onClick = (evt) => {
      if (evt) {
        evt.preventDefault();
        counter.value++;
      }
    }
    return {
      counter,
      onClick,
    }
  },
  methods: {
    onClick2: function (evt) {
      console.log('onClick2')
      if (evt) {
        evt.preventDefault();
      }
      // counter2++; // Uncaught ReferenceError: counter2 is not defined.
      this.counter2++;
    },
  },
}
</script>
