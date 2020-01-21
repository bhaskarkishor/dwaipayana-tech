<template>
<div class="error">
  <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for is not avaible!</p>
		
		<a href="/" class="link_404">Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
</div>
</template>

<script>
export default {

}
</script>

<style>

/*======================
    404 page
=======================*/
.error{
	display:flex;
	flex-direction: row;
	justify-content: center;
}

.page_404{ padding:0;
 background:#fff;
 width:100%;
}

.page_404  img{ width:100%;}

.four_zero_four_bg{
 
 background-image: url(../assets/images/dribbble_1.gif);
    height: 400px;
    background-position: center;
 }
 
 
 .four_zero_four_bg h1{
 font-size:80px;
 }
 
  .four_zero_four_bg h3{
			 font-size:80px;
			 }
			 
.link_404{			 
	color: #fff!important;
    padding: 0 20px;
    background: #39ac31;
    margin:0;
    display: inline-block;
    background:url(../assets/images/overlay.png),linear-gradient(45deg, #e37682 15%, #5f4d93 85%); 
    }
.contant_box_404{ margin-top:-50px;}
.col-sm-12{
	width:100%;
}
</style>