import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const UserImage = () => {
    const { AppState, dispatch , UiState } = useContext(AppContext)
    const borderStyle = {
        borderWidth: 7,
        borderColor: AppState.profile.theme.profielBorderColor
    }
    return (
        <View className="w-full flex justify-center items-center pt-10">
            <View style={borderStyle} className='min-w-[180px] min-h-[180px] rounded-full flex justify-center items-center overflow-hidden'>
                <Image className="w-[180px] h-[180px]" source={{uri:AppState.profile.profileImage}} />
                {
                   UiState.pages.editable && <TouchableOpacity className="absolute flex justify-center items-center">
                    <View style={{ backgroundColor: AppState.profile.theme.profielBorderColor }} className="absolute min-w-[180px] min-h-[180px] rounded-full opacity-25 flex justify-center items-center">
                    </View>
                    <View className="absolute">
                        <FontAwesomeIcon color='white' icon={['fas', 'pen']} />
                    </View>
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default UserImage