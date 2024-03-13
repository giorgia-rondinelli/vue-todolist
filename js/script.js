const{createApp}=Vue 
createApp({
  data(){
    return{
      todoList:[
        {
          text:'fare la spesa',
          done:false
        },
        {
          text:'studiare',
          done:true
        },
        {
          text:'chiamare il dottore',
          done:false
        },
        {
          text:'fare benzina ',
          done:true
        },
        {
          text:'chiamare ludovico ',
          done:false
        }
      ],

      newTask:''

    }
  },
  methods:{
    addTask(){
      this.todoList.unshift({ text: this.newTask, done: false })
    }

  }
}).mount('#app')