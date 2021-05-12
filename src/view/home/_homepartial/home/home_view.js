import React from 'react';
import { View, SafeAreaView, Text, ScrollView, StatusBar } from 'react-native'
import { useTheme } from '@react-navigation/native';
import HeaderPartial from '../../../_header/_header';
import useGlobalStyles from '../../../../core/app/style/app_styles';
import CategoryCard from './component/category_card';
import TravelsCard from './component/travels_card';
import TopPlacesCard from './component/topplaces_card';
const HomeView = () => {
    const mystyles = useGlobalStyles();
    const { dark } = useTheme();

    const category = [
        {
            'id': 1,
            'select': true,
            'name': 'Populer'
        },
        {
            'id': 2,
            'select': false,
            'name': 'New'
        },
        {
            'id': 3,
            'select': false,
            'name': 'Best Comments'
        },
        {
            'id': 4,
            'select': false,
            'name': 'Last Comments'
        },
        {
            'id': 5,
            'select': false,
            'name': 'Nearby'
        },
        {
            'id': 6,
            'select': false,
            'name': 'Very'
        }
    ];

    const travel = [
        {
            'id': 1,
            'image': 'https://nezamannereye.com/wp-content/uploads/2017/06/new_york_1497359495.jpg'
        },
        {
            'id': 2,
            'image': 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/47348154/original/8a647c48dc4bf8c672a5eb8320be9dab0a3e4146/send-you-5-minutes-of-royalty-free-background-audio-from-nyc-urban-city-noise.jpg'
        }

    ];

    const top_travel = [
        {
            'id': 1,
            'name': 'The Statue of Liberty',
            'image': 'https://a.cdn-hotels.com/gdcs/production165/d1031/93148f30-cb15-11e8-87bb-0242ac11000d.jpg'
        },
        {
            'id': 2,
            'name': 'NewYork City',
            'image': 'https://lh3.googleusercontent.com/proxy/eOcIVCrOj9KiLFm7ipVsC-MquKUYJcDIK7QquLw7ggpmboxdY6vmahvo8rl-uKTyq2NWycjWI0Do2JlAJRqMNN6V_KP6mvuEVhQ-nkMvQDUAEUN4MNjM160D0G-7nC8VTOoj449K0Kzih6yIVHD2mL9xEKopobRykVfo7dSOBzUcRpPo2FabkGa4iX2DYo6yMH8=s0-d'
        },
        {
            'id': 3,
            'name': 'NewYork City',
            'image': 'https://edumag.net/wp-content/uploads/2017/09/ocean-drive-miami-beach-florida-1.jpg'
        }

    ];


    return (
        <SafeAreaView style={mystyles.container}>
            <StatusBar
                barStyle={dark ? 'light-content' : 'dark-content'}
                animated={true}
                hidden={false} />
            <HeaderPartial></HeaderPartial>
            <View style={[mystyles.margin_horizontal_20]}>
                <Text style={[mystyles.very_big_title]}>
                    Hadi X Şehrini Gezelim ☺️</Text>
            </View>
            <View style={[mystyles.margin_horizontal_20]}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                    {
                        category.map((item, index) => {
                            return <CategoryCard key={item.name} index={index} data={item} />
                        })
                    }
                </ScrollView>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                    {
                        travel.map((item, index) => {
                            return <TravelsCard key={item.image} index={index} data={item} />
                        })
                    }
                </ScrollView>


                <View style={[mystyles.margin_vertical_10]}>

                    <View style={[mystyles.flex_direction_row, mystyles.justify_content_spacebetween]}>
                        <Text style={mystyles.subtitle_textstyle}>
                            Top Places
                        </Text>
                        <Text style={mystyles.textcolor}>
                            All View
                        </Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                        {
                            top_travel.map((item, index) => {
                                return <TopPlacesCard key={item.image} index={index} data={item} />
                            })
                        }
                    </ScrollView>

                </View>

            </View>


        </SafeAreaView>
    );
}

export default HomeView;