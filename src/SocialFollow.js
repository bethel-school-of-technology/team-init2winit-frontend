import React from "react";
import reactDom from "react-dom";



export default function SocialFollow() {
  return(
  <p path="SocialFollow" component={reactDom}>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

          <div class="icon-bar">
            <html class="icon" >
                  <a href="/Users/jamesbean/team-init2winit-frontend/public/photos/f_logo_RGB-Black_58.png" class="facebook"><i class="fa fa-facebook"></i></a> 
                  <a href="/Users/jamesbean/team-init2winit-frontend/public/photos/Twitter.png" class="twitter"><i class="fa fa-twitter"></i></a> 
                  <a href="/Users/jamesbean/team-init2winit-frontend/public/photos/glyph-logo_May2016-310x310.png" class="instagram"><i class="fa fa-instagram"></i></a>
                    <button redirect = "src/contact.html">ClickMe</button>
            </html>
          </div>
  </p>

    );
  }