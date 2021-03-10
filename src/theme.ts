import {Dimensions} from 'react-native'
export const Theme = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    header: Dimensions.get('window').width / 100 * 6,
    normalText: Dimensions.get('window').width / 100 * 4,
    primaryColor: '#F46929',
    black: '#222222',
    elevation: 5, 
    shadowColor: 'grey', 
    shadowRadius: 3, 
    shadowOffset: {width: 4, height: 8}, 
    shadowOpacity: 0.7, 
}