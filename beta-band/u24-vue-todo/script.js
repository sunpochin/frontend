Vue.config.devtools = true;
new Vue({
  el:'#app',
  computed: {
    activeTodos() {
      console.log('activeTodos');
      return this.todos.filter(todo => !todo.completed).length
    }    
  },
  methods: {
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
  