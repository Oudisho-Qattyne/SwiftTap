import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useContext } from 'react'
import Button from './Button'
import { AppContext } from '../AppState';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Profile = () => {
    const { AppState, dispatch , UiState , UiDispatch } = useContext(AppContext);
    const lineStyle = {
        backgroundColor: AppState.theme.backGround.backGroundColor
    }
    const textStyle = {
        color: AppState.theme.textColor,
        fontFamily: AppState.theme.textFont
    }
    return (
        <View className="w-full justify-center items-center">
            <View className="flex flex-row justify-center items-center pb-[78px]">
                <Button title='Personal' width={99} height={32} />
                {/* <TouchableOpacity className="w-[99px] h-[32px] bg-[#0060CD] rounded-[23px] flex justify-center items-center ">
                    <Text className='text-white text-center'>Personal</Text>
                </TouchableOpacity> */}
                <TouchableOpacity className="w-[32px] h-[32px] bg-white border border-1 border-[#a4a3a3] rounded-full flex justify-center items-center ">
                    <Text className='text-[#0060CD] text-center'>+</Text>
                </TouchableOpacity>
            </View>

            <View style={lineStyle} className="w-[195px] h-[195px] rounded-full  justify-center items-center">
                <Image className="absolute w-[180px] h-[180px] rounded-full  " source={require('./../assets/Profile.png')} />
                {
                    UiState.editable &&
                    <TouchableOpacity >
                        <View className=" relative w-[180px] h-[180px] justify-center items-center z-10">
                            <View style={lineStyle} className='absolute w-full h-full rounded-full opacity-50 ' />
                            <View className="absolute">
                                <FontAwesomeIcon size={25} color='#ffffff' icon={['fas', 'pen']} />
                            </View>
                        </View>
                    </TouchableOpacity>}
            </View>

            <TouchableOpacity disabled={!UiState.editable} className="w-full h-fit pb-20" onPress={() => UiDispatch({toggle: 'editMainInfo' })}>
                <FlatList
                    data={AppState.mainInfo}
                    keyExtractor={(item) => item.id}
                    renderItem={item => {
                        switch (item.item.name) {
                            case 'Name':
                                return (
                                    <Text style={textStyle} className='text-[25px] text-center pt-4'>{item.item.value}</Text>
                                )
                            case 'Title':
                                if (item.item.isActive) {
                                    return (

                                        <Text style={textStyle} className='pt-5 text-center pb-4'>{item.item.value}</Text>
                                    )
                                }
                            case 'Bio':
                                if (item.item.isActive) {
                                    return (

                                        <Text style={textStyle} className='text-[13px] text-center pt-4 '>{item.item.value}</Text>
                                    )
                                }
                            default:
                                break;
                        }
                    }}
                />
            </TouchableOpacity>


            <Button disabled={!UiState.editable} onPressIn={() => UiDispatch({toggle:'editContactCard' })} title='Add To Contacts' width={179} height={44} />
            <Text style={textStyle} className='text-[13px] text-[#241D57] font-black p-5 pb-0'>Or directly</Text>
        </View>
    )
}

export default Profile