import React from 'react';
import { View, SafeAreaView, Text, ScrollView, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';
import useGlobalStyles from '../../../../../core/app/style/app_styles';

const TopPlacesCard = ({ data, index,navigation }) => {
    const mystyles = useGlobalStyles();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('PlaceDetailsPage',{data : data })}>
            <View style={[mystyles.border_radius_20, mystyles.margin_all_5, mystyles.toplaces_card_size, mystyles.padding_all_10, mystyles.top_card_background]}>
                <View style={[mystyles.flex_direction_row]}>
                    <Image style={[mystyles.toplaces_card_image_size, mystyles.border_radius_10]} source={{ uri: data.image }} >
                    </Image>
                    <View style={[mystyles.flex_direction_col, mystyles.margin_vertical_5, mystyles.margin_horizontal_10, mystyles.justify_content_center, , mystyles.toplaces_card_size_width]}>
                        <Text style={[mystyles.subtitle_textstyle]}>{data.name}</Text>
                        <View style={[mystyles.flex_direction_row, mystyles.align_item_center]}>
                            <MIcon color={useTheme().colors.border} name="location-pin" />
                            <Text style={[mystyles.textcolor, mystyles.flex_08]}>New Jersey,United States</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

}


export default withNavigation(TopPlacesCard);