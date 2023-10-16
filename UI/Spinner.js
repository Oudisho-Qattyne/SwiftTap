import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Spinner = () => {
    return (
        <View className='animate-spin'>
            <FontAwesomeIcon size={100} icon={['fas','spinner']} />
        </View>
    )
}

export default Spinner