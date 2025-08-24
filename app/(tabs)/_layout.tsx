import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";


export default function TabsLayout() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
        <Tabs  
            screenOptions={{
                tabBarActiveTintColor: "orange", //標籤顏色
                headerStyle:{
                    backgroundColor:"#7D7DFF",
                },
                headerShadowVisible:false,
                headerTintColor:"white",
                tabBarStyle:{
                    backgroundColor:"white",
                }
             }}>
    <Tabs.Screen name =  "home" 
        options = {{
            headerTitle: t("tabs.home"),
            tabBarLabel: t("tabs.home"),
            tabBarIcon: ({focused , color}) => (
                <Ionicons
                    name = {focused ? "battery-charging" : "battery-charging-outline"} //點擊標籤時顯示填滿的圖示;反之顯示空心的圖示
                    color={color} //tabBarActiveTintColor設定的顏色
                    size={30} //大小
                />
            ),
        }} />
      <Tabs.Screen name =  "history" 
        options={{
            headerTitle: t("tabs.history"),
            tabBarLabel: t("tabs.history"),
            tabBarIcon: ({focused , color}) => (
                <Ionicons
                    name = {focused ? "timer-sharp" : "timer-outline"} //點擊標籤時顯示填滿的圖示;反之顯示空心的圖示
                    color={color} //tabBarActiveTintColor設定的顏色
                    size={30} //大小
                />
            )
        }} />
        <Tabs.Screen name =  "error" 
        options={{
            headerTitle: t("tabs.error"),
            tabBarLabel: t("tabs.error"),
            tabBarIcon: ({focused , color}) => (
                <Ionicons
                    name = {focused ? "warning-sharp" : "warning-outline"} //點擊標籤時顯示填滿的圖示;反之顯示空心的圖示
                    color={color} //tabBarActiveTintColor設定的顏色
                    size={30} //大小
                />
            )
        }} />
        <Tabs.Screen name =  "settings" 
        options = {{
            headerTitle: t("tabs.settings"),
            tabBarLabel: t("tabs.settings"),
            tabBarIcon: ({focused , color}) => (
                <Ionicons
                    name = {focused ? "settings-sharp" : "settings-outline"} //點擊標籤時顯示填滿的圖示;反之顯示空心的圖示
                    color={color} //tabBarActiveTintColor設定的顏色
                    size={30} //大小
                />
            ),
        }} />
    </Tabs>
    </>
  );
}