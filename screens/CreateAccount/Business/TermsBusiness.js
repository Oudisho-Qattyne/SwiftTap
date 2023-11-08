import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import ToDoList from './../../../assets/SVGS/ToDoList.svg'
import Checkbox from 'expo-checkbox';
import API from '../../../API/API'

const TermsBusiness = () => {
    const { CreateAccountState, CreateAccountDispatch, journeyDispatch, journeyInputFields, UiEventsDispatch } = useContext(AppContext)
    const [agreed, setAgreed] = useState(false)
    const [checked, setChecked] = useState(journeyInputFields.terms.terms.value)
    const [error, setError] = useState(journeyInputFields.terms.error)

    const sendInformations = async () => {
        const { res, err } = await API(
            {
                type: 'sendCompanyInformations',
                payload: {
                    CreateAccountDispatch: CreateAccountDispatch,
                    UiEventsDispatch: UiEventsDispatch,
                    email: journeyInputFields.contacts.eMail.value,
                    phone: journeyInputFields.contacts.phone.value,
                    whatsapp: journeyInputFields.contacts.whatsApp.value,
                    telegram: journeyInputFields.contacts.telegram.value,
                    theme: journeyInputFields.style.theme.id,
                    terms: checked,
                    industry_id: journeyInputFields.industry.industry.value,
                    use_nfc: journeyInputFields.use_nfc.use_nfc.value == 'yes' ? 1 : 0,
                    country_id: journeyInputFields.location.country.value,
                    city_id: journeyInputFields.location.city.value,
                    members: journeyInputFields.members.members.value,
                    interests: journeyInputFields.interests.interests.value,
                    work_channels: journeyInputFields.work_channels.work_channels.value,
                    customer_channels: journeyInputFields.customer_channels.customer_channels.value,
                    nfc_products: journeyInputFields.nfc_products.nfc_products.value,
                    image: journeyInputFields.image
                }
            }
        )
        if (res.status == 200) {
            console.log(res);
            CreateAccountDispatch({ type: 'nextPage' })
        }
        if (err.response?.data?.validationErrors) {
            const newState = { ...journeyInputFields }
            Object.keys(err.response.data.validationErrors).map(
                prop => {
                    switch (prop) {
                        case 'email':
                            newState.contacts.eMail.valid = false
                            newState.contacts.eMail.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'phone':
                            newState.contacts.phone.valid = false
                            newState.contacts.phone.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'whatsapp':
                            newState.contacts.whatsApp.valid = false
                            newState.contacts.whatsApp.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'telegram':
                            newState.contacts.telegram.valid = false
                            newState.contacts.telegram.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'industry_id':
                            newState.industry.industry.error = 'invalid industry'
                            CreateAccountDispatch({ type: 'setPage', page: 6 })
                            break;
                        case 'terms':
                            newState.terms.error = err.response.data.validationErrors[prop]
                            setError(err.response.data.validationErrors[prop])
                            CreateAccountDispatch({ type: 'setPage', page: 16 })
                            break;
                        case 'theme':
                            newState.theme.theme.error = 'invalid theme'
                            CreateAccountDispatch({ type: 'setPage', page: 15 })
                            break;
                        case 'country_id':
                            newState.location.country.error = 'invalid country id'
                            CreateAccountDispatch({ type: 'setPage', page: 8 })
                            break;
                        case 'city_id':
                            newState.location.city.error = 'invalid city id'
                            CreateAccountDispatch({ type: 'setPage', page: 8 })
                            break;
                        case 'members':
                            newState.members.members.error = 'invalid members number'
                            CreateAccountDispatch({ type: 'setPage', page: 9 })
                            break;
                        case 'use_nfc':
                            newState.use_nfc.use_nfc.error = 'please answer the question'
                            CreateAccountDispatch({ type: 'setPage', page: 12 })
                            break;
                        default:
                            const otherProp = prop.split('.')
                            switch (otherProp[0]) {
                                case 'interests':
                                    newState.interests.interests.error = 'invalid interests'
                                    CreateAccountDispatch({ type: 'setPage', page: 7 })
                                    break;
                                case 'work_channels':
                                    newState.work_channels.work_channels.error = 'invalid work channels'
                                    CreateAccountDispatch({ type: 'setPage', page: 10 })
                                    break;
                                case 'customer_channels':
                                    newState.customer_channels.customer_channels.error = 'invalid customer channels'
                                    CreateAccountDispatch({ type: 'setPage', page: 11 })
                                    break;
                                case 'nfc_products':
                                    newState.nfc_products.nfc_products.error = 'invalid nfc products'
                                    CreateAccountDispatch({ type: 'setPage', page: 13 })
                                    break;
                            }
                            break;
                    }

                }
            )
        }
        journeyDispatch({ function: 'setSection', section: { ...newState } })
    }


    const next = async () => {
        if (checked == false) {
            setError('please agree to the terms')
        }
        else {
            await journeyDispatch({
                function: 'setSection', section: {
                    terms: {
                        terms: checked
                    }
                }
            })
            await sendInformations()

        }

    }


    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            <View className="relative justify-center items-center p-6">
                <View>
                    <Image className="w-[186px] h-[158px]" source={require('./../../../assets/Images/Terms.png')} />
                    <View className="absolute -top-6 -right-10 flex-row  bg-black rounded-full p-3 justify-center items-center">
                        <ToDoList />
                    </View>
                </View>
            </View>
            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] py-5">Terms & Conditions</Text>
            <Text className="w-full text-[#BFBFBF] font-[montserrat] font-black text-center text-[18px] p-5">
                Lorem ipsum dolor sit amet, consectetur
                Lorem ipsum dolor sit amet, consectetur
                Lorem ipsum dolor sit amet, consectetur
                Lorem ipsum dolor sit amet, consectetur
                Lorem ipsum dolor sit amet, consectetur
            </Text>
            <View className="w-full flex-row items-center justify-start px-6">
                <Checkbox
                    className="m-1"
                    value={checked}
                    onValueChange={(value) => {
                        setError(null)
                        setChecked(value)
                    }}
                    color={checked ? '#4630EB' : undefined}
                />
                <Text className="text-[#1776F2] font-black">I Agree</Text>
                {
                    error && <View>
                        <Text className="pl-10 text-red-600 text-center font-black">{error}</Text>
                    </View>
                }
            </View>
            <TouchableOpacity onPress={() => next()} className=" absolute bottom-40 w-[296px]  h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default TermsBusiness