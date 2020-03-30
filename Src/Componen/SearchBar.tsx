import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SearchBar = (props: any) => {
    return (
        <View style={[styles.parentContaineer,props.extraStyle]}>
            <Image resizeMode={'contain'} style={styles.searchIonStyle} source={require('../../Images/search.png')} />
            <TextInput 
            value={props.value}
            onChangeText={props.onChangeText}

            style={[styles.textInputStyle,]} />
        </View>
    )
}

const styles = StyleSheet.create({
    parentContaineer: {
        height: hp("7%"),
        width: wp("90%"),
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    }, textInputStyle: {
        flex: 1,
        fontSize: wp("4%"),
        color: 'white',
        paddingHorizontal: wp('3%')
    }, searchIonStyle: {
        height: hp("5%"),
        width: wp("5%"),
        tintColor: 'white',
        marginHorizontal: wp('2%')

    }


});



export default SearchBar
