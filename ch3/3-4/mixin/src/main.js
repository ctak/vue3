import { createApp } from 'vue'

const exMixin = {
  data() {
    return {
      mixin_total: 5,
      data: [1,2,3,4,5],
    }
  },
};

const app = createApp({
  mixins: [exMixin],
  data() {
    return {
      total: 10,
    }

  },
  template: `
    <p>Total: {{ total }}</p>
    <p>Mixin Toatl: {{ mixin_total }}</p>
  ` 

})

app.mount('#app');
