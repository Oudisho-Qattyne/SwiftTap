import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Input = ({ placeholder, onChangeText, keyboardType, valid, secureTextEntry, error, password , value }) => {

  const [showPassword, setShowPassword] = useState(!password)
  return (
    <View>
      
      <View
         className="relative flex flex-row w-[290px] h-[48px] rounded-[10px] border border-1 border-[#BFBFBF] text-black justify-between items-center overflow-hidden my-2"
       style={
        {
          borderColor: valid ? '#BFBFBF' : 'red',
        }
      }
      >
        <TextInput
          secureTextEntry={!showPassword}
          value={value}
          style={{
          color: valid ? "black" : '#707070',
          }}
          className=" h-[48px] w-[80%] text-black  px-3" keyboardType={keyboardType} placeholderTextColor='#bfbfbf' placeholder={placeholder} onChangeText={onChangeText} />
      {
        password &&
        <TouchableOpacity className="relative h-full  justify-center items-center p-2 " onPress={() => setShowPassword(prev => !prev)}>
          
          <FontAwesomeIcon color='black' icon={showPassword ? ['fas', 'eye-slash'] : ['fas','eye']} size={20} />
        </TouchableOpacity>
      }
      </View>
      {
        !valid &&
        <Text className="text-left text-red-700">{error}</Text>
      }
    </View>
  )
}

export default Input