<script>
  export default{
    
  }
</script>
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>父组件中接受到的子组件数据: {{ childData }}</h1>
    <HelloWorld 
      msg="Welcome to Your Vue.js App"
      :count ="parentCount"
      @child-count-change="handler"
      >
      <template #footer="dataObj">
        父组件中接受到的子组件数据: {{dataObj.childCount}}
      </template>
      This is slot.
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      parentCount:189,
      childData:0,
    }
  },
  methods:{
    handler(childCount){
      this.childData=childCount;
      console.log(this.childData);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
