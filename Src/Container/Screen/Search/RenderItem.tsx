import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Platform, TouchableOpacity, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


interface Props {
    onCrossClick:Function,
    index:number,
    item:any
}


const RenderItem = (props: Props) => {
    return (
        <View style={styles.parentView}>
            <Text numberOfLines={1} style={styles.textStyle} >{"Name " + props.item.Name}
            </Text>
            <Text numberOfLines={1} style={styles.textStyle} >{"Age " + props.item.Age}
            </Text>
            <Text numberOfLines={1} style={styles.textStyle} >{"Country " + props.item.Country}
            </Text>
            <Text style={styles.textStyle} >{props.item.CovidPosiive ? "YES" : "No"}
            </Text>
            {!props.item.CovidPosiive ?
                <TouchableOpacity  onPress={()=>props.onCrossClick(props.index)} style={styles.crossIcon}>
                    <Image resizeMode={'contain'} style={styles.crossImage} source={require('../../../../Images/close.png')}/>
                </TouchableOpacity> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    parentView: {
        height: hp('15%'),
        width: wp("80%"),
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 10,
        marginTop: hp('3%'),
        justifyContent: 'center',
        paddingHorizontal: wp('2%')
    }, textStyle: {
        marginTop: hp('1%'),
        fontSize: wp("4%")
    }, crossIcon: {
        position: 'absolute',
        bottom: hp('2%'),
        right: wp('5%'),
        
        
    },crossImage:{
        height: hp('5%'),
        width: wp('5%'),
        tintColor:'red'
    }
})
export default RenderItem;
