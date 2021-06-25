import React from 'react'
import {View,Text,StatusBar,ImageBackground} from 'react-native'
import { appColor } from '../../../constants/colors'
import {appImages} from '../../../assets/utility'
import {styles} from './style'

const AppScreen = ()=>{
    return(
        <View style={styles.container}>
            
            <ImageBackground style={styles.coverImage} source={appImages.user1}>

            </ImageBackground>
        </View>
    )
}
export default AppScreen