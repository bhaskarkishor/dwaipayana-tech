<template>
<div id="main">
	<wave/>
	<router-view/>
</div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import wave from './components/wave.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    wave
  },
  
}
</script>

<style>
</style>
