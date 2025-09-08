<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><slot></slot></h2>
    <h2><slot name="footer" :childCount="childCount">
      footer slot default content
    </slot></h2>
    <p>count: {{ count }}</p>
    <button @click="handler">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    count:{
      type:[String,Number],
      // default:100,
      required: true
    }
  },
  data ( ){
    return{
      childCount: 0,
    }
  },
  methods:{
    handler(){
      this.childCount++
      this.$emit('child-count-change',this.childCount)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #ccc;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
