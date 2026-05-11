import { Stack } from 'expo-router';

import { useFonts } from 'expo-font';

import {
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import {
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,

    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}