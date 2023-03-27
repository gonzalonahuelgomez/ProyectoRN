import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const LookItem = ({ id, dayMoment, onSelect, weather, type }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.info}>
        <Text style={styles.title}>{dayMoment}</Text>
        <Text style={styles.address}>{weather}</Text>
        <Text style={styles.title}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LookItem;
