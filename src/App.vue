<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods:{
    handleChange(val){
      console.log(val);
    }
  },
}
</script>

<style>

</style>
