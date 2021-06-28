import React from 'react'
import {View,Text,StatusBar,ImageBackground} from 'react-native'
import { appColor } from '../../../constants/colors'
import {appImages} from '../../../assets/utility'
import Carousel from 'react-native-snap-carousel';

import {styles} from './style'
import { fontFamily } from '../../../constants/fonts';

const AppScreen = ()=>{
    return(
        <View style={styles.container}>
          <Text style={{fontFamily:fontFamily.appTextLight}}>hhhhhhh</Text>
        </View>
    )
}
export default AppScreen