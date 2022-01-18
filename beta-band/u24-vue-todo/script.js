const STORAGE_KEY = 'todomvc-app-vue'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed),
}

Vue.config.devtools = true;
new Vue({
  el:'#app',
  created() {
    this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) ) || [];
    console.log('LIFE: created: ', this.todos);
  },
  mounted() {
    console.log('LIFE: mounted');
  },
  updated() {
    console.log('LIFE: updated');
  },
  watch: {
    todos: {
      handler: function() {
        this.saveStorage();
      },
      deep: true,
    },
  },
  filters: {
    pluralize(n) {
      return n === 1 ? 'item' : 'items';
    },
    toUpperCase(sentence) {
      return sentence.toUpperCase();
    },
  },
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      console.log('remaining');
      return filters.active(this.todos).length
    }    
  },
  methods: {
    cancelEdit() {
      this.currentEditTodo = {}
    },
    doneEdit() {
      this.todos = this.todos.map(todo => {
        if (todo.id === this.currentEditTodo.id) {
          return {
            ...this.currentEditTodo
          }
        } else {
          return todo
        }
      }).filter(todo => todo.title.trim())
      this.currentEditTodo = {}
    },
    editTodo(todo) {
      this.currentEditTodo = { ...todo };
    },
    saveStorage() {
      console.log('Save to Storage');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos) );
    },
    clearCompleted() {
      // this.todos = this.todos.filter(todo => !todo.completed)
      this.todos = filters.active(this.todos);
    },
    setVisibility(visibility) {
      console.log('user choose visibility is:', visibility)  
      this.visibility = visibility;
    },
    getActiveTodos() {
      console.log('getActiveTodos');
      return this.todos.filter(todo => !todo.completed).length
    },
    // checkedTodo(todo) {
    //   // const checked = this.todos.find(_todo => _todo.id === todo.id);
    //   // checked.completed = true;
    //   todo.completed = !todo.completed;
    // },
    addTodo(keyname, event) {
      // console.log("keyup:", keyname, event);
      const title = this.newTodo && this.newTodo.trim();
      if ("" === title) {
        console.log('empty todo! return.')
        return;
      }
      this.todos.push({
        id: uuidv4(),
        title: this.newTodo, 
        completed: false});
      this.newTodo = "";
    },
    // => caused WRONG this
    // removeTodo: (todo) => {
    //   console.log('remove Todo:', todo);
    //   this.todos = this.todos.filter(_todo => _todo.id !== todo.id)
    // },
    removeTodo(todo) {
      console.log('remove Todo:', todo);
      this.todos = this.todos.filter(_todo => _todo.id !== todo.id)
    },

    handleClick() {
      console.log('click!');
    },
  },
  data: {
    title: '哈嘍，Vue',
    currentEditTodo: {},     //新增這裡
    visibility: 'all',
    message: 'message, vue',
    isShowFooter: true,
    newTodo: '',
    todos: [
      {
        id: uuidv4(),
        title: '學習 Vue Template 的使用',
        completed: true,
      },
      {
        id: uuidv4(),
        title: '學習在 Vue Template 中進行條件判斷',
        completed: false,
      },
      {
        id: uuidv4(),
        title: '學習在 Vue Template 中使用迴圈',
        completed: false,
      },
    ],

  }
})
  