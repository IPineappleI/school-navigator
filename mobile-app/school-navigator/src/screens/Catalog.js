import React, {useCallback, useEffect, useState} from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput, TouchableOpacity,
    View
} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {FlashList} from "@shopify/flash-list";
import axios from "axios";
import {API_LINK} from "../constants/links";
import CatalogListItem from "../components/CatalogListItem";
import {Image} from 'expo-image';
import {ProfileTags, SortsTags} from "../constants/tags";
import MenuItemTag from "../components/MenuItemTag";


export default function Catalog({navigation}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);

    const [searchText, setSearchText] = useState("");
    const [expanded, setExpended] = useState(false);

    const [profileTags, setProfileTags] = useState(ProfileTags);
    const [sortsTags, setSortsTags] = useState(SortsTags);

    useEffect(() => {
        setLoading(true);
        getSchools();
    }, []);

    const getSchools = () => {
        setError(null);

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

    const filteredData = data.filter(school => {
        const schoolClasses = {
            math: school.mathClass,
            it: school.itClass,
            engineering: school.engineeringClass,
            business: school.businessClass
        }
        const selectedClasses = {
            math: profileTags[0].value,
            it: profileTags[1].value,
            engineering: profileTags[2].value,
            business: profileTags[3].value
        }
        return (
            school.name.toLowerCase().replace(/\s/g, '')
                .includes(searchText.toLowerCase().replace(/\s/g, ''))
            && Object.keys(schoolClasses).every(className =>
                !selectedClasses[className] || schoolClasses[className])
        )
    }).sort((a, b) => {
        if (sortsTags[0].value) {
            if (a.rating === null) {
                return 1;
            }
            if (b.rating === null) {
                return -1;
            }
            return a.rating - b.rating;
        }
        if (sortsTags[1].value) {
            return  b.enrollees - a.enrollees;
        }
        if (sortsTags[2].value) {
            return b.olympiadWinnersAndAwardees - a.olympiadWinnersAndAwardees;
        }
        if (sortsTags[3].value) {
            return b.budgetEnrollees - a.budgetEnrollees;
        }
    });

    const updateProfileTagsState = (id, newValue) => {
        const updatedTagStates = profileTags.map(tag =>
            tag.id === id ? {...tag, value: newValue} : tag
        );
        setProfileTags(updatedTagStates);
    };

    const updateSortsTagsState = (id, newValue) => {
        const updatedSortsStates = sortsTags.map(tag =>
            tag.id === id ? {...tag, value: newValue} : {...tag, value: false}
        );
        setSortsTags(updatedSortsStates);
    };

    if (loading) {
        return (
            <View style={styles.emptyDataContainer}>
                <ActivityIndicator size={"small"} color={"grey"}/>
            </View>
        )
    }

    if (error !== null) {
        return (
            <View style={styles.emptyDataContainer}>
                <Text>Ошибка получения данных с сервера</Text>
                <TouchableOpacity style={styles.retryButton} onPress={onRefresh}>
                    <Text style={styles.retryText}>Попробовать снова</Text>
                </TouchableOpacity>
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
                        {/*School profiles profileTags*/}
                        <FlashList
                            data={profileTags}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) =>
                                <MenuItemTag tag={item} updateTagsState={updateProfileTagsState}/>
                            }
                            estimatedItemSize={50}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingHorizontal: 10}}
                        />

                        <View style={{flexDirection: "row"}}>
                            <View style={{justifyContent: "center", alignItems: "center"}}>
                                <Text style={styles.sortsLabelText}>Сортировка по:</Text>
                            </View>

                            {/*Sorts tags*/}
                            <View style={{flex: 1}}>
                                <FlashList
                                    data={sortsTags}
                                    keyExtractor={item => item.id.toString()}
                                    renderItem={({item}) =>
                                        <MenuItemTag tag={item} updateTagsState={updateSortsTagsState}/>
                                    }
                                    estimatedItemSize={100}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{paddingHorizontal: 10}}
                                />
                            </View>
                        </View>
                    </View>
                )
            }

            <View style={styles.dataContainer}>
                {/*List of schools*/}
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
    sortsLabelText: {
        fontFamily: "os-regular",
        fontSize: 12,
        marginLeft: 20
    },
    retryButton: {
        borderRadius: 15,
        backgroundColor: "#1849b3",
        padding: 5,
        margin: 10
    },
    retryText: {
        fontFamily: "os-regular",
        fontSize: 12,
        color: "white"
    }
})