import {FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {fetchImages, fetchMovies, fetchVideos } from '../../../utils/apis';
import Movielist from './components/movielist';
import Loader from '../../../components/loader';

const Watch = ({ navigation }) => {
    const [state, setState] = useState({
        movies: [],
        loading: false,
        Isrefreshing: false
    })
    useEffect(() => {
        const loadMovies = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true
            }))
            const movieResults = await fetchMovies();
            setState(prevState => ({
                ...prevState,
                movies: movieResults,
                loading: false
            }))
        };
        loadMovies();
    }, []);

    const _handleMOvieDetails = async (res) => {
        setState(prevState => ({
            ...prevState,
            loading: true
        }))
        const imageDetails = await fetchVideos(res.id);
        if (imageDetails) {
            setState(prevState => ({
                ...prevState,
                loading: false
            }))
            navigation.navigate("WatchDetails", {
                title: res.title,
                item: imageDetails
            })
        }



    }
    return (
        <View style={styles.container}>
            {state.loading && <Loader />}
            <FlatList
                data={state.movies}
                contentContainerStyle={{ margin: 7, paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <Movielist
                        onPress={(res) => _handleMOvieDetails(res)}
                        item={item}
                        navigation={navigation}
                    />
                )}
            />

        </View>
    )
}

export default Watch

const styles = StyleSheet.create({
    container: { flex: 1 }
})