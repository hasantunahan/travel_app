import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import useGlobalStyles from '../../../../../core/app/style/app_styles';
const CategoryCard = ({ data, setNewSelect }) => {
    const mystyles = useGlobalStyles();

    /*  const setNewSelect = (index) =>{
         let datam = data.find(item=> item.select === true);
         datam.select = false;
         let newData = data.find(item=> item.id === index);
         newData.select = true;
         setCategory(    
             category.slice(newData)
         )
     } */

    return (
        <View style={[mystyles.margin_horizontal_10, mystyles.margin_vertical_10, mystyles.align_item_center, mystyles.justify_content_center]}>
            {
                !data.select ? (
                    <TouchableOpacity >
                        <Text style={[mystyles.textcolor]}>{data.name}</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={[mystyles.padding_all_10, mystyles.selected_color, mystyles.border_radius_10]}>
                        <Text style={[mystyles.textcolor]}>{data.name}</Text>
                    </View>
                )
            }
        </View>
    );
}

export default CategoryCard;