import { Link } from "expo-router"; // 如果你有使用 expo-router，這行可以讓你在註冊頁面中連結到登入頁面
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { auth } from "../../firebase"; // 確保這裡的路徑正確

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async () => {
    setError("");
    setSuccess("");

    if (!email || !password || !confirm) {
      setError("請填寫所有欄位");
      return;
    }

    if (password !== confirm) {
      setError("密碼與確認密碼不一致");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("註冊成功，請返回登入");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="密碼"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="確認密碼"
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry
        style={styles.input}
      />
      <Button title="註冊" onPress={handleSignUp} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>{success}</Text> : null}
      <Link href="/(auth)/login">
        <Text style={{ color: "blue", marginTop: 16 }}>已經有帳號了？登入</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  error: {
    color: "red",
    marginTop: 8,
  },
  success: {
    color: "green",
    marginTop: 8,
  },
});
