import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';
import useGlobalStyles from '../../../../../core/app/style/app_styles';
import {SharedElement} from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

const TopPlacesCard = ({data, index, navigation}) => {
  const mystyles = useGlobalStyles();
  return (
    <TouchableScale
    activeScale={0.9}
    useNativeDriver={false}
    tension={50}
    friction={7}
      onPress={() => navigation.navigate('PlaceDetailsPage', {data})}>
      <View
        style={[
          mystyles.border_radius_20,
          mystyles.margin_all_5,
          mystyles.toplaces_card_size,
          mystyles.padding_all_10,
          mystyles.top_card_background,
        ]}>
        <View style={[mystyles.flex_direction_row]}>
          <SharedElement id={data.id}>
            <Image
              style={[
                mystyles.toplaces_card_image_size,
                mystyles.border_radius_10,
              ]}
              resizeMode="cover"
              source={{uri: data.image}}></Image>
          </SharedElement>
          <View
            style={[
              mystyles.flex_direction_col,
              mystyles.margin_vertical_5,
              mystyles.margin_horizontal_10,
              mystyles.justify_content_center,
              ,
              mystyles.toplaces_card_size_width,
            ]}>
            <SharedElement id={data.name}>
            <Text style={[mystyles.subtitle_textstyle]}>{data.name}</Text>
            </SharedElement>
            <View
              style={[mystyles.flex_direction_row, mystyles.align_item_center]}>
              <MIcon color={useTheme().colors.border} name="location-pin" />
              <Text style={[mystyles.textcolor, mystyles.flex_08]}>
                New Jersey,United States
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableScale>
  );
};

export default withNavigation(TopPlacesCard);
