import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppState'
import Hr from '../../UI/Hr'
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider'
import * as ImagePicker from 'expo-image-picker';
const CustomizeBackground = () => {
    const { AppState, dispatch } = useContext(AppContext)
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'solid Color', value: 1 },
        { label: 'image', value: 3 },
        { label: 'gridiants', value: 4 },
        { label: 'theme 1', value: 2 },
        { label: 'theme 2', value: 5 },
        { label: 'theme 3', value: 6 },
    ]);

    let editBackGround

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [2, 4],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            dispatch(
                {
                    type: 'setBackGroundStyle',
                    prop: 'backGroundImage',
                    backGroundImage:result.assets[0].uri
                })}
        }

    switch (AppState.theme.backGround.type) {
        case 1:
            editBackGround = <View>
                <Text className="p-5 text-[#8C8C8C]">backGround Color</Text>

                <FlatList
                    data={AppState.textColors}
                    scrollEnabled={false}
                    extraData={AppState.textColors}
                    contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
                    renderItem={(item) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    backgroundColor: item.item.color,
                                    borderWidth: 2,
                                    borderColor: '#bfbfbf'
                                }}
                                onPressOut={() => dispatch(
                                    {
                                        type: 'setBackGroundStyle',
                                        prop: 'backGroundColor',
                                        value: item.item.color
                                    })}
                                className="w-[35px] h-[35px] rounded-full m-2">
                            </TouchableOpacity>
                        )
                    }} />
            </View>
            break;
        // case 2:
        //     editBackGround = <View>
        //         <Text className="p-5 text-[#8C8C8C]">backGround Color</Text>
        //         <FlatList
        //             scrollEnabled={false}
        //             data={AppState.textColors}
        //             extraData={AppState.textColors}
        //             contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
        //             renderItem={(item) => {
        //                 return (
        //                     <TouchableOpacity
        //                         style={{
        //                             backgroundColor: item.item.color,
        //                             borderWidth: 2,
        //                             borderColor: '#bfbfbf'
        //                         }}
        //                         onPressOut={() => dispatch(
        //                             {
        //                                 type: 'setBackGroundStyle',
        //                                 prop: 'backGroundColor',
        //                                 backGroundColor: item.item.color
        //                             })}
        //                         className="w-[35px] h-[35px] rounded-full m-2">
        //                     </TouchableOpacity>
        //                 )
        //             }} />
        //         <Text className="p-5 text-[#8C8C8C]">Theme BackGroundColor Color</Text>

        //         <FlatList
        //             scrollEnabled={false}
        //             data={AppState.textColors}
        //             extraData={AppState.textColors}
        //             contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
        //             renderItem={(item) => {
        //                 return (
        //                     <TouchableOpacity
        //                         style={{
        //                             backgroundColor: item.item.color,
        //                             borderWidth: 2,
        //                             borderColor: '#bfbfbf'
        //                         }}
        //                         onPressOut={() => dispatch(
        //                             {
        //                                 type: 'setBackGroundStyle',
        //                                 prop: 'themeBackGroundColor',
        //                                 themeBackGroundColor: item.item.color
        //                             })}
        //                         className="w-[35px] h-[35px] rounded-full m-2">
        //                     </TouchableOpacity>
        //                 )
        //             }} />
        //     </View>
        //     break;
        // case 3:
        //     editBackGround = <View>
        //         <TouchableOpacity onPress={() => pickImage()}>
        //             <Text className="text-xl text-[#bfbfbf]">select backgroung image</Text>
        //         </TouchableOpacity>
        //     </View>
        //     break;
        // case 4:
        //     editBackGround = <View className="w-full h-auto">
        //         <Text className="p-5 text-[#8C8C8C]">gradient Angel</Text>
        //         <Slider
        //             value={AppState.profile.theme.backGround.gradientAngel}
        //             step={1}
        //             animateTransitions={true}
        //             onSlidingComplete={(value) => dispatch({ type: 'setBackGroundStyle', prop: 'gradientAngel', gradientAngel: toString(value) })}
        //             minimumValue={0}
        //             maximumValue={360}

        //         />



        //         <Text className="p-5 text-[#8C8C8C]">First Gradient Color</Text>

        //         <FlatList
        //             scrollEnabled={false}
        //             data={AppState.textColors}
        //             extraData={AppState.textColors}
        //             contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%' , height:'100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
        //             renderItem={(item) => {
        //                 return (
        //                     <TouchableOpacity
        //                         style={{
        //                             backgroundColor: item.item.color,
        //                             borderWidth: 2,
        //                             borderColor: '#bfbfbf'
        //                         }}
        //                         onPressOut={() => dispatch(
        //                             {
        //                                 type: 'setBackGroundStyle',
        //                                 prop: 'firstGradientColor',
        //                                 firstGradientColor: item.item.color
        //                             })}
        //                         className=" relative w-[35px] h-[35px] rounded-full m-2">
        //                     </TouchableOpacity>
        //                 )
        //             }} />
        //         <Text className="p-5 text-[#8C8C8C]">Second Gradient Color</Text>

        //         <FlatList
        //             scrollEnabled={false}
        //             data={AppState.textColors}
        //             extraData={AppState.textColors}
        //             contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', height:'100%',  justifyContent: 'center', alignItems: 'center' }}
        //             renderItem={(item) => {
        //                 return (
        //                     <TouchableOpacity
        //                         style={{
        //                             backgroundColor: item.item.color,
        //                             borderWidth: 2,
        //                             borderColor: '#bfbfbf'
        //                         }}
        //                         onPressOut={() => dispatch(
        //                             {
        //                                 type: 'setBackGroundStyle',
        //                                 prop: 'secondGradientColor',
        //                                 secondGradientColor: item.item.color
        //                             })}
        //                         className="relative w-[35px] h-[35px] rounded-full m-2">
        //                     </TouchableOpacity>
        //                 )
        //             }} />

        //     </View>
        //     break;
        // case 5:
        //     editBackGround = <View>
        //         <Text className="p-5 text-[#8C8C8C]">backGround Color</Text>
        //         <FlatList
        //             scrollEnabled={false}
        //             data={AppState.textColors}
        //             extraData={AppState.textColors}
        //             contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}
        //             renderItem={(item) => {
        //                 return (
        //                     <TouchableOpacity
        //                         style={{
        //                             backgroundColor: item.item.color,
        //                             borderWidth: 2,
        //                             borderColor: '#bfbfbf'
        //                         }}
        //                         onPressOut={() => dispatch(
        //                             {
        //                                 type: 'setBackGroundStyle',
        //                                 prop: 'backGroundColor',
        //                                 backGroundColor: item.item.color
        //                             })}
        //                         className="w-[35px] h-[35px] rounded-full m-2">
        //                     </TouchableOpacity>
        //                 )
        //             }} />
        //         <Text className="p-5 text-[#8C8C8C]">Theme BackGroundColor Color</Text>
        //         <FlatList
        //             scrollEnabled={false}
        //             data={AppState.textColors}
        //             extraData={AppState.textColors}
        //             keyExtractor={item => {return(item.id + 'bgcolor')}}
        //             contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', minWidth: '100%', height:'100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}
        //             renderItem={(item) => {
        //                 return (
        //                     <TouchableOpacity
        //                         style={{
        //                             backgroundColor: item.item.color,
        //                             borderWidth: 2,
        //                             borderColor: '#bfbfbf'
        //                         }}
        //                         onPressOut={() => dispatch(
        //                             {
        //                                 type: 'setBackGroundStyle',
        //                                 prop: 'themeBackGroundColor',
        //                                 themeBackGroundColor: item.item.color
        //                             })}
        //                         className="w-[35px] h-[35px] rounded-full m-2">
        //                     </TouchableOpacity>
        //                 )
        //             }} />
        //     </View>

        default:
            break;
    }
    return (
        <View className="w-full h-auto justify-center items-center pt-10 pb-40">
            <Text className="w-full text-center text-3xl text-[#bfbfbf] py-5">Customize Background</Text>
            <DropDownPicker
                open={open}
                max={10}
                value={AppState.theme.backGround.type}
                items={items}
                setOpen={setOpen}
                onSelectItem={(item) => {
                    return (
                        dispatch({ type: 'setBackGroundStyle', prop: 'type', backGroundType: item.value })
                    )
                }}
            />
            {editBackGround}
        </View>
    )
}

export default React.memo(CustomizeBackground)