import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import styled from "styled-components/native";

const Container = styled.View`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   background-color: #fff;
   width: 100%;
   height: 100px;
   align-self: center;
   bottom: 0px;
   padding-top: 15px;
   padding-bottom: 15px;
   padding-left: 20px;
   padding-right: 20px;
`
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const CustomNavBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <Container>
      {state.routes.map((route, index) => {
        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <AnimatedTouchableOpacity
            layout={LinearTransition.springify().mass(0.5)}
            key={route.key}
            onPress={onPress}
            style={[
              styles.tabItem,
              { backgroundColor: isFocused ? "#F0FDF4" : "transparent" },
            ]}
          >
            {getIconByRouteName(
              route.name,
              isFocused ? "#5FD148" : "#8696BB"
            )}
            {isFocused && (
              <Animated.Text
                entering={FadeIn.duration(200)}
                exiting={FadeOut.duration(200)}
                style={styles.text}
              >
                {label as string}
              </Animated.Text>
            )}
          </AnimatedTouchableOpacity>
        );
      })}
    </Container>
  );

  function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
      case "home":
        return <Feather name="home" size={24} color={color} />;
      case "appointments":
        return <AntDesign name="calendar" size={24} color={color} />;
      case "setup-availability":
        return <MaterialIcons name="edit-calendar" size={24} color={color} />;
      case "my-account":
        return <FontAwesome6 name="user" size={24} color={color} />;
      default:
        return <Feather name="home" size={24} color={color} />;
    }
  }
};

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 47,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  text: {
    color: "#5FD148",
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 14,
    fontFamily: 'Aeonik-bold',
  },
});

export default CustomNavBar;


