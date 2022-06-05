import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'yargs';

interface Props {
    title: string;
}

export const TaskComponent = ({ title }: Props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft} >
                <View style={styles.square} />
                <Text style={styles.itemsText}> {title}</Text>
            </View>
            <View style={styles.circular} />
        </View>
    );
};
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    }, square: {
        height: 24,
        width: 24,
        backgroundColor: '#9fa',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemsText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#9fa',
        borderWidth: 2,
        borderRadius: 5,

    },
});
