import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import useGlobalStyles from '../../../../../core/app/style/app_styles';
import {withNavigation} from 'react-navigation';
import {SharedElement} from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

const TravelsCard = ({data, index, navigation}) => {
  const mystyles = useGlobalStyles();
  return (
    <TouchableScale
      activeScale={0.9}
      useNativeDriver={false}
      tension={50}
      friction={7}
      onPress={() => navigation.navigate('PlaceDetailsPage', {data})}>
      <View style={[mystyles.border_radius_20, mystyles.margin_all_5]}>
        <SharedElement id={data.id}>
          <ImageBackground
            source={{uri: data.image}}
            style={[mystyles.card_image_size]}
            imageStyle={{borderRadius: 30}}
            resizeMode="cover">
            <LinearGradient
              style={[mystyles.card_gradient_back]}
              colors={['transparent', useTheme().colors.background]}
            />
            <View
              style={[
                mystyles.card_gradient_view_absolute,
                mystyles.justify_content_spacebetween,
                mystyles.padding_all_10,
              ]}>
              <View>
                <View
                  style={[
                    mystyles.width_100,
                    mystyles.flex_direction_row_reverse,
                    mystyles.padding_all_10,
                  ]}>
                  <View style={[mystyles.card_circle_back]}>
                    <Icon
                      name="heart"
                      color={useTheme().colors.background}
                      size={16}
                    />
                  </View>
                </View>
                <View
                  style={[
                    mystyles.width_100,
                    mystyles.flex_direction_row_reverse,
                    mystyles.padding_all_10,
                    mystyles.align_item_center,
                  ]}>
                  <Text style={mystyles.textcolor}>4.9</Text>
                  <Icon name="star" color={'#F8F559'} size={16} />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  alignSelf: 'center',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <SharedElement id={data.name}>
                  <Text style={[mystyles.textcolor]}>{data.name}</Text>
                </SharedElement>
                <View
                  style={[
                    mystyles.flex_direction_row,
                    mystyles.align_item_center,
                  ]}>
                  <MIcon color={useTheme().colors.text} name="location-pin" />
                  <Text style={[mystyles.textcolor]}>
                    New Jersey,United States
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: Dimensions.get('window').height * 0.4,
                width: Dimensions.get('window').width,
                backgroundColor: useTheme().colors.background,
                opacity: 0,
                position: 'absolute',
              }}></View>
          </ImageBackground>
        </SharedElement>
      </View>
    </TouchableScale>
  );
};

export default withNavigation(TravelsCard);
