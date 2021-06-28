import React,{useState} from 'react'
import {View,Text} from 'react-native'
import {appImages} from '../../../assets/utility'

const AppScreen = () => {
const [dataSource,setDataSource] =useState([
    {
        name:"Mediline Ford",
        txt:"kskkdakscancjahbacabhggaahjvacv",
        image:appImages.user1
    }
])
    return(
        <View>
            <Text>
                New Match
            </Text>

        </View>
    )
}
export default AppScreen