import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const IconWrap = styled.View`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

const TabLabel = styled.Text<{ focused: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.focused ? "#5FD148" : "#A0A0A0")};
  font-family: ${(props) => (props.focused ? "Aeonik-bold" : "Aeonik-regular")};
`;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 80,
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <IconWrap>
              <Ionicons name="home-outline" size={24} color={focused ? "#5FD148" : "#A0A0A0"} />
              <TabLabel focused={focused}>Home</TabLabel>
            </IconWrap>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <IconWrap>
              <Ionicons name="search-outline" size={24} color={focused ? "#5FD148" : "#A0A0A0"} />
              <TabLabel focused={focused}>Search</TabLabel>
            </IconWrap>
          ),
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appointments",
          tabBarIcon: ({ focused }) => (
            <IconWrap>
              <Ionicons name="calendar-outline" size={24} color={focused ? "#5FD148" : "#A0A0A0"} />
              <TabLabel focused={focused}>Appointments</TabLabel>
            </IconWrap>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <IconWrap>
              <Ionicons name="chatbubble-ellipses-outline" size={24} color={focused ? "#5FD148" : "#A0A0A0"} />
              <TabLabel focused={focused}>Messages</TabLabel>
            </IconWrap>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <IconWrap>
              <Ionicons name="person-outline" size={24} color={focused ? "#5FD148" : "#A0A0A0"} />
              <TabLabel focused={focused}>Profile</TabLabel>
            </IconWrap>
          ),
        }}
      />
    </Tabs>
  );
}
