<template>
  <todo-list-new />
  <section class="container">
    <div class="row justify-content-center m-2">
      <todo-list-main />
    </div>
  </section>
</template>

<script>
import { ref, readonly, provide } from 'vue'
import { useStorage } from '../compositions/storage';
import TodoListNew from './TodoListNew.vue';
import TodoListMain from './TodoListMain.vue';
export default {
  name: 'TodoListContainer',
  setup() {
    const todos = ref([]) // 이건 ref 로 반응형을 만든 것이고,
    const { loadTodos, saveTodos, storage_id } = useStorage();
    provide('todos', readonly(todos)) // 이건 에반유 권유로, readonly 로 만든 것이고,
    const initTodos = (init_todos) => {
      todos.value = init_todos; // 여기서, todos.value 로 왜냐. ref 로 감쌌으니까.
    }
    const addTodo = (job, date) => {
      todos.value.push({
        id: storage_id.value++,
        job,
        date,
        completed: false,
      })
      saveTodos(todos);
    }
    const removeTodo = (id) => {
      todos.value.splice(id, 1);
      todos.value.forEach((todo, id) => {
        todo.id = idx;
      })
      saveTodos(todos);
    }
    const completeTodo = (id) => {
      todos.value.find(todo => todo.id == id).completed = true;
      saveTodos(todos);
    }

    provide('addTodo', addTodo)
    provide('removeTodo', removeTodo)
    provide('completeTodo', completeTodo)

    loadTodos(initTodos); // 결론은 여기서 실행하네.
  },
  components: {
    TodoListNew,
    TodoListMain,
  }
}
</script>