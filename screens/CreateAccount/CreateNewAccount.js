import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppState'
import SwiftTapMiniLogo from './../../assets/SVGS/swiftMiniLogo.svg'
import Buildings from './../../assets/SVGS/Buildings.svg'
import Laptop from './../../assets/SVGS/Laptop.svg'
import Animated, { SlideInDown, SlideInRight, SlideOutDown, SlideOutLeft } from 'react-native-reanimated'
import DropDownPicker from 'react-native-dropdown-picker'

const CreateNewAccount = () => {
    const { CreateAccountState, CreateAccountDispatch } = useContext(AppContext)
    const [type, setType] = useState('')
    const [role, setRole] = useState('')
    const [openRoles, setOpenRoles] = useState(false)
    const [typeError, setTypeError] = useState(null)
    const [roleError, setRoleError] = useState(null)
    const rolesArray = ['company' , 'school' ,'hotel' ]
    const [roles, setRoles] = useState(
        [
            { label: 'company', value: 'company' },
            { label: 'school', value: 'school' },
            { label: 'hotel', value: 'hotel' },
        ]
    )

    const next = () => {
        if ((type == 'individual' && role == 'person') || (type == 'business' && rolesArray.includes(role))) {
            CreateAccountDispatch({ type: 'selectAccountType', accountType: type, role: role })
            CreateAccountDispatch({ type: 'nextPage' })
        }
        if (type == '') {
            setTypeError('select type')
        }
        if (role == '') {
            setRoleError('select type')
        }
    }


    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-10">
                <View>
                    <Image className='w-[137px] h-[141px]' source={require('./../../assets/Images/HowToUse.png')} />
                    <View className="absolute -top-5 -left-5">
                        <SwiftTapMiniLogo />
                    </View>
                    <View className="absolute -top-5 -right-5 p-1 bg-black rounded-lg">
                        <Buildings />
                    </View>
                    <View className="absolute w-[52px] h-[52px] top-[80%] -left-10 justify-center items-center p-3 bg-black rounded-lg">
                        <Laptop />
                    </View>
                </View>
            </View>


            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-5">How do you want to use Swifttap?</Text>


            <View className="flex justify-center items-center gap-5">
                <TouchableOpacity onPress={() => {
                    setType('individual')
                    setRole('person')
                    setTypeError(null)
                    setRoleError(null)
                }} className="w-[296px] h-[48px] rounded-[10px] border border-1 border-[#BFBFBF] flex justify-center items-center" style={{ backgroundColor: type == 'individual' ? '#1776F2' : '#ffffff' }}>
                    <Text className="text-[17px] text-[#1E1E1E]" style={{ color: type == 'individual' ? '#ffffff' : '#1E1E1E' }}>Individual</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setType('business')
                    setTypeError(null)
                    setRoleError(null)
                }} className="w-[296px] h-[48px] rounded-[10px] border border-1 border-[#BFBFBF] flex justify-center items-center" style={{ backgroundColor: type == 'business' ? '#1776F2' : '#ffffff' }}>
                    <Text className="text-[17px] text-[#1E1E1E]" style={{ color: type == 'business' ? '#ffffff' : '#1E1E1E' }}>Business</Text>
                </TouchableOpacity>
                {
                    typeError &&
                    <View>
                        <Text className=" text-red-600 text-center font-black">{typeError}</Text>
                    </View>
                }
            </View>
            {
                type=='business' &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft} className="w-[290px] pt-5 z-10">
                    <DropDownPicker
                        style={{ borderColor: roleError ? 'red' : '#bfbfbf' }}
                        placeholder='role'
                        placeholderStyle={{ color: '#bfbfbf' }}
                        open={openRoles}
                        max={10}
                        value={role}
                        items={roles}
                        setOpen={setOpenRoles}
                        onSelectItem={(role) => {
                            console.log(role);
                            setRole(role.value)
                            setRoleError(null)
                        }}
                    />
                    {
                        roleError &&
                        <View className="-z-10">
                            <Text className="text-left text-red-700">{roleError}</Text>
                        </View>
                    }
                </Animated.View>
            }
            <TouchableOpacity onPress={() => next()} className=" absolute bottom-40 w-[296px]  h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default CreateNewAccount