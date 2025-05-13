import { StyleSheet } from "react-native";
export { default } from "@/components/homepage/index";


// export default function Home() {
//   return (
//     <View style={styles.container}>
//       <Text style = {styles.text}>即時訊息顯示</Text>
//     </View>
//   );
// }

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