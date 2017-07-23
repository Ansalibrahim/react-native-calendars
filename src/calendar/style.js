import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 2,
      paddingRight: 2,
      flex: 1,
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 1,
      marginBottom: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  });
}

