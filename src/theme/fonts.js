import { moderateScale } from "./responsive-metrics";
import { StyleSheet } from "react-native";

export const fonts = {
  inter_500: 'Inter-Medium',
  inter_600: 'Inter-SemiBold',
  inter_700: 'Inter-Bold',
  inter_800: 'Inter-ExtraBold',
  inter_400: 'Inter-Regular',
};
  

export const fontSize = {
  ["20"] : moderateScale(20),
  ["16"] : moderateScale(16),
  ["14"] : moderateScale(14),
  ["13"] : moderateScale(13),
  ["12"] : moderateScale(12),
}