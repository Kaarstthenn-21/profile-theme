import React, { useContext, createRef, useState } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import profile from "../../assets/images/profile.png";
import ColorThief from "colorthief";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <img
                style={{
                  width: 350, height: 350,
                  borderRadius: 200, marginTop: 10,
                  marginLeft: 300, overflow: "hidden",
                  borderWidth: 3, borderColor: "red"
                }}
                src={profile}
                alt={"profile"}
              />

            ) : (
              <DisplayLottie animationData={email} />

            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
