import { StyleSheet } from "react-native";
import { COLORS, fontSize, fonts, horizontalScale, moderateScale, verticalScale } from ".";

export const _ = StyleSheet.create({
  ['flex']: {
    display: 'flex'
  },
  ['flex-column']: {
    flexDirection: 'column'
  },
  ['flex-row']: {
    flexDirection: 'row'
  },

  ["align-start"]: {
    display: 'flex',
    alignItems: "flex-start"
  },
  ['align-center']: {
    display: 'flex',
    alignItems: "center"
  },
  ['align-end']: {
    display: 'flex',
    alignItems: "flex-end"
  },

  ['justifyContent-start']: {
    display: 'flex',
    justifyContent: "flex-start"
  },
  ['justifyContent-center']: {
    display: 'flex',
    justifyContent: "center"
  },
  ['justifyContent-end']: {
    display: 'flex',
    justifyContent: "flex-end"
  },

  ['flex-center']: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ['flex-space-between']: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: "space-between"
  },

  ['flex-center']: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ['flex-space-between-row']: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  ['text-center']: {
    textAlign: 'center'
  },
  ['text-right']: {
    textAlign: 'right'
  },
  ['text-left']: {
    textAlign: 'left'
  },

  ["h1"]: {
    fontFamily: fonts.inter_700,
    fontSize: fontSize["20"],
    fontStyle: "normal",
    fontWeight: "700",

  },
  ["h3"]: {
    fontFamily: fonts.inter_700,
    fontSize: fontSize["14"],
    fontStyle: "normal",
    fontWeight: "700",

  },
  ["h2"]: {
    fontFamily: fonts.inter_700,
    fontSize: fontSize["16"],
    fontStyle: "normal",
    fontWeight: "700",

  },
  ["body-1"]: {
    fontFamily: fonts.inter_400,
    fontSize: fontSize["14"],
    fontStyle: "normal",
    fontWeight: "400",
  },
  ["body-2"]: {
    fontFamily: fonts.inter_500,
    fontSize: fontSize["13"],
    fontStyle: "normal",
    fontWeight: "500",

  },
  ["body-3"]: {
    fontFamily: fonts.inter_400,
    fontSize: fontSize["12"],
    fontStyle: "normal",
    fontWeight: "400",

  },

  ["body-padding"]: {
    paddingHorizontal: horizontalScale(24)
  },

  ["main-container"]: {
    flex: 1,
    height: "100%",
    backgroundColor: COLORS.white
  },

  ["input-style"]: {
    height: verticalScale(50),
    borderWidth: moderateScale(1),
    borderColor: COLORS.medium_gray,
    width: "100%",
    paddingHorizontal: horizontalScale(20),
    backgroundColor: "white",
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: "space-between",
    flexDirection:"row",
    alignItems: "center",
    borderRadius: moderateScale(5)
  }
})