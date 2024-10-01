import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import buffetImage from "../../assets/buffet-party-food-buffet-catering-dining-eating-party-sharing-concept-generative-ai-photo.jpeg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={buffetImage} alt="food" />
      </div>
    </Fragment>
  );
};
export default Header;
