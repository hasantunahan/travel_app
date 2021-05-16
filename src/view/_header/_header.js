import { View, Text } from 'react-native';
import React from 'react';
import useGlobalStyles from '../../core/app/style/app_styles';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
const HeaderPartial = () => {
    const mystyles = useGlobalStyles();
    return (
        <View style={[mystyles.flex_direction_row, mystyles.margin_horizontal_20,mystyles.margin_vertical_30, mystyles.align_item_center, mystyles.justify_content_spacebetween]}>
            <View style={[mystyles.flex_direction_row]}>
                <Avatar
                    rounded
                    source={{
                        uri:
                            'https://media-exp1.licdn.com/dms/image/C4D03AQH53wWSqm8Llg/profile-displayphoto-shrink_200_200/0/1558878578390?e=1624492800&v=beta&t=uvNANY-gFqU0FP61Rdksjikb8rMLLms-4iFeKEx9Hek',
                    }}
                />
                <View>
                    <Text style={[mystyles.textcolor, mystyles.margin_horizontal_10]}  >Hello,</Text>
                    <Text style={[mystyles.subtitle_textstyle, mystyles.margin_horizontal_10]}  >Hasan</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Icon
                        name='menu'
                        color={useTheme().colors.text}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HeaderPartial;