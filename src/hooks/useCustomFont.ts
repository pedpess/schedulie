import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export default (): boolean => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  function fetchCustomFonts(): Promise<void> {
    return Font.loadAsync({
      'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
      'roboto-medium': require('../../assets/fonts/Roboto-Medium.ttf'),
      'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    });
  }

  useEffect(() => {
    if (!fontLoaded) {
      setFontLoaded(true);
      fetchCustomFonts();
    }
  }, [fontLoaded]);

  return fontLoaded;
};
