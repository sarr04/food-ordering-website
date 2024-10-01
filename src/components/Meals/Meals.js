import MealsSummary from "./MealsSummary";
import AvaiableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaiableMeals />
    </Fragment>
  );
};
export default Meals;
