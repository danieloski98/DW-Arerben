import {Dimensions} from 'react-native'
export const Theme = {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    header: Dimensions.get('screen').width / 100 * 6,
    normalText: Dimensions.get('screen').width / 100 * 4,
    primaryColor: '#F46929',
    black: '#222222',
    elevation: 5, 
    shadowColor: 'grey', 
    shadowRadius: 3, 
    shadowOffset: {width: 4, height: 8}, 
    shadowOpacity: 0.7, 
    majorSpace: 10
}