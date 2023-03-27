import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Text, View } from "react-native";
import React, { useState } from "react";

import colors from "../../constants/colors";
import { styles } from "./styles";

// import * as MediaLibrary from 'expo-media-library';

const ImageTaker = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const onHandleTakeImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos permisos para usar la cámara", [{ text: "Ok" }]);
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  const onHandleChooseImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert("Permiso denegado", "Necesitamos permisos para usar la galería", [{ text: "Ok" }]);
          return;
        }

    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    console.log(image.assets[0].uri)
    setPickedUrl(image.assets[0].uri);
    onImage(image.assets[0].uri);    
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <View style={styles.containerActions}>
        <Button title="Tomar foto" color={colors.secondary} onPress={onHandleTakeImage} />
        <Button title="Elegir foto de la galería" color={colors.primary} onPress={onHandleChooseImage} />
      </View>
    </View>
  );
};

export default ImageTaker;