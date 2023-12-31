import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Separate from '../Separate'
import Icon from '../Icon.js'
import AddIcon from '../AddIcon.js'
import { AppContext } from '../../AppState'

const IconsSection = ({ title , items , sectionId }) => {
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
                data={items}
                renderItem={item => {
                    // if (item.item?.isActive) {
                        let items = {
                            ...item,
                            item: {
                                ...item.item,
                                sectionId: sectionId
                            }
                        }
                        console.log(items);
                        return (
                            <Icon item={items.item} />
                            // <Text className="text-black">hbsdkhb</Text>
                        )
                    // }
                    // else{
                        // return
                    // }
                }}
                ListFooterComponent={() => UiState.pages.editable && <AddIcon  section={title} />}
            />
        </View>
    )
}

export default IconsSection