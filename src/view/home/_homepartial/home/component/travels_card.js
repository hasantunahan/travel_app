import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StatusBar, Image, ImageBackground } from 'react-native'
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import useGlobalStyles from '../../../../../core/app/style/app_styles';
import {withNavigation} from 'react-navigation';

const TravelsCard = ({data,index,navigation}) => {
    const mystyles = useGlobalStyles();
    return ( 
          <TouchableOpacity onPress={()=>navigation.navigate('PlaceDetailsPage',{data : data })}>
              <View style={[mystyles.border_radius_20, mystyles.margin_all_5]}>
                        <ImageBackground source={{uri : data.image}} style={[mystyles.card_image_size]} imageStyle={{ borderRadius: 30 }}>
                            <LinearGradient style={[mystyles.card_gradient_back]} colors={['transparent', useTheme().colors.background]} />
                            <View style={[mystyles.card_gradient_view_absolute, mystyles.justify_content_spacebetween, mystyles.padding_all_10]}>
                                <View>
                                    <View style={[mystyles.width_100, mystyles.flex_direction_row_reverse, mystyles.padding_all_10]}>
                                        <View style={[mystyles.card_circle_back]}>
                                            <Icon name="heart" color={useTheme().colors.background} size={16} />
                                        </View>
                                    </View>
                                    <View style={[mystyles.width_100, mystyles.flex_direction_row_reverse, mystyles.padding_all_10, mystyles.align_item_center]}>
                                        <Text style={mystyles.textcolor}>4.9</Text>
                                        <Icon name="star" color={'#F8F559'} size={16} />
                                    </View>
                                </View>
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', alignSelf: 'center', padding: 10, borderRadius: 10 }}>
                                    <Text style={[mystyles.textcolor]}>X Building</Text>
                                    <View style={[mystyles.flex_direction_row, mystyles.align_item_center]}>
                                        <MIcon color={useTheme().colors.text} name="location-pin" />
                                        <Text style={[mystyles.textcolor]}>New Jersey,United States</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
          </TouchableOpacity>
     );
}
 
export default withNavigation(TravelsCard);