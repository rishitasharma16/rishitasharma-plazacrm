import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/Logo-White.png";
import register from "../assets/Register-Icon.png";
import login from "../assets/Login.png";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const currentScreenWidth = window.innerWidth;

  const [menu, setMenu] = useState(false);


  const handleMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
  <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>

        <div className={styles.menuIcon}>
          {menu ? (
            <IoClose size="1.5rem" onClick={handleMenu} />
          ) : (
            <HiMenu size="1.5rem" onClick={handleMenu} />
          )}
        </div>
      </div>

      <div
        className={styles.nav}
        style={menu ? { height: "auto" } : { height: 0 }}
      >
        <ul className={styles.navContainer}>
          <li>
            <a href="#" className={styles.active}>Home</a>
          </li>
          <li>
            <a href="#">Subscription</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
        </ul>

        <div className={styles.authLinks}>
          <ul>
            <li>
              <a href="#">
                <img src={register} alt="register" />
                Register
              </a>
            </li>
            <li>
              <a href="#">
                <img src={login} alt="login" />
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
