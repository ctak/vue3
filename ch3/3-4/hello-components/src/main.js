import { createApp, ref } from 'vue'

/*
// origin
createApp(App).mount('#app')
*/

const app = createApp({}); // 이렇게 하면, App 은 {} 로 대신한다는 말이네.

app.provide('counter_header', 'Counter '); // 단지 string

// 신규 컴포넌트를 app 에 등록
app.component('counter', {
  // provide 값을 불러 사용할 수 있다. IoC 도 아니구...
  inject: ['counter_header'], // 그렇다면 counter.vue 가 있다 치자. 여기서는 이 값을 어떻게 사용하지.
  // <template> 은 js 영역이 아니니...? 음, 바로 아래에 쓸 수 있군.
  setup() {
    const count = ref(0);
    return { count, };
  },
  template: `
    <span>{{ counter_header }}</span>
    <button @click="count++" v-text="count" />
    <hr />
  `
});

// ng 처럼 MyComponent 인데 <my-component> 로 되는 것인데. 정규화를 하네.
app.component('MyComponent', {
  props: {
    title: {
      type: String,
      required: true,
      validator: function (v) {
        return typeof v === String;
      }
    },
    data: {
      type: Object,
      default: () => {
        return [];
      },
    },
  },

  setup() {
    const count = ref(0);
    return { count }
  },

  template: `
    <h3 v-text="title" />
    <p v-for="i in data" :key="i">{{ i }}</p>
  `,


})

// app 을 #app 장착.
app.config.globalProperties.title = 'Vue 3 Demo';
app.mount('#app');
/*
// 이렇게 App.vue 를 쓰지 않았기 때문에, 이런 warn 이 나왔다.
[Vue warn]: Component is missing template or render function. 
  at <App>
// 그래서 index.html 을 수정한다. 어찌되었든 template 이니까. 그런데 그렇다면 가상 DOM 이 아니지 않나.
// 읽으면서 가상DOM 으로 만든다는 것 같은데...
*/
