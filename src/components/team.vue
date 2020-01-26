<template>
<div>
    <header class="major">
            <h2>Our Team</h2><br>
          </header>
    <section class="">
    
        <div class="container">
    
    
            <div class="boxX">
                <div class="imgBx">
                    <img src="../assets/images/team/ceo.jpeg">
                </div>
                <div class="content">
                    <div>
                        
                        <p>CEO<br>
                        Founder
                        </p>
                    </div>
                </div> 
            </div>
            <div class="boxX">
                <div class="imgBx">
                    <img src="../assets/images/team/app.jpeg">
                </div>
                <div class="content">
                    <div>
                        
                        <p>
                            Ohiduzzaman<br>
                            App Developer
                        </p>
                    </div>         
                </div> 
            </div>
            <div class="boxX">
                <div class="imgBx">
                    <img src="../assets/images/team/samarth.jpeg">
                </div>
                <div class="content">
                    <div>
                        
                        <p>
                            Samrath Agastya<br>
                            App Developer
                        </p>
                    </div>         
                </div> 
            </div>
            <div class="boxX">
                <div class="imgBx">
                    <img src="../assets/images/team/web.jpg">
                </div>
                <div class="content">
                    <div>
                        <p>
                        Bhaskar<br>
                            Web Developer
                        </p>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name:'team'
}
</script>

<style scoped>
*{
    margin:0;
    padding:0px;
    box-sizing: border-box;
}

.bodyx{
    display:flex;
    justify-content: center;
    align-items: center;
    
}
.container{
    position: relative;
   
    display:flex;
    flex-wrap:wrap;

}
.container .boxX{
    position: relative;
    width:250px;
    height: 275px;
    overflow:hidden;
    transition:0.1s;
}
.container .boxX:hover{
    transform:scale(1.25);
    z-index: 1;
    box-shadow:0 25px 40px rgba(0,0,0,0.5);
}
.container .boxX .imgBx{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}
.container .boxX .imgBx img{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
.container .boxX .imgBx:before{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    content:'';
    z-index: 1;
    background: linear-gradient(45deg,#e37682,#5f4d93);
    mix-blend-mode: multiply;
    opacity: 0;
    transition:0.2s;
}
.container .boxX:hover .imgBx:before{
    opacity: 1;
}
.container .boxX .content{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:2;
    display:flex;
    padding:20px;
    align-items:flex-end;
}
.container .boxX .content h2{
    color:#fff;
    transition: 0.2s;
    text-transform:uppercase;
    margin-bottom:5px;
    font-size:20px;
    transform:translateY(200px);

}
.container .boxX:hover .content h2{
    transform:translateY(0);
    transition-delay:0.2s;
}
.container .boxX .content p{
    color:#fff;
    transform:translateY(200px);
    transition:0.5s;
    font-size:14px;

}
.container .boxX:hover .content p{
    transform:translateY(0);
    transition-delay:0.3s;
}
</style>