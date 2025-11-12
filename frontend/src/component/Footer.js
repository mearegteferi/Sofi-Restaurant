import React from "react";
export default function Footer() {
  return (
    <footer class="footer_section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 footer-col">
            <div class="footer_contact">
              <h4>Contact Us</h4>
              <div class="contact_link_box">
                <a href="https://html.design/">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="https://html.design/">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +251923467445</span>
                </a>
                <a href="https://html.design/">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>sofirestauant@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 footer-col">
            <div class="footer_detail">
              <a href="https://html.design/" class="footer-logo">
                Sofi
              </a>
              <p>
                Taste the difference. Order Sofi today! Made with love & fresh
                ingredients Thank you for visiting!
              </p>
            </div>
          </div>
          <div class="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <div class="footer-info">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/"> Sofi restaurant</a>
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
}
