import { StyleSheet, Text, View } from "react-native";

export default function Logout() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>你已成功登出</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color:"black",
  },
});