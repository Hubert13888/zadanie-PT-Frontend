import React from "react";
import "/styles/layouts/layoutStyle.scss";

const MainLayout = (props: any) => {
  return (
    <div className="mainLayout">
      <nav>
        <div className="topnav_logo">
          <img src="" alt="LOGO" />
        </div>
        <div className="topNav_options">
          <div className="topnav_option">
            <a href="">Strona główna</a>
          </div>
          <div className="topnav_option">
            <a href="">Co robimy?</a>
          </div>
          <div className="topnav_option">
            <a href="">O nas</a>
          </div>
        </div>
        <div className="topnav_actions">
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
      <main>{props.children}</main>
      <footer>{"Wszelkie prawa zastrzeżone © GRZYBIARZE.org"}</footer>
    </div>
  );
};

export default MainLayout;
