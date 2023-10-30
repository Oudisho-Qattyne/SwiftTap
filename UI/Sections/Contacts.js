import { View, Text } from 'react-native'
import React from 'react'
import Button from '../Button'

const Contacts = () => {
  return (
    <View className="relative w-full flex justify-center items-center py-20">
      <Button title='Add To Contacts' width='80%' height={50} />
    </View>
  )
}

export default Contacts