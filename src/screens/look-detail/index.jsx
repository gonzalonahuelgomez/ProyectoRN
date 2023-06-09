import { Image, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { useSelector } from "react-redux";

const LookDetail = ({ navigation, route }) => {
  const { lookId } = route.params;

  const look = useSelector((state) => state.look.looks.find((look) => look.id === lookId));
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: look.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{look.dayMoment}</Text>
          <Text style={styles.address}>{look.weather}</Text>
          <Text style={styles.address}>{look.type}</Text>
        </View>        
      </View>
    </ScrollView>
  );
};

export default LookDetail;
