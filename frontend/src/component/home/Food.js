import React from 'react';
import f1img from "../../images/f1.png"
import f2img from "../../images/f2.png"
import f3img from "../../images/f3.png"
import { Link } from 'react-router-dom';

export default function Food()
{
return(
<section class="food_section layout_padding-bottom">
<div class="container">
  <div class="heading_container heading_center">
    <h2>
      Our Menu
    </h2>
  </div>

  <div class="filters-content">
    <div class="row grid">
      <div class="col-sm-6 col-lg-4 all pizza">
        <div class="box">
          <div>
            <div class="img-box">
              <img src={f1img} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Delicious Pizza
              </h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
              </p>
              <div class="options">
                <h6>
                  300 birr
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 all burger">
        <div class="box">
          <div>
            <div class="img-box">
              <img src={f2img} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Delicious Burger
              </h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
              </p>
              <div class="options">
                <h6>
                  350 birr
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 all pizza">
        <div class="box">
          <div>
            <div class="img-box">
              <img src={f3img} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Delicious Pizza
              </h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
              </p>
              <div class="options">
                <h6>
                  400 birr
                </h6>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <Link to="menu">
          View More
        </Link>
      </div>
    </div>
  </section>
  )
  }