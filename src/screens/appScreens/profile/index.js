import React,{useState} from 'react'
import {View,Text,StatusBar,ImageBackground,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native'
import { appColor, cardColor, iconColor } from '../../../constants/colors'
import {appImages} from '../../../assets/utility'
import {styles} from './style'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import {Icon} from 'react-native-elements'

const AppScreen = () => {
const [dataSource , setDataSource]=useState([
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
const [dataSource1 , setDataSource1]=useState([
    {
        id:'1',
        name:'Favorite movie',
        cat:'Rohnin',
        flag:true
    },
    {
        id:'2',
        name:'Favorite Food',
        cat:'Soshi',
        flag:false
    },
    {
        id:'3',
        name:'Dream Job',
        cat:'Chef',
        flag:false
    },
   
])
    return(
        <View style={styles.container}>
            <View style={styles.circlecardview}>
                <TouchableOpacity style={styles.circlecard}>
                    <Icon name={'mode-edit'} type={'material'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circlecard}>
                    <Icon name={'dots-three-vertical'} type={'entypo'}/>
                </TouchableOpacity>
            </View>
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
                <Text style={styles.myphototxt}>
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
                data={dataSource}
                ListHeaderComponent={<View style={{marginLeft:responsiveWidth(3)}}/>}
                ListFooterComponent={<View style={{marginRight:responsiveWidth(3)}}/>}
                horizontal={true}
                keyExtractor={(item)=>item.id}
                renderItem={({item,index})=>(
                    <View>
                        <Image source={item.image} style={styles.image}/>
                    </View>
                )}
                />
            </View>
            <View style={styles.myphotoview}>
                <Text style={styles.myphototxt}>
                    Prompts
                </Text>
                <TouchableOpacity>
                <Text style={styles.biotxt}>
                    Edit
                </Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                data={dataSource1}
                renderItem={({ item, index }) => (
                    <View style={styles.Promptscard}>
                        <View>
                        <Text style={styles.biotxt}>
                            {item.name}
                        </Text>
                        <Text style={styles.txt}>
                            {item.cat}
                        </Text>
                        </View>
                        <Icon name={'star'} type={'entypo'} color={item.flag?iconColor.yellow:cardColor.secondary}/>
                    </View>
                )}
                
                />
            </View>
            <View style={styles.footer}/>
            </ScrollView>
        </View>
    )
}
export default AppScreen