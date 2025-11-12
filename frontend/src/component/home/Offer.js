import React from 'react';
import o1img from "../../images/offer1.jpg"
import o2img from "../../images/offer2.jpg"
import { Link } from 'react-router-dom';

export default function Offer()
{
return(
<section class="offer_section layout_padding-bottom">
    <div class="offer_container">
      <div class="container ">
        <div class="row">
          <div class="col-md-6  ">
            <div class="box ">
              <div class="img-box">
                <img src={o1img} alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Tasty Thursdays
                </h5>
                <h6>
                  <span>with delivery</span>
                </h6>
                <Link to={"menu"}>
                  Order Now 
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6  ">
            <div class="box ">
              <div class="img-box">
                <img src={o2img} alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Pizza Days
                </h5>
                <h6>
                  <span>with delivery</span>
                </h6>
                <Link to={"menu"}>
                  Order Now 
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
  }
