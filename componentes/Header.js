import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import styleExterno from "../styles.js";

const Header = () => {

    return (
        
        <View style={styles.view}>
            <Text style={styles.textStyle}>Blog do Livro</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    view: {
        backgroundColor: "#ebd234",
        padding: 20,
    },

    textStyle: {
        textAlign: 'center',
        fontSize: 30, 
        color: '#030303',
        fontWeight: 'bold',
        marginTop: 20,
    }

});


export default Header;