import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginVertical: 10
    },
    preview: {
      width: "100%",
      height: 200,
      marginBottom: 20,
      justifyContent: "center",
      alignItems: "center",
      borderColor: colors.primary,
      borderWidth: 1,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    containerActions: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });
  