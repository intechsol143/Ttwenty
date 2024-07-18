import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Customheader = ({ title, onBackPress }) => {
    return (
        <View style={styles.CustomheaderContainer}>
            <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
                <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    CustomheaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#000', // Change this to your desired background color
    },
    iconContainer: {
        padding: 5,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default Customheader;
