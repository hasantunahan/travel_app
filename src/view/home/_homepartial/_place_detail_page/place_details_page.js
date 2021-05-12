import { View, SafeAreaView, StatusBar, Avatar, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import useGlobalStyles from '../../../../core/app/style/app_styles';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const PlaceDetailsPage = ({ navigation }) => {
    const mystyles = useGlobalStyles();
    const { dark } = useTheme();
    const params = navigation.getParam('data');
    return (
        <View style={[mystyles.container]}>
            <StatusBar
                barStyle={dark ? 'light-content' : 'dark-content'}
                animated={true}
                translucent={true}
            />

            <View style={[mystyles.width_100]}>
                <ImageBackground source={{ uri: params.image }} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height * .5, resizeMode: 'cover' }}>
                    <LinearGradient style={[mystyles.place_card_gradient_back]} colors={['transparent', useTheme().colors.background]} />
                </ImageBackground>
                <View style={[mystyles.flex_direction_row, mystyles.padding_all_20, mystyles.position, mystyles.margin_vertical_30]}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Text style={[mystyles.textcolor]}>Geri</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default PlaceDetailsPage