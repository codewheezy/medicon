import { Tabs } from "expo-router";
import CustomNavBar from "@/components/custom-navbar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomNavBar {...props}/>}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="appointments" options={{ title: "Appointments" }} />
      <Tabs.Screen name="setup-availability" options={{ title: "Setup Availability" }} />
      <Tabs.Screen name="my-account" options={{ title: "My Account" }} />
    </Tabs>
  );
}

