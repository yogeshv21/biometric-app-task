import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../theme";

export const Styles = StyleSheet.create({
  container: {
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:verticalScale(24),
    backgroundColor:"white"
  },

  btn:{
    backgroundColor:"black",
    height:verticalScale(60),
    width:"80%",
    borderRadius:moderateScale(15)
  }
})