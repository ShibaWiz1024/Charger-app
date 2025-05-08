import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("錯誤", "請填寫所有欄位");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("錯誤", "新密碼與確認新密碼不一致");
      return;
    }
    // 這裡可以加入實際的密碼更新邏輯
    Alert.alert("成功", "密碼已更新");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>目前密碼</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeholder="輸入目前密碼"
      />
      <Text style={styles.label}>新密碼</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="輸入新密碼"
      />
      <Text style={styles.label}>確認新密碼</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="再次輸入新密碼"
      />
      <Button title="修改密碼" onPress={handleChangePassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  label: { fontSize: 16, marginVertical: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
