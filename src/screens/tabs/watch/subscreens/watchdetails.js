import { FlatList, TouchableOpacity, StyleSheet, Text, View, Linking, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomTextInput from '../../../../components/Inputfield';
import Customheader from '../../../../components/Customheader';
import { fetchVideos } from '../../../../utils/apis';

const WatchDetails = ({ route, navigation }) => {
    const item = route?.params.item;
    const title = route.params.title;
    const [state, setState] = useState({
        searchQuery: "",
        filteredResults: item?.results

    })

    const handleSearch = (query) => {
        setState(prevState => ({
            ...prevState,
            searchQuery: query
        }))
        if (!query) {
            setState(prevState => ({
                ...prevState,
                filteredResults: item?.results
            }))
        } else {
            const filtered = item?.results.filter((video) =>
                video.name.toLowerCase().includes(query.toLowerCase())
            );
            setState(prevState => ({
                ...prevState,
                filteredResults: filtered
            }))
        }
    };

    const openVideo = async (res) => {
        const youtubeUrl = `https://www.youtube.com/watch?v=${res}`;
        Linking.openURL(youtubeUrl);
    };



    const renderVideo = ({ item }) => {
        const thumbnailUrl = `https://img.youtube.com/vi/${item.key}/hqdefault.jpg`;
        return (
            <TouchableOpacity onPress={() => openVideo(item.key)} style={styles.itemContainer}>
                <ImageBackground
                    borderRadius={10}
                    source={{ uri: thumbnailUrl }}
                    style={styles.thumbnail}
                >
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={2} style={styles.videoTitle}>{item.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Customheader onBackPress={() => navigation.goBack()} title={title} />
            <CustomTextInput
                leftIcon="search"
                rightIcon="cross"
                onLeftIconPress={() => alert('Left icon pressed')}
                onRightIconPress={() => setState(prevState => ({
                    ...prevState,
                    filteredResults: item?.results,
                    searchQuery: ''
                }))}
                placeholder="TV Shows, movies, and more"
                onChangeText={handleSearch}
                value={state.searchQuery}
            />
            {state.searchQuery != "" && <Text style={{ fontWeight: 'bold', color: '#000' }}>
                {state.searchQuery !== "" ? `${state.filteredResults.length} Results Found` : ""}
            </Text>}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={state.filteredResults}
                numColumns={2}
                renderItem={renderVideo}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

export default WatchDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    videoTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    listContent: {
        justifyContent: 'space-between',
    },
    thumbnail: {
        width: 150,
        height: 140,
        paddingBottom: 10,
        justifyContent: 'flex-end',
    },
    titleContainer: {
        // height: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    itemContainer: {
        flex: 1,
        margin: 12,
        borderRadius: 10,
        overflow: 'hidden',
    },
});

