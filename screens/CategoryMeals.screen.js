import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const CategoryMeals = () => {
  return (
    <View>
      <Text>CategoryMeals scereen!</Text>
    </View>
  );
};

CategoryMeals.propTypes = {
  basePath: PropTypes.string,
  resource: PropTypes.string,
};

export default CategoryMeals;
