import { Fragment } from "react";

import logoHighland from "./../../assets/Logo_highlands.png"
import CoffeeImage from "./../../assets/background.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={logoHighland} alt="logo full hd" />
        </div>
        <h1>Highland Coffee</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={CoffeeImage} alt="full background highlands_coffe" />
      </div>
    </Fragment>
  );
};

export default Header;
