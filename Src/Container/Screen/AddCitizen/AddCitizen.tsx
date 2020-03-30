
import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity, Image, Keyboard, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import CommonTextInput from '../../../Componen/CommonTextInput'
import {connect} from "react-redux";
import {pushInfo} from './Action'    

 function AddCitizen(props: any) {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [country, setCountry] = useState("")
    const [isPositive, setPositive] = useState(false)


    const nameChangeText = (val: any) => {
        setName(val)
    }

    const ageChangeText = (val: any) => {
        setAge(val)
    }

    const countryChangeText = (val: any) => {
        setCountry(val)
    }
    const vailidate = () => {
        if (!name) {
            alert("Plaese Enter namme")
            return
        }
        else if (!age) {
            alert("Plaese Enter age")
            return
        }
        else if (!country) {
            alert("Plaese Enter country")
            return
        }  else{
          props.pushInfo({"Name":name,
          "Age":age,
          "Country":country,
          "CovidPosiive":isPositive
        })
        props.navigation.pop()
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerStyle}>
                <Text style={styles.trackerTxtStyle}>
                    {"Citizen Details"}
                </Text>
            </View>

            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <CommonTextInput
                    value={name}
                    extraStyle={styles.extraStyle}
                    onChangeText={(val: string) => nameChangeText(val)}
                    placeholder={"Name"}
                />
                <CommonTextInput
                    value={age}
                    keyboardType={'numeric'}
                    extraStyle={styles.extraStyle}
                    onChangeText={(val: string) => ageChangeText(val)}
                    placeholder={"Age"}
                />
                <CommonTextInput
                    value={country}
                    extraStyle={styles.extraStyle}
                    onChangeText={(val: string) => countryChangeText(val)}
                    placeholder={"Country"}
                />
                <View style={{
                    alignItems: 'center', flexDirection: 'row', marginTop: hp('2%'),
                    marginLeft: hp('3%'),
                }}>
                    <TouchableOpacity onPress={() => setPositive(!isPositive)}>
                        {isPositive ?
                            <Image resizeMode={'contain'} style={styles.checkBoxStyle} source={require('../../../../Images/checkbox.png')} /> : <Image resizeMode={'contain'} style={styles.checkBoxStyle} source={require('../../../../Images/Uncheckbox.png')} />
                        }
                    </TouchableOpacity>
                    <Text style={styles.isPositive}>
                        {"Is Positive"}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => vailidate()} style={styles.addCitizen}>
                    <Text>
                        {"Add"}
                    </Text>
                </TouchableOpacity>
            </LinearGradient>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headerStyle: {
        height: hp("7%"),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,

    }, trackerTxtStyle: {
        fontSize: wp("7%"),
    }, linearGradient: {
        flex: 1,
    }, extraStyle: {
        marginTop: hp('5%'),
        marginLeft: hp('3%'),
    }, isPositive: {

        fontSize: wp('4%'),
        color: "white",
        fontWeight: 'bold'
    }, checkBoxStyle: {
        height: hp("5%"),
        width: wp("5%"),
        tintColor: 'white',
        marginHorizontal: wp('2%')
    }, addCitizen: {
        height: hp("7%"),
        width: wp('50%'),
        marginTop: hp('5%'),
        marginLeft: hp('3%'),
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 2,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }
})




const mapStateToProps = (state: any) => {
    return {
    data:state.SearchDataSourceReducer.dataSource
  }};
  
  const mapDispatchToProps = {
    pushInfo:pushInfo


};
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddCitizen);