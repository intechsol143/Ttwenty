import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { imageUrls } from '../../../../utils/getImgs';

const Movielist = ({ item,onPress }) => {
    if (!item) {
        return null;
    }
    const imageUrl = imageUrls(item?.poster_path);
    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <ImageBackground
                borderRadius={10}
                style={styles.posterstyle}
                source={{ uri: imageUrl }} >
                <View style={styles.overlay}>
                    <Text style={styles.txt}>{item.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>

    )
}

export default Movielist

const styles = StyleSheet.create({
    posterstyle: {
        height: 200,
        marginTop: 10,

        width: "auto",
    },
    overlay: {
        justifyContent: 'flex-end',
        flex: 1,
        padding: 12,
    },
    txt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});