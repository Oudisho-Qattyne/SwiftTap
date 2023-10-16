import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Separate from '../Separate'
import Icon from '../Icon.js'
import AddIcon from '../AddIcon.js'
import { AppContext } from '../../AppState'

const IconsSection = ({ title }) => {
    const { UiState, UiDispatch , AppState } = useContext(AppContext)

    return (
        <View className="w-full flex justify-center items-center py-5">
            {title == 'flashContacts' ?
                <Text >Or Direct</Text>            
            :
                <Separate title={title} />
            }
            <FlatList
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}
                data={AppState.informations[title]}
                renderItem={item => {
                    if (item.item.isActive) {
                        let items = {
                            ...item,
                            item: {
                                ...item.item,
                                section: title
                            }
                        }
                        return (
                            <Icon item={items.item} />
                        )
                    }
                }}
                ListFooterComponent={() => UiState.pages.editable && <AddIcon toggle='edit' section={title} />}
            />
        </View>
    )
}

export default IconsSection