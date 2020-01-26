<template>
  <section class="">
  	<header class="major">
			<h2 class="h2">A few things we’re great at</h2>
			 Best UI & UX Designing, Highly Responsive & Customized android & ios applications, Secured & Responsive Websites ,  Best Software Solutions, Always updated to tommorows technology & We reach the clients expectations.
	</header>
        <blockquote class="card">
        <h4>
        Best Web Designs
        </h4>
        <p>A sleek website with well crafted content is essential to getting attention online. We know the ins and outs of website design and development. We provide a best interactive web designs.</p>
        </blockquote>
        <blockquote>
        <h4>Mobile Applications</h4>
        <p>Simplify your Mobile development,  grow your user base, and monetize more effectively with us. Stay  with us and connected to mobile apps for easy and time saving solutions. </p>
        </blockquote>
        <blockquote>
        <h4>Customized Softwares</h4>
        <p> We offer the customized software development and consulting services to help you pull off your next project ideas with less stress and cost. We provide Web based software also.</p>
        </blockquote>
        

        <header class="major">
        <h2>
        The Secret of Success</h2>
        </header>
        <p>Understanding the customer requirements and providing best solutions to clients by meeting the customer expectations. We offer the best digital solutions to make the businesses easier & Securable.</p>
        <div class="row">
        <div class="col-12-medium col-6">
            <blockquote>
            <h4>BEST SOFTWARES</h4>
            <p>We offer the custom software development and consulting services to help you in the business</p>
            </blockquote>
        </div>
        <div class="col-12-medium col-6">
            <blockquote>
            <h4>RESPONSIVE APPS</h4>
            <p>Simplify your Mobile development, grow your user base, and monetize more effectively with us.</p>
            </blockquote>
        </div>
        <div class="col-12-medium col-6">
            <blockquote>
            <h4>BEST WEBSITES</h4>
            <p> Sleek website with well crafted content is essential to getting attention online. We know the ins and outs of website development.</p>
            </blockquote>
        </div>
        <div class="col-12-medium col-6">
            <blockquote>
            <h4>INTERNET OF THINGS</h4>
            <p>Internet of things isa system of interrelated computing devices, mechanical and digital machines able to transfer data over a network.</p>
            </blockquote>
        </div>
        </div>
        
        <softwares/>
        <mobile/>
        <websites/>
  </section>
</template>

<script>
import softwares from './portfolio/softwares.vue'
import mobile from './portfolio/mobile.vue'
import websites from './portfolio/websites.vue'
export default {
    name:'about',
    components:{
        softwares,
        mobile,
        websites
    }
}
</script>

<style scoped>
p{
    margin:0;
}


</style>