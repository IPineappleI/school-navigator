import React from "react";
import {TouchableOpacity, View, StyleSheet, Text} from "react-native";
import { Image } from 'expo-image';
import ImageModal from 'react-native-image-modal'

export default function CatalogListItem({navigation, schoolInfo}) {
    const school = {
        "id": schoolInfo.id,
        "name": schoolInfo.name,
        "rating": schoolInfo.rating,
        "enrollees": schoolInfo.enrollees,
        "budgetEnrollees": schoolInfo.budgetEnrollees,
        "olympiadWinnersAndAwardees": schoolInfo.olympiadWinnersAndAwardees,
        "mathWinners": schoolInfo.mathWinners,
        "mathAwardees": schoolInfo.mathAwardees,
        "csWinners": schoolInfo.csWinners,
        "csAwardees": schoolInfo.csAwardees,
        "economicsWinners": schoolInfo.economicsWinners,
        "economicsAwardees": schoolInfo.economicsAwardees,
        "physicsWinners": schoolInfo.physicsWinners,
        "physicsAwardees": schoolInfo.physicsAwardees,
        "website": schoolInfo.website,
        "address": schoolInfo.address,
        "imageURL": schoolInfo.imageURL,
        "mathClass": schoolInfo.mathClass,
        "itClass": schoolInfo.itClass,
        "engineeringClass": schoolInfo.engineeringClass,
        "businessClass": schoolInfo.businessClass
    }

    return (
        <TouchableOpacity onPress={() =>
            {navigation.navigate("SchoolPage", {school: school})}}
        >
            <View style={styles.container}>
                <View style={{flexDirection: "row"}}>
                    <View>
                        <ImageModal source={{uri: school.imageURL}}
                                    style={[styles.schoolImage]}
                                    placeholder={require("../../assets/placeholder-image.png")}
                                    disabled={true}
                                    modalImageStyle={{flex: 1}}
                        />
                    </View>

                    <View style={styles.schoolInfoContainer}>
                        <View style={{flex: 1}}>
                            <Text style={[styles.schoolLabelText]}>{school.name}</Text>
                            <Text style={styles.schoolAddressText}>{school.address}</Text>
                        </View>
                        <View style={styles.infoLineContainer}>
                            <View style={styles.infoIconContainer}>
                                <Image source={require("../../assets/rating.png")} style={styles.infoIcon}/>
                                {
                                    school.rating ? (
                                        <Text style={styles.infoText}>{school.rating}</Text>
                                    ) : (
                                        <Text style={styles.infoText}>-</Text>
                                    )
                                }
                            </View>
                            <View style={styles.infoIconContainer}>
                                <Image source={require("../../assets/student.png")} style={styles.infoIcon}/>
                                <Text style={styles.infoText}>{school.enrollees}</Text>
                            </View>
                            <View style={styles.infoIconContainer}>
                                <Image source={require("../../assets/medal.png")} style={styles.infoIcon}/>
                                <Text style={styles.infoText}>{school.olympiadWinnersAndAwardees}</Text>
                            </View>
                            <View style={styles.infoIconContainer}>
                                <Image source={require("../../assets/budget.png")} style={styles.infoIcon}/>
                                <Text style={styles.infoText}>{school.budgetEnrollees}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: "rgba(158, 150, 150, .3)",
    },
    schoolInfoContainer: {
        flex: 1,
        marginLeft: 15,
    },
    schoolImage: {
        height: 90,
        width: 90,
        borderRadius: 20
    },
    schoolLabelText: {
        fontFamily: "os-bold",
        fontSize: 14,
    },
    schoolAddressText: {
        fontFamily: "os-light-it",
        fontSize: 13
    },
    infoLineContainer: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 5,
        justifyContent: "space-around",
        alignItems: "flex-end"
    },
    infoIconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    infoIcon: {
        height: 20,
        width: 20
    },
    infoText: {
        fontFamily: "os-regular",
        fontSize: 14,
        paddingLeft: 5
    }
})