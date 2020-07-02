import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                style={styles.pencil}
                onPress={() =>
                    navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <FontAwesome name="pencil" size={24} color="black" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    pencil: {


    }
});



export default ShowScreen;