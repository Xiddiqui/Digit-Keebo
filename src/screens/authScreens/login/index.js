import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {styles} from './style'

const AppScreen = (props)=>{
    return(
        <TouchableOpacity style={styles.container}
        onPress={()=>props.navigation.navigate('App')}
        >
            <Text>
                login
            </Text>
        </TouchableOpacity>
    )
}
export default AppScreen