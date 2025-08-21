import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "../../supabase";

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleChangePassword = async () => {
    setMessage("");
    if (newPassword.length < 6) {
      setMessage("❌ 密碼長度需至少 6 個字元。");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("❌ 新密碼與確認密碼不一致。");
      return;
    }

    setLoading(true);

    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      setLoading(false);
      setMessage("❌ 請先登入才能修改密碼。");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    setLoading(false);

    if (error) {
      setMessage(`❌ 修改失敗：${error.message}`);
    } else {
      setMessage("✅ 密碼已成功更新！");
      setNewPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        router.back(); // 返回上一頁
      }, 1500);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 修改密碼</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="輸入新密碼（至少6字元）"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="再次輸入新密碼"
        placeholderTextColor="#999"
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="確認修改" onPress={handleChangePassword} />
      )}
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
    color: "#333"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  }
});
