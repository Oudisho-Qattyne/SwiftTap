import { View, Text, TouchableOpacity, Image, TextInput, AppState } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../AppState'
import DatePicker from '@react-native-community/datetimepicker'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import DropDownPicker from 'react-native-dropdown-picker'
import Smile from './../../../assets/SVGS/Smile.svg'
import Calender from './../../../assets/SVGS/Calender.svg'
import Genders from './../../../assets/SVGS/Genders.svg'
import Card from './../../../assets/SVGS/Card.svg'
import Work from './../../../assets/SVGS/Work.svg'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import Input from '../../../UI/Input'
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideOutDown, SlideOutLeft, SlideOutRight, ZoomIn, ZoomOut } from 'react-native-reanimated'
import swifttapAxios from '../../../axios/SwftTapAxios'
import API from '../../../API/API'


const Information = () => {
    const { CreateAccountDispatch, journeyDispatch, journeyInputFields, UiEventsDispatch } = useContext(AppContext)
    const [stepTwo, setStepTwo] = useState(false)
    const [open, setOpen] = useState(false)
    const [openDropDownIndustry, setOpenDropDownIndustry] = useState(false)
    const [openDropDownGenders, setOpenDropDownGenders] = useState(false)
    const [dateSelected, setDateSelected] = useState(false)
    const [genders, setGenders] = useState([
        { label: 'male', value: 0 },
        { label: 'female', value: 1 },
    ])
    const [industry, setIndustry] = useState([
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
    ])

    const fetchIndustries = async () => {
        const industries = []
        const { res , err } = await API({
            type: 'industries',
            payload: {
                UiEventsDispatch: UiEventsDispatch,
                CreateAccountDispatch: CreateAccountDispatch
            }
        })
        if(res){
            for (let i = 0; i < res.length; i++) {
                let industry = {
                    label: res[i].name,
                    value: res[i].id
                }
                industries.push(industry)
            }
            setIndustry(industries)
        }
        if(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchIndustries()
    }, [])


    const [info, setInfo] = useState(
        {
            information1: {
                ...journeyInputFields['information1']

            },
            information2: {
                ...journeyInputFields['information2']
            },
        }
    )


    const checkInformationValidation = (step) => {
        const prevState = {
            ...info
        }
        let valid = true
        if (step == 1) {

            Object.keys(prevState.information1).map(
                inputType => {
                    switch (inputType) {
                        case 'name':
                            const text = /^[a-zA-Z]+$/
                            if (prevState.information1[inputType].value.length > 200) {
                                prevState.information1[inputType].valid = false
                                prevState.information1[inputType].error = 'the name field too long'
                                valid = false
                            }
                            else if (prevState.information1[inputType].value.length < 5) {
                                prevState.information1[inputType].valid = false
                                prevState.information1[inputType].error = '5 characters at least '
                                valid = false
                            }
                            else if (!text.test(prevState.information1[inputType].value)) {
                                prevState.information1[inputType].valid = false
                                prevState.information1[inputType].error = 'invalid name'
                                valid = false
                            }
                            else {
                                prevState.information1[inputType].valid = true
                                prevState.information1[inputType].error = null

                            }
                            break;
                        case 'surname':
                            const text2 = /^[a-zA-Z]+$/
                            if (prevState.information1[inputType].value.length > 200) {
                                prevState.information1[inputType].valid = false
                                prevState.information1[inputType].error = 'the name field too long'
                                valid = false
                            }
                            else if (prevState.information1[inputType].value.length < 5) {
                                prevState.information1[inputType].valid = false
                                prevState.information1[inputType].error = '5 characters at least '
                                valid = false
                            }
                            else if (!text2.test(prevState.information1[inputType].value)) {
                                prevState.information1[inputType].valid = false
                                prevState.information1[inputType].error = 'invalid name'
                                valid = false
                            }
                            else {
                                prevState.information1[inputType].valid = true
                                prevState.information1[inputType].error = null

                            }
                            break;
                        case 'birthDate':
                            const date = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
                            if (Object.prototype.toString.call(prevState.information1[inputType].value) !== '[object Date]') {
                                prevState.information1[inputType].valid = false
                                prevState.information1[inputType].error = 'wrong date format'
                                valid = false
                            }
                            else {
                                prevState.information1[inputType].valid = true
                                prevState.information1[inputType].error = null
                            }
                            break;
                        case 'gender':

                            if (prevState.information1[inputType].value != 0 && prevState.information1[inputType].value != 1) {
                                prevState.information1[inputType].valid = false
                                prevState.information1[inputType].error = 'gender must be selected'
                                valid = false
                            }
                            else {
                                prevState.information1[inputType].valid = true
                                prevState.information1[inputType].error = null
                            }
                            // else if (prevState.information1[inputType].value != 0 && prevState.information1[inputType].value != 1) {
                            //     console.log(prevState.information1[inputType].value);
                            //     prevState.information1[inputType].valid = false
                            //     prevState.information1[inputType].error = 'there is only two genders'
                            //     valid = false
                            // }
                            break;
                    }
                })
        }
        else if (step == 2) {
            Object.keys(prevState.information2).map(
                inputType => {
                    switch (inputType) {
                        case 'company':
                            if (prevState.information2[inputType].value.length > 200) {
                                prevState.information2[inputType].valid = false
                                prevState.information2[inputType].error = 'the name field too long'
                                valid = false
                            }
                            else {
                                prevState.information2[inputType].valid = true
                            }

                            break;
                        case 'profession':
                            if (prevState.information2[inputType].value.length > 200) {
                                prevState.information2[inputType].valid = false
                                prevState.information2[inputType].error = 'the name field too long'
                                valid = false
                            }
                            else {
                                prevState.information2[inputType].valid = true
                                prevState.information2[inputType].error = ''
                            }

                            break;
                        case 'industry':
                            const industries = industry.map(ind => ind.value)
                            if (!industries.includes(prevState.information2[inputType].value.value, 0)) {
                                prevState.information2[inputType].valid = false
                                prevState.information2[inputType].error = 'invalid industry'
                                valid = false
                            }
                            else {
                                prevState.information2[inputType].valid = true
                                prevState.information2[inputType].error = ''

                            }
                            break;

                    }
                })

        }
        setInfo(prevState)
        return (valid)

    }


    const changeErrorValidation = (prop, value, step) => {
        const newState = { ...info }
        if (step == 1) {
            newState.information1[prop].error = value
            newState.information1[prop].valid = false
            setRegester(false)
        }
        else if (step == 2) {
            newState.information2[prop].error = value
            newState.information2[prop].valid = false
        }
        return (newState)
    }


    const onChangeInformationText = (text, inputType, step) => {
        const prevState = { ...info }
        let newtext = text
        if (typeof text == 'string') {
            newtext = text.trim()
        }
        if (step == 1) {

            prevState.information1[inputType].value = newtext
        }
        else if (step == 2) {
            prevState.information2[inputType].value = newtext
        }
        setInfo(prevState)
    }



    const information = () => {
        if (stepTwo) {
            if (checkInformationValidation(2)) {
                journeyDispatch({ function: 'setSection', section: info })
                CreateAccountDispatch({ type: 'nextPage' })
            }
        }
        else {
            if (checkInformationValidation(1)) {
                setStepTwo(true)
            }
        }
    }
    return (

        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">
            {stepTwo &&
                <TouchableOpacity onPress={() => setStepTwo(prev => !prev)} className="absolute top-10 left-10 ">
                    <FontAwesomeIcon color='#000000' size={30} icon={faArrowLeft} />
                </TouchableOpacity>
            }
            <View className="relative justify-center items-center p-6">
                <View>
                    <Image className="w-[152px] h-[204px]" source={require('./../../../assets/Images/Information.png')} />

                    {!stepTwo && <Animated.View entering={ZoomIn} exiting={ZoomOut} className="absolute justify-center items-center top-[70%] -left-16 bg-black rounded-full px-5 py-2">
                        <View className="flex-row justify-center items-center " >
                            <Text className="text-[#B9FF00] font-black font-[montserrat] ">Hello ! </Text>
                            <Smile />
                        </View>
                    </Animated.View>}
                    {!stepTwo && <Animated.View entering={ZoomIn} exiting={ZoomOut} className="absolute -top-4 -right-10 bg-[#262626] rounded-md px-1 py-2">
                        <View className='p-3 bg-black rounded-full mb-2'>
                            <Calender />
                        </View>
                        <View className='p-3 bg-black rounded-full '>
                            <Genders />
                        </View>
                    </Animated.View>}
                    {stepTwo && <Animated.View entering={ZoomIn} exiting={ZoomOut} className="absolute justify-center items-center top-5 -right-5 bg-black rounded-full p-2">
                        <Card />
                    </Animated.View>}
                    {stepTwo && <Animated.View entering={ZoomIn} exiting={ZoomOut} className="absolute justify-center items-center top-[60%] -left-10 bg-black rounded-lg py-1 px-2 ">
                        <Work />
                    </Animated.View>}
                </View>
            </View>



            <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pb-6">Information</Text>


            {!stepTwo &&
                <Animated.View entering={SlideInLeft} exiting={SlideOutLeft} >
                    <View className="relative w-[290px]  justify-center items-center flex-row gap-1">
                        <View className="flex flex-col">
                            <TextInput
                                value={info.information1.name.value}
                                placeholderTextColor='#bfbfbf'
                                placeholder='Name'
                                onChangeText={text => { onChangeInformationText(text, 'name', 1) }}
                                className='relative w-[140px] h-[48px] justify-between items-center flex-row rounded-[10px] border border-1 border-[#BFBFBF] text-black my-2 px-3'
                                style={
                                    {
                                        borderColor: info.information1.name.valid ? '#BFBFBF' : 'red',
                                    }
                                }
                            />
                            {
                                !info.information1.name.valid &&
                                <Text className="text-left text-red-700">{info.information1.name.error}</Text>
                            }
                        </View>
                        <View className="flex flex-col">
                            <TextInput
                                value={info.information1.surname.value}
                                placeholderTextColor='#bfbfbf'
                                placeholder='Surame'
                                onChangeText={text => { onChangeInformationText(text, 'surname', 1) }}
                                className='relative w-[140px] h-[48px] justify-between items-center flex-row rounded-[10px] border border-1 border-[#BFBFBF] text-black my-2 px-3'
                                style={
                                    {
                                        borderColor: info.information1.surname.valid ? '#BFBFBF' : 'red',
                                    }
                                }
                            />
                            {
                                !info.information1.surname.valid &&
                                <Text className="text-left text-red-700">{info.information1.name.error}</Text>
                            }
                        </View>
                    </View>
                    <View className='flex flex-col'>
                        <TouchableOpacity onPress={() => setOpen(true)} className="w-[290px] h-[48px] justify-between items-center flex-row rounded-[10px] border border-1 border-[#BFBFBF] text-[#bfbfbf] my-2 px-3 "
                            style={
                                {
                                    borderColor: info.information1.birthDate.valid ? '#BFBFBF' : 'red',
                                }
                            }>
                            {dateSelected ?
                                <Text className="text-black">{info.information1.birthDate.value.getFullYear()}-{info.information1.birthDate.value.getMonth() + 1}-{info.information1.birthDate.value.getDate()}</Text> : <Text className="text-[#bfbfbf]">Birth Date</Text>}
                            <FontAwesomeIcon icon={['fas', 'calendar-days']} color='black' />
                        </TouchableOpacity>
                        {
                            !info.information1.birthDate.valid &&
                            <Text className="text-left text-red-700">{info.information1.birthDate.error}</Text>
                        }
                    </View>

                    {open &&
                        <DatePicker
                            testID="dateTimePicker"
                            mode="date"
                            value={info.information1.birthDate.value || new Date}
                            onChange={(event, selectedDate) => {
                                setOpen(false);
                                onChangeInformationText(selectedDate, 'birthDate', 1)
                                setDateSelected(true)
                            }}

                        />}
                    <View className="w-[290px]">
                        <DropDownPicker
                            style={{ borderColor: info.information1.gender.valid ? '#BFBFBF' : 'red', }}
                            placeholder='gender'
                            placeholderStyle={{ color: '#bfbfbf' }}
                            open={openDropDownGenders}
                            max={10}
                            value={info.information1.gender.value}
                            items={genders}
                            setOpen={setOpenDropDownGenders}
                            onSelectItem={(gender) => {
                                onChangeInformationText(gender.value, 'gender', 1)

                            }}
                        />
                        {
                            !info.information1.gender.valid &&
                            <Text className="text-left text-red-700">{info.information1.gender.error}</Text>
                        }
                    </View>
                </Animated.View>
            }
            {
                stepTwo &&
                <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
                    <View className="flex flex-col">
                        <TextInput
                            value={info.information2.company.value}
                            placeholderTextColor='#bfbfbf'
                            placeholder='company'
                            onChangeText={text => { onChangeInformationText(text, 'company', 2) }}
                            className='w-[290px] h-[48px] justify-between items-center flex-row rounded-[10px] border border-1 border-[#BFBFBF] text-black my-2 px-3'
                            style={
                                {
                                    borderColor: info.information2.company.valid ? '#BFBFBF' : 'red',
                                }
                            }
                        />
                        {
                            !info.information2.company.valid &&
                            <Text className="text-left text-red-700">{info.information2.company.error}</Text>
                        }
                    </View>
                    <View className="flex flex-col">
                        <TextInput
                            value={info.information2.profession.value}
                            placeholderTextColor='#bfbfbf'
                            placeholder='Profession\ Work Title'
                            onChangeText={text => { onChangeInformationText(text, 'profession', 2) }}
                            className='w-[290px] h-[48px] justify-between items-center flex-row rounded-[10px] border border-1 border-[#BFBFBF] text-black my-2 px-3'
                            style={
                                {
                                    borderColor: info.information2.profession.valid ? '#BFBFBF' : 'red',
                                }
                            }
                        />
                        {
                            !info.information2.profession.valid &&
                            <Text className="text-left text-red-700">{info.information2.profession.error}</Text>
                        }
                    </View>
                    <View className="w-[290px]">
                        <DropDownPicker
                            style={{ borderColor: info.information2.industry.valid ? '#BFBFBF' : 'red', }}
                            placeholder='Industry'
                            placeholderStyle={{ color: '#bfbfbf' }}
                            open={openDropDownIndustry}
                            max={10}
                            value={info.information2.industry.value.value}
                            items={industry}
                            setOpen={setOpenDropDownIndustry}
                            onSelectItem={(industry) => {
                                onChangeInformationText(industry, 'industry', 2)
                            }}
                        />
                        {
                            !info.information2.industry.valid &&
                            <Text className="text-left text-red-700">{info.information2.industry.error}</Text>
                        }
                    </View>

                </Animated.View>
            }
            <TouchableOpacity onPress={() => information()} className="absolute bottom-40 w-[296px] h-[48px] rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Information