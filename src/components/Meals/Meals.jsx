import { Fragment } from "react";

import SummaryMeals from "../../components/Meals/SummaryMeals";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <SummaryMeals />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
