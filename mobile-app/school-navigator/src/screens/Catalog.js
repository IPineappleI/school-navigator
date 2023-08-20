import React, {useCallback, useEffect, useState} from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text,
    TextInput, TouchableOpacity,
    View
} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {FlashList} from "@shopify/flash-list";
import axios from "axios";
import {API_LINK} from "../constants/constants";
import CatalogListItem from "../components/CatalogListItem";
import {Image} from 'expo-image';


export default function Catalog({navigation}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);

    const [searchText, setSearchText] = useState("");
    const [expanded, setExpended] = useState(false);

    const [isMathTagged, setIsMathTagged] = useState(false);
    const [isITTagged, setIsITTagged] = useState(false);
    const [isEnginTagged, setIsEnginTagged] = useState(false);
    const [isBusinessTagged, setIsBusinessTagged] = useState(false);

    const [sortByRating, setSortByRating] = useState(true);
    const [sortByStudents, setSortByStudents] = useState(false);
    const [sortByOlympiads, setSortByOlympiads] = useState(false);
    const [sortByBudgetEnrollees, setSortByBudgetEnrollees] = useState(false);

    useEffect(() => {
        setLoading(true);
        getSchools();
    }, []);

    useEffect(() => {
        if (sortByRating) {
            setSortByStudents(false);
            setSortByBudgetEnrollees(false);
            setSortByOlympiads(false);
        }
    }, [sortByRating]);

    useEffect(() => {
        if (sortByStudents) {
            setSortByRating(false);
            setSortByOlympiads(false);
            setSortByBudgetEnrollees(false);
        }
    }, [sortByStudents]);

    useEffect(() => {
        if (sortByOlympiads) {
            setSortByRating(false);
            setSortByBudgetEnrollees(false);
            setSortByStudents(false);
        }
    }, [sortByOlympiads]);

    useEffect(() => {
        if (sortByBudgetEnrollees) {
            setSortByRating(false);
            setSortByStudents(false);
            setSortByOlympiads(false);
        }
    }, [sortByBudgetEnrollees])

    const filteredData = data.filter(school => {
        const schoolClasses = {
            math: school.mathClass,
            it: school.itClass,
            engineering: school.engineeringClass,
            business: school.businessClass
        }
        const selectedClasses = {
            math: isMathTagged,
            it: isITTagged,
            engineering: isEnginTagged,
            business: isBusinessTagged
        }
        return (
            school.name.toLowerCase().replace(/\s/g, '')
                .includes(searchText.toLowerCase().replace(/\s/g, ''))
            && Object.keys(schoolClasses).every(className =>
                !selectedClasses[className] || schoolClasses[className])
        )
    }).sort((a, b) => {
        if (sortByRating) {
            if (a.rating === null) {
                return 1;
            }
            if (b.rating === null) {
                return -1;
            }
            return a.rating - b.rating;
        }
        if (sortByStudents) {
            return  b.enrollees - a.enrollees;
        }
        if (sortByOlympiads) {
            return b.olympiadWinnersAndAwardees - a.olympiadWinnersAndAwardees;
        }
        if (sortByBudgetEnrollees) {
            return b.budgetEnrollees - a.budgetEnrollees;
        }
    })

    const getSchools = () => {
        axios.get(API_LINK + "/Schools")
            .then(resp => {
                console.log("Fetched " + resp.data.length + " items");
                setData(resp.data);
                setLoading(false);
            }).catch(e => {
            console.warn(e);
            setError(e);
            setLoading(false);
        });
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getSchools();
        setRefreshing(false);
        console.log("Refreshed");
    }, []);

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size={"small"} color={"grey"}/>
            </View>
        )
    }

    if (error) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Ошибка получения данных с сервера</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={{flexDirection: "row"}}>
                <View style={styles.searchBar}>
                    <Image source={require("../../assets/find.png")} style={styles.searchIcon}/>
                    <TextInput style={styles.searchTextInput}
                               placeholder={"Поиск"}
                               value={searchText}
                               clearButtonMode={"always"}
                               autoCapitalize={"none"}
                               autoCorrect={false}
                               onChangeText={text => setSearchText(text)}
                    />
                </View>
                <TouchableOpacity onPress={() => setExpended(!expanded)}>
                    <View style={styles.menuIconContainer}>
                        <Image source={require("../../assets/menus.png")} style={styles.menuIcon}/>
                    </View>
                </TouchableOpacity>
            </View>

            {
                expanded && (
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{flexDirection: "row", paddingHorizontal: 10}}
                        >
                            <TouchableOpacity onPress={() => setIsMathTagged(!isMathTagged)}
                                              style={{opacity: isMathTagged ? 1 : 0.6}}
                            >
                                <View style={[styles.tagContainer, {backgroundColor: "#00ced1"}]}>
                                    <Image source={require("..//..//assets/math-class.png")}
                                           style={styles.menuContentIcon}
                                    />
                                    <Text style={styles.tagText}>Мат. класс</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setIsITTagged(!isITTagged)}
                                              style={{opacity: isITTagged ? 1 : 0.6}}
                            >
                                <View style={[styles.tagContainer, {backgroundColor: "#a4a0ff"}]}>
                                    <Image source={require("..//..//assets/it-class.png")}
                                           style={styles.menuContentIcon}
                                    />
                                    <Text style={styles.tagText}>ИТ класс</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setIsEnginTagged(!isEnginTagged)}
                                              style={{opacity: isEnginTagged ? 1 : 0.6}}
                            >
                                <View style={[styles.tagContainer, {backgroundColor: "#fae847"}]}>
                                    <Image source={require("..//..//assets/engineering-class.png")}
                                           style={styles.menuContentIcon}
                                    />
                                    <Text style={styles.tagText}>Инж. класс</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setIsBusinessTagged(!isBusinessTagged)}
                                              style={{opacity: isBusinessTagged ? 1 : 0.6}}
                            >
                                <View style={[styles.tagContainer, {backgroundColor: "#e38126"}]}>
                                    <Image source={require("..//..//assets/bussiness-class.png")}
                                           style={styles.menuContentIcon}
                                    />
                                    <Text style={styles.tagText}>Бизнес класс</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontFamily: "os-regular", fontSize: 12, margin: 15}}>Сортировка по:</Text>
                            <ScrollView horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                            >
                                <TouchableOpacity onPress={() => {setSortByRating(!sortByRating)}}
                                                  style={{opacity: sortByRating ? 1 : 0.6}}
                                >
                                    <View style={[styles.tagContainer, {backgroundColor: "#fef1c6"}]}>
                                        <Image source={require("../../assets/rating.png")}
                                               style={styles.menuContentIcon}
                                        />
                                        <Text style={styles.tagText}>Рейтингу</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {setSortByStudents(!sortByStudents)}}
                                                  style={{opacity: sortByStudents ? 1 : 0.6}}>
                                    <View style={[styles.tagContainer, {backgroundColor: "#97c6f1"}]}>
                                        <Image source={require("../../assets/student.png")}
                                               style={styles.menuContentIcon}
                                        />
                                        <Text style={styles.tagText}>Абитуриентам</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {setSortByOlympiads(!sortByOlympiads)}}
                                                  style={{opacity: sortByOlympiads ? 1 : 0.6}}>
                                    <View style={[styles.tagContainer, {backgroundColor: "#99f2b4"}]}>
                                        <Image source={require("../../assets/medal.png")}
                                               style={styles.menuContentIcon}
                                        />
                                        <Text style={styles.tagText}>Олимпиадникам</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {setSortByBudgetEnrollees(!sortByBudgetEnrollees)}}
                                                  style={{opacity: sortByBudgetEnrollees ? 1 : 0.6}}>
                                    <View style={[styles.tagContainer, {backgroundColor: "#e0e0e0"}]}>
                                        <Image source={require("../../assets/budget.png")}
                                               style={styles.menuContentIcon}
                                        />
                                        <Text style={styles.tagText}>Бюджетникам</Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                )
            }

            <View style={styles.dataContainer}>
                <FlashList
                    data={filteredData}
                    renderItem={({item}) =>
                        <CatalogListItem navigation={navigation} schoolInfo={item}/>
                    }
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                    ItemSeparatorComponent={() => (
                        <View style={styles.itemSeparator}/>
                    )}
                    estimatedItemSize={100}
                    ListHeaderComponent={() => <View style={styles.listHeader}/>}
                    ListFooterComponent={() => <View style={styles.listFooter}/>}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    emptyDataContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    menuIconContainer: {
        flex: 1,
        borderRadius: 10,
        marginLeft: 5,
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        marginTop: 10,
        borderColor: "rgba(158, 150, 150, .3)",
        padding: 10,
        backgroundColor: "#1849b3"
    },
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
    dataContainer: {
        flex: 1
    },
    searchBar: {
        width: "82%",
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(158, 150, 150, .3)",
        alignItems: "center"
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: "black",
        marginLeft: 5,
        marginRight: 10
    },
    menuIcon: {
        width: 25,
        height: 25,
        tintColor: "white"
    },
    menuContentIcon: {
        width: 25,
        height: 25,
        marginHorizontal: 5
    },
    searchTextInput: {
        flex: 1,
        fontFamily: "os-regular",
        fontSize: 15
    },
    itemSeparator: {
        padding: 5
    },
    listHeader: {
        paddingTop: 10
    },
    listFooter: {
        paddingBottom: 10
    },
    tagText: {
        fontFamily: "os-regular",
        fontSize: 12,
    }
})