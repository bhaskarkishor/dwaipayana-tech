<template>
    <div>
        <header class="major">
                
              <h2>Our Services</h2>            
            
        </header>
        <p>Dwaipayana Technologies offers the excellent and high quality services in the Information Technology, Internet Of Things and other all IT related fields. We offer services in software development, responsive web and mobile applications development.</p>
        
        <div v-for="service in services" v-bind:key="service.title">
            <header class="major">
                <h2>{{service.title}}</h2>
            
            </header>
            <p>{{service.description}}</p>

        </div>
        <div>
            <h3><a href="/contactus">Reach out to us</a> to avail our awesome services</h3>
        </div>
    </div>
</template>

<script>
import services from '../static/services.json'

export default {
    name:'services',
    data(){
        return {
            services:services
        }
    },
    mounted(){
        var floatTextMenuLinks = document.querySelectorAll(".float-text-menu li a");
            floatTextMenuLinks.forEach(function (link) {
            var letters = link.textContent.split("");
            link.textContent = "";
            letters.forEach(function (letter, i) {
                var span = document.createElement("span");
                span.textContent = letter;
                span.style.transitionDelay = i / 20 + "s";
                span.dataset.text = letter;
                link.append(span);
            });
            });
    }
}
</script>

<style>

</style>