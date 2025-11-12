import React from 'react';
import heroimg from "../../images/hero-bg.jpg"
import { Link } from "react-router-dom";

export default function Slider()
{
return(
  <div class="hero_area">
    <div class="bg-box">
  <img src={heroimg} alt="" />
</div>
  <section class="slider_section ">
<div id="customCarousel1" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container ">
        <div class="row">
          <div class="col-md-7 col-lg-6 ">
            <div class="detail-box">
              <h1>
                Sofi Food Restaurant
              </h1>
              <p>
              Savor comfort food at its finest, made with love and the freshest local ingredients. Weekend brunch buffet featuring bottomless mimosas. Early bird specials offering incredible value on your favorite dishes
              </p>
              <div class="btn-box">
              <Link to={"menu"}>
                  Order Now 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</section>
</div>
)
}