<template>
  <my-button :sm="true">My Button</my-button>
  <my-button>My Button</my-button>
  <MyButton lg background-white>My Button</MyButton>
  <my-button sm pill text-red background-black>My Button</my-button>
  <MyButton md pill text-green background-pink>My Button</MyButton>
  <my-button lg pill v-on:click.prevent="onClick">My Button</my-button>

  <br />
  
  <MyButton type="switch" background-blue text-white v-model:active="active">SWITCH</MyButton>
</template>

<script>
import MyButton from './components/MyButton.vue';

export default {
  name: 'App',
  methods: {
    onClick(evt) {
      alert('Clicked')
    }
  },
  components: {
    MyButton,
  }
}
</script>