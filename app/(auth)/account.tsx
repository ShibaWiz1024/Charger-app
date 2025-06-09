import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { auth } from "../../firebaseConfig"; // Firebase 設定檔

export default function AccountScreen() {
  // 使用者狀態與輸入欄位
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // 確認密碼欄位
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true); // 是否為登入模式
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  // 登入狀態監聽器
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);


  // 驗證與登入 / 註冊行為
  const handleAuth = async () => {
    if (!email.includes("@")) {
      setMessage("❌ 請輸入有效的 Email。");
      return;
    }
    if (password.length < 6) {
      setMessage("❌ 密碼長度需至少 6 個字元。");
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      setMessage("❌ 兩次輸入的密碼不一致。");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("✅ 登入成功！");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("✅ 註冊成功！");
      }
    } catch (error: any) {
      setMessage(`❌ ${isLogin ? "登入" : "註冊"}失敗：${error.message}`);
    }
  };

  // 登出
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
      <Text style={styles.welcome}>歡迎使用{"\n"}檢測充電線異常app🔋</Text>
      {user ? (
        // 登入後畫面
        <>
          <Text style={styles.message}>👤 歡迎：{user.email}</Text>
          <Button title="登出" onPress={handleLogout} />
        </>
      ) : (
        // 登入 / 註冊表單
        <>
          <Text style={styles.title}>{isLogin ? "登入" : "註冊"}</Text>
          <TextInput
            style={styles.input}
            placeholder="請輸入email"
            placeholderTextColor="#999"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="請輸入密碼(至少6個字元)"
            placeholderTextColor="#999"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="確認密碼"
              placeholderTextColor="#999"
              secureTextEntry
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          )}
          <Button title={isLogin ? "登入" : "註冊"} onPress={handleAuth} />
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.toggleText}>
              {isLogin ? "還沒有帳號？點我註冊" : "已有帳號？點我登入"}
            </Text>
          </TouchableOpacity>
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
    padding: 20
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
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    color: "#333"
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 10,
    position: "absolute",
    top: 50,
    width: "110%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  toggleText: {
    color: "blue",
    marginTop: 10,
    textAlign: "center"
  }
});