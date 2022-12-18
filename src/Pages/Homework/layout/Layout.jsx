import React from "react";
import { Outlet } from "react-router-dom";
import style from "../index.module.css";
const Layout = () => {
  const bir = require("../../../assets/img/youtube-logo.webp");
  var styleBars = {
    fontSize: "24px",
  };
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <nav className={style.nav}>
            <div className={style.right}>
              <i style={styleBars} className="fa-solid fa-thin fa-bars"></i>
              <img src={bir} className={style.logo} alt="logo" />
            </div>
            <div className={style.center}>
              <div className={style.search}>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Search"
                />
                <i className={"fa-solid fa-magnifying-glass"}></i>
              </div>
              <div className={style.microphone}>
                <i class="fa-solid fa-microphone"></i>
              </div>
            </div>
            <div className={style.user}></div>
          </nav>
        </div>
      </header>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.box}>
            <ul className={style.sidebar}>
              <li className={style.item}>
                <i className="fa-solid fa-house"></i>
                Home
              </li>
              <li className={style.item}>
                <i className="fa-solid fa-film"></i>
                Shorts
              </li>
              <li className={style.item}>
                <i className="fa-sharp fa-solid fa-tv"></i>
                Subscriptions
              </li>
              <li className={style.item}>
                <i className="fa-sharp fa-solid fa-tv"></i>
                Library
              </li>
              <li className={style.item}>
                <i className="fa-solid fa-clock-rotate-left"></i>
                History
              </li>
              <li className={style.item}>
                <i className="fa-regular fa-circle-play"></i>
                Your videos
              </li>
              <li className={style.item}>
                <i className="fa-regular fa-clock"></i>
                Watch Later
              </li>
              <li className={style.item}>
                <i className="fa-regular fa-thumbs-up"></i>
                Liked
              </li>
            </ul>
            <div className={style.wrapper}>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
