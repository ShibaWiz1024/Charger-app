import { StyleSheet, Text, View } from "react-native";

export default function Account() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.label}>暱稱：</Text>
        <Text style={styles.value}>ShibaWiz</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>性別：</Text>
        <Text style={styles.value}>男</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>Email：</Text>
        <Text style={styles.value}>123456@gmail.com</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>生日：</Text>
        <Text style={styles.value}>92/10/24</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "white",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#135b75",
    marginBottom: 20,
  },
  info: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    marginLeft: 5,
  },
});
