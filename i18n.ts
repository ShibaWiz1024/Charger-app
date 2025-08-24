// charger1/i18n.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import * as RNLocalize from "react-native-localize";

const resources = {
  en: { translation: {
    tabs: { home: "Home", history: "History", error: "Error Log", settings: "Settings" },
    common: { confirm: "OK", cancel: "Cancel", success: "Success", error: "Error" },
    auth: { login: "Login", signup: "Sign Up", logout: "Log out", logged_out: "You have logged out successfully" },
    settings: {
      title: "Settings",
      notifications: "Allow Notifications",
      sound: "Sound",
      vibration: "Vibration",
      language: "Language",
      zh: "Chinese",
      en: "English",
      temperature_notice: "Temperature Overheat Notice",
      first_stage: "Stage 1 35~45°C",
      second_stage: "Stage 2 45~55°C",
      account: "Account",
      login_register: "Login / Register",
      join_discussion: "Join the discussion:",
      change_password: "Change Password",
      logout: "Log out",
      confirm_logout: "Are you sure you want to log out?"
    },
    changePwd: {
      title: "Change Password",
      current: "Current Password",
      new: "New Password",
      confirmNew: "Confirm New Password",
      fill_all: "Please fill out all fields",
      mismatch: "New password and confirmation do not match",
      updated: "Password updated"
    },
    home: { power: "Power", current: "Current", voltage: "Voltage", temperature: "Temperature" },
    pages: { history: "Charging History", error: "Abnormal Records" },
    placeholders: {
      enter_current_password: "Enter current password",
      enter_new_password: "Enter new password",
      reenter_new_password: "Re-enter new password"
    }
  }},
  zh: { translation: {
    tabs: { home: "首頁", history: "歷史查詢", error: "異常紀錄", settings: "設定" },
    common: { confirm: "確定", cancel: "取消", success: "成功", error: "錯誤" },
    auth: { login: "登入", signup: "註冊", logout: "登出", logged_out: "你已成功登出" },
    settings: {
      title: "設定",
      notifications: "允許通知",
      sound: "提示音效",
      vibration: "震動",
      language: "語言",
      zh: "繁體中文",
      en: "英文",
      temperature_notice: "溫度過熱通知",
      first_stage: "第一階段 35~45°C",
      second_stage: "第二階段 45~55°C",
      account: "帳戶名稱",
      login_register: "帳戶登入/註冊",
      join_discussion: "加入討論區：",
      change_password: "修改密碼",
      logout: "登出",
      confirm_logout: "確定要登出？"
    },
    changePwd: {
      title: "修改密碼",
      current: "目前密碼",
      new: "新密碼",
      confirmNew: "確認新密碼",
      fill_all: "請填寫所有欄位",
      mismatch: "新密碼與確認新密碼不一致",
      updated: "密碼已更新"
    },
    home: { power: "功率", current: "電流", voltage: "電壓", temperature: "溫度" },
    pages: { history: "歷史充電查詢", error: "歷史異常紀錄" },
    placeholders: {
      enter_current_password: "輸入目前密碼",
      enter_new_password: "輸入新密碼",
      reenter_new_password: "再次輸入新密碼"
    }
  }},
};

async function getInitialLang() {
  const saved = await AsyncStorage.getItem("app_lang");
  if (saved) return saved as "zh" | "en";
  const locales = Localization.getLocales(); // 回傳已依優先順序排序
  const tag = locales?.[0]?.languageTag ??
    `${locales?.[0]?.languageCode || "en"}-${locales?.[0]?.regionCode || "US"}`; // 例如 "zh-Hant-TW" / "en-US"
  return tag.toLowerCase().startsWith("zh") ? "zh" : "en";

}

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v4",
    resources,
    lng: "zh", // 先給預設，等下方覆蓋
    fallbackLng: "zh",
    interpolation: { escapeValue: false },
  });

// 啟動時覆蓋語言 & 之後變更時記憶
getInitialLang().then(lng => i18n.changeLanguage(lng));
i18n.on("languageChanged", (lng) => AsyncStorage.setItem("app_lang", lng));

export default i18n;
