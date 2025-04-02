import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  useFonts({
    'Nohemi-Black': require('./../assets/fonts/Nohemi-Black-BF6438cc58744d4.ttf'),
    'Nohemi-Bold': require('./../assets/fonts/Nohemi-Bold-BF6438cc587b5b5.ttf'),
    'Nohemi-ExtraBold': require('./../assets/fonts/Nohemi-ExtraBold-BF6438cc5881baf.ttf'),
    'Nohemi-ExtraLight': require('./../assets/fonts/Nohemi-ExtraLight-BF6438cc58a2634.ttf'),
    'Nohemi-Light': require('./../assets/fonts/Nohemi-Light-BF6438cc5899919.ttf'),
    'Nohemi-Medium': require('./../assets/fonts/Nohemi-Medium-BF6438cc5883899.ttf'),
    'Nohemi-Regular': require('./../assets/fonts/Nohemi-Regular-BF6438cc4d0e493.ttf'),
    'Nohemi-SemiBold': require('./../assets/fonts/Nohemi-SemiBold-BF6438cc588a48a.ttf'),
    'Nohemi-Thin': require('./../assets/fonts/Nohemi-Thin-BF6438cc5896c67.ttf'),
    'Aeonik-bold': require('./../assets/fonts/AeonikTRIAL-Bold.otf'),
    'Aeonik-regular': require('./../assets/fonts/AeonikTRIAL-Regular.otf'),
    'Aeonik-light': require('./../assets/fonts/AeonikTRIAL-Light.otf')
  })
  return(
    <Stack screenOptions={{
      headerShown: false
    }}>

    </Stack>
  );
}
