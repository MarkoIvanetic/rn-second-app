import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/Categories.screen";
import CategoryMeals from "../screens/CategoryMeals.screen";
import MealDetail from "../screens/MealDetail.screen";

createStackNavigator({
  categories: CategoriesScreen,
  categoryMeals: CategoryMeals,
  mealDetail: MealDetail,
});
