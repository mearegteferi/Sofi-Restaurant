import React from 'react'
import aboutimg from "../../images/about-img.png"
import { Link } from 'react-router-dom'

export default function About()
{
return(
<section class="about_section layout_padding">
<div class="container  ">

  <div class="row">
    <div class="col-md-6 ">
      <div class="img-box">
        <img src={aboutimg} alt="" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="detail-box">
        <div class="heading_container">
          <h2>
            We Are Feane
          </h2>
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          in some form, by injected humour, or randomised words which don't look even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
          the middle of text. All
        </p>
        <Link to="about">
          Read More
        </Link>
      </div>
    </div>
  </div>
</div>
</section>
)
}