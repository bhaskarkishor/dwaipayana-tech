<template>
<section>
    <header class="major">
        <h2>Software Products</h2>
        <p>Our firm specializes in offering an optimum quality Software with all latest features</p>
    </header>
    <carousel-3d :autoplay="true" :autoplay-timeout="2000" :width="612" :height="359" :controls-visible="true" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="false">
    <slide v-for="(slide, i) in images" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.pathLong">
        </template>
    </slide>
</carousel-3d>

</section>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name:'softwares',
    components: {
        Carousel3d,
        Slide
    },
    data(){
        return{
            images:[]
        }
    },
    mounted(){
        this.importAll(require.context('../../assets/images/softwares/', true, /\.jpg$/));
    },
    methods: {
        importAll(r) {
        r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
        }
    },
}
</script>

<style>

</style>