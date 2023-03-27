import { Button, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

import { ImageTaker } from "../../components";
import SwitchSelector from "react-native-switch-selector";
import colors from "../../constants/colors";
import { saveLook } from "../../store/look.slice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewLook = ({ navigation }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [dayMoment, setDayMoment] = useState("");
  const [weather, setWeather] = useState("");
  const [type, setType] = useState("")

  const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
  };

  const onHandleSubmit = () => {    
    dispatch(saveLook(dayMoment, weather, type, image));
    navigation.navigate("Looks");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentText}>Moment of the day:</Text>
        <SwitchSelector
          initial={0}
          onPress={(value) => setDayMoment(value)}
          // textColor={colors.purple} //'#7a44cf'
          // selectedColor={colors.white}
          buttonColor={colors.primary}
          // borderColor={colors.purple}
          hasPadding
          options={[
            { label: "Morning", value: "Morning" },
            { label: "Afternoon", value: "Afternoon" },
            { label: "Night", value: "Night" },
          ]}
          // accessibilityLabel="gender-switch-selector"
        />
        <Text style={styles.contentText}>Weather:</Text>
        <SwitchSelector
          initial={0}
          onPress={(value) => setWeather(value)}
          buttonColor={colors.primary}     
          hasPadding
          options={[
            { label: "Hot", value: "Hot" },
            { label: "Cold", value: "Cold" },
          ]}          
        />
        <Text style={styles.contentText}>Clothing types:</Text>
        <SwitchSelector
          initial={0}
          onPress={(value) => setType(value)} 
          buttonColor={colors.primary}        
          hasPadding
          options={[
            { label: "Casual", value: "Casual" },
            { label: "Coctel", value: "Coctel" },
            { label: "Professional", value: "Professional" },
            { label: "Formal", value: "Formal" },
          ]}
        />
        <ImageTaker onImage={onHandleImageSelect} />
        <Button title="Save Look" onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewLook;
