import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export default (): boolean => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  async function fetchCustomFonts(): Promise<void> {
    return await Font.loadAsync({
      RobotoBold: require('../../assets/fonts/Roboto-Bold.ttf'),
      RobotoMedium: require('../../assets/fonts/Roboto-Medium.ttf'),
      RobotoRegular: require('../../assets/fonts/Roboto-Regular.ttf'),
    });
  }

  useEffect(() => {
    if (!fontLoaded) {
      fetchCustomFonts().then(() => setFontLoaded(true));
    }
  }, [fontLoaded]);

  return fontLoaded;
};
