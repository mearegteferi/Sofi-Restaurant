import React from "react";
import aboutimg from "../images/about-img.png";
import { Link } from "react-router-dom";
export default function Food() {
  return (
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
                <h2>We Are Sofi</h2>
              </div>
              <p>
                At Sofi, we're dedicated to bringing you the authentic flavors
                of our food delivered straight to your door. We craft each dish
                with passion, using fresh, high-quality ingredients to create an
                unforgettable dining experience.
              </p>
              <p>
                Here's what makes us special: 
                <ul>
                <li><b>Authentic Recipes:</b> Our recipes are
                passed down through generations, ensuring the flavors you taste
                are genuine and true to the tradition. 
                </li>
                <li>
                <b>Fresh Ingredients:</b> We
                prioritize fresh, seasonal ingredients to deliver the best
                possible taste and quality. 
                </li>
                <li>
                <b>Variety:</b> From classic burge to pizza
                with a twist, our menu caters to diverse palates and dietary
                needs. 
                </li>
                <li>
                <b>Convenience:</b> Online ordering and fast, reliable delivery
                make enjoying our food effortless.
                </li> 
                <li>
                <b>Passionate Team:</b> We're a team
                of food enthusiasts who pour our hearts into every dish we
                create. 
                </li>
                </ul>
              </p>
              <p>
                Ready to dive into the world of our food? Order from Sofi and
                discover:
              </p>
              <Link to={"/menu"}>Order Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
