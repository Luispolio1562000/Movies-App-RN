const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const config = getDefaultConfig(__dirname);

// Primero aplicamos NativeWind
const nativeWindConfig = withNativeWind(config, { input: "./global.css" });

// Luego envolvemos con Reanimated
module.exports = wrapWithReanimatedMetroConfig(nativeWindConfig);
