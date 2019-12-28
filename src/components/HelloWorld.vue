<template>
  <div class="main">
    <div class="services">
      <services/>
    </div>
          <welcomeMessage/>
          <about/>
          <testimonials/>
          <counter/>
          <header class="major">
            <h2>Our Team</h2><br>
          </header>
          <team/>
  </div>
</template>

<script>
import welcomeMessage from './welcomeMessage.vue'
import services from './services.vue'
import testimonials from './testimonials.vue'
import team from './team.vue'
import counter from './counter.vue'
import about from './about.vue'

export default {
  name: 'HelloWorld',
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
