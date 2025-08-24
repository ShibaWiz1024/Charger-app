// app/(tabs)/settings.tsx
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Image,
  Linking,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import i18n from "../../i18n"; // 確保路徑正確：app/(tabs)/ 相對到根目錄 i18n.ts

export default function Settings() {
  const router = useRouter();
  const { t } = useTranslation();

  const [notifyEnabled, setNotifyEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [temp1, setTemp1] = useState(37);
  const [temp2, setTemp2] = useState(52);

  const goAccount = () => {
    router.push("/(auth)/account");
  };

  return (
    <View style={styles.container}>
      {/* 允許通知 */}
      <View style={styles.row}>
        <Text style={styles.label}>{t("settings.notifications")}</Text>
        <Switch value={notifyEnabled} onValueChange={setNotifyEnabled} />
      </View>

      {/* 聲音 */}
      <View style={styles.row}>
        <Text style={styles.label}>{t("settings.sound")}</Text>
        <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
      </View>

      {/* 震動 */}
      <View style={styles.row}>
        <Text style={styles.label}>{t("settings.vibration")}</Text>
        <Switch value={vibrationEnabled} onValueChange={setVibrationEnabled} />
      </View>

      {/* 語言切換 */}
      <Text style={styles.sectionTitle}>{t("settings.language")}</Text>
      <View style={styles.languageRow}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            i18n.language === "zh" && styles.selectedLanguage,
          ]}
          onPress={() => i18n.changeLanguage("zh")}
        >
          <Text
            style={
              i18n.language === "zh" ? styles.selectedText : styles.languageText
            }
          >
            {t("settings.zh")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.languageButton,
            i18n.language === "en" && styles.selectedLanguage,
          ]}
          onPress={() => i18n.changeLanguage("en")}
        >
          <Text
            style={
              i18n.language === "en" ? styles.selectedText : styles.languageText
            }
          >
            {t("settings.en")}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 溫度過熱通知 */}
      <Text style={styles.sectionTitle}>{t("settings.temperature_notice")}</Text>

      <View style={styles.sliderRow}>
        <Text style={styles.label}>{t("settings.first_stage")}：{temp1}</Text>
        <Slider
          style={{ width: 250 }}
          minimumValue={35}
          maximumValue={45}
          step={1}
          value={temp1}
          onValueChange={setTemp1}
        />
      </View>

      <View style={styles.sliderRow}>
        <Text style={styles.label}>{t("settings.second_stage")}：{temp2}</Text>
        <Slider
          style={{ width: 250 }}
          minimumValue={45}
          maximumValue={55}
          step={1}
          value={temp2}
          onValueChange={setTemp2}
        />
      </View>

      {/* 帳戶管理 */}
      <Text style={styles.sectionTitle}>{t("settings.account")}</Text>
      <TouchableOpacity style={styles.accountButton} onPress={goAccount}>
      <Text style={styles.label}>{t("settings.login_register")}</Text>
      </TouchableOpacity>

      {/* 討論區 */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
        <Text style={styles.discussion}>{t("settings.join_discussion")}</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/groups/696825110058746")}>
          <Image
            source={require("../../assets/images/unnamed.png")}
            style={{ width: 30, height: 30, marginLeft: 6 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ---- styles ----
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#7D7DFF",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  sliderRow: { marginVertical: 10 },
  label: { fontSize: 16 },
  discussion: { fontSize: 20 },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
    backgroundColor: "#D3D3D3",
    padding: 5,
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  languageButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
  },
  selectedLanguage: { backgroundColor: "#7D7DFF" },
  languageText: { fontSize: 16 },
  selectedText: { fontSize: 16, color: "white" },
  accountButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
