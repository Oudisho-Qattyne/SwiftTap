import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppState'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import ToDoList from './../../../assets/SVGS/ToDoList.svg'
// import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Checkbox from 'expo-checkbox';
import API from '../../../API/API'

const Terms = () => {
    const { CreateAccountState, CreateAccountDispatch, journeyDispatch, journeyInputFields, UiEventsDispatch } = useContext(AppContext)
    const [agreed, setAgreed] = useState(false)
    const [checked, setChecked] = useState(journeyInputFields.terms.terms)
    const [error, setError] = useState(journeyInputFields.terms.error)

    const changeErrorValidation = (inputType, error,) => {
        const newState = { ...journeyInputFields }
        const contacts = ['phone', 'telegram', 'whatsapp', 'email']
        const information = ['first_name', 'last_name', 'gender', 'birth_date']



        if (information.includes(inputType, 0)) {
            CreateAccountDispatch({ type: 'setPage', page: 5 })
        }
        else if (contacts.includes(inputType, 0)) {
            CreateAccountDispatch({ type: 'setPage', page: 6 })
        }

    }

    const sendInformations = async () => {
        const date = journeyInputFields.information1.birthDate.value
        const birth_date = date.getFullYear() + "-" + (date.getMonth() + 1) + '-' + date.getDate()
        const { res, err } = await API(
            {
                type: 'sendInformations',
                payload: {
                    CreateAccountDispatch: CreateAccountDispatch,
                    UiEventsDispatch: UiEventsDispatch,
                    first_name: journeyInputFields.information1.name.value,
                    last_name: journeyInputFields.information1.surname.value,
                    gender: journeyInputFields.information1.gender.value,
                    birth_date: birth_date,
                    company_name: journeyInputFields.information2.company.value,
                    work_title: journeyInputFields.information2.profession.value,
                    email: journeyInputFields.contacts.eMail.value,
                    phone: journeyInputFields.contacts.phone.value,
                    whatsapp: journeyInputFields.contacts.whatsApp.value,
                    telegram: journeyInputFields.contacts.telegram.value,
                    theme: journeyInputFields.style.theme.id,
                    terms: checked,
                    industry_id: journeyInputFields.information2.industry.value.value,
                    image: journeyInputFields.image
                }
            }
        )
        if (res.status == 200) {
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
                            CreateAccountDispatch({ type: 'setPage', page: 6 })
                            break;
                        case 'phone':
                            newState.contacts.phone.valid = false
                            newState.contacts.phone.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 6 })
                            break;
                        case 'whatsapp':
                            newState.contacts.whatsApp.valid = false
                            newState.contacts.whatsApp.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 6 })
                            break;
                        case 'telegram':
                            newState.contacts.telegram.valid = false
                            newState.contacts.telegram.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 6 })
                            break;
                        case 'first_name':
                            newState.information1.name.valid = false
                            newState.information1.name.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'last_name':
                            newState.information1.surname.valid = false
                            newState.information1.surname.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'gender':
                            newState.information1.gender.valid = false
                            newState.information1.gender.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'birth_date':
                            newState.information1.birthDate.valid = false
                            newState.information1.birthDate.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'company_name':
                            newState.information2.company.valid = false
                            newState.information2.company.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'work_title':
                            newState.information2.profession.valid = false
                            newState.information2.profession.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'industry_id':
                            newState.information2.industry.valid = false
                            newState.information2.industry.error = err.response.data.validationErrors[prop]
                            CreateAccountDispatch({ type: 'setPage', page: 5 })
                            break;
                        case 'terms':
                            newState.terms.error = err.response.data.validationErrors[prop]
                            setError(err.response.data.validationErrors[prop])
                            CreateAccountDispatch({ type: 'setPage', page: 9 })
                            break;
                        default:
                            break;
                    }
                }
            )
        }
        journeyDispatch({function:'setSection' , section:{...newState}})
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
                    onValueChange={setChecked}
                    color={checked ? '#4630EB' : undefined}
                />
                {/* <BouncyCheckbox
            fillColor='#1776F2'
            value={agreed}
            size={25}
            
            /> */}
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

export default Terms