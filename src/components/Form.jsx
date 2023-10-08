import React from "react";
import styles from "../styles/form.module.css";
import companyname from "../assets/Company-Name.png";
import email from "../assets/Email-Address.png";
import phone from "../assets/Phone-number.png";
import password from "../assets/Password.png";
import cpassword from "../assets/Confirm-Password.png";
import Button1 from "./buttons/Button1";
import fb from "../assets/Facebook.png";
import twt from "../assets/Twitter.png";

function Form() {
  return (
    <div className={styles.formBox}>
      <h3>
        Get started with your <span>14-days free trial</span>
      </h3>
      <form className={styles.formDiv}>
        <div className={styles.inputDiv}>
          <input type="text" placeholder="Company Name" />
          <img src={companyname} alt="companyname" />
        </div>
        <div className={styles.inputDiv}>
          <input type="email" placeholder="Email Address" />
          <img src={email} alt="email" />
        </div>
        <div className={styles.inputDiv}>
          <input type="text" placeholder="Phone Number" />
          <img src={phone} alt="phone" />
        </div>
        <div className={styles.inputDiv}>
          <input type="password" placeholder="Password" />
          <img src={password} alt="password" />
        </div>
        <div className={styles.inputDiv}>
          <input type="password" placeholder="Confirm Password" />
          <img src={cpassword} alt="cpassword" />
        </div>

        <div className={styles.checkDiv}>
          <input id="check" type="checkbox" />
          <label htmlFor="check">
            Agree with <a href="#">Terms & Conditions</a>
          </label>
        </div>

        <Button1 title="Create Account" textColor="#fff" background="#4f2060" />

        <div className={styles.links}>
          <span>OR</span>
        </div>

        <div className={styles.socialLink}>
          <img src={fb} alt="facebook" />
          <img src={twt} alt="facebook" />
        </div>
      </form>
    </div>
  );
}

export default Form;
