import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const LookItem = ({ id, dayMoment, onSelect, weather, type, image }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{dayMoment}</Text>
        <Text style={styles.title}>{weather}</Text>
        <Text style={styles.title}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LookItem;
