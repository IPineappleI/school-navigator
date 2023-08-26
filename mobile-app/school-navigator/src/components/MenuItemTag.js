import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Image} from "expo-image";

export default function MenuItemTag({tag, updateTagsState}) {
    return (
        <TouchableOpacity onPress={() => updateTagsState(tag.id, !tag.value)}
                          style={{opacity: tag.value ? 1 : 0.6}}
        >
            <View style={[styles.tagContainer, {backgroundColor: tag.color}]}>
                <Image source={tag.image} style={styles.tagIcon}/>
                <Text style={styles.tagText}>{tag.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tagContainer: {
        height: 35,
        flexDirection: "row",
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 5,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    tagIcon: {
        width: 25,
        height: 25,
        marginHorizontal: 5
    },
    tagText: {
        fontFamily: "os-regular",
        fontSize: 12,
    },
})