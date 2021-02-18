<template>
        <footer id="footer-or">
        <div class="footer-content">
            <h3>Clips</h3>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy;2021. designed by Sergio Gomez & Neider Ortiz</p>
        </div>
            
        <!--<b-container >
                
                <b-card
                    overlay
                    img-src="https://picsum.photos/900/250/?image=3"
                    img-alt="Card Image"
                    text-variant="white"
                    title="Clips para memes"
                    sub-title="e.e"
                >
                    <b-card-text>
                        Mejores memes
                    </b-card-text>
                </b-card>
                
        </b-container>-->
        </footer>
</template>

<style scoped>
/*#footer-or {
    color: white;
    background-color: #1A1A1A;
    width: 100%;
    height: 100px;
    position: relative ;
    bottom: 0 ;
    left: 0;
}*/

footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #111;
    height: 200px;
    width: 100vw;
    font-family: "Open Sans";
    padding-top: 40px;
    color: #fff;
    position: relative ;
    max-width: 100%;
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h3{
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
}
.footer-content p{
    margin: 10px auto;
    line-height: 10px;
    font-size: 14px;
}
.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
}
.socials li{
    margin: 0 10px;
}
.socials a{
    text-decoration: none;
    color: #fff;
}
.socials a i{
    font-size: 1.1rem;
    transition: color .4s ease;

}
.socials a:hover i{
    color: aqua;
}

.footer-bottom{
    background: #000;
    
    padding: 20px 0;
    text-align: center;
}
.footer-bottom p{
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
}
.footer-bottom span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200;
}
</style>