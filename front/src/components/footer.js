import { useState } from "react";
import rosa from "../assets/pink.png";
import ghost from "../assets/green.png";
import yellow from "../assets/Vector.png";
import mdown from "../assets/mouth_upsideDown.png";
import leye from "../assets/left_eye.png";
import {
    FaLinkedinIn,
    FaPinterestP,
    FaFacebookF,
    FaTwitter,
  } from "react-icons/fa";


function Footer(){
    return(
        <div className="footer">
        <div className="pink-circle">
          <img src={rosa} className="f_rosa" alt="circle-pink"/>
          <div className="face-pink">
            <div className="eyes-pink">
              <img src={leye} alt='left-eye'/>
            </div>

          </div>

        </div>
        
        <div className="socialMedia">
          <FaLinkedinIn size="1rem" color="#696969" />
          <FaTwitter size="1rem" color="#696969" />
          <FaFacebookF size="1rem" color="#696969" />
          <FaPinterestP size="1rem" color="#696969" />
        </div>
        <div className="little-ghost">
          <img src={ghost} className="ghost" alt="ghost"/>
          <div className="face">
            <img src={mdown} className="mouth_g" alt="mouth-down" />
            <div className="eyes">
              <img src={leye} alt="l-eye"/>
              <img src={leye}  alt="l-eye"/>
            </div>
          </div>
        </div>
        <div className="little-yellow">
          <img src={yellow} alt='yellow circle'/>
        </div>
      </div>
    )

}

export default Footer;