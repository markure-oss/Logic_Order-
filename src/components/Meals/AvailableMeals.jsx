import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Americano",
    description: "Finest fish and veggies",
    price: 12.25,
  },
  {
    id: "m2",
    name: "Mocha Macchiato",
    description: "A german specialty!",
    price: 15.55,
  },
  {
    id: "m3",
    name: "Cappuccino",
    description: "American, raw, meaty",
    price: 10.09,
  },
  {
    id: "m4",
    name: "Caramel Macchiato",
    description: "Healthy...and green...",
    price: 13.39
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
