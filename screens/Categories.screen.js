import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const Categories = () => {
  return (
    <View>
      <Text>Categories screen!</Text>
    </View>
  );
};

Categories.propTypes = {
  basePath: PropTypes.string,
  resource: PropTypes.string,
};

export default Categories;
