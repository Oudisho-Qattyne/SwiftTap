import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppState'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const UserImage = () => {
    const { AppState, dispatch , UiState } = useContext(AppContext)
    const borderStyle = {
        borderWidth: 7,
        borderColor: AppState.theme.profielBorderColor
    }
    return (
        <View className="w-full flex justify-center items-center">
            <View style={borderStyle} className='min-w-[180px] min-h-[180px] rounded-full flex justify-center items-center'>
                <Image className="max-w-[180px] max-h-[180px]" source={require('./../../assets/Images/Profile.png')} />
                {
                   UiState.pages.editable && <TouchableOpacity className="absolute flex justify-center items-center">
                    <View style={{ backgroundColor: AppState.theme.profielBorderColor }} className="absolute min-w-[180px] min-h-[180px] rounded-full opacity-25 flex justify-center items-center">
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