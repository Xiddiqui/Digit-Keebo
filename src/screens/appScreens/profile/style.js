import React from 'react'
import {StyleSheet} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { cardColor, textColor } from '../../../constants/colors'
import { fontFamily } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    cover:{
        height:responsiveHeight(30),
        width:'100%'
    },
    nametxt:{
        textAlign:'center',
        fontSize:responsiveFontSize(2.5),
        fontWeight:'bold',
        color:textColor.primary,
        marginTop:responsiveHeight(3),
        
    },
    card:{
        width:responsiveWidth(90),
        backgroundColor:cardColor.primary,
        borderRadius:responsiveWidth(3),
        alignSelf:'center',
        marginTop:responsiveHeight(2),
        padding:responsiveWidth(3)
    },
    txt:{
        color:textColor.primary,
        fontSize:responsiveFontSize(1.7),
        fontFamily:fontFamily.appTextRegular
    },
    biotxt:{
        color:textColor.secondary,
        marginBottom:responsiveHeight(1),
        fontFamily:fontFamily.appTextBold
    },
    myphotoview:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:responsiveWidth(90),
        alignSelf:'center',
        marginTop:responsiveHeight(2)
    },
    image:{
        height:responsiveHeight(20),
        width:responsiveWidth(20)
    },
    dp:{
        height:responsiveWidth(35),
        width:responsiveWidth(35),
        borderRadius:responsiveWidth(35/2),
        alignSelf:'center',
        marginTop:responsiveHeight(15),
        borderWidth:responsiveWidth(0.5),
        borderColor:textColor.white
    },
    myphototxt:{
        fontFamily:fontFamily.appTextBold,
        fontSize:responsiveFontSize(1.7)
    }
})
