import React,{useState} from 'react'
import {View,Text,StatusBar,ImageBackground,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native'
import { appColor } from '../../../constants/colors'
import {appImages} from '../../../assets/utility'
import {styles} from './style'
const AppScreen = () => {
const [data , setData]=useState([
    {
        id:'1',
        image:appImages.user1
    },
    {
        id:'2',
        image:appImages.user1
    },
    {
        id:'3',
        image:appImages.user1
    },
    {
        id:'4',
        image:appImages.user1
    }
])
    return(
        <View style={styles.container}>
            <ScrollView>
            <ImageBackground source={appImages.cover} style={styles.cover}>
                <Image source={appImages.user1} style={styles.dp}/>
            </ImageBackground>
            <View>
                <Text style={styles.nametxt}>
                    John Doe,20
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.biotxt}>
                    Bio
                </Text>
                <Text style={styles.txt}>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                </Text>
            </View>
            <View style={styles.myphotoview}>
                <Text>
                    MyPhotos
                </Text>
                <TouchableOpacity>
                <Text style={styles.biotxt}>
                    Edit
                </Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                data={data}
                horizontal={true}
                keyExtractor={(item)=>item.id}
                renderItem={({item,index})=>{
                    <View>
                        <Image source={item.image} style={styles.image}/>
                    </View>
                }}
                />
            </View>
            </ScrollView>
        </View>
    )
}
export default AppScreen