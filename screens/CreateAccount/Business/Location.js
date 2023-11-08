import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import LocationSVG from '../../../assets/SVGS/location.svg'
import Animated, { SlideInDown, SlideOutDown, ZoomIn } from 'react-native-reanimated'
import DropDownPicker from 'react-native-dropdown-picker'
import { AppContext } from '../../../AppState'
import API from '../../../API/API'

const Location = () => {
    const { UiEventsDispatch, CreateAccountDispatch, journeyInputFields, journeyDispatch } = useContext(AppContext)
    const [info, setInfo] = useState({
        location: {
            ...journeyInputFields['location']
        }
    })
    const [countries, setCountries] = useState([])
    const [countriesAndCities, setCountriesAndCities] = useState([])
    const [cities, setCities] = useState([])
    const [openCountries, setOpenCountries] = useState(false)
    const [openCities, setOpenCities] = useState(false)
    const fetchCountries = async () => {
        const countries = []
        const { res, err } = await API({
            type: 'countries',
            payload: {
                UiEventsDispatch: UiEventsDispatch,
                CreateAccountDispatch: CreateAccountDispatch
            }
        })
        if (res) {

            for (let i = 0; i < res.length; i++) {
                let country = {
                    label: res[i].name,
                    value: res[i].id
                }
                countries.push(country)
            }
            setCountries(countries)
            setCountriesAndCities(res)
        }
        if (err) {
            console.log(err);
        }
    }


    const sendLocation = () => {
        if (info.location.country.value != '' && info.location.city.value != '') {
            journeyDispatch({ function: 'setSection', section: info })
            CreateAccountDispatch({ type: 'nextPage' })
        }
        if (info.location.country.value == '') {
            setInfo(prev => ({
                ...prev,
                location:{
                    ...prev.location,
                    country: {
                        ...prev.country,
                        error: 'select country'
                    }
                }
            }))
        }
        if (info.location.city.value == '') {
            setInfo(prev => ({
                ...prev,
                location:{
                    ...prev.location,
                    city: {
                    ...prev.city,
                        error: 'select city'
                    }
                }
            }))
        }
    }

    useEffect(() => {
        fetchCountries()
    }, [])
    return (
        <Animated.View entering={SlideInDown} exiting={SlideOutDown} className="relative top-0 left-0 w-screen h-full justify-start items-center bg-white rounded-tl-[50px] rounded-tr-[50px] z-10">

            <View className="relative justify-center items-center p-6">
                <View>

                    <Image className="w-[200px] h-[145px]" source={require('./../../../assets/Images/location.png')} />
                    <Animated.View entering={ZoomIn.delay(700)} className="absolute -top-5 -right-5 p-2 bg-[#121212] rounded-full">
                        <LocationSVG />
                    </Animated.View>
                    <Animated.Text entering={ZoomIn.delay(800)} className="absolute -bottom-5 -left-5 p-2 bg-[#121212] rounded-full text-[#B9FF00] font-black ">
                        Based in .....
                    </Animated.Text>
                </View>

                <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[18px] pt-10 pb-1">Your Business Location</Text>
                <Text className="w-full text-[#1E1E1E] font-[montserrat] font-black text-center text-[10px]  pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mollis lobortis.</Text>
                <View className="w-[290px] pt-5 z-10">
                    <DropDownPicker
                        style={{ borderColor: info.location.country.error? 'red' : '#bfbfbf' }}
                        placeholder='Country'
                        placeholderStyle={{ color: '#bfbfbf' }}
                        open={openCountries}
                        max={10}
                        value={info.location.country.value}
                        items={countries}
                        setOpen={setOpenCountries}
                        onSelectItem={(country) => {
                            // setCities(country)
                            setCities(countriesAndCities.find(coun => coun.name == country.label).cities.map(city => ({ label: city.name, value: city.id })))
                            setInfo(
                                prev => ({
                                    ...prev,
                                    location: {
                                        ...prev.location,
                                        country: {
                                            ...prev.location.country,
                                            value: country.value,
                                            error: null
                                        }
                                    }
                                })
                            )
                        }}
                    />
                    {
                        info.location.country.error &&
                        <View>
                            <Text className="text-left text-red-700">{info.location.country.error}</Text>
                        </View>
                    }
                </View>
                <View className="w-[290px]  pt-5 z-[5]">
                    <DropDownPicker
                        style={{ borderColor: info.location.city.error ? 'red' : '#bfbfbf' }}
                        ListEmptyComponent={() => <Text className="text-black font-black p-2 text-center">select country first</Text>}
                        placeholder='City'
                        placeholderStyle={{ color: '#bfbfbf' }}
                        open={openCities}
                        max={10}
                        value={info.location.city.value}
                        items={cities}
                        setOpen={setOpenCities}
                        onSelectItem={(city) => {
                            setInfo(prev => ({
                                ...prev,
                                location: {
                                    ...prev.location,
                                    city: {
                                        ...prev.location.city,
                                        value: city.value,
                                        error: null
                                    }
                                }
                            })
                            )
                        }}
                    />
                    {
                        info.location.city.error &&
                        <View>
                            <Text className="text-left text-red-700">{info.location.city.error}</Text>
                        </View>
                    }
                </View>
            </View>
            <TouchableOpacity onPress={() => sendLocation()} className="absolute w-[296px] h-[48px] bottom-40 rounded-full bg-[#1776F2] justify-center items-center">
                <Text className="text-white text-xl">next</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Location