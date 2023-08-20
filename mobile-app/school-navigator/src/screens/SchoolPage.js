import React, {useCallback, useState} from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Linking,
    Pressable,
} from "react-native";
import {Image} from 'expo-image';
import ImageView from "react-native-image-viewing";
import {YANDEX_MAP_LINK} from "../constants/constants";

export default function SchoolPage({route}) {
    const {school} = route.params;

    const [visible, setIsVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);


    const OpenURLButton = ({url, children}) => {
        const handlePress = useCallback(async () => {
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Error when opening this URL: ${url}`);
            }
        }, [url]);

        return (
            <Pressable onPress={handlePress} children={children}/>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
                <Image source={{uri: school.imageURL}} style={styles.schoolImage}/>
            </TouchableOpacity>
            <ImageView
                images={[{uri: school.imageURL}]}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />

            <Text style={styles.schoolLabelText}>{school.name}</Text>

            {
                (school.mathClass || school.itClass || school.engineeringClass || school.businessClass) &&
                (
                    <>
                        <Text style={styles.schoolProfilesHeaderText}>Профили обучения (10-11 класс)</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{padding: 10, flexDirection: "row"}}
                        >
                            {
                                school.mathClass &&
                                <View style={[styles.profileContainer, {backgroundColor: "#00ced1"}]}>
                                    <Image source={require("..//..//assets/math-class.png")}
                                           style={styles.profileIcon}/>
                                    <Text style={styles.schoolProfileText}>Мат. класс</Text>
                                </View>
                            }

                            {
                                school.itClass &&
                                <View style={[styles.profileContainer, {backgroundColor: "#a4a0ff",}]}>
                                    <Image source={require("..//..//assets/it-class.png")}
                                           style={styles.profileIcon}/>
                                    <Text style={styles.schoolProfileText}>ИТ класс</Text>
                                </View>
                            }

                            {
                                school.engineeringClass &&
                                <View style={[styles.profileContainer, {backgroundColor: "#fae847",}]}>
                                    <Image source={require("..//..//assets/engineering-class.png")}
                                           style={styles.profileIcon}/>
                                    <Text style={styles.schoolProfileText}>Инженерный класс</Text>
                                </View>
                            }

                            {
                                school.businessClass &&
                                <View style={[styles.profileContainer, {backgroundColor: "#e38126",}]}>
                                    <Image source={require("..//..//assets/bussiness-class.png")}
                                           style={styles.profileIcon}/>
                                    <Text style={styles.schoolProfileText}>Бизнес-класс</Text>
                                </View>
                            }
                        </ScrollView>
                    </>
                )
            }

            <View style={styles.schoolInfoContainer}>
                {
                    school.rating &&
                    <View style={[styles.infoBlockContainer, styles.infoBlockLineContainer]}>
                        <Image source={require("../../assets/rating.png")} style={styles.schoolInfoBlockIcon}/>
                        <Text style={styles.schoolInfoBlockTitleText}>Топ-{school.rating}</Text>
                        <View style={styles.infoBlockSubtitleContainer}>
                            <Text style={styles.schoolInfoBlockSubtitleText}>
                                школа Москвы по результатам образовательной деятельности
                            </Text>
                        </View>
                    </View>
                }

                <View style={[styles.infoBlockContainer, styles.infoBlockLineContainer]}>
                    <View>
                        <Image source={require("../../assets/student.png")} style={styles.schoolInfoBlockIcon}/>
                    </View>
                    <Text style={styles.schoolInfoBlockTitleText}>{school.enrollees}</Text>
                    <View style={styles.infoBlockSubtitleContainer}>
                        <Text style={styles.schoolInfoBlockSubtitleText}>абитуриент(-ов) в 2022 году</Text>
                    </View>
                </View>

                <View style={styles.infoBlockContainer}>
                    <View style={styles.infoBlockLineContainer}>
                        <View>
                            <Image source={require("../../assets/medal.png")} style={styles.schoolInfoBlockIcon}/>
                        </View>
                        <Text style={styles.schoolInfoBlockTitleText}>{school.olympiadWinnersAndAwardees}</Text>
                        <View style={styles.infoBlockSubtitleContainer}>
                            <Text style={styles.schoolInfoBlockSubtitleText}>олимпиадник(-ов) всероссийского уровня</Text>
                        </View>
                        {
                            school.olympiadWinnersAndAwardees > 0 && (
                                <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.moreButton}>
                                    <View>
                                        <Text style={styles.buttonText}>{expanded ? "Свернуть": "Подробнее"}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    {
                        expanded && (
                            <View style={styles.additionalInfoContainer}>
                                <Text style={styles.schoolInfoBlockSubtitleText}>Среди них:</Text>
                                <View>
                                    {
                                        school.mathWinners > 0 &&
                                        <View style={[styles.infoLineContainer, {justifyContent: "space-between"}]}>
                                            <View style={styles.additionalInfoSubtitleContainer}>
                                                <View style={styles.tag}/>
                                                <Text style={styles.schoolInfoBlockSubtitleText}>
                                                    Победителей всероссийской олимпиады школьников по математике
                                                </Text>
                                            </View>
                                            <Text style={styles.schoolInfoBlockTitleText}>
                                                {school.mathWinners}
                                            </Text>
                                        </View>
                                    }
                                    {
                                        school.mathAwardees > 0 &&
                                        <View style={[styles.infoLineContainer, {justifyContent: "space-between"}]}>
                                            <View style={styles.additionalInfoSubtitleContainer}>
                                                <View style={styles.tag}/>
                                                <Text style={styles.schoolInfoBlockSubtitleText}>
                                                    Призеров всероссийской олимпиады школьников по математике
                                                </Text>
                                            </View>
                                            <Text style={styles.schoolInfoBlockTitleText}>
                                                {school.mathAwardees}
                                            </Text>
                                        </View>

                                    }
                                    {
                                        school.csWinners > 0 && (
                                            <View style={[styles.infoLineContainer, {justifyContent: "space-between"}]}>
                                                <View style={styles.additionalInfoSubtitleContainer}>
                                                    <View style={styles.tag}/>
                                                    <Text style={styles.schoolInfoBlockSubtitleText}>
                                                        Победителей всероссийской олимпиады школьников по информатике
                                                    </Text>
                                                </View>
                                                <Text style={styles.schoolInfoBlockTitleText}>
                                                    {school.csWinners}
                                                </Text>
                                            </View>
                                        )
                                    }
                                    {
                                        school.csAwardees > 0 && (
                                            <View style={[styles.infoLineContainer, {justifyContent: "space-between"}]}>
                                                <View style={styles.additionalInfoSubtitleContainer}>
                                                    <View style={styles.tag}/>
                                                    <Text style={styles.schoolInfoBlockSubtitleText}>
                                                        Призеров всероссийской олимпиады школьников по информатике
                                                    </Text>
                                                </View>
                                                <Text style={styles.schoolInfoBlockTitleText}>
                                                    {school.csAwardees}
                                                </Text>
                                            </View>
                                        )
                                    }
                                    {
                                        school.economicsWinners > 0 && (
                                            <View style={[styles.infoLineContainer, {justifyContent: "space-between"}]}>
                                                <View style={styles.additionalInfoSubtitleContainer}>
                                                    <View style={styles.tag}/>
                                                    <Text style={styles.schoolInfoBlockSubtitleText}>
                                                        Победителей всероссийской олимпиады школьников по экономике
                                                    </Text>
                                                </View>
                                                <Text style={styles.schoolInfoBlockTitleText}>
                                                    {school.economicsWinners}
                                                </Text>
                                            </View>
                                        )
                                    }
                                    {
                                        school.economicsAwardees > 0 && (
                                            <View style={[styles.infoLineContainer, {justifyContent: "space-between"}]}>
                                                <View style={styles.additionalInfoSubtitleContainer}>
                                                    <View style={styles.tag}/>
                                                    <Text style={styles.schoolInfoBlockSubtitleText}>
                                                        Призеров всероссийской олимпиады школьников по экономкие
                                                    </Text>
                                                </View>
                                                <Text style={styles.schoolInfoBlockTitleText}>
                                                    {school.economicsAwardees}
                                                </Text>
                                            </View>
                                        )
                                    }
                                    {
                                        school.physicsWinners > 0 && (
                                            <View style={[styles.infoLineContainer, {justifyContent: "space-between"}]}>
                                                <View style={styles.additionalInfoSubtitleContainer}>
                                                    <View style={styles.tag}/>
                                                    <Text style={styles.schoolInfoBlockSubtitleText}>
                                                        Победителей всероссийской олимпиады школьников по физике
                                                    </Text>
                                                </View>
                                                <Text style={styles.schoolInfoBlockTitleText}>
                                                    {school.physicsWinners}
                                                </Text>
                                            </View>
                                        )
                                    }
                                    {
                                        school.physicsAwardees > 0 && (
                                            <View style={[styles.infoLineContainer, {justifyContent: "space-between"}]}>
                                                <View style={styles.additionalInfoSubtitleContainer}>
                                                    <View style={styles.tag}/>
                                                    <Text style={styles.schoolInfoBlockSubtitleText}>
                                                        Призеров всероссийской олимпиады школьников по физике
                                                    </Text>
                                                </View>
                                                <Text style={styles.schoolInfoBlockTitleText}>
                                                    {school.physicsAwardees}
                                                </Text>
                                            </View>
                                        )
                                    }
                                </View>
                            </View>
                        )
                    }
                </View>

                <View style={[styles.infoBlockContainer, styles.infoBlockLineContainer]}>
                    <View>
                        <Image source={require("../../assets/budget.png")} style={styles.schoolInfoBlockIcon}/>
                    </View>
                    <Text style={styles.schoolInfoBlockTitleText}>{school.budgetEnrollees}</Text>
                    <View style={styles.infoBlockSubtitleContainer}>
                        <Text style={styles.schoolInfoBlockSubtitleText}>бюджетник(-ов)</Text>
                    </View>
                </View>

                <View style={styles.infoLineContainer}>
                    <Image source={require("../../assets/location.png")} style={styles.schoolInfoIcon}/>
                    <OpenURLButton url={`${YANDEX_MAP_LINK}/?text={${school.address}}`}>
                        <Text style={styles.linkText}>
                            {school.address}
                        </Text>
                    </OpenURLButton>
                </View>

                <View style={styles.infoLineContainer}>
                    <Image source={require("../../assets/website.png")} style={styles.schoolInfoIcon}/>
                    <OpenURLButton url={`https://${school.website}`}>
                        <Text style={styles.linkText}>
                            {school.website}
                        </Text>
                    </OpenURLButton>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    schoolInfoContainer: {
        flex: 1,
        marginHorizontal: 15,
        marginBottom: 20
    },
    infoLineContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    infoBlockContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 15,
        marginBottom: 5
    },
    infoBlockLineContainer: {
        flexDirection: "row",
        alignItems: "stretch"
    },
    infoBlockSubtitleContainer: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        marginBottom: 10
    },
    additionalInfoContainer: {
        marginTop: 10,
    },
    additionalInfoSubtitleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
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
    schoolImage: {
        width: '100%',
        height: 300,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    schoolLabelText: {
        alignSelf: "center",
        fontFamily: "os-bold",
        fontSize: 20,
        paddingTop: 20,
        paddingHorizontal: 10
    },
    schoolProfilesHeaderText: {
        fontFamily: "os-regular",
        fontSize: 18,
        paddingLeft: 12,
        marginTop: 15,
        marginBottom: 5,
        alignSelf: "flex-start"
    },
    schoolProfileText: {
        fontFamily: "os-regular",
        fontSize: 13,
        paddingTop: 15,
        textAlign: "center"
    },
    schoolInfoBlockTitleText: {
        fontFamily: "os-regular",
        fontSize: 24,
        marginLeft: 15
    },
    schoolInfoBlockSubtitleText: {
        fontFamily: "os-regular",
        fontSize: 15,
        marginLeft: 10
    },
    schoolInfoBlockIcon:{
        width: 50,
        height: 50
    },
    linkText: {
        fontFamily: "os-regular",
        fontSize: 15,
        paddingLeft: 10,
        color: "#3366cc",
        textDecorationLine: 'underline'
    },
    schoolInfoIcon: {
        width: 25,
        height: 25
    },
    moreButton: {
        height: 35,
        width: 90,
        backgroundColor: "#1849b3",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    buttonText: {
        fontFamily: "os-regular",
        fontSize: 14,
        color: "white"
    },
    tag: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: "#1849b3",
        marginRight: 5,
    }
});