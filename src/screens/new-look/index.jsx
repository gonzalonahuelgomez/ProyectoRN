import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import SwitchSelector from "react-native-switch-selector";
import { saveLook } from "../../store/look.slice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewLook = ({ navigation }) => {
  const dispatch = useDispatch();

  const toggleSwitch = (index) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index].value = !newSwitchStates[index].value;
    setSwitchStates(newSwitchStates);
  };

  const onHandleSubmit = () => {
    dispatch(saveLook(title, location));
    navigation.navigate("Looks");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.contentText}>Momento del día:</Text>
        <SwitchSelector
          initial={0}
          onPress={(value) => this.setState({ dayornight: value })}
          // textColor={colors.purple} //'#7a44cf'
          // selectedColor={colors.white}
          // buttonColor={colors.purple}
          // borderColor={colors.purple}
          hasPadding
          options={[
            { label: "Mañana", value: "morning" }, //images.feminino = require('./path_to/assets/img/feminino.png')
            { label: "Tarde", value: "afternoon" },
            { label: "Noche", value: "night" }, //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
          // accessibilityLabel="gender-switch-selector"
        />
        <Text style={styles.contentText}>Clima:</Text>
        <SwitchSelector
          initial={0}
          onPress={(value) => this.setState({ weather: value })}          
          hasPadding
          options={[
            { label: "Calor", value: "hot" }, //images.feminino = require('./path_to/assets/img/feminino.png')
            { label: "Frío", value: "cold" }, //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}          
        />
        <Text style={styles.contentText}>Tipo de vestimenta:</Text>
        <SwitchSelector
          initial={0}
          onPress={(value) => this.setState({ type: value })}          
          hasPadding
          options={[
            { label: "Casual", value: "casual" }, //images.feminino = require('./path_to/assets/img/feminino.png')
            { label: "Cóctel", value: "coctel" },
            { label: "Profesional", value: "professional" },
            { label: "Etiqueta", value: "formal" }, //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
        />
      </View>
    </ScrollView>
  );
};

export default NewLook;
