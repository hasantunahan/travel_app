import {
  View,
  SafeAreaView,
  StatusBar,
  Avatar,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  Animated ,
} from 'react-native';
import useGlobalStyles from '../../../../core/app/style/app_styles';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {SharedElement} from 'react-navigation-shared-element';
import {ApplicationConst} from '../../../../core/app/constant/application';
import Ion  from 'react-native-vector-icons/MaterialIcons';

const PlaceDetailsPage = ({navigation}) => {
  const mystyles = useGlobalStyles();
  const {dark} = useTheme();
  const params = navigation.getParam('data');



  return (
    <View style={[mystyles.container]}>
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        animated={true}
        translucent={true}
      />

      <View style={[mystyles.width_100]}>
        <SharedElement id={params.id}>
          <Image
            resizeMode="cover"
            source={{uri: params.image}}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height * 0.5,
            }}
          />
        </SharedElement>
        <LinearGradient
          style={
            ([mystyles.card_gradient_back, mystyles.height_100],
            mystyles.width_100)
          }
          colors={['transparent', useTheme().colors.background]}
        />
        <View
          style={[
            mystyles.flex_direction_row,
            mystyles.padding_all_20,
            mystyles.position,
            mystyles.margin_vertical_30,
          ]}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <View style={[mystyles.flex_direction_row,mystyles.justify_content_spacebetween,mystyles.width_90_wid]}>
            <Ion style={{shadowOffset:{width:10,height:10},shadowColor:'black'}} color={useTheme().colors.text} name="arrow-back-ios" size={24} />
            <Ion color={useTheme().colors.text} name="favorite" size={24} />

            </View>
          </TouchableOpacity>
        </View>
        <SharedElement id={params.name}>
          <Text
            style={{
              position: 'absolute',
              left: 20,
              bottom: 50,
              color: useTheme().colors.text,
              fontSize: 24,
              fontFamily: ApplicationConst.APP_FONT_BOLD,
            }}>
            {params.name}
          </Text>
        </SharedElement>
      </View>
      <SharedElement id={'view'}>
      <View
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height*.5,
          backgroundColor: useTheme().colors.background,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          marginTop :-30
        }}> 
          <Text style={{margin:20}}>hasans</Text>
        </View>
      </SharedElement>
    </View>
  );
};

PlaceDetailsPage.sharedElements = route => {
  const item = route.params;
  return [
    {
      id: item.data.id,
      animation: 'fade',
      align: 'top',
    },
    {
      id: item.data.name,
      animation: 'fade',
      align: 'top-left',
    },
    {
      id: 'view',
      animation: 'fade',

    },
  ];
};

export default PlaceDetailsPage;
