<template>
<div>
  <mobile/>
  <softwares/>
  <hardwares/>
  <websites/>
</div>
</template>

<script>
import mobile from '../components/portfolio/mobile.vue';
import softwares from '../components/portfolio/softwares.vue';
import hardwares from '../components/portfolio/hardwares.vue';
import websites from '../components/portfolio/websites.vue';

export default {
    name:'portfolio',
    components:{
        mobile,
        softwares,
        hardwares,
        websites
    }
}
</script>

<style>

</style>