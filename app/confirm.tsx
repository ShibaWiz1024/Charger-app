import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ConfirmScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✅ Email驗證成功</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start", // 靠左
    justifyContent: "flex-start", // 靠上
    paddingTop: 40,
    paddingLeft: 20,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 50, // 字體加大
    fontWeight: "bold",
    color: "#2d2d2d",
  },
});
