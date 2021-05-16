import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
const Details = ({navigation}) => {
  const params = navigation.getParam('data');
  return (
    <View style={{flex: 1}}>
      <SharedElement id={params.id}>
        <Image
        resizeMode="cover"
          style={{width: Dimensions.get('window').width, height: 400}}
          source={{uri: params.image}}></Image>
      </SharedElement>
    </View>
  );
};

Details.sharedElements = (route, otherRoute, showing) => {
  const item = route.params;
  return [
    {
      id: item.data.id,
      animation: 'fade',
      align :'center-top'
    },
  ];
};

export default Details;
