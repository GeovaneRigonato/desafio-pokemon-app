import React, { useEffect, useState } from "react";
import { Routes } from "./src/routes";
import { NativeBaseProvider } from "native-base";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    // Adicione outras variações da fonte, se necessário
  });
};
export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAppData = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); // Impede o SplashScreen de ser ocultado automaticamente

        await loadFonts();

        setIsReady(true);
      } catch (error) {
        console.warn(error);
      } finally {
        await SplashScreen.hideAsync(); // Oculta o SplashScreen manualmente
      }
    };

    loadAppData();
  }, []);

  if (!isReady) {
    return null; // Retorne null enquanto as fontes estão carregando
  }

  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}