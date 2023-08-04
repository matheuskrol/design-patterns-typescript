import { Bean } from "./classes/bean";
import { MealBox } from "./classes/meal-box";
import { Meat } from "./classes/meat";
import { Rice } from "./classes/rice";

const rice = new Rice('Arroz', 5);
const beans = new Bean('Feijão', 10);
const meat = new Meat('Carne', 20);
const meal_box = new MealBox();
meal_box.add(rice, beans, meat);

