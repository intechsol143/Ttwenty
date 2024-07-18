import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


const CustomTextInput = ({ leftIcon, rightIcon, onLeftIconPress, onRightIconPress, value, onChangeText,placeholder }) => {
    return (
        <View style={styles.inputContainer}>
            {leftIcon && (
                <TouchableOpacity onPress={onLeftIconPress} style={styles.iconContainer}>
                    <Icon name={leftIcon} size={20} style={styles.icon} />
                </TouchableOpacity>
            )}
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
                    <Entypo name={rightIcon} size={20} style={styles.icon} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    iconContainer: {
        paddingHorizontal: 5,
    },
    icon: {
        color: '#333',
    },
});

export default CustomTextInput;
