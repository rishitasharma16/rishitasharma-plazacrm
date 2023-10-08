import React from "react";
import styles from "../styles/homepage.module.css";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Button1 from "../components/buttons/Button1";
import banner from "../assets/Slider-Image.png";
import trial from "../assets/Trial-Illustration.png";
import Form from "../components/Form";
import video from "../assets/Video-Icon.png";
import cut from "../assets/white-Cut-Elements.png";
import purlCut from "../assets/Cut-Elements.png";
import Card from "../components/Card";
import fs from "../assets/Finance-Solution.png";
import ba from "../assets/Business-Analysis.png";
import ms from "../assets/Marketing-Strategy.png";
import cs from "../assets/Customer-Service.png";
import sales from "../assets/Sales.png";

function Homepage() {
  return (
    <>
      <section className={styles.hero}>
        <Navbar />

        <Wrapper>
          <div className={styles.banner}>
            <div className={styles.bannerText}>
              <h1>
                Digital Solution for your <span>Digital Problems</span>
              </h1>
              <p>
                PlazaCRM enables a worldwide system of more than 100 kinds
                organizations in to change over more laeds, draw in with
                clients, and develop their income. Change your business with the
                world's preffered client relationship the board programming.
              </p>
              <Button1
                title="KNOW MORE"
                textColor="#eb5875"
                background="#fff"
              />
            </div>
            <div className={styles.bannerImg}>
              <img src={banner} alt="banner" />
            </div>
          </div>
        </Wrapper>
      </section>

      <section className={styles.section2}>
        <Wrapper>
          <div className={styles.trialArea}>
            <div className={styles.trialImg}>
              <img src={trial} alt="trial" />
            </div>
            <div className={styles.trailForm}>
              <Form />
            </div>
          </div>
        </Wrapper>
      </section>

      <section className={styles.section3}>
        <Wrapper>
          <div className={styles.solutionsArea}>
            <h3>Solutions</h3>
            <img src={purlCut} alt="solution cut" />
            <p>One Application solver your all Digital Problems</p>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.cardWrapper}>
              <Card
                image={fs}
                title="Finance Solutions"
                text="Finance is the management of money, particularly in relation to companies, organizations, or"
              />
              <Card
                image={ba}
                title="Business Analysis"
                text="Business Analytics refers to the skills, technologies, practices for continues iterative exploration"
              />
              <Card
                image={ms}
                title="Marketing Strategy"
                text="A market analysis studies the attractiveness and the dynamics of a special market ..."
              />
            </div>
            <div className={styles.cardWrapper}>
              <Card
                image={cs}
                title="Customer Services"
                text="Customer service is the provision of service to customers before, during, and after a purchase"
              />
              <Card
                image={sales}
                title="Sales"
                text="Generating sales requires potential customers to understand that a product exists."
              />
            </div>
          </div>
        </Wrapper>
      </section>

      <section className={styles.section4}>
        <Wrapper>
          <div className={styles.digitalText}>
            <img src={video} alt="video" />
            <h2>
              Digital Solution for your <span>Digital Problems</span>
            </h2>
            <img src={cut} alt="cut" />
            <div className={styles.paraText}>
              <p>
                PlazaCRM enables a worldwide system of more than 100 kinds
                organizations in to change over more laeds, draw in with
                clients, and develop their income. Change your business with the
                world's preffered client relationship the board programming.
              </p>
            </div>
            <Button1 title="START YOUR FREE TRIAL" textColor="#4f2060" />
          </div>
        </Wrapper>
      </section>

      <section className={styles.section5}>
        <Wrapper>
          <div className={styles.features}>
            <div className={styles.featuresText}>
              <h2>features that make selleing easier</h2>
              <p>Conquer every stage of the customer journey with PLAZA CRM</p>
              <ul className={styles.list}>
                <li>Process Management</li>
                <li>Analytics</li>
                <li>Performnace Management</li>
                <li>Predictive Sales and Intelligence</li>
                <li>Customization</li>
                <li>Marketing Automation</li>
                <li>Mobile Apps</li>
                <li>Security</li>
                <li>Developer Platform</li>
              </ul>
              <Button1
                title="JOIN NOW"
                background="#4f2060"
                textColor="#ffff"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      <Footer />
    </>
  );
}

export default Homepage;
