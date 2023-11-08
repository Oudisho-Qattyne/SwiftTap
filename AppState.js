import { useReducer, createContext, useState } from "react";

export const AppContext = createContext()

export const StateProvider = ({ children }) => {


    const setState = (state, action) => {
        const newState = { ...state }
        newState[action.key] = action.value

        return (
            newState
        )
    }


    const setFontFamily = (state, action) => {
        return (
            {
                ...state,
                profile: {
                    ...state.profile,
                    theme: {
                        ...state.profile.theme,
                        textFont: action.fontFamily
                    }
                }
            }
        )
    }


    const setTextColor = (state, action) => {
        console.log(action.textColor);
        return (
            {
                ...state,
                profile: {
                    ...state.profile,
                    theme: {
                        ...state.profile.theme,
                        textColor: action.textColor
                    }
                }
            }
        )
    }


    const setBackGroundStyle = (state, action) => {
        switch (action.prop) {
            case 'type':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    type: action.backGroundType
                                }
                            }
                        }
                    }
                )
                break;
            case 'firstHalfCircleColor':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    firstHalfCircleColor: action.firstHalfCircleColor
                                }
                            }
                        }
                    }
                )
                break;
            case 'secondHalfCircleColor':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    secondHalfCircleColor: action.secondHalfCircleColor
                                }
                            }
                        }
                    }
                )
                break;
            case 'backGroundColor':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    backGroundColor: action.backGroundColor
                                }
                            }
                        }
                    }
                )
                break;
            case 'themeBackGroundColor':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    themeBackGroundColor: action.themeBackGroundColor
                                }
                            }
                        }
                    }
                )
                break;
            case 'backGroundImage':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    backGroundImage: action.backGroundImage
                                }
                            }
                        }
                    }
                )
                break;
            case 'backGroundImageFile':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    backGroundImageFile: action.backGroundImageFile
                                }
                            }
                        }
                    }
                )
                break;
            case 'firstGradientColor':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    firstGradientColor: action.firstGradientColor
                                }
                            }
                        }
                    }
                )
                break;
            case 'secondGradientColor':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    secondGradientColor: action.secondGradientColor
                                }
                            }
                        }
                    }
                )
                break;
            case 'gradientAngel':
                return (
                    {
                        ...state,
                        profile: {
                            ...state.profile,
                            theme: {
                                ...state.profile.theme,
                                backGround: {
                                    ...state.profile.theme.backGround,
                                    gradientAngel: action.gradientAngel
                                }
                            }
                        }
                    }
                )
                break;

            default:
                break;
        }
    }


    const setIconStyle = (state, action) => {
        const newState = { ...state }
        newState.profile.theme.icons[action.prop] = action.value

        return (newState)
        // switch (action.prop) {
        //     case 'color':
        //         return (
        //             {
        //                 ...state,
        //                 profile: {
        //                     ...state.profile,
        //                     theme: {
        //                         ...state.profile.theme,
        //                         icons: {
        //                             ...state.profile.theme.icons,
        //                             color: action.color
        //                         }
        //                     },
        //                 }
        //             }
        //         )
        //     case 'textColor':
        //         return (
        //             {
        //                 ...state,
        //                 profile: {
        //                     ...state.profile,
        //                     theme: {
        //                         ...state.profile.theme,
        //                         icons: {
        //                             ...state.profile.theme.icons,
        //                             textColor: action.textColor
        //                         }
        //                     },
        //                 }
        //             }
        //         )
        //     case 'fill':
        //         return (
        //             {
        //                 ...state,
        //                 profile: {
        //                     ...state.profile,
        //                     theme: {
        //                         ...state.profile.theme,
        //                         icons: {
        //                             ...state.profile.theme.icons,
        //                             fill: action.fill
        //                         }
        //                     },
        //                 }
        //             }
        //         )
        //     case 'type':
        //         return (
        //             {
        //                 ...state,
        //                 profile: {
        //                     ...state.profile,
        //                     theme: {
        //                         ...state.profile.theme,
        //                         icons: {
        //                             ...state.profile.theme.icons,
        //                             type: action.iconType
        //                         }
        //                     },
        //                 }
        //             }
        //         )
        //     default:
        //         break;
        // }
    }


    const setButtonsStyle = (state, action) => {
        const newState = { ...state }
        newState.profile.theme.buttons[action.prop] = action.value

        return (newState)
        // switch (action.prop) {
        //     case 'type':
        //         return (
        //             {
        //                 ...state,
        //                 profile: {
        //                     ...state.profile,
        //                     theme: {
        //                         ...state.profile.theme,
        //                         buttons: {
        //                             ...state.profile.theme.buttons,
        //                             type: action.buttonType
        //                         }
        //                     }
        //                 }
        //             }
        //         )
        //     case 'backGroundColor':
        //         return (
        //             {
        //                 ...state,
        //                 profile: {
        //                     ...state.profile,
        //                     theme: {
        //                         ...state.profile.theme,
        //                         buttons: {
        //                             ...state.profile.theme.buttons,
        //                             backGroundColor: action.backGroundColor
        //                         }
        //                     }
        //                 }
        //             }
        //         )
        //     case 'textColor':
        //         return (
        //             {
        //                 ...state,
        //                 profile: {
        //                     ...state.profile,
        //                     theme: {
        //                         ...state.profile.theme,
        //                         buttons: {
        //                             ...state.profile.theme.buttons,
        //                             textColor: action.textColor
        //                         }
        //                     }
        //                 }
        //             }
        //         )
        //     case 'fill':
        //         return (
        //             {
        //                 ...state,
        //                 profile: {
        //                     ...state.profile,
        //                     theme: {
        //                         ...state.profile.theme,
        //                         buttons: {
        //                             ...state.profile.theme.buttons,
        //                             fill: action.fill
        //                         }
        //                     }
        //                 }
        //             }
        //         )
        //     default:
        //         break;
        // }
    }


    const setLogedIn = (state, action) => {
        return (
            {
                ...state,
                logedIn: action.logedIn
            }
        )
    }


    const setInformation = (state, action) => {
        const newState = { ...state }
        const sectionIndex = newState.profile.sections.findIndex(section => section.sectionName == action.sectionName)
        newState.profile.sections[sectionIndex] = {
            ...action.section
        }
        return (newState)
    }


    const setProfileImage = (state, action) => {
        const newState = { ...state }

        newState.profile = {
            ...newState.profile,
            profileImage: action.profileImage
        }
        return (newState)
    }


    const deleteItem = (state, action) => {
        const newState = { ...state }
        const sectionIndex = newState.profile.sections.findIndex(section => section.sectionId == action.sectionId)
        const newFields = []
        for (let i = 0; i < newState.profile.sections[sectionIndex].fields.length; i++) {
            if (newState.profile.sections[sectionIndex].fields[i].fieldId != action.fieldId) {
                newFields.push(newState.profile.sections[sectionIndex].fields[i])
            }
        }
        newState.profile.sections[sectionIndex] = {
            ...newState.profile.sections[sectionIndex],
            fields: newFields
        }
        return (newState)
    }


    const reducer = (state, action) => {

        switch (action.type) {
            case 'setFontFamily':
                return (
                    setFontFamily(state, action)
                )
            case 'setTextColor':
                return (
                    setTextColor(state, action)
                )
            case 'setIconStyle':
                return (
                    setIconStyle(state, action)
                )
            case 'setBackGroundStyle':
                return (
                    setBackGroundStyle(state, action)
                )
            case 'setButtonsStyle':
                return (
                    setButtonsStyle(state, action)
                )
            case 'setLogedIn':
                return (
                    setLogedIn(state, action)
                )
            case 'setState':
                return (
                    setState(state, action)
                )
            case 'setInformation':
                return (
                    setInformation(state, action)
                )

            case 'setProfileImage':
                return (
                    setProfileImage(state, action)
                )
            case 'deleteItem':
                return (
                    deleteItem(state, action)
                )
        }
    }

    const [AppState, dispatch] = useReducer(reducer,
        {
            profile: {
                // "profileId": 1,
                // "profileName": "personal",
                // "profileImage": "http://phplaravel-1142829-3976094.cloudwaysapps.com/storage/images/profiles/img_65392a36589b4.png",
                // "theme": {
                //     "customizeable": 1,
                //     "textColor": "#a72e12",
                //     "textFont": "#53b125",
                //     "profielBorderColor": "#e88aa2",
                //     "backGround": {
                //         "type": 1,
                //         "color": "#afec6c"
                //     },
                //     "buttons": {
                //         "type": 1,
                //         "backGroundColor": "#ffffff",
                //         "textColor": "#780016",
                //         "fill": true
                //     },
                //     "icons": {
                //         "color": "#780016",
                //         "textColor": "#780016",
                //         "fill": true,
                //         "type": 1
                //     }
                // },
                // "sections": [
                //     {
                //         "sectionId": 1,
                //         "sectionName": "Main Info",
                //         "sectionType": "headings",
                //         "fields": [
                //             {
                //                 "fieldId": 1,
                //                 "fieldName": "Name",
                //                 "contents": [
                //                     {
                //                         "contentId": 1,
                //                         "contentValue": "Oudisho Qattyne",
                //                         "contentType": "text",
                //                         "isActive": true
                //                     }
                //                 ]
                //             },
                //             {
                //                 "fieldId": 2,
                //                 "fieldName": "Bio",
                //                 "contents": [
                //                     {
                //                         "contentId": 1,
                //                         "contentValue": "كسار راسك",
                //                         "contentType": "text",
                //                         "isActive": true
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         "sectionId": 2,
                //         "sectionName": "Contacts",
                //         "sectionType": "contact",
                //         "fields": [
                //             {
                //                 "fieldId": 3,
                //                 "fieldName": "Whatsapp",
                //                 "contents": [
                //                     {
                //                         "contentId": 1,
                //                         "contentValue": "",
                //                         "contentType": "text",
                //                         "isActive": true
                //                     },
                //                 ]
                //             },
                //             {
                //                 "fieldId": 4,
                //                 "fieldName": "telegram",
                //                 "contents": [
                //                     {
                //                         "contentId": 1,
                //                         "contentValue": "",
                //                         "contentType": "text",
                //                         "isActive": true
                //                     },
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         "sectionId": 2,
                //         "sectionName": "Social & links",
                //         "sectionType": "icons",
                //         "fields": [
                //             {
                //                 "fieldId": 3,
                //                 "fieldName": "Whatsapp",
                //                 "contents": [
                //                     {
                //                         "contentId": 1,
                //                         "contentValue": "",
                //                         "contentType": "text",
                //                         "isActive": true
                //                     },
                //                     {
                //                         "contentId": 2,
                //                         "contentValue": "fab|whatsapp",
                //                         "contentType": "icon",
                //                         "isActive": true
                //                     }
                //                 ]
                //             },
                //             {
                //                 "fieldId": 4,
                //                 "fieldName": "telegram",
                //                 "contents": [
                //                     {
                //                         "contentId": 1,
                //                         "contentValue": "",
                //                         "contentType": "text",
                //                         "isActive": true
                //                     },
                //                     {
                //                         "contentId": 2,
                //                         "contentValue": "fab|telegram",
                //                         "contentType": "icon",
                //                         "isActive": true
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         "sectionId": 3,
                //         "sectionName": "Certificates",
                //         "sectionType": "posts",
                //         "fields": [
                //             {
                //                 "fieldId": 5,
                //                 "fieldName": "Education",
                //                 "contents": [
                //                     {
                //                         "contentId": 1,
                //                         "contentValue": "",
                //                         "contentType": "text",
                //                         "isActive": true
                //                     },
                //                     {
                //                         "contentId": 2,
                //                         "contentValue": "",
                //                         "contentType": "image",
                //                         "isActive": true
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         "sectionId": 4,
                //         "sectionName": "documents",
                //         "sectionType": "icons",
                //         "fields": [
                //             {
                //                 "fieldId": 7,
                //                 "fieldName": "Education",
                //                 "contents": [
                //                     {
                //                         "contentId": 1,
                //                         "contentValue": "",
                //                         "contentType": "text",
                //                         "isActive": true
                //                     },
                //                     {
                //                         "contentId": 3,
                //                         "contentValue": "image|http://phplaravel-1142829-3976094.cloudwaysapps.com/storage/images/profiles/img_65392a36589b4.png",
                //                         "contentType": "icon",
                //                         "isActive": true
                //                     },
                //                     {
                //                         "contentId": 2,
                //                         "contentValue": "",
                //                         "contentType": "file",
                //                         "isActive": true
                //                     }
                //                 ]
                //             }
                //         ]
                //     }
                // ]
            },
            buttonsTypes: [
                {
                    borderStyle: "solid",
                    borderRadius: 2.5
                },
                {
                    borderStyle: "solid",
                    borderRadius: 0
                },
                {
                    borderStyle: "dashed",
                    borderRadius: 2.5
                },
                {
                    borderStyle: "dashed",
                    borderRadius: 0,

                }
            ],
            iconsTypes: [
                {
                    borderStyle: "solid",
                    borderRadius: 100
                },
                {
                    borderStyle: "solid",
                    borderRadius: 7
                },
                {
                    borderStyle: "solid",
                    borderRadius: 0
                }
            ],
            fonts: [
                {
                    id: 1,
                    name: 'Montserrat',
                    fontFamily: 'montserrat',
                },
                {
                    id: 2,
                    name: 'Roboto',
                    fontFamily: 'roboto',
                },
                {
                    id: 3,
                    name: 'Amaranth',
                    fontFamily: 'amaranth',
                },
                {
                    id: 4,
                    name: 'Palatino Linotype',
                    fontFamily: 'palatino-linotype',
                },
                {
                    id: 5,
                    name: 'MuseoModerno',
                    fontFamily: 'museo-moderno',
                },
            ],
            textColors: [
                {
                    id: 1,
                    color: '#7F7F7F'
                },
                {
                    id: 2,
                    color: '#FFFFFF'
                },
                {
                    id: 3,
                    color: '#00ADE6'
                },
                {
                    id: 4,
                    color: '#0060CD'
                },
                {
                    id: 5,
                    color: '#241D57'
                },
                {
                    id: 6,
                    color: '#005940'
                },
                {
                    id: 7,
                    color: '#FFD900'
                },
                {
                    id: 8,
                    color: '#CC00FF'
                },
                {
                    id: 9,
                    color: '#780016'
                },
                {
                    id: 10,
                    color: '#01EB41'
                },
                {
                    id: 11,
                    color: '#FFB4D1'
                },
                {
                    id: 12,
                    color: '#FF6CA5'
                },
                {
                    id: 13,
                    color: '#FF4656'
                },
                {
                    id: 14,
                    color: '#FF783F'
                },
                {
                    id: 15,
                    color: '#1BF0FF'
                },
            ],
        }
    )


    // const toggleEditSection = (state , action) => {
    //     switch (action.section) {
    //         case :

    //             break;

    //         default:
    //             break;
    //     }
    // }


    const UiReducer = (state, action) => {
        const newState = { ...state }
        switch (action.function) {
            case 'setEditInformation':
                newState.editInformation = { ...action.sections }
                break;
            case 'toggle':
                newState.editInformation[action.section] = !state.editInformation[action.section]
                break;
            case 'togglePages':

                Object.keys(newState.pages).map(page => {
                    if (page != 'editable' && page != action.page) {
                        newState.pages[page] = false
                    }
                })
                newState.pages[action.page] = !state.pages[action.page]
                break;
            default:

                break;
        }
        return (newState)
    }


    const [UiState, UiDispatch] = useReducer(UiReducer,
        {
            editInformation: {

            },
            pages: {
                editable: false,
                showNavigator: false,
                Costumize: false,
                Share: false,
                Sittings: false,
                Theme: false,
                NFC: false,
            },

        }
    )



    // ---------------------------------------------------------------------------------------------


    const nextPage = (state) => {
        return (
            {
                ...state,
                index: state.index + 1,
            }
        )
    }


    const prevPage = (state) => {
        return (
            {
                ...state,
                index: state.index - 1,
            }
        )
    }
    const setPage = (state, action) => {

        return ({
            ...state,
            index: action.page
        })
    }


    const selectAccountType = (state, action) => {
        switch (action.accountType) {
            case 'individual':
                return (
                    {
                        ...state,
                        welcomPages: state.individualPages,
                        Individual: true,
                        role:action.role
                    }
                )
                break;
            case 'business':
                return (
                    {
                        ...state,
                        welcomPages: state.businessPages,
                        Individual: false,
                        role:action.role
                    }
                )

            default:
                break;
        }
    }


    const CreateAccountReducer = (state, action) => {
        switch (action.type) {
            case 'nextPage':
                return (
                    nextPage(state)
                )
                break;
            case 'prevPage':
                return (
                    prevPage(state)
                )
            case 'selectAccountType':
                return (
                    selectAccountType(state, action)
                )
            case 'setPage':
                return (
                    setPage(state, action)
                )
            default:
                break;
        }
    }


    const [CreateAccountState, CreateAccountDispatch] = useReducer(CreateAccountReducer,
        {
            index: 1,
            Individual: false,
            role:'',
            welcomPages: [
                {
                    id: 1,
                    name: 'welcome',
                    isActive: false,
                },
                {
                    id: 2,
                    name: 'howToUse',
                    isActive: false
                }
            ],
            individualPages: [
                {
                    id: 1,
                    name: 'welcome',
                    isActive: false,
                },
                {
                    id: 2,
                    name: 'howToUse',
                    isActive: false
                },
                {
                    id: 3,
                    name: 'startJourney',
                    isActive: false
                },
                // {
                //     id: 4,
                //     name: 'regestir',
                //     isActive: false
                // },
                {
                    id: 4,
                    name: 'verification',
                    isActive: false
                },
                {
                    id: 5,
                    name: 'information',
                    isActive: false
                },
                {
                    id: 6,
                    name: 'contacts',
                    isActive: false
                },
                {
                    id: 7,
                    name: 'image',
                    isActive: false
                },
                {
                    id: 8,
                    name: 'style',
                    isActive: false
                },
                {
                    id: 9,
                    name: 'terms',
                    isActive: false
                },
                {
                    id: 10,
                    name: 'chooseYourPlanho',
                    isActive: false
                },
            ],
            businessPages: [
                {
                    id: 1,
                    name: 'welcome',
                    isActive: false,
                },
                {
                    id: 2,
                    name: 'howToUse',
                    isActive: false
                },
                {
                    id: 3,
                    name: 'startJourney',
                    isActive: false
                },
                {
                    id: 4,
                    name: 'verification',
                    isActive: false
                },
                {
                    id: 5,
                    name: 'contacts',
                    isActive: false
                },
                {
                    id: 6,
                    name: 'information',
                    isActive: false
                },
                {
                    id: 7,
                    name: 'companyInterests',
                    isActive: false
                },
                {
                    id: 8,
                    name: 'location',
                    isActive: false
                },
                {
                    id: 9,
                    name: 'teamMembers',
                    isActive: false
                },
                {
                    id: 10,
                    name: 'workTeams',
                    isActive: false
                },
                {
                    id: 11,
                    name: 'channels',
                    isActive: false
                },
                {
                    id: 12,
                    name: 'usedNfc',
                    isActive: false
                },
                {
                    id: 13,
                    name: 'whatNfc',
                    isActive: false
                },
                {
                    id: 14,
                    name: 'image',
                    isActive: false
                },
                {
                    id: 15,
                    name: 'style',
                    isActive: false
                },
                {
                    id: 16,
                    name: 'terms',
                    isActive: false
                },
                {
                    id: 17,
                    name: 'location',
                    isActive: false
                },

            ]
        })

    const UiEventsReducer = (state, action) => {
        const newState = { ...state }
        newState[action.event] = action.value
        return (newState)
    }

    const [UiEvents, UiEventsDispatch] = useReducer(UiEventsReducer,
        {
            loading: false,
            error: false,
            logedIn: false,
        }
    )

    const setSection = (state, action) => {
        newState = {
            ...state,
            ...action.section
        }
        return (newState)
    }


    const journeyReducer = (state, action) => {
        switch (action.function) {
            case 'setSection':
                return (
                    setSection(state, action)
                )

                break;

            default:
                break;
        }
    }

    const [journeyInputFields, journeyDispatch] = useReducer(journeyReducer,
        {
            information1: {
                name: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid name'
                },
                surname: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid name'
                },
                birthDate: {

                    value: null,
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
                gender: {
                    value: null,
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },

            },
            information2: {
                company: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid company name'
                },
                profession: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
                industry: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
            },
            contacts: {
                eMail: {
                    value: '',
                    validation: 'email-address',
                    valid: true,
                    password: false,
                    error: 'invalid e-mail address'
                },
                phone: {
                    value: '',
                    validation: 'phone-pad',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
                whatsApp: {
                    value: '',
                    validation: 'phone-pad',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
                telegram: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
            },
            image: null,
            style: {
                theme: {
                    "id": 1,
                    "customizeable": 1,
                    "textColor": "#e0c99a",
                    "textFont": "#dccba0",
                    "profielBorderColor": "#1301fd",
                    "backGround": "[\"#4fae6d\"]",
                    "buttons": "[\"#4b7aa2\"]",
                    "icons": "[\"#f71e85\"]",
                    "is_approved": 1,
                    "is_default": 1,
                    "created_at": "2023-10-17T10:28:24.000000Z",
                    "updated_at": "2023-10-17T10:28:24.000000Z",
                    "deleted_at": null,
                    error:null
                },
            },
            terms: {
                terms: {
                    value: false,
                    error: null
                }
            },
            use_nfc: {
                use_nfc: {
                    value: false,
                    error: null
                }
            },
            interests: {
                interests: {
                    value: [],
                    error: null
                }
            },
            location: {
                country: {
                    value: "",
                    error: null
                },
                city: {
                    value: "",
                    error: null
                },
            },
            members: {
                members: {
                    value: "",
                    error: null
                }
            },
            work_channels: {
                work_channels: {
                    value: [],
                    error: null
                }
            },
            customer_channels: {
                customer_channels: {
                    value: [],
                    error: null
                }
            },
            nfc_products: {
                nfc_products: {
                    value: [],
                    error: null
                }
            },
            industry: {
                industry: {
                    value: '',
                    error: null
                }
            },
        })

    const [CompanyJourneyInputFields, CompanyJourneyDispatch] = useReducer(journeyReducer,
        {
            information1: {
                name: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid name'
                },
                surname: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid name'
                },
                birthDate: {

                    value: null,
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
                gender: {
                    value: null,
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },

            },
            information2: {
                company: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid company name'
                },
                profession: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
                industry: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
            },
            contacts: {
                eMail: {
                    value: '',
                    validation: 'email-address',
                    valid: true,
                    password: false,
                    error: 'invalid e-mail address'
                },
                phone: {
                    value: '',
                    validation: 'phone-pad',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
                whatsApp: {
                    value: '',
                    validation: 'phone-pad',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
                telegram: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password: false,
                    error: 'invalid input'
                },
            },
            image: null,
            style: {
                theme: {
                    "id": 1,
                    "customizeable": 1,
                    "textColor": "#e0c99a",
                    "textFont": "#dccba0",
                    "profielBorderColor": "#1301fd",
                    "backGround": "[\"#4fae6d\"]",
                    "buttons": "[\"#4b7aa2\"]",
                    "icons": "[\"#f71e85\"]",
                    "is_approved": 1,
                    "is_default": 1,
                    "created_at": "2023-10-17T10:28:24.000000Z",
                    "updated_at": "2023-10-17T10:28:24.000000Z",
                    "deleted_at": null
                },
            },


        })
    return (
        <AppContext.Provider value={{ AppState: AppState, dispatch: dispatch, CreateAccountState: CreateAccountState, CreateAccountDispatch: CreateAccountDispatch, UiState: UiState, UiDispatch: UiDispatch, UiEvents: UiEvents, UiEventsDispatch: UiEventsDispatch, journeyInputFields: journeyInputFields, journeyDispatch: journeyDispatch }}>
            {children}
        </AppContext.Provider>
    )


}