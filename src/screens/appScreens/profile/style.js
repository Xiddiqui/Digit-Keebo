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
        marginTop:responsiveHeight(3)
    },
    image:{
        height:responsiveHeight(25),
        width:responsiveWidth(30),
        marginLeft:responsiveWidth(2),
        borderRadius:responsiveWidth(4)
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
    },
    Promptscard:{
        backgroundColor:cardColor.secondary,
        width:responsiveWidth(90),
        borderRadius:responsiveWidth(5),
        alignSelf:'center',
        marginTop:responsiveHeight(2),
        padding:responsiveWidth(3),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    footer:{
        marginBottom:responsiveHeight(2)
    },
    circlecard:{
        height:responsiveWidth(10),
        width:responsiveWidth(10),
        borderRadius:responsiveWidth(10/2),
        backgroundColor:cardColor.primary,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:responsiveWidth(3),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    circlecardview:{
        flexDirection:'row',
        position:'absolute',
        zIndex:1,
        marginTop:responsiveHeight(1),
        alignSelf:'flex-end',
        paddingRight:responsiveWidth(5),
    }
})
