<template>
<div class="container-full cols">
	<header class="major">
 		<h2>Our Services</h2>
	</header>
<div class="fancy-cards">
  
  <div class="fancy-card" v-for="service in services" v-bind:key="service.name">
    <div class="top">
      <div class="caption">
        <h3 class="title">{{service.name}}</h3>
        <p>{{service.desc}}</p>
      </div>
    </div>
    <div class="middle"></div>
    <div class="bottom"></div>
  </div>


</div>


</div>
</template>

<script>
import services from '../static/serviceCard.json'

export default {
	name:'services',
	data(){
		return{
			services:services
		}
	}
}
</script>

<style>
html{
  font-family: 'open sans';
}
h1{
  margin-top: 30px;
  margin-bottom: 15px;
}

.fancy-cards{
  text-align: center;
  margin: auto;
  margin-bottom:20px;
}
.fancy-card{
	margin:0 5px;
}
.fancy-cards .fancy-card{
  display: inline-block;
  position: relative;
  
  box-sizing: border-box;
}

.fancy-card .top,
.fancy-card .middle,
.fancy-card .bottom{
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  width: 240px;
  height: 250px;
  transition: transform 300ms linear-out;
}
.fancy-card .top{
  z-index: 3;
  transform: scale(1.0);
  transition: transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1);
  background-image: url('../assets/images/overlay.png'),linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
  background-size: cover;
  background-position: center;
  box-shadow: 0px 1px 3px rgba(25,25,25,0.30);
}
.fancy-card .middle{
  position: absolute;
  background: #aaa;
  top: 0px;
  z-index: 2;
  transform: rotate(0deg);
  transition: transform 250ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.fancy-card .bottom{
  position: absolute;
  background: #ccc;
  top: 0px;
  z-index: 1;
  transform: rotate(0deg);
  transition: transform 250ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.fancy-card .caption{
  overflow: hidden;
  background: rgba(255,255,255,0.75);
  padding: 15px 10px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
}
.fancy-card .caption .title{
  color: #222;
  margin: 0px 0px 15px 0px;
  font-size: 1.4rem;
}
.fancy-card .caption .button{
  display: inline-block;
  color: #333;
  text-decoration: none;
  border: solid 1px #555;
  padding: 7px 13px;
  background-color: transparent;
  transition: all 300ms ease-in;
}


/*hovering*/
.fancy-card:hover .top{
  transform: scale(1.05);
}
.fancy-card:hover .middle{
 transform: rotate(-7deg);
 box-shadow: 1px 1px 2px rgba(74, 74, 74, 0.35);
}
.fancy-card:hover .bottom{
  transform: rotate(7deg);
  box-shadow: 1px 1px 2px rgba(113, 113, 113, 0.35);
}

.fancy-card:hover .button{
  background: rgba(0,0,0,0.8);
  color: #fff;
  border: 0px;
}

</style>