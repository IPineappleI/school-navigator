import React, {useCallback, useEffect, useState} from 'react';
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Linking,
    Pressable, FlatList,
} from "react-native";
import {Image} from 'expo-image';
import ImageView from "react-native-image-viewing";
import {ProfileTags} from "../constants/tags";
import ProfileClass from "../components/ProfileClass";
import {OlympiadInfo} from "../constants/olympiadInfo";
import {YANDEX_MAP_LINK} from "../constants/links";

export default function SchoolPage({route}) {
    const {school} = route.params;
    const [profileTags, setProfileTags] = useState(ProfileTags);
    const hasAnyClass = [school.mathClass, school.itClass, school.engineeringClass, school.businessClass].some(Boolean);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const updatedProfileTags = profileTags.map(tag => {
            if (tag.key === 'math' && school.mathClass) {
                return {...tag, value: true};
            }
            if (tag.key === 'it' && school.itClass) {
                return {...tag, value: true};
            }
            if (tag.key === 'engineering' && school.engineeringClass) {
                return {...tag, value: true};
            }
            if (tag.key === 'business' && school.businessClass) {
                return {...tag, value: true};
            }
            return tag;
        });

        setProfileTags(updatedProfileTags);
    }, []);

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
            <TouchableOpacity onPress={() => setIsImageVisible(true)}>
                <Image source={{uri: school.imageURL}} style={styles.schoolImage}/>
            </TouchableOpacity>
            <ImageView
                images={[{uri: school.imageURL}]}
                imageIndex={0}
                visible={isImageVisible}
                onRequestClose={() => setIsImageVisible(false)}
            />
            <Text style={styles.schoolLabelText}>{school.name}</Text>

            {
                hasAnyClass && (
                    <>
                        <Text style={styles.schoolProfilesHeaderText}>Профили обучения (10-11 класс)</Text>
                        <View style={{marginBottom: 10, marginTop: 5}}>
                            <FlatList data={profileTags.filter((item) => item.value)}
                                      keyExtractor={item => item.id.toString()}
                                      renderItem={({item}) =>
                                          <ProfileClass tag={item}/>
                                      }
                                      estimatedItemSize={100}
                                      horizontal={true}
                                      showsHorizontalScrollIndicator={false}
                                      contentContainerStyle={{paddingHorizontal: 15}}
                            />
                        </View>
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
                            <Text style={styles.schoolInfoBlockSubtitleText}>олимпиадник(-ов) всероссийского
                                уровня</Text>
                        </View>
                        {
                            school.olympiadWinnersAndAwardees > 0 && (
                                <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.moreButton}>
                                    <View>
                                        <Text style={styles.buttonText}>{expanded ? "Свернуть" : "Подробнее"}</Text>
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
                                    {OlympiadInfo.map((item) => (
                                        (school[item.field] > 0) && (
                                            <View
                                                key={item.field}
                                                style={[styles.infoLineContainer, { justifyContent: "space-between" }]}
                                            >
                                                <View style={styles.additionalInfoSubtitleContainer}>
                                                    <View style={styles.tag} />
                                                    <Text style={styles.schoolInfoBlockSubtitleText}>
                                                        {item.label}
                                                    </Text>
                                                </View>
                                                <Text style={styles.schoolInfoBlockTitleText}>
                                                    {school[item.field]}
                                                </Text>
                                            </View>
                                        )
                                    ))}
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
        flex: 1,
    },
    schoolInfoContainer: {
        marginHorizontal: 15,
        marginBottom: 15
    },
    infoLineContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    infoBlockContainer: {
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
        paddingLeft: 15,
        marginTop: 15,
        marginBottom: 10,
        alignSelf: "flex-start"
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
    schoolInfoBlockIcon: {
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