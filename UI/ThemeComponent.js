import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../AppState'

const ThemeComponent = ({ theme }) => {
    const { journeyInputFields, journeyDispatch } = useContext(AppContext)

    return (
        <TouchableOpacity onPress={() => journeyDispatch({function:'setSection' , section:{
            style:{
                theme
            }
        }}) }>
            <View className='relative w-[170px] h-[300px] rounded-lg flex justify-center items-center mx-1'
                style={{
                    borderWidth: journeyInputFields.style.theme.id == theme.id ? 3 : 0,
                    borderColor: 'gray',
                    backgroundColor: theme.textColor,

                }}>

                <Text className="relative px-5 py-2 rounded-full text-black "

                >
                    theme
                </Text>
            </View>
        </TouchableOpacity >
    )
}

export default ThemeComponent