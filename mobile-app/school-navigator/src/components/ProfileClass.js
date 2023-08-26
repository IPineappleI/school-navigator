import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ProfileClass({tag}){
    return (
        <View style={[styles.profileContainer, { backgroundColor: tag.color }]}>
            <Image source={tag.image} style={styles.profileIcon} />
            <Text style={styles.schoolProfileText}>{tag.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 135,
        width: 95,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "rgba(158, 150, 150, .3)",
        marginRight: 10
    },
    profileIcon: {
        width: 50,
        height: 50
    },
    schoolProfileText: {
        fontFamily: "os-regular",
        fontSize: 13,
        paddingTop: 15,
        textAlign: "center"
    },
});