import React from 'react'
import {StyleSheet} from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
    container:{
        flex:1,
      
    },
    coverImage:{
        height:responsiveHeight(30),
        width:'100%'
    }
})