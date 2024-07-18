import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontsStyle } from '../contants/fontsColors'

const Loader = () => {
    return (
        <Modal transparent>
            <View style={styles.container}>
                <View style={styles.indicatorView}>
                    <ActivityIndicator
                        size={"large"}
                        color={fontsStyle.PRIMARY_COLOR}
                    />
                </View>

            </View>

        </Modal>



    )
}

export default Loader

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' },
    indicatorView: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center'
    }
})