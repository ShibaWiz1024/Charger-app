// import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { auth } from "../../firebaseConfig"; // 確保這個檔案已正確設置


export default function AccountScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("✅ 註冊成功！");
    } catch (error: any) {
      setMessage(`❌ 註冊失敗：${error.message}`);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ 登入成功！");
    } catch (error: any) {
      setMessage(`❌ 登入失敗：${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage("👋 已登出");
    } catch (error: any) {
      setMessage(`❌ 登出失敗：${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.message}>👤 歡迎：{user.email}</Text>
          <Button title="登出" onPress={handleLogout} />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <Button title="登入" onPress={handleLogin} />
          <Button title="註冊" onPress={handleRegister} />
        </>
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
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  message: {
    marginTop: 20,
    textAlign: "center",
    color: "#333",
  },
});
