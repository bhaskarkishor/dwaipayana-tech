<template>
  <div>
    
          <services/>
    
          <welcomeMessage/>
          <about/>
          <testimonials/>
          <counter/>
          
          <team/>
  </div>
</template>

<script>
import welcomeMessage from '../components/welcomeMessage.vue'
import services from '../components/services.vue'
import testimonials from '../components/testimonials.vue'
import team from '../components/team.vue'
import counter from '../components/counter.vue'
import about from '../components/about.vue'


export default {
  name: 'Home',
  components: {
    services,
    welcomeMessage,
    testimonials,
    team,
    counter,
    about
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.services{
  display: flex;
  align-content: center;
}
</style>
