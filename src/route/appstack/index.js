/** @format */

import {
    Home,
    Profile,
    Chat
   
  } from '../../screens';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  
  import {Icon} from 'react-native-elements';
  import React from 'react';
  import {View,StatusBar} from 'react-native';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  import {createStackNavigator} from '@react-navigation/stack';
  import {appColor, cardColor, iconColor} from '../../constants/colors';
  
  import FA from 'react-native-vector-icons/FontAwesome';
  import FA5 from 'react-native-vector-icons/FontAwesome5';
  import Feather from 'react-native-vector-icons/Feather';
  
  const tabBarHeight = responsiveHeight(8);
  const HomeStack = createStackNavigator();
  const ProfileStack = createStackNavigator(); //Notification
  const ChatStack = createStackNavigator(); //Notification
  

  
  const MainTab = createBottomTabNavigator();
  
  const MainApp = createStackNavigator();
  
  const HomeStackScreens = () => {
    return (
      <HomeStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <HomeStack.Screen name={'Home'} component={Home} />
      </HomeStack.Navigator>
    );
  };
  const ChatStackScreens = () => {
    return (
      <ChatStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Chat'}>
        <ChatStack.Screen name={'Chat'} component={Chat} />
      </ChatStack.Navigator>
    );
  };
  const ProfileStackScreens = () => {
    return (
      <ProfileStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Profile'}>
        <ProfileStack.Screen name={'Profile'} component={Profile} />
      </ProfileStack.Navigator>
    );
  };
  
  
  
  const MainTabScreens = props => {
    return (
      <MainTab.Navigator
        barStyle={{backgroundColor:appColor.primary}}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: iconColor.secondary,
          inactiveTintColor: iconColor.secondary,
          allowFontScaling: true,
          style: {
            backgroundColor:cardColor.primary,
            //  backgroundColor: iconColor.secondary,
            //  borderTopLeftRadius: responsiveWidth(6),
            //  borderTopRightRadius: responsiveWidth(6),
            height: tabBarHeight,
          },
        }}
        initialRouteName={'Home'}>
       
  
        <MainTab.Screen
          name={'Chat'}
          component={ChatStackScreens}
          options={props => ({
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    height: tabBarHeight,
                    justifyContent: 'flex-end',
                    width: responsiveWidth(17),
                    paddingBottom: responsiveHeight(2),
                  }}>
                  <Icon
                    name={'piechart'}
                    type={'antdesign'}
                    color={focused ? iconColor.primary : iconColor.secondary}
                  />
                </View>
              );
            },
          })}
        />
         <MainTab.Screen
          name={'Home'}
          component={HomeStackScreens}
          options={() => ({
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    height: tabBarHeight,
                    justifyContent: 'flex-end',
                    width: responsiveWidth(15),
                    paddingBottom: responsiveHeight(2),
                  }}>
                  <Icon
                    name={'home'}
                    type={'feather'}
                    color={focused ? iconColor.primary : iconColor.secondary}
                  />
                </View>
              );
            },
          })}
        />
        <MainTab.Screen
          name={'Profile'}
          component={ProfileStackScreens}
          options={props => ({
            tabBarIcon: ({focused, color, size}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    height: tabBarHeight,
                    justifyContent: 'center',
                    width: responsiveWidth(15),
                  }}>
                  <Icon
                    name="user"
                    type={'feather'}
                    size={responsiveFontSize(3)}
                    color={focused ? iconColor.primary : iconColor.secondary}
                  />
                </View>
              );
            },
          })}
        />
      </MainTab.Navigator>
    );
  };
  
  const App = () => {
    return (
    <><StatusBar translucent={false} backgroundColor={appColor.primary} barStyle={'dark-content'}/>
      <MainApp.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Main'}>
        <MainApp.Screen name={'Main'} component={MainTabScreens} />
      </MainApp.Navigator></>

    );
  };
  
  export default App;
  