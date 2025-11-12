import React from 'react';

import g1img from "../../images/g1.jpg"
import g2img from "../../images/g2.jpg"
import g3img from "../../images/g3.jpg"
import g4img from "../../images/g4.jpg"

export default function Gallery(){
  
return(
<section class="gallery py-5" id="gallery">
<div class="container py-md-5">
    <div class="header text-center">
        <h3 class="tittle mb-lg-5 mb-3">Our Gallery</h3>
    </div>
    <div class="row news-grids text-center gallery-wrap">
        <div class="col-md-3 gal-img">
            <a href="#gal1"><img src={g1img} alt="news" class="img-fluid" /></a>
        </div>
        <div class="col-md-3 gal-img">
            <a href="#gal2"><img src={g2img} alt="news" class="img-fluid" /></a>
        </div>
        <div class="col-md-3 gal-img">
            <a href="#gal3"><img src={g3img} alt="news" class="img-fluid" /></a>
        </div>
        <div class="col-md-3 gal-img">
            <a href="#gal4"><img src={g4img} alt="news" class="img-fluid" /></a>
        </div>

    </div>
    <div id="gal1" class="pop-overlay animate">
        <div class="popup">
            <img src={g1img} alt="Popup" class="img-fluid" />

            <a class="close" href="#gallery">&times;</a>
        </div>
    </div>
    <div id="gal2" class="pop-overlay animate">
        <div class="popup">
            <img src={g2img} alt="Popup" class="img-fluid" />

            <a class="close" href="#gallery">&times;</a>
        </div>
    </div>
    <div id="gal3" class="pop-overlay animate">
        <div class="popup">
            <img src={g3img} alt="Popup" class="img-fluid" />

            <a class="close" href="#gallery">&times;</a>
        </div>
    </div>
    <div id="gal4" class="pop-overlay animate">
        <div class="popup">
            <img src={g4img} alt="Popup" class="img-fluid" />

            <a class="close" href="#gallery">&times;</a>
        </div>
    </div>
</div>
</section>
)
}