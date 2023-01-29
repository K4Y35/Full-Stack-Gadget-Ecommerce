import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "../../assets/logoBlue.png";
import telegram from "../../assets/telegram.png";
import vector from "../../assets/Vector.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-header">
        <h1 className="text-primary text-3xl font-bold">
          Subscribe newsletter
        </h1>
        <button className="btn-primary  flex w-2/5 items-center justify-between p-5">
          Email address <img src={telegram} alt="" />
        </button>
        <div className="Footer-header-right">
          <img src={vector} alt="" className="mr-5" />
          <div>
            <h1 className="text-primary font-bold">Call us 24/7:</h1>
            <h1 className="text-primary font-bold">(+62) 0123 567 789</h1>
          </div>
        </div>
      </div>
      <div className="Footer-content">
        <div className="Footer-div1">
          <img src={logo} alt="" />
          <h1 className="text-primary mt-5 mb-5">
            64 st james boulevard <br />
            hoswick , ze2 7zj
          </h1>
          <div className="divider mb-5"></div>
          <div className="Footer-div1-icons">
            <SocialIcon url="https://google.com" className="mr-4" />
            <SocialIcon url="https://facebook.com/" className="mr-4" />
            <SocialIcon url="https://web.whatsapp.com/" />
          </div>
        </div>
        <div className="Footer-div2">
          <h1 className="text-primary Neg-Left mb-4  text-xl font-bold">
            Find product
          </h1>
          <ul>
            <li className="text-primary mb-2 font-medium">Brownze arnold</li>
            <li className="text-primary mb-2 font-medium">Chronograph blue</li>
            <li className="text-primary mb-2 font-medium">Smart phones</li>
            <li className="text-primary mb-2 font-medium">Automatic watch</li>
            <li className="text-primary font-medium">Hair straighteners</li>
          </ul>
        </div>
        <div className="Footer-div3">
          <h1 className="text-primary Neg-Left mb-4 text-xl font-bold">
            Get help
          </h1>
          <ul>
            <li className="text-primary mb-2 font-medium">About us</li>
            <li className="text-primary mb-2 font-medium">Contact us</li>
            <li className="text-primary mb-2 font-medium">Return policy</li>
            <li className="text-primary mb-2 font-medium">Privacy policy</li>
            <li className="text-primary font-medium">Payment policy</li>
          </ul>
        </div>
        <div className="Footer-div4">
          <h1 className="text-primary Neg-Left mb-4 text-xl font-bold">
            About us
          </h1>
          <ul>
            <li className="text-primary mb-2 font-medium">News</li>
            <li className="text-primary mb-2 font-medium">Services</li>
            <li className="text-primary mb-2 font-medium">Our policy</li>
            <li className="text-primary mb-2 font-medium">Customer care</li>
            <li className="text-primary font-medium">Faq's</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
