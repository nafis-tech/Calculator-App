import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Button
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Page1 = () => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputDate}>
                <FontAwesome5 
                style={styles.font}
                name="calendar-check"
                size={40}
                color='#822659'
                />
                <Text style={styles.inputData}>{new Date().toUTCString()}</Text>
            </View>
            <View style={styles.inputDate}>
                <FontAwesome5 
                style={styles.font}
                name="pencil-alt"
                size={40}
                color='#822659'
                />
                <TextInput 
                placeholder="Menambahkan Judul"
                style={styles.inputData}
                />
            </View>
            <TextInput 
                placeholder="Mulai mengetik disini...."
                style={styles.inputDiary}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'gray'
    },
    inputDate : {
        backgroundColor: '#FF75A0',
        flex: 1,
        flexDirection: 'row'
        
    },
    inputData : {
        fontSize: 21, 
        // backgroundColor: 'lightblue', 
        marginHorizontal: 10,
        marginVertical: 15,
        borderRadius: 10,
        paddingTop: 20,
        color: '#ffffff'
    },
    font: {
        // backgroundColor: 'lightblue',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 10,
        marginStart: 20
    },
    inputDiary:{
        backgroundColor: '#F8A1D1',
        // flex: 1,
        height: 500,
        fontSize: 30
    }
})
export default Page1