import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;
// height
const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
// width 
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
// font | padding | margin
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export  { horizontalScale, verticalScale, moderateScale };