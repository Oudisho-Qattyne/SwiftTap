import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Separate from '../Separate'
import Icon from '../Icon.js'
import AddIcon from '../AddIcon.js'
import { AppContext } from '../../AppState'
import Post from '../Items/Post'

const CertificatesSection = ({ title, items }) => {
    const { UiState, UiDispatch, AppState } = useContext(AppContext)
    return (
        <View className="relative w-full flex justify-center items-center py-20">
            {title == 'flashContacts' ?
                <Text >Or Direct</Text>
                :
                <Separate title={title} />
            }
            <FlatList
                style={{ width: '100%' }}
                contentContainerStyle={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}
                data={items}
                renderItem={item => {

                    if (item.item.contents[0].isActive) {
                        let items = {
                            ...item,
                            item: {
                                ...item.item,
                                section: title
                            }
                        }
                        return (
                            <Post item={items.item} />
                            // <Text className="text-black">hbsdkhb</Text>
                        )
                    }
                }}
                ListFooterComponent={() => UiState.pages.editable && <AddIcon section={title} />}
            />
        </View>
    )
}

export default CertificatesSection