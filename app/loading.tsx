// app/loading.tsx

import React, { useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import { useRouter } from "expo-router";

import { loadingStyles as styles } from "../styles/screens/loadingStyles";

export default function LoadingScreen() {

  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <View style={styles.container}>

      {/* SETA */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Image
          source={require("../assets/setaloading.png")}
          style={styles.backImage}
        />
      </TouchableOpacity>

      {/* GIF */}
      <Image
        source={require("../assets/loading.gif")}
        style={styles.logoVideo}
        resizeMode="contain"
      />

      {/* TEXTO */}
      <Text style={styles.loadingText}>
        Conectando
      </Text>
      {/* BORDA TOPO */}
      <Image
        source={require("../assets/bordaC.png")}
        style={styles.topWave}
        resizeMode="cover"
      />

      {/* BORDA BAIXO */}
      <Image
        source={require("../assets/bordaB.png")}
        style={styles.bottomWave}
        resizeMode="cover"
      />

    </View>
  );
}