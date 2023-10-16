import { useReducer, createContext, useState } from "react";

export const AppContext = createContext()

export const StateProvider = ({ children }) => {



    const setData = (state, action) => {
        switch (action.section) {
            case "socialsAndLinks":

                return (
                    {
                        ...state,
                        socialsAndLinks: action.data
                    }
                )
                break;

            case "flashContacts":
                return (
                    {
                        ...state,
                        flashContacts: action.data
                    }
                )
            case "documents":
                return (
                    {
                        ...state,
                        documents: action.data
                    }
                )
            case "mainInfo":
                return (
                    {
                        ...state,
                        mainInfo: action.data
                    }
                )
            case "contactCard":
                return (
                    {
                        ...state,
                        contactCard: action.data
                    }
                )
            default:
                break;
        }
    }
    const changeValue = (state, action) => {
        switch (action.section) {
            case "socialsAndLinks":
                const newSocialsAndLinks = [...state.socialsAndLinks]
                for (let i = 0; i < newSocialsAndLinks.length; i++) {
                    if (newSocialsAndLinks[i].id == action.id) {
                        newSocialsAndLinks[i] = {
                            ...newSocialsAndLinks[i],
                            value: action.value
                        }
                    }
                }
                return ({
                    ...state,
                    socialsAndLinks: newSocialsAndLinks
                })

            case "flashContacts":
                const newFlashContacts = [...state.flashContacts]
                for (let i = 0; i < newFlashContacts.length; i++) {
                    if (newFlashContacts[i].id == action.id) {
                        newFlashContacts[i] = {
                            ...newFlashContacts[i],
                            value: action.value
                        }
                    }
                }
                return ({
                    ...state,
                    flashContacts: newFlashContacts
                })
            case "documents":
                const newDocuments = [...state.documents]
                for (let i = 0; i < newDocuments.length; i++) {
                    if (newDocuments[i].id == action.id) {
                        newDocuments[i] = {
                            ...newDocuments[i],
                            value: action.value
                        }
                    }
                }
                return ({
                    ...state,
                    documents: newDocuments
                })
            case "mainInfo":
                const newMainInfo = [...state.mainInfo]
                for (let i = 0; i < newMainInfo.length; i++) {
                    if (newMainInfo[i].id == action.id) {
                        newMainInfo[i] = {
                            ...newMainInfo[i],
                            value: action.value
                        }
                    }
                }
                return ({
                    ...state,
                    mainInfo: newMainInfo
                })
            case "contactCard":
                const contactCard = [...state.contactCard]
                for (let i = 0; i < contactCard.length; i++) {
                    if (contactCard[i].id == action.id) {
                        contactCard[i] = {
                            ...contactCard[i],
                            value: action.value
                        }
                    }
                }
                return ({
                    ...state,
                    contactCard: contactCard
                })
            default:
                break;
        }
    }
    const deleteIcon = (state, action) => {
        switch (action.section) {
            case "socialsAndLinks":

                const newSocialsAndLinks = state.socialsAndLinks.filter(SocialOrLink => SocialOrLink.id !== action.id)
                return (
                    {
                        ...state,
                        socialsAndLinks: newSocialsAndLinks
                    }
                )
                break;

            case "flashContacts":
                const newFlashContacts = state.flashContacts.filter(flashContact => flashContact.id !== action.id)
                return (
                    {
                        ...state,
                        flashContacts: newFlashContacts
                    }
                )
            case "documents":
                const newDocuments = state.documents.filter(document => document.id !== action.id)
                return (
                    {
                        ...state,
                        documents: newDocuments
                    }
                )
            case "mainInfo":
                const newMainInfo = state.mainInfo.filter(mainInfo => mainInfo.id !== action.id)
                return (
                    {
                        ...state,
                        mainInfo: newMainInfo
                    }
                )
            case "contactCard":
                const newContactCard = state.contactCard.filter(contactCard => contactCard.id !== action.id)
                return (
                    {
                        ...state,
                        contactCard: newContactCard
                    }
                )
            default:
                break;
        }
    }
    const toggleIsActive = (state, action) => {
        switch (action.section) {
            case "socialsAndLinks":
                const newSocialsAndLinks = [...state.socialsAndLinks]
                for (let i = 0; i < newSocialsAndLinks.length; i++) {
                    if (newSocialsAndLinks[i].id == action.id) {
                        newSocialsAndLinks[i] = {
                            ...newSocialsAndLinks[i],
                            isActive: action.isActive ? 1 : 0
                        }
                    }
                }
                return ({
                    ...state,
                    socialsAndLinks: newSocialsAndLinks
                })
                break;

            case "flashContacts":
                const newFlashContacts = [...state.flashContacts]
                for (let i = 0; i < newFlashContacts.length; i++) {
                    if (newFlashContacts[i].id == action.id) {
                        newFlashContacts[i] = {
                            ...newFlashContacts[i],
                            isActive: action.isActive ? 1 : 0
                        }
                    }
                }
                return ({
                    ...state,
                    flashContacts: newFlashContacts
                })
            case "documents":
                const newDocuments = [...state.documents]
                for (let i = 0; i < newDocuments.length; i++) {
                    if (newDocuments[i].id == action.id) {
                        newDocuments[i] = {
                            ...newDocuments[i],
                            isActive: action.isActive ? 1 : 0
                        }
                    }
                }
                return ({
                    ...state,
                    documents: newDocuments
                })
            case "mainInfo":
                const newMainInfo = [...state.mainInfo]
                for (let i = 0; i < newMainInfo.length; i++) {
                    if (newMainInfo[i].id == action.id) {
                        newMainInfo[i] = {
                            ...newMainInfo[i],
                            isActive: action.isActive ? 1 : 0
                        }
                    }
                }
                return ({
                    ...state,
                    mainInfo: newMainInfo
                })
            case "contactCard":
                const newContactCard = [...state.contactCard]
                for (let i = 0; i < newContactCard.length; i++) {
                    if (newContactCard[i].id == action.id) {
                        newContactCard[i] = {
                            ...newContactCard[i],
                            isActive: action.isActive ? 1 : 0
                        }
                    }
                }
                return ({
                    ...state,
                    contactCard: newContactCard
                })
            default:
                break;
        }
    }
    const setLoading = (state, action) => {
        return (
            {
                ...state,
                themeLoading: action.loading
            }
        )
    }
    const setState = (state, action) => {
        return ({
            ...state,
            ...action.allState
        })
    }
    const setNavs = (state, action) => {
        const newNavs = state.navs.map(nav => {
            if (nav.id == action.id) {
                return ({
                    ...nav,
                    isActive: !nav.isActive
                })
            }
            else {
                return ({
                    ...nav,
                    isActive: false
                })
            }
        })
        return (
            {
                ...state,
                navs: newNavs,
                editContactCard: false,
                editDocuments: false,
                editFlashContacts: false,
                editMainInfo: false,
                editSocialsAndLinks: false,
                editable: false,
            }
        )
    }
    const closeAllNavs = (state) => {
        const newNavs = state.navs.map(nav => (
            {
                ...nav,
                isActive: false
            }
        ))
        return (
            {
                ...state,
                navs: newNavs
            }
        )
    }
    const setFontFamily = (state, action) => {
        return (
            {
                ...state,
                theme: {
                    ...state.theme,
                    textFont: action.fontFamily
                }
            }
        )
    }
    const setTextColor = (state, action) => {
        return (
            {
                ...state,
                theme: {
                    ...state.theme,
                    textColor: action.textColor
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
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                type: action.backGroundType
                            }
                        }
                    }
                )
                break;
            case 'firstHalfCircleColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                firstHalfCircleColor: action.firstHalfCircleColor
                            }
                        }
                    }
                )
                break;
            case 'secondHalfCircleColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                secondHalfCircleColor: action.secondHalfCircleColor
                            }
                        }
                    }
                )
                break;
            case 'backGroundColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                backGroundColor: action.backGroundColor
                            }
                        }
                    }
                )
                break;
            case 'themeBackGroundColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                themeBackGroundColor: action.themeBackGroundColor
                            }
                        }
                    }
                )
                break;
            case 'backGroundImage':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                backGroundImage: action.backGroundImage
                            }
                        }
                    }
                )
                break;
            case 'backGroundImageFile':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                backGroundImageFile: action.backGroundImageFile
                            }
                        }
                    }
                )
                break;
            case 'firstGradientColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                firstGradientColor: action.firstGradientColor
                            }
                        }
                    }
                )
                break;
            case 'secondGradientColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                secondGradientColor: action.secondGradientColor
                            }
                        }
                    }
                )
                break;
            case 'gradientAngel':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            backGround: {
                                ...state.theme.backGround,
                                gradientAngel: action.gradientAngel
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
        switch (action.prop) {
            case 'color':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            icons: {
                                ...state.theme.icons,
                                color: action.color
                            }
                        },
                    }
                )
            case 'textColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            icons: {
                                ...state.theme.icons,
                                textColor: action.textColor
                            }
                        },
                    }
                )
            case 'fill':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            icons: {
                                ...state.theme.icons,
                                fill: action.fill
                            }
                        },
                    }
                )
            case 'type':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            icons: {
                                ...state.theme.icons,
                                type: action.iconType
                            }
                        },
                    }
                )
            default:
                break;
        }
    }
    const setButtonsStyle = (state, action) => {
        switch (action.prop) {
            case 'type':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            buttons: {
                                ...state.theme.buttons,
                                type: action.buttonType
                            }
                        }
                    }
                )
            case 'backGroundColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            buttons: {
                                ...state.theme.buttons,
                                backGroundColor: action.backGroundColor
                            }
                        }
                    }
                )
            case 'textColor':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            buttons: {
                                ...state.theme.buttons,
                                textColor: action.textColor
                            }
                        }
                    }
                )
            case 'fill':
                return (
                    {
                        ...state,
                        theme: {
                            ...state.theme,
                            buttons: {
                                ...state.theme.buttons,
                                fill: action.fill
                            }
                        }
                    }
                )
            default:
                break;
        }
    }
    const setLogedIn = (state, action) => {
        return (
            {
                ...state,
                logedIn: action.logedIn
            }
        )
    }
    const addSocialOrLink = (state, action) => {
        const newItem = {
            ...action.newItem,
            id: state.socialsAndLinks.length + 1
        }
        const newSocialsAndLinks = [...state.socialsAndLinks]
        newSocialsAndLinks.push(newItem)
        return (
            {
                ...state,
                socialsAndLinks: newSocialsAndLinks
            }
        )
    }
    const reducer = (state, action) => {

        switch (action.type) {
            case 'deleteIcon':
                return (
                    deleteIcon(state, action)
                )
            case 'toggleIsActive':
                return (
                    toggleIsActive(state, action)
                )
            case 'changeValue':
                return (
                    changeValue(state, action)
                )
            default:
            case 'setData':
                return (
                    setData(state, action)
                )
            case 'setLoading':
                return (
                    setLoading(state, action)
                )
            case 'setState':
                return (
                    setState(state, action)
                )
            case 'setNavs':
                return (
                    setNavs(state, action)
                )
            case 'closeAllEdits':
                return (
                    closeAllEdits(state)
                )
            case 'closeAllNavs':
                return (
                    closeAllNavs(state)
                )
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
            case 'addSocialOrLink':
                return (
                    addSocialOrLink(state, action)
                )
        }
    }

    const [AppState, dispatch] = useReducer(reducer,
        {
            logedIn: false,
            themeLoading: true,
            theme: {
                customizeable: true,
                textColor: "#780016",
                textFont: "amaranth",
                profileImage: "/assets/img/profilehq.png",
                profileImageFile: null,
                profielBorderColor: "#780016",
                backGround: {
                    type: 3,
                    firstHalfCircleColor: "#ECECEC",
                    secondHalfCircleColor: "#FF0000",
                    backGroundColor: "#FFB4D1",
                    themeBackGroundColor: "#ffffff",
                    backGroundImage: null,
                    backGroundImageFile: null,
                    firstGradientColor: "#b0a71d",
                    secondGradientColor: "#6ef536",
                    gradientAngel: 1
                },
                buttons: {
                    type: 1,
                    backGroundColor: "#ffffff",
                    textColor: "#780016",
                    fill: true
                },
                icons: {
                    color: "#780016",
                    textColor: "#780016",
                    fill: true,
                    type: 1
                }
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
            informations: {
                flashContacts: [
                    {
                        id: 1,
                        name: "Whats App",
                        value: "user.name",
                        isActive: 1,
                        icon: [
                            "fab",
                            "whatsapp"
                        ]
                    },
                    {
                        id: 2,
                        name: "message",
                        value: "user.name",
                        isActive: 1,
                        icon: [
                            "fas",
                            "message"
                        ]
                    },
                ],
                socialsAndLinks: [
                    {
                        id: 1,
                        name: "instagram",
                        value: "user.name",
                        isActive: 1,
                        icon: [
                            "fab",
                            "instagram"
                        ]
                    },
                ],
                documents: [
                    {
                        id: 1,
                        name: "CV",
                        isActive: 1,
                        icon: ['fas', 'file-pdf']
                    },
                ],
            },


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
        switch (action.toggle) {
            case 'edit':
                newState.editInformation[action.section] = !state.editInformation[action.section]
                return (newState)
            case 'pages':
                Object.keys(newState.pages).map(key => {
                    if (key != action.section) {
                        newState.pages[key] = false
                    }
                    else {
                        newState.pages[key] = !state.pages[key]
                    }
                }
                )
                // newState.pages[action.section] = !state.pages[action.section]

                return (newState)
        }
    }


    const [UiState, UiDispatch] = useReducer(UiReducer,
        {
            editInformation: {
                image: false,
                mainInfo: false,
                flashContacts: false,
                socialsAndLinks: false,
                documents: false,
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
                        Individual: true
                    }
                )
                break;
            case 'business':
                return (
                    {
                        ...state,
                        welcomPages: state.businessPages,
                        Individual: false
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
            index:5,
            Individual: true,
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

        }
    )   


    const setSection = (state, action) => {
        newState = { ...state ,
                ...action.section
        }
        return (newState)
    }


    const journeyReducer = (state, action) => {    
        switch (action.function) {
            case 'setSection':
                return (
                    setSection(state,action)
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
                    password:false,
                    error: 'invalid e-mail address'
                },
                phone: {
                    value: '',
                    validation: 'phone-pad',
                    valid: true,
                    password:false,
                    error: 'invalid input'
                },
                whatsApp: {
                    value: '',
                    validation: 'phone-pad',
                    valid: true,
                    password:false,
                    error: 'invalid input'
                },
                telegram: {
                    value: '',
                    validation: 'name',
                    valid: true,
                    password:false,
                    error: 'invalid input'
                },
            },
            image:{
                image:{
                    value: '',
                    validation: 'file',
                    valid: true,
                    password:false,
                    error: 'invalid input'
                }
            },
            style:{
                style:{
                    value: null,
                    validation: 'required',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: 'invalid input'
                }
            },
            terms:{
                terms:{
                    value: false,
                    validation: 'required',
                    valid: true,
                    backValid: true,
                    toched: false,
                    error: 'invalid input'
                }
            }
        })
    return (
        <AppContext.Provider value={{ AppState: AppState, dispatch: dispatch, CreateAccountState: CreateAccountState, CreateAccountDispatch: CreateAccountDispatch, UiState: UiState, UiDispatch: UiDispatch, UiEvents: UiEvents, UiEventsDispatch: UiEventsDispatch ,journeyInputFields:journeyInputFields , journeyDispatch:journeyDispatch }}>
            {children}
        </AppContext.Provider>
    )


}