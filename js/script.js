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

      newTask:'',
      error:'',
      messaggio:'errore'

    }
  },
  methods:{
    addTask(){
      if (this.newTask.length >3 ){
        this.todoList.unshift({ text: this.newTask, done: false })
        this.newTask=''
        this.error=''

      }
      else{
        this.error='inserisci un testo di almeno 4 caratteri'
        this.newTask=''
      }
      
    },
    removeTask(indice){
      //  if(this.todoList.done===true){

      
      this.todoList.splice( indice,1)
      // this.error=''
    
      //  }
      // else{
      //   this.error='devi prima eseguire la task'
      // }

    
    }
   

  }
}).mount('#app')