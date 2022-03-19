import { reactive, toRefs } from 'vue'

// 누군가가 useStorage() 를 사용하면 closure 가 생기는 것이잖아.
export const useStorage = () => {
  const KEY = 'my-todo-list';
  const storage_obj = reactive({ storage_id: 0 })
  const loadTodos = (initTodos) => {
    let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]'); // 여기서 string 으로 하는 것이 Hack이군.
    temp_todos.forEach((todo, idx) => {
      todo.id = idx;
    })
    storage_obj.storage_id = temp_todos.length; // 아 키sequence 를 만들고 있군. 근데 여기서는 storage_obj.value 를 안쓰네. 객체여서인가.
    initTodos(temp_todos); // IoC 인가. 아니군. 그냥 callback 을 실행하는군.
  }
  const saveTodos = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos.value)); // 여기서는 value 를 썼군. 그러면 ref([]) 가 먹히는 것이고, ref 는 .value 를 써야 하는군.
  }
  return {
    ...toRefs(storage_obj), // toRefs 는 사용하는 곳에서 반응성(reactivity) 를 읽지 않고 반환된 값을 destructure/spread 할 수 있기 때문에, 컴포지션 함수등에서 유욯하게 사용할 수 있습니다.
    // toRefs(storage_obj) ==> { storage_id: Ref<0> } 이었을 텐데,
    // ...toRefs(storage_obj) 이니, storage_id: Ref<0>, ... 만약 있었다면, 배열로 왔겠군.
    loadTodos,
    saveTodos,
  }
}