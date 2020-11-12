import React from "react";

import TextBlock from "../../components/common/TextBlock";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import "./styles.scss";

const url = process.env.REACT_APP_MAILCHIMP_URL;

const ContactUsForm = ({ onValidated }) => {
  let fname, lname, email, subject, msg;
  const submit = () =>
    fname &&
    lname &&
    email &&
    subject &&
    msg &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: fname.value + lname.value,
    });

  return (
    // <div className="subscription-sender-wrapper">
    //   <input
    //     ref={node => (email = node)}
    //     type="text" />
    //   <div className="subscribe-send" role="button" onClick={submit}>
    //     <FontAwesomeIcon icon={faPaperPlane}/>
    //   </div>
    // </div>
    <div className="contact-us-form">
      <h2>Contact Us</h2>
      <div className="input-text-row">
        <div className="input-text-left">
          <p>First Name</p>
          <input ref={(node) => (fname = node)} type="text"></input>
        </div>
        <div className="input-text-right">
          <p>last Name</p>
          <input ref={(node) => (lname = node)} type="text"></input>
        </div>
      </div>
      <div className="input-text-row">
        <div className="input-text-left">
          <p>Email</p>
          <input ref={(node) => (email = node)} type="email"></input>
        </div>
        <div className="input-text-right">
          <p>Subject</p>
          <input ref={(node) => (subject = node)} type="text"></input>
        </div>
      </div>
      <div className="input-text-row">
        <p>Message</p>
        <textarea ref={(node) => (msg = node)}></textarea>
      </div>
      <div className="submit-button">
        <button onClick={submit}>Submit</button>
      </div>
      {/* {status === "success" && (<p>Success!</p>)} */}
    </div>
  );
};

export default function Partners() {
  return (
    <>
      <div className="root partners-container">
        <div className="content-1">
          <div className="section section-concept">
            <div className="section section-text">
              <TextBlock title="Be Partner with PYLON">
                <p>
                  Pylon is a utility token that pays dividends on real world GPU{" "}
                  <br />
                  mining farm in the US. We are a 100% community mined token{" "}
                  <br />
                  with no presale, no premine, and a low cap supply of 8400.
                </p>
              </TextBlock>
            </div>
          </div>
          <img
            className="partners-background"
            src={require("../../assets/images/partners-back-1.png")}
            alt="hand shake background"
          />
        </div>

        <div className="content-2">
          <div className="section section-pylon-value">
            <div className="left">
              <h2>Our Partners</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br />
                enim ad minim veniam.
              </p>
            </div>
            <div className="right">
              <img
                className="partners-image"
                src={require("../../assets/images/partners-yakuza.png")}
                alt="Yakuza"
              />
              <img
                className="partners-image"
                src={require("../../assets/images/partners-b.png")}
                alt="B"
              />
              <img
                className="partners-image"
                src={require("../../assets/images/partners-clock.png")}
                alt="Clock"
              />
            </div>
          </div>
          <div className="section contact-us">
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status }) => (
                <ContactUsForm
                  status={status}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
            <div className="reach-us-form">
              <h2>Reach Us</h2>
              <div className="reach-us-list">
                <div className="reach-us-row">
                  <img
                    className="partners-reach-us-background"
                    src={require("../../assets/images/phone-icon.png")}
                    alt="Reach Us phone icon"
                  />
                  <p>&nbsp;&nbsp; +44 (999) 999-9999</p>
                </div>
                <div className="reach-us-row">
                  <img
                    className="partners-reach-us-background"
                    src={require("../../assets/images/mail-icon.png")}
                    alt="Reach Us mail icon"
                  />
                  <p>&nbsp;&nbsp; exceedvision.uk@gmail.com</p>
                </div>
                <div className="reach-us-row">
                  <img
                    className="partners-reach-us-background"
                    src={require("../../assets/images/location-icon.png")}
                    alt="Reach Us location icon"
                  />
                  <p>
                    &nbsp;&nbsp; 456 California Street, San
                    <br />
                    &nbsp;&nbsp; Francisco, CA 75395
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
