import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';


//dayItemWidth=22
//dayItemHeight==22
export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  const dayItemWidth = appStyle.dayItemWidth ? appStyle.dayItemWidth:34;
  const dayItemHeight = appStyle.dayItemHeight ? appStyle.dayItemWidth:34
  const textDayFontSize = appStyle.textDayFontSize ? appStyle.textDayFontSize : 16
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      marginLeft: -1
    },
    base: {
      //borderWidth: 1,
      width: dayItemWidth,
      height: dayItemHeight,
      alignItems: 'center'
    },
    fillers: {
      position: 'absolute',
      height: dayItemHeight,
      flexDirection: 'row',
      alignItems: 'center',
      left: 0,
      right: 0
    },
    leftFiller: {
      height: dayItemHeight,
      flex: 1
    },
    rightFiller: {
      height: dayItemHeight,
      flex: 1
    },
    text: {
      
      fontSize: textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.dayTextColor || '#2d4150',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    todayText: {
      fontWeight: '500',
      color: theme.todayTextColor || appStyle.dayTextColor,
      //color: appStyle.textLinkColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    quickAction: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#c1e4fe'
    },
    quickActionText: {
      marginTop: 6,
      color: appStyle.textColor
    },
    firstQuickAction: {
      backgroundColor: appStyle.textLinkColor
    },
    firstQuickActionText: {
      color: 'white'
    },
    naText: {
      color: '#b6c1cd'
    }
  });
}
