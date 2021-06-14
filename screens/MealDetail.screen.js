import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const MealDetail = () => {
  return (
    <View>
      <Text>Meal deatil!</Text>
    </View>
  );
};

MealDetail.propTypes = {
  basePath: PropTypes.string,
  resource: PropTypes.string,
};

export default MealDetail;
