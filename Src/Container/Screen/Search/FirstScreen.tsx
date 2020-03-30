import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity, Image, Keyboard, Alert } from 'react-native';import
 { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../../../Componen/SearchBar'
import { connect } from "react-redux";
import RenderItem from './RenderItem'
import {searchData,onCrossClick} from './Action'


function FirstScreen(props: any) {
    const [searText, setSearchText] = useState("")

     useEffect(()=>{},[])
   
    const onChangeText = (val: string) => {
        setSearchText(val)
        props.searchData(val)
    }

    const onCrossClick=(index:number)=>{
props.onCrossClick(index)
    }

    // This Function Will Retrun Citizen List
    const CitizenList = () => {
        return (
            <FlatList
               contentContainerStyle={{alignItems:'center'}}
                style={[styles.flatListStyle]}
                onEndReachedThreshold={0.7}
                data={props.data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <RenderItem 
                        onCrossClick={(index:number)=>onCrossClick(index)}
                        item={item} index={index} />
                    );
                }} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.headerStyle}>
                <Text style={styles.trackerTxtStyle}>
                    {"Covid19 Tracker"}
                </Text>
            </View>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AddCitizen")} style={styles.addCitizen}>
                    <Text>
                        {"Add Citizen"}
                    </Text>
                </TouchableOpacity>
                <SearchBar
                    value={searText}
                    onChangeText={(val: string) => onChangeText(val)}
                    extraStyle={styles.extraStyle}
                />
                <Text style={styles.citizenTextStyle}>
                    {"Citizen"}
                </Text>

                {CitizenList()}

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
        borderWidth: 2
    }, trackerTxtStyle: {
        fontSize: wp("7%"),
    }, linearGradient: {
        flex: 1,
    }, addCitizen: {
        height: hp("4%"),
        width: wp('25%'),
        marginTop: hp('5%'),
        marginLeft: hp('3%'),
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 2,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }, searchBarContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: hp('1%')
    }, extraStyle: {
        marginTop: hp('5%'),
        marginLeft: hp('3%'),
    }, citizenTextStyle: {
        marginTop: hp('2%'),
        marginLeft: hp('3%'),
        fontSize: wp('4%'),
        color: "white",
        fontWeight: 'bold'

    },flatListStyle:{
        marginTop:hp('4%'),
        
    }
})

const mapStateToProps = (state: any) => {
    return {
        data: state.SearchDataSourceReducer.dataSource
    }
};

const mapDispatchToProps = {
    searchData:searchData,
    onCrossClick:onCrossClick


};

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);