import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Theme } from '../../../../theme'

function dummy() {}

interface IProps {
    index: number;
    items: Array<string>;
    onChange: Function;
}

export default function HeadersScrollView(props: IProps) {
    const [index, setIndex]= React.useState(0);
    const scrollRef = React.useRef<ScrollView>();

    const scroll = (index: number) => {
        if (index === 0) {
            scrollRef.current?.scrollTo({y: 0, x: 0, animated: true});
            setIndex(index);
            props.onChange(index);
            return;
        }

        setIndex(index);
        scrollRef.current?.scrollTo({y: 0, x: Theme.width/100*60*index, animated: true})
        props.onChange(index);
    }

    return (
        <View style={{ width: '100%', height: Theme.height/100*10, backgroundColor: 'white',  borderBottomColor: 'lightgrey', borderBottomWidth: 2, paddingHorizontal: Theme.majorSpace, borderTopLeftRadius: 10, borderTopRightRadius: 10  }}>
        <ScrollView ref={(ref) => scrollRef.current = ref } horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', backgroundColor: 'transparent'}}>

           {
               props.items.map((item, i) => (
                <TouchableOpacity key={i} onPress={() => scroll(i)} style={{ width: Theme.width/100*60, flexDirection: 'row', alignItems: 'center', marginRight: 30}}>
                    <View style={{ width: 30, height: 30, borderRadius: 4, backgroundColor: index === i ? Theme.primaryColor:'grey', marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: Theme.normalText, fontWeight: '700'}}>{i+1}</Text>
                    </View>
                    <Text style={{ fontSize: Theme.normalText, fontWeight: '500', color: index === i ? 'grey':'lightgrey'}}>{item}</Text>
                </TouchableOpacity>
               ))
           }
           

        </ScrollView>
    </View>
    )
}
