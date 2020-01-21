<template>
  <section id="second" class="main">
								<header class="major">
									<h2>Counters</h2>
									<p>With the Internet spreading linke wildfire and reaching every part of our daily life, more and more traffic is directed to websites  & mobile apps in search for information.</p>
								</header>
								
<div class="grid" id="grid">
  <a class="card"
                :href="link.one"
                target="_blank"
                ref="card"
                @mousemove="move"
                @mouseleave="leave"
                @mouseover="over">
                  <div class="reflection" ref="refl"></div>
                  <img src="../assets/images/counter/one.jpg"/>
    </a>
	<a class="card"
                :href="link.one"
                target="_blank"
                ref="card"
                @mousemove="move"
                @mouseleave="leave"
                @mouseover="over">
                  <div class="reflection" ref="refl"></div>
                  <img src="../assets/images/counter/two.jpg"/>
    </a>
	<a class="card"
                :href="link.one"
                target="_blank"
                ref="card"
                @mousemove="move"
                @mouseleave="leave"
                @mouseover="over">
                  <div class="reflection" ref="refl"></div>
                  <img src="../assets/images/counter/three.jpg"/>
    </a>
	<a class="card"
                :href="link.one"
                target="_blank"
                ref="card"
                @mousemove="move"
                @mouseleave="leave"
                @mouseover="over">
                  <div class="reflection" ref="refl"></div>
                  <img src="../assets/images/counter/four.jpg"/>
    </a>
    <a class="card" id="logo"
                :href="link.one"
                target="_blank"
                ref="card"
                @mousemove="move"
                @mouseleave="leave"
                @mouseover="over">
                  <div class="reflection" ref="refl"></div>
                  <img src="../assets/images/logo_dt.png"/>
    </a>
</div>
								
</section>
</template>

<script>
export default {
	name:'counter',
	data(){
		return{
			link:{
				'one':"#"
			},
			img:{
				'one':"../assets/images/counter/one.jpg",
				'two':"../assets/images/counter/one.jpg"
			}
		}
	},
	methods:{
		 over() {
      const refl = this.$refs.refl;
      refl.style.opacity = 1;
    },
    leave() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;
      card.style.transform = `perspective(500px) scale(1)`;
      refl.style.opacity = 0;
    },

    move() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;

      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
      card.style.transform = `perspective(500px) scale(2) ${rotY} ${rotX}`;

      const lightX = this.scale(relX, 0, 1, 150, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      const lightShadeBlack = `rgba(0, 0, 0, 1)`;
      refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
    },
    scale: (val, inMin, inMax, outMin, outMax) =>
    outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin)
	}
}
</script>

<style scoped>
@media screen and (max-width:760px){
  #logo{
    display:none;
  }
}
#grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  
}
#grid .card {
  background-color: #ccc;
  width: 150px;
  height: 150px;
  transition: all 0.1s ease;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  overflow: hidden;
  cursor: pointer;
}
#grid .card:hover {
  -webkit-transform: scale(2);
          transform: scale(2);
  z-index: 2;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}
#grid .card:hover img {
  -webkit-filter: grayscale(0);
          filter: grayscale(0);
}
#grid .card .reflection {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  transition: all 0.1s ease;
  opacity: 0;
  mix-blend-mode: soft-light;
}
#grid .card img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -webkit-filter: grayscale(0.65);
          filter: grayscale(0.65);
  transition: all 0.3s ease;
}

</style>