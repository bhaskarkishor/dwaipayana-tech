<template>
<section id="nav-container">
     <!-- The overlay -->
<div id="myNav" class="overlay">

  <!-- Button to close the overlay navigation -->
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>

  <!-- Overlay content -->
  <div class="overlay-content">
   	
							<li><a href="/">Home</a></li>
							<li><a href="/services">Services</a></li>
							<li><div class="dropdown">
								<a href="#" class="dropbtn menux">Portfolio <i class="fa fa-caret-down"></i></a>
								<div class="dropdown-content ">
								  <a class="menux" href="/mobile">Mobile Apps</a>
								  <a href="/software">Software </a>
								  <a href="/hardware">Hardware </a>
								  <a href="/website">Websites</a>
								</div>
							  </div></li>
							<li><a href="/clients">Our Clients</a></li>
							<li><a href="/career">Career</a></li>
							<li><a href="/contactus">Contact Us</a></li>
						
  </div>

</div>

<span id="nav-btn" style="font-size:30px;cursor:pointer" @click="openNav()">&#9776;</span>
</section>
</template>

<script>


export default {
    name:'navout',
    components:{
      
    },
    methods:{
       openNav:function(){
          document.getElementById("myNav").style.width = "100%";
       },
       closeNav:function(){
          document.getElementById("myNav").style.width = "0%";
       }
    },
    mounted(){
      window.onscroll = function() {myFunction()};

      var navbar = document.getElementById("nav-btn");
      var sticky = navbar.offsetTop;

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }
    }
}
</script>

<style scoped>
.menux{
  width:400px;
  color:black;
}
.dropdown-content{
  background-color:grey;
}
@media screen and (min-width: 736px) {

			#nav-container {
				display: none;
			}
}
li{
  list-style: none;
  
}
#nav-btn{
  padding-top:0.4rem;
  padding-left:1rem;
  z-index:10000;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 100000 ; /* Sit on top */
  left: 0;
  top: 0;
  background-image: linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
  color:white;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
 
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color:whitesmoke;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>