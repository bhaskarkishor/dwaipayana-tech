<template>

<div id="main">
  <navout/>
  <div class="main">
    
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import navout from './components/navout.vue'

export default {
  name: 'app',
  components: {
   navout
   
  },
  
}
</script>

<style>
h2{
 background: linear-gradient(45deg,#e37682,#5f4d93);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
